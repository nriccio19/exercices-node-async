import fs from 'fs'

function callback(err) {
    if (err) throw err
    console.log('source.txt was copied to destination.txt')
}

fs.copyFile('.././file2.txt', '.././file3.txt', callback)
