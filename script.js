let colorRandom = () => {
  return Math.floor(Math.random() * 255);
};

box.addEventListener("click", () => {
  let colorFont = `rgb(${colorRandom()},${colorRandom()},${colorRandom()})`;
  let background = `conic-gradient(${colorFont} 20deg, transparent 120deg)`;
  document.documentElement.style.setProperty("--color-font", colorFont);
  document.documentElement.style.setProperty("--background-rotate", background);
});
