const timer = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // call stack => Event Loop , No wait for this
      console.log("middle");
      resolve();
    }, 1000);
  });
};
const runme = async () => {
  console.log("1");

  await timer();
  // fetch is promise function
  // promise

  timer();

  console.log("2");
  console.log("3");
  console.log("4");
};

runme();
