module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      gridTemplateColumns: {
        'main-layout-mobile':
          'minmax(2em , 1fr) minmax(0,60em) minmax(2em,1fr);',
        'main-layout-sm':
          'minmax(2em , 1fr) repeat(2,minmax(0,30em)) minmax(2em,1fr);',
      },
      colors: {
        'blurry-nav': 'hsl(var(--clr-nav)/ 0.1)',
        'lavender-blue': 'rgb(208, 214, 249)',
        'rich-black': 'rgb(11, 13, 23)',
      },
      fontSize: {
        'dynamic-heading-xl': 'clamp(3rem , 30vw , 9.375rem)',

        'heading-xl': '9.375rem',
        'heading-lg': '6.25rem',
        'heading-md': '3.5rem',
        'heading-sm': '2rem',
        'heading-xs': [
          '1.75rem',
          {
            letterSpacing: '4.75',
          },
        ],
        'subheading-lg': '1.75rem',
        'subheading-md': [
          '1.25rem',
          {
            letterSpacing: '2.35',
          },
        ],
        'subheading-normal': [
          '1rem',
          {
            letterSpacing: '2.7',
          },
        ],
        body: '1.125rem',
      },
      fontFamily: {
        barlow_condensed: ['"Barlow Condensed"', 'sans-serif'],
        bellefair: ['Bellefair', 'sans'],
      },
    },
  },
  plugins: [],
};
