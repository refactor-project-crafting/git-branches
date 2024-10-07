const logCountdown = () => {
  for (let count = 200; count >= 0; count--) {
    console.log(count);
  }
};

const logCountUp = () => {
  for (let count = 0; count <= 300; count++) {
    console.log(count);
  }
};

console.log("Que empiece la cuenta atrás");
logCountdown();
