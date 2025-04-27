/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.html",
        "./src/app/**/*.ts"
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--color-primary)',
                'secondary': 'var(--color-secondary)',
                'tertiary': 'var(--color-tertiary)',

                'primary-hover': 'var(--color-primary-hover)',
                'secondary-hover': 'var(--color-secondary-hover)',
                'tertiary-hover': 'var(--color-tertiary-hover)',

                'primary-focus': 'var(--color-primary-focus)',
                'secondary-focus': 'var(--color-secondary-focus)',
                'tertiary-focus': 'var(--color-tertiary-focus)',

                'background': 'var(--color-background)',
                'background-alt': 'var(--color-background-alt)',
                'background-light': 'var(--color-background-light)',

                'primary-text': 'var(--color-text)',
                'secondary-text': 'var(--color-text-alt)',
                'card': 'var(--color-card)',
                'input-border': 'var(--color-input-border)',

                'success': 'var(--color-success)',
                'error': 'var(--color-error)',
                'warning': 'var(--color-warning)',
            },
        },
    },
    plugins: [],
}

