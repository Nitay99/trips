const audioFrame = document.querySelector('.audio-frame');
const buttonPlay = document.querySelector('.audio-frame__play-button');
// const userAgent = navigator.userAgent.toLowerCase();
// const browChrome = /chrome/.test(userAgent);

const createFrame = () => {
  if (audioFrame) {
    let fr = document.createElement('iframe');
    fr.src = 'https://music.yandex.ru/iframe/#track/116266134/25474374';
    fr.setAttribute('frameborder', '0');
    fr.setAttribute('width', '100%');
    fr.setAttribute('height', '100%');
    // fr.setAttribute('autoplay', '');
    // fr.setAttribute('mute', '');
    audioFrame.innerHTML = '';
    audioFrame.appendChild(fr);
    // const yadnexFrameButtonPlay = fr.querySelector('.button_2Savo');
    // console.log(yadnexFrameButtonPlay);
    // fr.click();
  }
};

const setPlayAudioClickHandler = () => {
  if (buttonPlay) {
    buttonPlay.addEventListener('click', createFrame);
  }
};

export {setPlayAudioClickHandler};
