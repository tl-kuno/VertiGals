import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { emailToAdd } = body

        if (!emailToAdd || typeof emailToAdd !== 'string') {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.VG_EMAIL_USER,
                pass: process.env.VG_EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
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
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        )
    }
}
