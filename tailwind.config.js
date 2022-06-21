module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-background-sm':
          "url('./src/assets/home/background-home-mobile.jpg')",
        'home-background-md':
          "url('./src/assets/home/background-home-tablet.jpg')",
        'home-background-lg':
          "url('./src/assets/home/background-home-desktop.jpg')",
        'destination-background-sm':
          "url('./src/assets/destination/background-destination-mobile.jpg')",
        'destination-background-md':
          "url('./src/assets/destination/background-destination-tablet.jpg')",
        'destination-background-lg':
          "url('./src/assets/destination/background-destination-desktop.jpg')",
        'crew-background-sm':
          "url('./src/assets/crew/background-crew-mobile.jpg')",
        'crew-background-md':
          "url('./src/assets/crew/background-crew-tablet.jpg')",
        'crew-background-lg':
          "url('./src/assets/crew/background-crew-desktop.jpg')",
      },
      colors: {
        'blurry-nav': 'hsl(var(--clr-nav)/ 0.1)',
        'lavender-blue': 'rgb(208, 214, 249)',
        'rich-black': 'rgb(11, 13, 23)',
      },
      fontSize: {
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
          '1.142857rem',
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
