if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: 'mongodb://zeta:zeta@ds113606.mlab.com:13606/customer-cms' }  // DB for production mlab (heroku deployment)
} else {
    module.exports = { mongoURI: 'mongodb://localhost:27017/customercli' }                      // DB for local deployment
}