import fs from 'fs'
import path from 'path'

const phonePath = path.join(process.cwd(), 'public/images/gallery/phone')
const smallPath = path.join(process.cwd(), 'public/images/gallery/small')
const mediumPath = path.join(process.cwd(), 'public/images/gallery/medium')
const largePath = path.join(process.cwd(), 'public/images/gallery/large')

/**
 * Get all file names in a directory.
 * @param dirPath - The path to the directory.
 * @returns An array of file names.
 */
function getFileNames(dirPath: string): string[] {
    try {
        const absolutePath = path.resolve(dirPath) // Resolve the absolute path
        const files = fs.readdirSync(absolutePath) // Read the directory contents
        return files.filter((file) =>
            fs.statSync(path.join(absolutePath, file)).isFile()
        )
    } catch (error) {
        console.error(`Error reading directory: ${dirPath}`, error)
        return []
    }
}

function run() {
    const phoneFiles = getFileNames(phonePath)
    const phoneFirstHalf = phoneFiles.slice(
        0,
        Math.floor(phoneFiles.length / 2)
    )
    const phoneSecondHalf = phoneFiles.slice(Math.floor(phoneFiles.length / 2))

    const smallFiles = getFileNames(smallPath)
    const smallFirstHalf = smallFiles.slice(
        0,
        Math.floor(smallFiles.length / 2)
    )
    const smallSecondHalf = smallFiles.slice(Math.floor(smallFiles.length / 2))

    const mediumFiles = getFileNames(mediumPath)
    const mediumFirstHalf = mediumFiles.slice(
        0,
        Math.floor(mediumFiles.length / 2)
    )
    const mediumSecondHalf = mediumFiles.slice(
        Math.floor(mediumFiles.length / 2)
    )

    const largeFiles = getFileNames(largePath)
    const largeFirstHalf = largeFiles.slice(
        0,
        Math.floor(largeFiles.length / 2)
    )
    const largeSecondHalf = largeFiles.slice(Math.floor(largeFiles.length / 2))

    console.log(largeSecondHalf)
}

run()
