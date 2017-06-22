var child_process = require('child_process');
var _ = require('lodash');
var fs = require('fs');

var command = 'npm install';



fs.readdir('.', function(err, dirs) {
	if(err) return console.error(err);
	_.each(dirs, function(dir) {
		fs.stat(dir, function(err, stat) {
			if(stat.isDirectory() && (dir === 'angular-v1.6'  || dir === 'react-js' || dir === 'webdriver' || dir === 'vanilla-js')) {
				child_process.exec(command, {
					cwd: dir,
				}, function(err, stdout, stderr) {
					if(err) return console.error(err);

					console.log(stdout);
				});
			}
		});
	});
});

