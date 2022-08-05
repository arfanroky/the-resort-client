module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#7100b8',
          secondary: '#340a40',
          accent: '#ffffff',
          neutral: '#15133C',
          'base-100': '#FFFFFF',
          info: '#9932CC',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
