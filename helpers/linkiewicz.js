const przyspieszacz = require('../libs/przyspieszacz');
const fs = require('fs');

let data = require(przyspieszacz('path'))
data = data.map(entry => przyspieszacz('url') + entry);

fs.writeFileSync(`playlists/remapped/${przyspieszacz('name')}`, JSON.stringify(data, null, 2), (err) => {
  if (err) throw err;
});
console.log('dzejson z muzom naprawiony');