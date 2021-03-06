const YoutubeMp3Downloader = require('youtube-mp3-downloader');

// Configure YoutubeMp3Downloader with your settings
const YD = new YoutubeMp3Downloader({
  ffmpegPath: 'E:/Programming/ffmpeg/bin/ffmpeg.exe', // FFmpeg binary location
  outputPath: `${__dirname}/music`,
  youtubeVideoQuality: 'highestaudio', // Desired video quality (default: highestaudio)
  queueParallelism: 2, // Download parallelism (default: 1)
  progressTimeout: 2000, // Interval in ms for the progress reports (default: 1000)
  allowWebm: false, // Enable download from WebM sources (default: false)
});

const downloadVideo = (url, title) => {
  let videoId = url.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  console.log(`Downloading ${videoId} to ${__dirname}/music/${title}.mp3`);
  YD.download(videoId, `${title}.mp3`);
};

YD.on('finished', (err, data) => {
  console.log(data);
});

YD.on('error', (error) => {
  console.log(error);
});

YD.on('progress', (progress) => {
  console.log(JSON.stringify(progress));
});
module.exports.downloadVideo = downloadVideo;
