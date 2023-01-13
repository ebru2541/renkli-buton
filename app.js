const buton = document.querySelector("input");
const body = document.querySelector("body");
const h1=document.querySelector("h1");

buton.addEventListener("click", () => {
  const a = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const c = Math.floor(Math.random() * 255);
  const renk = `rgb(${a},${b},${c})`;

  const a1 = Math.floor(Math.random() * 255);
  const b1 = Math.floor(Math.random() * 255);
  const c1 = Math.floor(Math.random() * 255);
  const renk2 = `rgb(${a},${c},${b})`;
  const renk3 = `rgb(${c1},${b},${a1})`;
  const renk4 = `rgb(${c},${b1},${a})`;

  body.style.backgroundColor = `${renk}`;
  buton.style.backgroundColor = `${renk2}`;
  h1.innerHTML=`Renk Kodu: ${renk}`
  h1.style.color = `${renk3}`;

});
