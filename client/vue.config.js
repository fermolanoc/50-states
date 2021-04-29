module.exports = {
  devServer: {
    // send requests to base api on this url + whatever url user is asking for
    proxy: "http://127.0.0.1:3000",
  },
};
