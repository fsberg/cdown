const countdown = () => {
  const enddate = new Date("Jul 8,2022 17:00:00").getTime();
  const now = new Date().getTime();

  const diff = enddate - now;

  const sec = 1000;
  const min = sec * 60;
  const hr = min * 60;
  const day = hr * 24;

  const d = Math.floor(diff / day);
  const h = Math.floor((diff % day) / hr);
  const m = Math.floor((diff % hr) / min);
  const s = Math.floor((diff % min) / sec);


  document.getElementById("C_Down").innerHTML = d + "D " + h + "H "
  + m + "M " + s + "S ";

  if (d < 1){
    C_Down.style.color = "red";
  }

  if (diff < 0) {
    document.getElementById("C_Down").innerHTML = "INGEN!";
  }

};

setInterval(countdown, 1000);