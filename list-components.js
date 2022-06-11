var fs = require("fs");

var input = __dirname + "/public/newsletters";

var years = fs.readdirSync(input);

years.forEach((year) => {
	if (year !== ".DS_Store") {
		console.log(year, "\n");

		var files = fs.readdirSync(`${input}/${year}`);

		files.forEach((file) => {
			const ext = file.split(".").pop();
			var filename = file.replace(/\.[^/.]+$/, "");
			var month = "BLANK";

			if (ext === "pdf") {
				if (filename.startsWith("1-")) {
					month = "January";
				} else if (filename.startsWith("2-")) {
					month = "February";
				} else if (filename.startsWith("3-")) {
					month = "March";
				} else if (filename.startsWith("4-")) {
					month = "April";
				} else if (filename.startsWith("5-")) {
					month = "May";
				} else if (filename.startsWith("6-")) {
					month = "June";
				} else if (filename.startsWith("7-")) {
					month = "July";
				} else if (filename.startsWith("8-")) {
					month = "August";
				} else if (filename.startsWith("9-")) {
					month = "September";
				} else if (filename.startsWith("10-")) {
					month = "October";
				} else if (filename.startsWith("11-")) {
					month = "November";
				} else if (filename.startsWith("12-")) {
					month = "December";
				} else if (filename.startsWith("SWORFI")) {
					month = "SWORFI";
				}

				console.log(`<NewsletterItem year="${year}" month="${month}" />`);
			}
		});
	}
});
