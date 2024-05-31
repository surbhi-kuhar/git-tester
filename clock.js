function startFunc() {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log(hr, ":", min, ":", sec);
  setTimeout(startFunc, 1000);
}

startFunc();