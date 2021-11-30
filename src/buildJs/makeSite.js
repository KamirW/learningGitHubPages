const fs = require("fs");
const files = fs.readdirSync("./src/md/");
const heading = fs.readFileSync("./src/htmlFrag/htmlStart.html.frag");
const footing = fs.readFileSync("./src/htmlFrag/htmlEnd.html.frag");
const mkd = require("markdown-it");
const mit = new mkd();

files.forEach((filename) => {
    const newFileName = `./docs/${filename.substring(0, filename.length-3)}.html`;
    const origFileName = `./src/md/${filename}`;
    const render = mit.render(`${fs.readFileSync(origFileName)}`);
    fs.writeFileSync(newFileName, `${heading}\n${render}\n${footing}`);
});