const przyspieszacz = require('../libs/przyspieszacz');
const fs = require('fs');
const foldier = 'muzyczka';

fs.readdir(foldier, (err, files) => {
    if (err) {
        console.error('erior w folderze:', err);
        return;
    }

    const nazewka = files.filter(file => fs.statSync(`${foldier}/${file}`).isFile());

    const dzejsonpliki = JSON.stringify(nazewka);

    fs.writeFile(`playlists/bucket/${przyspieszacz('name')}`, dzejsonpliki, err => {
        if (err) {
            console.error('erior dzejsona', err);
            return;
        }
        console.log('zapisauo nazwy nutek do dzejsona');
    });
});
