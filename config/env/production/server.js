module.exports = ({ env }) => ({
    url: env("https://my-holidaze-backend.herokuapp.com/"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["Key1", "Key2"]),
    },
  });