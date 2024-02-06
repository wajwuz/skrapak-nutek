const muza = [];

window.playlist_tracks.forEach(item => {
  muza.push(item.url);
});

console.log(muza); 