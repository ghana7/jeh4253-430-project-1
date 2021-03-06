// sky gradients found from
// https://codepen.io/zessx/pen/rDEAl
const backgrounds = [
  'linear-gradient(to bottom, #00000c 0%,#00000c 100%)',
  'linear-gradient(to bottom, #020111 85%,#191621 100%)',
  'linear-gradient(to bottom, #020111 60%,#20202c 100%)',
  'linear-gradient(to bottom, #020111 10%,#3a3a52 100%)',
  'linear-gradient(to bottom, #20202c 0%,#515175 100%)',
  'linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%)',
  'linear-gradient(to bottom, #4a4969 0%,#7072ab 50%,#cd82a0 100%)',
  'linear-gradient(to bottom, #757abf 0%,#8583be 60%,#eab0d1 100%)',
  'linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%)',
  'linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)',
  'linear-gradient(to bottom, #b7eaff 0%,#94dfff 100%)',
  'linear-gradient(to bottom, #9be2fe 0%,#67d1fb 100%)',
  'linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)',
  'linear-gradient(to bottom, #57c1eb 0%,#246fa8 100%)',
  'linear-gradient(to bottom, #2d91c2 0%,#1e528e 100%)',
  'linear-gradient(to bottom, #2473ab 0%,#1e528e 70%,#5b7983 100%)',
  'linear-gradient(to bottom, #1e528e 0%,#265889 50%,#9da671 100%)',
  'linear-gradient(to bottom, #1e528e 0%,#728a7c 50%,#e9ce5d 100%)',
  'linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)',
  'linear-gradient(to bottom, #163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%)',
  'linear-gradient(to bottom, #071B26 0%,#071B26 30%,#8A3B12 80%,#240E03 100%)',
  'linear-gradient(to bottom, #010A10 30%,#59230B 80%,#2F1107 100%)',
  'linear-gradient(to bottom, #090401 50%,#4B1D06 100%)',
  'linear-gradient(to bottom, #00000c 80%,#150800 100%)',
];

const getBackground = (index) => backgrounds[index];

const documentBody = document.querySelector('body');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');

const positionSunAndMoon = (index) => {
  const angle = (index / 24.0) * Math.PI * 2;

  const sunX = -Math.sin(angle);
  const sunY = -Math.cos(angle);
  const moonX = Math.sin(angle);
  const moonY = Math.cos(angle);

  sun.style.left = `calc(${50 + 35 * sunX}% - 7.5vh)`;
  sun.style.top = `calc(${100 - 70 * sunY}% - 7.5vh)`;
  moon.style.left = `calc(${50 + 35 * moonX}% - 7.5vh)`;
  moon.style.top = `calc(${100 - 70 * moonY}% - 7.5vh)`;
}
const setVisualTime = (index) => {
  documentBody.style.backgroundImage = getBackground(Math.floor(index) % 24);
  if (sun) {
    positionSunAndMoon(index);
  }
}