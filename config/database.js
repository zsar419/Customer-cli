if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: '< your mlab db url >' }  // DB for production mlab (heroku deployment)
} else {
    module.exports = { mongoURI: '< your local mongodb url >' }                      // DB for local deployment
}