import React from 'react'

const containerStyle: React.CSSProperties = {
    width: '100%',
    aspectRatio: '1',
    borderRadius: '50% 20% / 10% 40%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

// Converts black icon to teal-primary hsl(187, 64%, 38%)
const tealFilter =
    'brightness(0) saturate(100%) invert(47%) sepia(61%) saturate(400%) hue-rotate(146deg) brightness(88%)'

export function CarabinerPlaceholder() {
    return (
        <div style={{ ...containerStyle, background: 'hsl(187,43%,79%)' }}>
            <img
                src="/images/noun-carabiner-61503.svg"
                alt="carabiner"
                style={{ width: '72%', height: '72%', filter: tealFilter, objectFit: 'contain' }}
            />
        </div>
    )
}

export function HarnessPlaceholder() {
    return (
        <div style={{ ...containerStyle, background: 'hsl(187,66%,92%)' }}>
            <img
                src="/images/noun-harness-61525.svg"
                alt="harness"
                style={{ width: '72%', height: '72%', filter: tealFilter, objectFit: 'contain' }}
            />
        </div>
    )
}

export function RopePlaceholder() {
    return (
        <div style={{ ...containerStyle, background: 'hsl(187,66%,92%)' }}>
            <img
                src="/images/noun-rope-61701.svg"
                alt="rope"
                style={{ width: '72%', height: '72%', filter: tealFilter, objectFit: 'contain' }}
            />
        </div>
    )
}
