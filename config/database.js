if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: '< your mlab db connection >' }  // DB for production mlab (heroku deployment)
} else {
    module.exports = { mongoURI: '< your mongo db local connection >' }                      // DB for local deployment
}
