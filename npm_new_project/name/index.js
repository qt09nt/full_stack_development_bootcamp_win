var http = require ('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

console.log(module);
//OUTPUT is a JSON object with key-value pairs with its properties, ie. id, exports, paths, children etc
// {
//     id: '.',
//     path: 'C:\\Users\\qt09n\\Desktop\\full_stack_development_bootcamp_win\\npm_new_project\\name',
//     exports: {},
//     filename: 'C:\\Users\\qt09n\\Desktop\\full_stack_development_bootcamp_win\\npm_new_project\\name\\index.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'C:\\Users\\qt09n\\Desktop\\full_stack_development_bootcamp_win\\npm_new_project\\name\\node_modules',
//       'C:\\Users\\qt09n\\Desktop\\full_stack_development_bootcamp_win\\npm_new_project\\node_modules',
//       'C:\\Users\\qt09n\\Desktop\\full_stack_development_bootcamp_win\\node_modules',
//       'C:\\Users\\qt09n\\Desktop\\node_modules',
//       'C:\\Users\\qt09n\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ]
//   }