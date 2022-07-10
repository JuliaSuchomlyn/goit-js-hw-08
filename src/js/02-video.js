import Player from '@vimeo/player';  
import  throttle  from 'lodash.throttle'; 

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";

const onTime = function (data) {
    localStorage.setItem(CURRENT_TIME, data.seconds);
};
player.on('timeupdate', throttle((onTime), 1000));

const newTime = localStorage.getItem(CURRENT_TIME);
if (newTime) {
    player.setCurrentTime(newTime)
};
