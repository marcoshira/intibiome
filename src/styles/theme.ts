export const theme = {
    colors: {
        white: '#FFFFFF',
        blue: '#389CD6',
        lightGrey: '#00000014',
        red: '#EE6381',
        green: '#309D5F',
        darkGrey: '#7B7070',
        brandGrey: '#9D8E8E',
    },
    font: {
        family: {
            default: 'Trebuchet MS',
        },
    },
    media: {
        mobile: '(max-width: 440px)',
        ipad: '(max-width: 1023px)',
        monitor: '(min-width: 1540px)',
    },
    transitions: {
        fastest: 'all 100ms ease-in-out',
        faster: 'all 200ms ease-in-out',
        fast: 'all 300ms ease-in-out',
        normal: 'all 500ms ease-in-out',
        slow: 'all 600ms ease-in-out',
        slower: 'all 800ms ease-in-out',
        slowest: 'all 1s ease-in-out',
    },
} as const;
