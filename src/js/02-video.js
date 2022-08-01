import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));
player.on("loaded", onPageReload);
   
function onTimeUpdate(){
        player.getCurrentTime().then(time => localStorage.setItem("videoplayer-current-time", time));
}

function onPageReload() {
        const currentTime = localStorage.getItem("videoplayer-current-time");
        player.setCurrentTime(currentTime).catch((error) => {
                switch (error.name) {
                        case 'RangeError':
                                break;
                }
        });
}