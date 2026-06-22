import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple in-memory rate limit: max 5 requests per 10 seconds per IP
const requests = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const windowMs = 10_000
    const max = 5
    const timestamps = (requests.get(ip) ?? []).filter(
        (t) => now - t < windowMs
    )
    if (timestamps.length >= max) return true
    requests.set(ip, [...timestamps, now])
    return false
}

export async function POST(request: Request) {
    const ip =
        request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
        'unknown'

    if (isRateLimited(ip)) {
        return NextResponse.json(
            { error: 'Too many requests, please try again later.' },
            { status: 429 }
        )
    }

    try {
        const body = await request.json()
        const { emailToAdd } = body

        if (!emailToAdd || typeof emailToAdd !== 'string') {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }

        if (!process.env.VG_EMAIL_USER || !process.env.VG_EMAIL_PASSWORD) {
            return NextResponse.json(
                { error: 'Email service not configured' },
                { status: 503 }
            )
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.VG_EMAIL_USER,
                pass: process.env.VG_EMAIL_PASSWORD,
            },
            connectionTimeout: 5000,
            greetingTimeout: 5000,
            socketTimeout: 5000,
        })

        const mailOptions = {
            from: process.env.VG_EMAIL_USER,
            to: process.env.VG_EMAIL_USER,
            subject: 'New Mailing List Signup',
            text:
                'Hello, please add me to your mailing list! My email is: ' +
                emailToAdd,
        }
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Email added successfully!' },
            { status: 200 }
        )
    } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('Error sending email:', error)
        }
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        )
    }
}
