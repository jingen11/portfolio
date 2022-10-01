const mapApp = document.getElementById("map-app");

const mapAppImages = [
  '/asset/projects/map-app/landing.png',
  '/asset/projects/map-app/search.png',
  '/asset/projects/map-app/weather.png',
  '/asset/projects/map-app/image.png',
];

let mapAppImageCount = 0;
let mapAppInterval;

mapApp.onmouseover = function () {
  ++mapAppImageCount;

  if (mapAppImageCount >= mapAppImages.length)
    mapAppImageCount = 0;

  mapApp.firstElementChild.src = mapAppImages[mapAppImageCount];

  mapAppInterval = setInterval(() => {
    ++mapAppImageCount;

    if (mapAppImageCount >= mapAppImages.length)
      mapAppImageCount = 0;

    mapApp.firstElementChild.src = mapAppImages[mapAppImageCount];
  }, 500);
}

mapApp.onmouseleave = function () {
  mapAppImageCount = 0;
  mapApp.firstElementChild.src = mapAppImages[mapAppImageCount];

  clearInterval(mapAppInterval);
}

const chatApp = document.getElementById("chat-app");

const chatAppImages = [
  '/asset/projects/chat-app/landing.png',
  '/asset/projects/chat-app/sign-in.png',
  '/asset/projects/chat-app/register.png',
  '/asset/projects/chat-app/home.png',
  '/asset/projects/chat-app/edit.png',
  '/asset/projects/chat-app/chat-screen.png'
];

let chatAppImageCount = 0;
let chatAppInterval;

chatApp.onmouseover = function () {
  ++chatAppImageCount;

  if (chatAppImageCount >= chatAppImages.length)
    chatAppImageCount = 0;

  chatApp.firstElementChild.src = chatAppImages[chatAppImageCount];

  chatAppInterval = setInterval(() => {
    ++chatAppImageCount;

    if (chatAppImageCount >= chatAppImages.length)
      chatAppImageCount = 0;

    chatApp.firstElementChild.src = chatAppImages[chatAppImageCount];
  }, 500);
}

chatApp.onmouseleave = function () {
  chatAppImageCount = 0;
  chatApp.firstElementChild.src = chatAppImages[chatAppImageCount];

  clearInterval(chatAppInterval);
}

const cbe = document.getElementById("cbe");

const cbeImages = [
  '/asset/projects/full-stack/login.png',
  '/asset/projects/full-stack/home.png',
  '/asset/projects/full-stack/worker.png',
  '/asset/projects/full-stack/add-worker.png',
  '/asset/projects/full-stack/add.png',
  '/asset/projects/full-stack/attendance.png'
];

let cbeImageCount = 0;
let cbeInterval;

cbe.onmouseover = function () {
  ++cbeImageCount;

  if (cbeImageCount >= cbeImages.length)
    cbeImageCount = 0;

  cbe.firstElementChild.src = cbeImages[cbeImageCount];

  cbeInterval = setInterval(() => {
    ++cbeImageCount;

    if (cbeImageCount >= cbeImages.length)
      cbeImageCount = 0;

    cbe.firstElementChild.src = cbeImages[cbeImageCount];
  }, 500);
}

cbe.onmouseleave = function () {
  cbeImageCount = 0;
  cbe.firstElementChild.src = cbeImages[cbeImageCount];

  clearInterval(cbeInterval);
}