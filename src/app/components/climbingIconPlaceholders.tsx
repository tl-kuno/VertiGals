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

// Converts black pixels → teal-primary, white pixels → transparent
// teal-primary hsl(187, 64%, 38%) ≈ rgb(0.137, 0.566, 0.623)
const tealMatrix =
    '0 0 0 0 0.137  0 0 0 0 0.566  0 0 0 0 0.623  -0.2126 -0.7152 -0.0722 0 1'

export function CarabinerPlaceholder() {
    return (
        <div style={{ ...containerStyle, background: 'hsl(187,43%,79%)' }}>
            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '78%', height: '78%' }}
            >
                <defs>
                    <filter
                        id="teal-carabiner"
                        colorInterpolationFilters="sRGB"
                    >
                        <feColorMatrix type="matrix" values={tealMatrix} />
                    </filter>
                </defs>
                <image
                    href="/images/noun-carabiner-61503.svg"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    filter="url(#teal-carabiner)"
                    preserveAspectRatio="xMidYMid meet"
                />
            </svg>
        </div>
    )
}

export function HarnessPlaceholder() {
    return (
        <div style={{ ...containerStyle, background: 'hsl(187,66%,92%)' }}>
            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '78%', height: '78%' }}
            >
                <defs>
                    <filter
                        id="teal-harness"
                        colorInterpolationFilters="sRGB"
                    >
                        <feColorMatrix type="matrix" values={tealMatrix} />
                    </filter>
                </defs>
                <image
                    href="/images/noun-harness-61525.svg"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    filter="url(#teal-harness)"
                    preserveAspectRatio="xMidYMid meet"
                />
            </svg>
        </div>
    )
}

export function RopePlaceholder() {
    return (
        <div style={{ ...containerStyle, background: 'hsl(187,66%,92%)' }}>
            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '78%', height: '78%' }}
            >
                <defs>
                    <filter id="teal-rope" colorInterpolationFilters="sRGB">
                        <feColorMatrix type="matrix" values={tealMatrix} />
                    </filter>
                </defs>
                <image
                    href="/images/noun-rope-61701.svg"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    filter="url(#teal-rope)"
                    preserveAspectRatio="xMidYMid meet"
                />
            </svg>
        </div>
    )
}
