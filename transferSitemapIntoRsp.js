
var fs = require('fs');
var parse = require('xml-parser');
var xml = fs.readFileSync('./public/my-sitemap.xml', 'utf8');
var inspect = require('util').inspect;
 
var xmlSitemap = inspect(parse(xml), { colors: true, depth: Infinity })
console.log(xmlSitemap);

var xmlDoc = parse(xml)

console.log(xmlDoc.root.children);

var rspJson = {
    routes: []
};

for(var url of xmlDoc.root.children) {
    rspJson.routes.push(url.children[0].content.replace('https://ma-thematique.netlify.app/', '/'))
}

console.log(rspJson) 

fs.writeFile ('.rsp.json', JSON.stringify(rspJson), function(err) {
    if (err) throw err;
    console.log('complete');
});