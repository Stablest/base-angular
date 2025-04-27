/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.html",
        "./src/app/**/*.ts"
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                background: 'var(--color-background)',
                text: 'var(--color-text)',
                card: 'var(--color-card)',
            }
        },
    },
    plugins: [],
}

