const przyspieszacz = require('../libs/przyspieszacz');
const fs = require('fs');

const filePaths = przyspieszacz('path').split(';');
const cipsko = [];

filePaths.forEach(filePath => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    try {
        const jsonData = JSON.parse(fileContent);
        cipsko.push(jsonData);
    } catch (error) {
        console.error(`eriora wyjebalo ${filePath}: ${error.message}`);
    }
});

const jsonmerker = JSON.stringify(cipsko, null, 2);
fs.writeFileSync(`playlists/merged/${przyspieszacz('name')}`, jsonmerker);
console.log('nie ma eriora i plejka zapisana');