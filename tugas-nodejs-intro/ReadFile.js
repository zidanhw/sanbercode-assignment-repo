const fs = require('fs');

const namaFile = 'example.txt';

fs.readFile(namaFile, 'utf-8', (err, data) => {
    if (err) {
        console.log(`Pesan Error: ${err}`);
        return;
    } 
    console.log(data);
})