/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  semi: false,
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['clsx'],
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
