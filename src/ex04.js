import fs from 'fs'

const fsPromises = fs.promises

fsPromises.writeFile('.././source.txt', 'ASYNC OKAY')

console.log('START OF PROGRAM CREATING SOURCE.TXT ..')

fs.readFile('.././source.txt', 'utf-8', (err, data) => {
    if (err) console.error(err)
    else console.log('source.txt: ', data)
})

console.log('READING SOURCE.TXT ..')

fsPromises
    .copyFile('.././source.txt', '.././dest.txt')

    .then(() => console.log('source.txt was copied to dest.txt'))
    .catch(() => console.log('The file could not be copied'))

console.log('COPYING SOURCE.TXT TO DEST.TXT ..')

fs.readFile('.././dest.txt', 'utf-8', (err, data) => {
    if (err) console.error(err)
    else console.log('dest.txt: ', data)
})

console.log('END OF PROGRAM READING DEST.TXT !!')
