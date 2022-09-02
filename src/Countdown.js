var countDownDate = new Date("nov 20, 2022 16:00:00").getTime();

var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    document.getElementById("days").innerText = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((timeleft % (1000 * 60)) / 1000);
    
    if (timeleft < 0) {
        document.getElementById("days").remove();
        document.getElementById("hours").remove();
        document.getElementById("minutes").remove();
        document.getElementById("seconds").remove();
        document.getElementById("days1").remove();
        document.getElementById("hours1").remove();
        document.getElementById("minutes1").remove();
        document.getElementById("seconds1").remove();
        document.getElementById("gmt").remove();
        var audio = new Audio('/src/party.mp3');
        audio.play();
        document.getElementById("congrats").style.visibility = "visible";
        clearInterval(x);
      }

    }, 1000)