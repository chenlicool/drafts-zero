// tailwind.config.js
module.exports = {
    darkMode: 'media',
    // ...
}

// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.200'),

                        // ...
                    },
                },
            }),
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],
}