const fs = require('fs'); 
let text = fs.readFileSync('index.html', 'utf8'); 
fs.writeFileSync('index.html', text); 
fs.writeFileSync('index.html', text); 
