var ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
var ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
var command = ffmpeg();

async function toVideo(imagePath, audioPath, outputPath) {
    return new Promise((resolve, reject) => {
        command
            .on('end', () => resolve(outputPath))
            .on('error', (e) => reject(e))
            .input(imagePath)
            .input(audioPath)
            .size('1920x1080')
            .save(outputPath)
    });
}

// imagePath = '/Users/jittawat/Downloads/IMG_2304.JPG';
// audioPath = '/Users/jittawat/Downloads/cartoon001.wav';
// outputPath = '/Users/jittawat/Desktop/test3.mp4';

// async function run() {
//     try {
//         const a = await toVideo(imagePath, audioPath, outputPath);
//         console.log(a);
//     } catch(e) {
//         console.log(e);
//     }
// }

// run();
export default toVideo;