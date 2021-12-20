/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.scdn.co",
      "daily-mix.scdn.co",
      "newjams-images.scdn.co",
      "mosaic.scdn.co",
      "mixed-media-images.spotifycdn.com",
      "t.scdn.co",
      "www.theaudiodb.co",
      "www.theaudiodb.com",
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        },
      ],
    });

    // Important: return the modified config
    return config;
  },
};
