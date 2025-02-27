/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ["./*.{php,html,js}"],
  content: ["*"],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'Helvetica Neue', 'ui-sans-serif', 'system-ui',' -apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto, Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji"],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'pure-red': '#ff0000',
        'pure-green': '#00ff00',
        'pure-blue': '#0000ff',
        'pure-yellow': '#ffff00',
        'pure-magenta': '#ff00ff',
      },
    },
  },
  plugins: [],
  safelist: [
    'w-6', 'h-6',
    'w-12', 'h-12',
    'w-16', 'h-16',
    'w-32', 'h-32',
    'width-100', 'width-75', 'width-50',
    'figure', 'figcaption', 'blockquote', 'dark', 'rainbow',
    'admonition', 'note', 'alert', 'warning',
    'logos', 'logogrid3', 'logogrid4', 'logogrid5', 'logogrid6', 
  ]
}
