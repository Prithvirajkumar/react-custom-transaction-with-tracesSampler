const SentryWebpackPlugin = require("@sentry/webpack-plugin");
import package_json from "../package.json";

module.exports = {
  // other webpack configuration
  devtool: "source-map",
  plugins: [
    new SentryWebpackPlugin({
      // sentry-cli configuration - can also be done directly through sentry-cli
      // see https://docs.sentry.io/product/cli/configuration/ for details
      authToken: process.env.REACT_APP_AUTH_TOKEN,
      org: "prithvi-0c",
      project: "react",
      release: package_json.version,

      // other SentryWebpackPlugin configuration
      include: ".",
      ignore: ["node_modules", "webpack.config.js"],
    }),
  ],
};