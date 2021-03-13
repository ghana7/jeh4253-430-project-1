const songs = [
  {
    hour: 0, name: 'fireflies', display: 'Fireflies', url: 'https://www.youtube.com/watch?v=QBgl4rVz3Ks',
  },
  {
    hour: 0, name: 'paper-tigers', display: 'Paper Tigers', url: 'https://www.youtube.com/watch?v=YtwWXVKUZBY',
  },
  {
    hour: 0, name: 'west-coast-friendship', display: 'West Coast Friendship', url: 'https://www.youtube.com/watch?v=UTi7fuaQyxI',
  },
  {
    hour: 1, name: 'fireflies', display: 'Fireflies', url: 'https://www.youtube.com/watch?v=QBgl4rVz3Ks',
  },
  {
    hour: 1, name: 'paper-tigers', display: 'Paper Tigers', url: 'https://www.youtube.com/watch?v=YtwWXVKUZBY',
  },
  {
    hour: 1, name: 'west-coast-friendship', display: 'West Coast Friendship', url: 'https://www.youtube.com/watch?v=UTi7fuaQyxI',
  },
  {
    hour: 2, name: 'fireflies', display: 'Fireflies', url: 'https://www.youtube.com/watch?v=QBgl4rVz3Ks',
  },
  {
    hour: 2, name: 'paper-tigers', display: 'Paper Tigers', url: 'https://www.youtube.com/watch?v=YtwWXVKUZBY',
  },
  {
    hour: 2, name: 'west-coast-friendship', display: 'West Coast Friendship', url: 'https://www.youtube.com/watch?v=UTi7fuaQyxI',
  },
  {
    hour: 3, name: 'fireflies', display: 'Fireflies', url: 'https://www.youtube.com/watch?v=QBgl4rVz3Ks',
  },
  {
    hour: 3, name: 'paper-tigers', display: 'Paper Tigers', url: 'https://www.youtube.com/watch?v=YtwWXVKUZBY',
  },
  {
    hour: 3, name: 'west-coast-friendship', display: 'West Coast Friendship', url: 'https://www.youtube.com/watch?v=UTi7fuaQyxI',
  },
  {
    hour: 4, name: 'fireflies', display: 'Fireflies', url: 'https://www.youtube.com/watch?v=QBgl4rVz3Ks',
  },
  {
    hour: 4, name: 'paper-tigers', display: 'Paper Tigers', url: 'https://www.youtube.com/watch?v=YtwWXVKUZBY',
  },
  {
    hour: 4, name: 'west-coast-friendship', display: 'West Coast Friendship', url: 'https://www.youtube.com/watch?v=UTi7fuaQyxI',
  },
  {
    hour: 5, name: 'fireflies', display: 'Fireflies', url: 'https://www.youtube.com/watch?v=QBgl4rVz3Ks',
  },
  {
    hour: 5, name: 'paper-tigers', display: 'Paper Tigers', url: 'https://www.youtube.com/watch?v=YtwWXVKUZBY',
  },
  {
    hour: 5, name: 'west-coast-friendship', display: 'West Coast Friendship', url: 'https://www.youtube.com/watch?v=UTi7fuaQyxI',
  },
  {
    hour: 6, name: 'fireflies', display: 'Fireflies', url: 'https://www.youtube.com/watch?v=QBgl4rVz3Ks',
  },
  {
    hour: 6, name: 'paper-tigers', display: 'Paper Tigers', url: 'https://www.youtube.com/watch?v=YtwWXVKUZBY',
  },
  {
    hour: 6, name: 'west-coast-friendship', display: 'West Coast Friendship', url: 'https://www.youtube.com/watch?v=UTi7fuaQyxI',
  },
  {
    hour: 7, name: 'fireflies', display: 'Fireflies', url: 'https://www.youtube.com/watch?v=QBgl4rVz3Ks',
  },
  {
    hour: 7, name: 'paper-tigers', display: 'Paper Tigers', url: 'https://www.youtube.com/watch?v=YtwWXVKUZBY',
  },
  {
    hour: 7, name: 'west-coast-friendship', display: 'West Coast Friendship', url: 'https://www.youtube.com/watch?v=UTi7fuaQyxI',
  },
  {
    hour: 8, name: 'coconut-mall-theme', display: 'Coconut Mall Theme', url: 'https://www.youtube.com/watch?v=QY7SxnKqMmE',
  },
  {
    hour: 8, name: 'rainbow-road-theme', display: 'Rainbow Road Theme', url: 'https://www.youtube.com/watch?v=rrx0XWPOplM',
  },
  {
    hour: 8, name: 'mario-circuit', display: 'Mario Circuit Theme', url: 'https://www.youtube.com/watch?v=6gz6DzXq21M',
  },
  {
    hour: 9, name: 'coconut-mall-theme', display: 'Coconut Mall Theme', url: 'https://www.youtube.com/watch?v=QY7SxnKqMmE',
  },
  {
    hour: 9, name: 'rainbow-road-theme', display: 'Rainbow Road Theme', url: 'https://www.youtube.com/watch?v=rrx0XWPOplM',
  },
  {
    hour: 9, name: 'mario-circuit', display: 'Mario Circuit Theme', url: 'https://www.youtube.com/watch?v=6gz6DzXq21M',
  },
  {
    hour: 10, name: 'coconut-mall-theme', display: 'Coconut Mall Theme', url: 'https://www.youtube.com/watch?v=QY7SxnKqMmE',
  },
  {
    hour: 10, name: 'rainbow-road-theme', display: 'Rainbow Road Theme', url: 'https://www.youtube.com/watch?v=rrx0XWPOplM',
  },
  {
    hour: 10, name: 'mario-circuit', display: 'Mario Circuit Theme', url: 'https://www.youtube.com/watch?v=6gz6DzXq21M',
  },
  {
    hour: 11, name: 'coconut-mall-theme', display: 'Coconut Mall Theme', url: 'https://www.youtube.com/watch?v=QY7SxnKqMmE',
  },
  {
    hour: 11, name: 'rainbow-road-theme', display: 'Rainbow Road Theme', url: 'https://www.youtube.com/watch?v=rrx0XWPOplM',
  },
  {
    hour: 11, name: 'mario-circuit', display: 'Mario Circuit Theme', url: 'https://www.youtube.com/watch?v=6gz6DzXq21M',
  },
  {
    hour: 12, name: 'coconut-mall-theme', display: 'Coconut Mall Theme', url: 'https://www.youtube.com/watch?v=QY7SxnKqMmE',
  },
  {
    hour: 12, name: 'rainbow-road-theme', display: 'Rainbow Road Theme', url: 'https://www.youtube.com/watch?v=rrx0XWPOplM',
  },
  {
    hour: 12, name: 'mario-circuit', display: 'Mario Circuit Theme', url: 'https://www.youtube.com/watch?v=6gz6DzXq21M',
  },
  {
    hour: 13, name: 'coconut-mall-theme', display: 'Coconut Mall Theme', url: 'https://www.youtube.com/watch?v=QY7SxnKqMmE',
  },
  {
    hour: 13, name: 'rainbow-road-theme', display: 'Rainbow Road Theme', url: 'https://www.youtube.com/watch?v=rrx0XWPOplM',
  },
  {
    hour: 13, name: 'mario-circuit', display: 'Mario Circuit Theme', url: 'https://www.youtube.com/watch?v=6gz6DzXq21M',
  },
  {
    hour: 14, name: 'coconut-mall-theme', display: 'Coconut Mall Theme', url: 'https://www.youtube.com/watch?v=QY7SxnKqMmE',
  },
  {
    hour: 14, name: 'rainbow-road-theme', display: 'Rainbow Road Theme', url: 'https://www.youtube.com/watch?v=rrx0XWPOplM',
  },
  {
    hour: 14, name: 'mario-circuit', display: 'Mario Circuit Theme', url: 'https://www.youtube.com/watch?v=6gz6DzXq21M',
  },
  {
    hour: 15, name: 'coconut-mall-theme', display: 'Coconut Mall Theme', url: 'https://www.youtube.com/watch?v=QY7SxnKqMmE',
  },
  {
    hour: 15, name: 'rainbow-road-theme', display: 'Rainbow Road Theme', url: 'https://www.youtube.com/watch?v=rrx0XWPOplM',
  },
  {
    hour: 15, name: 'mario-circuit', display: 'Mario Circuit Theme', url: 'https://www.youtube.com/watch?v=6gz6DzXq21M',
  },
  {
    hour: 16, name: 'baba-o-riley', display: 'Baba O\'Riley', url: 'https://www.youtube.com/watch?v=QRTNm6GLJYI',
  },
  {
    hour: 16, name: 'come-on-eileen', display: 'Come On Eileen', url: 'https://www.youtube.com/watch?v=GbpnAGajyMc',
  },
  {
    hour: 16, name: 'uptown-girl', display: 'Uptown Girl', url: 'https://www.youtube.com/watch?v=o-0Oect0nVQ',
  },
  {
    hour: 17, name: 'baba-o-riley', display: 'Baba O\'Riley', url: 'https://www.youtube.com/watch?v=QRTNm6GLJYI',
  },
  {
    hour: 17, name: 'come-on-eileen', display: 'Come On Eileen', url: 'https://www.youtube.com/watch?v=GbpnAGajyMc',
  },
  {
    hour: 17, name: 'uptown-girl', display: 'Uptown Girl', url: 'https://www.youtube.com/watch?v=o-0Oect0nVQ',
  },
  {
    hour: 18, name: 'baba-o-riley', display: 'Baba O\'Riley', url: 'https://www.youtube.com/watch?v=QRTNm6GLJYI',
  },
  {
    hour: 18, name: 'come-on-eileen', display: 'Come On Eileen', url: 'https://www.youtube.com/watch?v=GbpnAGajyMc',
  },
  {
    hour: 18, name: 'uptown-girl', display: 'Uptown Girl', url: 'https://www.youtube.com/watch?v=o-0Oect0nVQ',
  },
  {
    hour: 19, name: 'baba-o-riley', display: 'Baba O\'Riley', url: 'https://www.youtube.com/watch?v=QRTNm6GLJYI',
  },
  {
    hour: 19, name: 'come-on-eileen', display: 'Come On Eileen', url: 'https://www.youtube.com/watch?v=GbpnAGajyMc',
  },
  {
    hour: 19, name: 'uptown-girl', display: 'Uptown Girl', url: 'https://www.youtube.com/watch?v=o-0Oect0nVQ',
  },
  {
    hour: 20, name: 'baba-o-riley', display: 'Baba O\'Riley', url: 'https://www.youtube.com/watch?v=QRTNm6GLJYI',
  },
  {
    hour: 20, name: 'come-on-eileen', display: 'Come On Eileen', url: 'https://www.youtube.com/watch?v=GbpnAGajyMc',
  },
  {
    hour: 20, name: 'uptown-girl', display: 'Uptown Girl', url: 'https://www.youtube.com/watch?v=o-0Oect0nVQ',
  },
  {
    hour: 21, name: 'baba-o-riley', display: 'Baba O\'Riley', url: 'https://www.youtube.com/watch?v=QRTNm6GLJYI',
  },
  {
    hour: 21, name: 'come-on-eileen', display: 'Come On Eileen', url: 'https://www.youtube.com/watch?v=GbpnAGajyMc',
  },
  {
    hour: 21, name: 'uptown-girl', display: 'Uptown Girl', url: 'https://www.youtube.com/watch?v=o-0Oect0nVQ',
  },
  {
    hour: 22, name: 'baba-o-riley', display: 'Baba O\'Riley', url: 'https://www.youtube.com/watch?v=QRTNm6GLJYI',
  },
  {
    hour: 22, name: 'come-on-eileen', display: 'Come On Eileen', url: 'https://www.youtube.com/watch?v=GbpnAGajyMc',
  },
  {
    hour: 22, name: 'uptown-girl', display: 'Uptown Girl', url: 'https://www.youtube.com/watch?v=o-0Oect0nVQ',
  },
  {
    hour: 23, name: 'baba-o-riley', display: 'Baba O\'Riley', url: 'https://www.youtube.com/watch?v=QRTNm6GLJYI',
  },
  {
    hour: 23, name: 'come-on-eileen', display: 'Come On Eileen', url: 'https://www.youtube.com/watch?v=GbpnAGajyMc',
  },
  {
    hour: 23, name: 'uptown-girl', display: 'Uptown Girl', url: 'https://www.youtube.com/watch?v=o-0Oect0nVQ',
  },
];

const getStartSongs = () => songs;

module.exports.getStartSongs = getStartSongs;
