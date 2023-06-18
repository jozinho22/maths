
var fs = require('fs');
var parse = require('xml-parser');
var xml = fs.readFileSync('./public/sitemap.xml', 'utf8');
var inspect = require('util').inspect;
 
var xmlSitemap = inspect(parse(xml), { colors: true, depth: Infinity })
/* console.log(xmlSitemap);
 */
var xmlDoc = parse(xml)

/* console.log(xmlDoc.root.children);
 */
var rspJson = {
    routes: [],
    engine : {
        gotoOptions: {
        timeout: 0
        }
    }
};

var i = 0;

for(var url of xmlDoc.root.children) {
    if( i === 0) {
        rspJson.routes.push(url.children[0].content.replace('https://jozinho22.github.io/maths', '/'))
    } else {
        rspJson.routes.push(url.children[0].content.replace('https://jozinho22.github.io/maths', ''))
    }
    i++;  
}

console.log(rspJson) 
console.log("----------") 
console.log(rspJson.routes.length + " urls") 

fs.writeFile ('.rsp.json', JSON.stringify(rspJson), function(err) {
    if (err) throw err;
    console.log('complete');
});

/* fs.writeFile ('routes.json', JSON.stringify(rspJson), function(err) {
    if (err) throw err;
    console.log('complete');
}); */