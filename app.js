
// Set the date we're counting down to
var countDownDate = new Date("Jul 8, 2022 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();
 
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("C_Down").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  if (days < 1){
    C_Down.style.color = "red";
    console.log('owowo')
  }


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("C_Down").innerHTML = "INGEN!";
  }
}, 1000);
