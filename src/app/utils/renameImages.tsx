import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const phonePath = path.join(process.cwd(), 'public/images/gallery/phone')
const smallPath = path.join(process.cwd(), 'public/images/gallery/small')
const mediumPath = path.join(process.cwd(), 'public/images/gallery/medium')
const largePath = path.join(process.cwd(), 'public/images/gallery/large')

/**
 * Renames all image files in a directory by appending their dimensions (width x height).
 * @param dirPath - The path to the directory containing the images.
 */
async function renameImagesWithDimensions(dirPath: string): Promise<void> {
    try {
        const absolutePath = path.resolve(dirPath)
        const files = fs.readdirSync(absolutePath)

        for (const file of files) {
            const filePath = path.join(absolutePath, file)

            // Check if the file is an image
            if (
                fs.statSync(filePath).isFile() &&
                /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
            ) {
                try {
                    // Get image dimensions using sharp
                    const metadata = await sharp(filePath).metadata()
                    const { width, height } = metadata

                    if (width && height) {
                        // Construct the new file name
                        const ext = path.extname(file) // File extension
                        const baseName = path.basename(file, ext) // File name without extension
                        const newFileName = `${baseName}.${width}x${height}${ext}`
                        const newFilePath = path.join(absolutePath, newFileName)

                        // Rename the file
                        fs.renameSync(filePath, newFilePath)
                        console.log(`Renamed: ${file} -> ${newFileName}`)
                    } else {
                        console.warn(`Could not get dimensions for: ${file}`)
                    }
                } catch (error) {
                    console.error(`Error processing file: ${file}`, error)
                }
            }
        }
    } catch (error) {
        console.error(`Error reading directory: ${dirPath}`, error)
    }
}

// Run the function for each directory
async function run() {
    await renameImagesWithDimensions(phonePath)
    await renameImagesWithDimensions(smallPath)
    await renameImagesWithDimensions(mediumPath)
    await renameImagesWithDimensions(largePath)
}

run()
    .then(() => {
        console.log('Image renaming completed.')
    })
    .catch((error) => {
        console.error('Error during image renaming:', error)
    })
