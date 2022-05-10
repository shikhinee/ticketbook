const path = require("path");

module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: 'mongodb+srv://shikhinee:11320220@cluster0.so3wr.mongodb.net/ticketbook?retryWrites=true&w=majority',
    MONGODB_DB: 'ticketbook',
    NEXT_AUTH_SECRET: '0kNxq+LKd0wYn6qLYytVnFvB/nVHirH/2Ads0Hn9yeM=',
    NEXTAUTH_URL: 'https://zterra.mn/api/auth',
  },
  sassOptions: {
    // Making it easier to import variables & mixins via _global.scss;
    includePaths: [path.join(__dirname, "sass")],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  react: {
    useSuspense: false,
    wait: true,
  },
  compiler: {
    styledComponents: true,
  },
};
