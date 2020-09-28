import fs from 'fs'

const fsPromises = fs.promises

fsPromises
    .copyFile('.././file3.txt', '.././file4.txt')

    .then(() => console.log('file3.txt was copied to file4.txt'))
    .catch(() => console.log('The file could not be copied'))
