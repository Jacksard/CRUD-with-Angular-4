const express = require('express');
const app = express();

var port = process.env.PORT || 8080;
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default



app.listen(port, function(){
	console.log('Server started on port ' + port);
});
