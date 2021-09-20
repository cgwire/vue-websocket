const webpack = require('webpack')
const path = require('path')
const version = require("./package.json").version;
const banner = "/**\n" + " * vue-websocket v" + version + "\n" + " * https://github.com/icebob/vue-websocket\n" + " * Released under the MIT License.\n" + " */\n";

module.exports = [
	{
		mode: "production",
		devtool: "source-map",
		entry: "./src/index",
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: "vue-websocket.js",
			library: "VueWebsocket",
			libraryTarget: "umd"
		},

		plugins: [
			new webpack.DefinePlugin({
				"process.env" : {
					NODE_ENV : JSON.stringify("production")
				}
			}),
			new webpack.BannerPlugin(banner, {
				raw: true
			})
		],
	}

];