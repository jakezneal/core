/**
 * File output (i.e. inlining content)
 */

// Return helper
export default path => {
	let contents = '';

	try {
		contents = require('fs').readFileSync(path, 'utf8');
	}

	catch (err) {
		// No content
	}

	return contents.trim();
};
