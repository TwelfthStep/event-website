/** @type {import('next').NextConfig} */

/*
compiler: {
  removeConsole: {
    exclude: [ 'error' ],
  },
},
*/

module.exports = {
  reactStrictMode: true,
  env: {
    production: false,

    MONGO_URL: 'mongodb://127.0.0.1:27017',
    MONGO_DATABASE: 'lignite',
    MONGO_AUTH_SOURCE: 'admin',
    MONGO_USER: 'admin_local',
    MONGO_PASSWORD: 'password',

    DOMAIN_API: 'http://localhost:3001',

    GOOGLE_PAY_ENVIRONMENT: 'TEST',
    GOOGLE_PAY_MERCHANT_ID: 'merchantId'
  }
  // async redirects() {
  //   return [
  //     {
  //       source: '/example',
  //       destination: '/new-example',
  //       permanent: false
  //     }
  //   ]
  // }
}
