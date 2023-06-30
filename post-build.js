/**
 * Generates citical css for every html page in build directory
 */
import fs from 'fs';
import { generate } from 'critical';
import colors from 'colors';
import zlib from 'zlib';
import glob from 'glob';
import { PurgeCSS } from 'purgecss';

if (fs.existsSync('./build')) {
	const postBuild = async () => {
		console.log('\n> Generating critical css for build files'.cyan);
		const htlmFiles = glob.sync('./build/**/*.html');

		htlmFiles.forEach((file) => {
			generate({
				inline: true,
				base: './build/',
				src: file,
				target: {
					html: file
				},
				rebase: true
			});

			console.log(`  ✔ Generated critical css for ${file}`.green);
		});

		console.log('\n> Purge unused css'.cyan);

		const purged = await new PurgeCSS().purge({
			content: ['build/**/*.html', 'build/**/*.js'],
			css: ['build/**/*.css']
		});

		purged.forEach((res) => {
			fs.writeFileSync(res.file, res.css);
			console.log(`  ✔ Purged ${res.file}`.green);
		});

		console.log('\n> Compressing files'.cyan);

		// Add js and css to compress
		const files = glob.sync('./build/{prerendered,client}/**/*.{html,js,css}');

		files.forEach((file) => {
			// Create gzip version of each file
			const buffer = zlib.gzipSync(fs.readFileSync(`${file}`), {});

			// Store it in build folder
			fs.writeFileSync(`${file}.gz`, buffer);
			console.log(`  ✔ Compressed ${file}.gz`.green);
		});

		console.log('\n');
	};

	postBuild();
}
