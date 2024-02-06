const przyspieszacz = require('../libs/przyspieszacz');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function pobierojko(url, destination) {
    const response = await axios({
        method: 'GET',
        url: decodeURIComponent(url),
        responseType: 'stream'
    });

    response.data.pipe(fs.createWriteStream(destination));

    return new Promise((resolve, reject) => {
        response.data.on('end', () => {
            resolve();
        });

        response.data.on('error', (err) => {
            reject(err);
        });
    });
}

async function pobierojkoDzjesono(jsonData, outputFolder) {
    for (let i = 0; i < jsonData.length; i++) {
        const url = jsonData[i];
        const fileName = path.basename(decodeURIComponent(url));
        const outputPath = path.join(outputFolder, fileName);
        console.log(`pobierok pobiro ${fileName}...`);
        try {
            await pobierojko(url, outputPath);
            console.log(`${fileName} pobierok pobrol pliko.`);
        } catch (err) {
            console.error(`pobierok wyjebol blendo ${fileName}: ${err.message}`);
        }
    }
}

const outputFolder = 'muzyczka';

if (!fs.existsSync(outputFolder)) { // TAK kurwa na wszelki 
    fs.mkdirSync(outputFolder);
}

pobierojkoDzjesono(JSON.parse(fs.readFileSync(przyspieszacz('path'))), outputFolder);
