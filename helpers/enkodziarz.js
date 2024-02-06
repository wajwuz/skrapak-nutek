const przyspieszacz = require('../libs/przyspieszacz');
const fs = require('fs');

fs.readFile(przyspieszacz('path'), 'utf8', (err, data) => {
    if (err) {
        console.error('eriorka 45', err);
        return;
    }

    try {
        const urls = JSON.parse(data);
        const encodedUrls = urls.map(url => encodeURIComponent(url));

        fs.writeFile(`playlists/encoded/${przyspieszacz('name')}`, JSON.stringify(encodedUrls, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('eriorka pliku', err);
                return;
            }
            console.log('masz enkodziarza naprawionego');
        });
    } catch (error) {
        console.error('eriorka dzejson', error);
    }
});
