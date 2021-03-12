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

const getVideoId = (url) => {
  let videoId = url.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  return videoId;
}
const downloadVideo = (url, title) => {
  console.log(`Downloading ${getVideoId(url)} to ${__dirname}/music/${title}.mp3`);
  YD.download(getVideoId(url), `${title}.mp3`);
};

YD.on('finished', (err, data) => {
  console.log(`Video ${data.videoId} (${data.videoTitle}) finished downloading`);
});

YD.on('error', (error) => {
  console.log(error);
});

YD.on('progress', (progress) => {
  console.log(`Video ${progress.videoId} ${Math.round(Number(progress.progress.percentage) * 100) / 100}% downloaded`);
});
module.exports.downloadVideo = downloadVideo;
module.exports.getVideoId = getVideoId;
