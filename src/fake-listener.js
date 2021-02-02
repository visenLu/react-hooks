export const randomString = (len = 10) => {
  const $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
  const maxPos = $chars.length;
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

const timers = {};
export function addFakeListener(name, callBack) {
  let timeCounts = 0;
  const timeInterval = setInterval(() => {
    timeCounts = timeCounts + 1;
    callBack(`${name}的点赞数：${timeCounts}`);
  }, 1000);
  
  timers[name] = timeInterval;
}

export function removeFakeListener(name) {
  const { [name]: removeTimer } = timers;
  if (removeTimer)
  clearInterval(removeTimer);
}