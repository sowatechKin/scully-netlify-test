const { registerPlugin } = require('@scullyio/scully');
const { jsonFilePlugin } = require('./plugins/json-file-plugin');

// This registers your jsonFilePlugin
registerPlugin('fileHandler', 'json', jsonFilePlugin);

exports.config = {
	projectRoot: "./src/app",
	projectName: "my-scully-app",
	outDir: './dist/static',
	routes: {
		'/blog/:slug': {
			type: 'contentFolder',
			slug: {
				folder: "./src/assets/blog"
			}
		},
	}
};

