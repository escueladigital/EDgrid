module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    /**
     * Modifica estas opciones para customizar la pwa a tus necesidades
     */
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'EDteam',
        short_name: 'EDteam',
        start_url: '/',
        background_color: '#007BDF',
        theme_color: '#FAFDFF',
        display: 'standalone',
        icons: [
          {
            "src": "/favicons/edteam-512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "/favicons/edteam-96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/favicons/edteam-128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/favicons/edteam-256.png",
            "sizes": "256x256",
            "type": "image/png"
          }
        ]
      },
    },
    'gatsby-plugin-offline',
  ],
}
