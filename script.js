//!Real-time Clock and Date update
function updateClockAndDate() {
  const now = new Date();
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.querySelector('#time').innerText = `${hours} : ${minutes} : ${seconds}`;

  const day = String(now.getDate()).padStart(2, '0');
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  document.querySelector('#date').innerText = `${day} / ${month} / ${year}`;
}
updateClockAndDate();
setInterval(updateClockAndDate, 1000);

//!Opening-Closing MyPC
function mypcOpen() {
    let mypcIcon = document.querySelector("#icon-mypc");
    let mypc = document.querySelector("#mypc");
    let closeBtn = document.querySelector("#cross");
    let browser = document.querySelector("#browser");
    let browserIcon2 = document.querySelector("#icon-browser2");
    let calc = document.querySelector("#calculator");
    let calcIcon2 = document.querySelector("#icon-calc2");

    gsap.set(mypc, {
        scale: 0,
        opacity: 0,
        display: "none" 
    });

    mypcIcon.addEventListener("dblclick", function(){
        gsap.set(mypc, { 
            display: "flex" 
        });
        gsap.to(mypc, {
            duration: 0.3,
            opacity: 1,
            scale: 1,
            ease: "circle.out"
        });
        gsap.to(browser, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(calc, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(browserIcon2, {
            bottom: "0",
            width: "30px",
            height: "30px",
            duration: 0.3,
            ease: "power4.out"
        });
        gsap.to(calcIcon2, {
            bottom: "0",
            width: "30px",
            height: "30px",
            duration: 0.3,
            ease: "power4.out"
        });
    });
    closeBtn.addEventListener("click", function(){
        gsap.to(mypc, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
    });
}
mypcOpen();

//!Opening-Closing Browser
function browserOpen() {
    let browserIcon = document.querySelector("#icon-browser");
    let browserIcon2 = document.querySelector("#icon-browser2");
    let browser = document.querySelector("#browser");
    let browserCloseBtn = document.querySelector("#browser-cross");
    let mypc = document.querySelector("#mypc");
    let calc = document.querySelector("#calculator");
    let calcIcon2 = document.querySelector("#icon-calc2");

    gsap.set(browser, {
        scale: 0,
        opacity: 0,
        display: "none" 
    });

    browserIcon.addEventListener("dblclick", function(){
        gsap.to(browserIcon2, {
            bottom: "1.5vh",
            width: "8vh",
            height: "8vh",
            duration: 0.3,
            ease: "power4.out"
        });
        gsap.set(browser, { 
            display: "flex" 
        });
        gsap.to(browser, {
            duration: 0.3,
            opacity: 1,
            scale: 1,
            ease: "circle.out"
        });
        gsap.to(mypc, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(calc, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(calcIcon2, {
            bottom: "0",
            width: "30px",
            height: "30px",
            duration: 0.3,
            ease: "power4.out"
        });
    });
    browserIcon2.addEventListener("click", function(){
        gsap.to(browserIcon2, {
            bottom: "1.5vh",
            width: "8vh",
            height: "8vh",
            duration: 0.3,
            ease: "power4.out",
        });
        gsap.set(browser, { 
            display: "flex" 
        });
        gsap.to(browser, {
            duration: 0.3,
            opacity: 1,
            scale: 1,
            ease: "circle.out"
        });
        gsap.to(mypc, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(calc, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(calcIcon2, {
            bottom: "0",
            width: "30px",
            height: "30px",
            duration: 0.3,
            ease: "power4.out"
        });
    });
    browserCloseBtn.addEventListener("click", function(){
        gsap.to(browserIcon2, {
            bottom: "0",
            width: "30px",
            height: "30px",
            duration: 0.3,
            ease: "power4.out"
        });
        gsap.to(browser, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
    });
}
browserOpen();

//!Opening Input Link
function linkOpen() {
    const searchLink = document.querySelector("#search-link");
    const input = document.querySelector("#search-input");

    if (searchLink && input) {
        searchLink.addEventListener("click", function (e) {
            e.preventDefault();
            const query = input.value.trim();
            if (query !== "") {
                const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
                window.open(url, "_main");
            } else{
                alert("Please enter a search term!");
            }
        });
    } else{
        console.error("Search input or button not found in DOM");
    }
}
linkOpen();

//!Real-time wetaher Update
function updateWeather() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=22.5744&longitude=88.3629&current_weather=true")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        setTimeout(function () {
            document.getElementById("weather").innerText = `Kolkata\n🌡 ${data.current_weather.temperature} °C`;
        }, 1000);
    });
}
updateWeather(); 
setInterval(updateWeather, 100000);

//!FullScreen
document.addEventListener("keydown", function (e) {
  let browserWindow = document.getElementById("browser-window");

  if (e.key === "f" || e.key === "F") {
    if (!document.fullscreenElement) {
      browserWindow.requestFullscreen().catch(function(err) {
        console.log("Failed to enter fullscreen:", err);
      });
    }
  }

  if (e.key === "Escape") {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }
});

//!Calculator Operation
function calculator() {
    let input = document.querySelector("#input");
    let buttons = document.querySelectorAll(".btn");

    let string = "";
    let arr = Array.from(buttons);

    arr.forEach(button => {
        button.addEventListener('click', function (dets) {
            if (dets.target.innerText === '=') {
                if (string === "") {
                    input.value = 0;
                } else {
                    try {
                        let result = eval(string);
                        if (Number.isInteger(result)) {
                            input.value = result;
                        } else {
                            input.value = result.toFixed(2);
                        }
                    } catch (error) {
                        input.value = "Error";
                        string = "";
                    }
                }
            } else if (dets.target.innerText === 'AC') {
                string = "";
                input.value = string;
            } else if (dets.target.innerText === 'DEL') {
                string = string.slice(0, -1);
                input.value = string;
            } else {
                if (dets.target.innerText === 'X' || dets.target.innerText === 'x') {
                    string += '*';
                    input.value = string;
                }
                else {
                    string += dets.target.innerText;
                    input.value = string;
                }
            }
        });
    });
}
calculator();

//!Opening-Closing Calculator
function calcOpen() {
    let calcIcon = document.querySelector("#icon-calc");
    let calcIcon2 = document.querySelector("#icon-calc2");
    let calc = document.querySelector("#calculator");
    let calcCloseBtn = document.querySelector("#calc-cross");
    let mypc = document.querySelector("#mypc");
    let browser = document.querySelector("#browser");
    let browserIcon2 = document.querySelector("#icon-browser2");

    gsap.set(calc, {
        scale: 0,
        opacity: 0,
        display: "none" 
    });

    calcIcon.addEventListener("dblclick", function(){
        gsap.to(calcIcon2, {
            bottom: "1.5vh",
            width: "8vh",
            height: "8vh",
            duration: 0.3,
            ease: "power4.out"
        });
        gsap.set(calc, { 
            display: "flex" 
        });
        gsap.to(calc, {
            duration: 0.3,
            opacity: 1,
            scale: 1,
            ease: "circle.out"
        });
        gsap.to(browser, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(mypc, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(browserIcon2, {
            bottom: "0",
            width: "30px",
            height: "30px",
            duration: 0.3,
            ease: "power4.out"
        });
    });
    calcIcon2.addEventListener("click", function(){
        gsap.to(calcIcon2, {
            bottom: "1.5vh",
            width: "8vh",
            height: "8vh",
            duration: 0.3,
            ease: "power4.out"
        });
        gsap.set(calc, { 
            display: "flex" 
        });
        gsap.to(calc, {
            duration: 0.3,
            opacity: 1,
            scale: 1,
            ease: "circle.out"
        });
        gsap.to(browser, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(mypc, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(browserIcon2, {
            bottom: "0",
            width: "30px",
            height: "30px",
            duration: 0.3,
            ease: "power4.out"
        });
    });
    calcCloseBtn.addEventListener("click", function(){
        gsap.to(calcIcon2, {
            bottom: "0",
            width: "30px",
            height: "30px",
            duration: 0.3,
            ease: "power4.out"
        });
        gsap.to(calc, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
            onComplete: () => gsap.set(calc, { display: "none" })
        });
    });
}
calcOpen();

//!Opening-Closing Vs code
function VSCodeOpen() {
    let vscodeicon = document.querySelector("#icon-vscode");
    let browserIcon2 = document.querySelector("#icon-browser2");
    let browser = document.querySelector("#browser");
    let mypc = document.querySelector("#mypc");
    let calc = document.querySelector("#calculator");
    let calcIcon2 = document.querySelector("#icon-calc2");

    vscodeicon.addEventListener("dblclick", function(e) {
        window.open("https://code.visualstudio.com/", "_blank");
        gsap.to(browserIcon2, {
            bottom: "0",
            width: "30px",
            height: "30px",
            duration: 0.3,
            ease: "power4.out"
        });
        gsap.to(browser, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(mypc, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(calc, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: "circle.in",
        });
        gsap.to(calcIcon2, {
            bottom: "0",
            width: "30px",
            height: "30px",
            duration: 0.3,
            ease: "power4.out"
        });
    });
}
VSCodeOpen();

//!Showing non operating alert
function popupalert() {
    let win = document.querySelector("#icon-win");
    let wifi = document.querySelector("#wifi");
    let battery = document.querySelector("#battery");

    win.addEventListener("click", function(){
        alert("Windows Start: feature is not functional");
    });
    wifi.addEventListener("click", function(){
        alert("Wi-Fi status: feature is not functional");
    });
    battery.addEventListener("click", function(){
        alert("Battery status: feature is not functional");
    });
}
popupalert();
