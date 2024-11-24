var display_time = document.querySelector("#runtimer");
var display_hitval = document.querySelector("#hitval");
var display_score = document.querySelector("#scoreval");
var bubble_click = document.querySelector("#main-body-bottom");


var timer = 60;
var score = 0;
var rn = 0;

function show_score() {
    bubble_click.innerHTML = '';
    var finalscore1 = `<div id='scoreid'> <h2>Your Score: ${score} </h2></div>`;
    bubble_click.innerHTML = finalscore1;
    gsap.from("#scoreid",{
       scale:0,
       opacity:0,
       duration:1,
       ease: "back.out(1.7)"
    });
}
function makebubble() {
    var group = "";

    for (var i = 1; i <= 189; i++) {
        var a = Math.floor(Math.random() * 10);
        group += `<div class="bubble"> ${a}</div>`; // backticks are used to create a div string, ${a} is used when we have to insert a value in backtick
    }

    bubble_click.innerHTML = group; //innerhtmm is use to manuplating html code from javascript. here we have selected a main-lower body and here we place innerhtml tag and give this the group of string.
}
function countdowntime() {
    var interval;
    function runtime() {
        interval = setInterval(function () {
            if (timer > 0) {
                timer--;
                display_time.textContent = timer;
            }
            else {
                show_score();
                clearInterval(interval);
            }

        }, 1000);
    }
    runtime();
}
function hitvalue() {
    rn = Math.floor(Math.random() * 10);
    display_hitval.textContent = rn;
}
function newscore() {
    score += 10;
    display_score.textContent = score;
}
bubble_click.addEventListener('click', function (e) {
    var curr_hit_val = Number(e.target.textContent);
    if (rn === curr_hit_val) {
        newscore();
        makebubble();
        hitvalue();
    }
})
makebubble();
countdowntime();
hitvalue();
