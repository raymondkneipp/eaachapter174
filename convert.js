var fs = require("fs");
var fromPath = require("pdf2pic").fromPath;

var input = __dirname + "/public/newsletters";

var years = fs.readdirSync(input);

years.forEach((year) => {
	if (year !== ".DS_Store") {
		console.log("");
		console.log(`YEAR: ${year}`);
		console.log("");

		var files = fs.readdirSync(`${input}/${year}`);

		files.forEach((file) => {
			const ext = file.split(".").pop();
			var filename = file.replace(/\.[^/.]+$/, "");

			if (filename.length <= 0) {
				filename = "NO_NAME";
			}

			// console.log(`FILE:\t${file}`);

			if (ext === "pdf") {
				// console.log(`CHECKING FOR: \t${filename}.1.png`);

				var imagePath = `${input}/${year}/${filename}.1.png`;

				if (fs.existsSync(imagePath)) {
					// console.log(`FILE FOUND: \t${filename}.1.png`);
				} else {
					// console.log(`FILE NOT FOUND: \t${filename}.1.png`);
					console.log(`CONVERTING\t${filename}\tTO PNG...`);

					const options = {
						density: 100,
						saveFilename: filename,
						savePath: `${input}/${year}`,
						format: "png",
						width: 432,
						height: 558,
					};

					const pdfPath = `${input}/${year}/${file}`;

					const storeAsImage = fromPath(pdfPath, options);
					const pageToConvertAsImage = 1;

					storeAsImage(pageToConvertAsImage).then((resolve) => {
						console.log(`${filename}.pdf\t=>\t${filename}.1.png`);

						return resolve;
					});
				}
			}
		});
	}
});

export {};
