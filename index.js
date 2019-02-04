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

module.exports = toVideo;