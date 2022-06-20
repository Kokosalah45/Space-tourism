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
        'blurry-nav': 'hsl(0 0% 100% / 0.1)',
        'rich-black': 'hsl(230°, 35%, 7%)',
        'lavender-blue': 'hsl(231°, 77%, 90%)',
      },
    },
  },
  plugins: [],
};
