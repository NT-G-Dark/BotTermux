module.exports.config = {
  name: "upt1",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mirai-Team",
  description: "uptime",
  commandCategory: "Thông tin",
  cooldowns: 3,
  dependencies: {
    "pidusage": ""
  }
};

function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event, args }) => {
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
    
  var z_1 = (hours < 10) ? '0' + hours : hours;
  var x_1 = (minutes < 10) ? '0' + minutes : minutes;
  var y_1 = (seconds < 10) ? '0' + seconds : seconds;
  
  const axios = require('axios');
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
  
  return api.sendMessage({
    body: `『  𝐔𝐩𝐭𝐢𝐦𝐞 𝐁𝐨𝐭 𝐓ouniie  』\n◆━━━━━━━━━━━━━━━━◆\n\n➜ Bot đã hoạt động được :\n     »${hours} giờ ${minutes} phút ${seconds} giây«\n\n➜ Tổng người dùng: ${global.data.allUserID.length}\n➜ Tổng Nhóm: ${global.data.allThreadID.length}\n➜ Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}%\n➜ Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n➜ Ping: ${Date.now() - timeStart}ms`,
  }, event.threadID, event.messageID);
};