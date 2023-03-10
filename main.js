const btnbutton = document.querySelector('.js-en-vi');
function show() {
    document.getElementById("cmt").innerHTML = "Chào mừng bạn đến với chương trình kỹ năng chuột cơ bản của Grey Olltwit với 5 cấp độ, mỗi cấp độ có 10 giai đoạn phải hoàn thành. Nhấn phím bất kỳ trên bàn phím hoặc nhấp để bắt đầu và làm theo hướng dẫn ở giữa màn hình. Khi ở trong chương trình, nhấn X để thoát, nhấn F11 để toàn màn hình.";
}

btnbutton.addEventListener('click', show)

const btnbutton2 = document.querySelector('.js-vi-en');
function show2() {
    document.getElementById("cmt").innerHTML = "Welcome to Gray Olltwit's basic mouse skills program with 5 levels, each with 10 stages to complete. Press any key on the keyboard or click to start and follow the instructions in the center of the screen. While in the program, press X to exit, press F11 to go full screen.";
}
btnbutton2.addEventListener('click', show2);


//Ham tat menu khi an chuot phai

const offmenu = document.getElementById("ui");
offmenu.addEventListener("contextmenu", function (e) {
    e.preventDefault()
});

//mau ngau nhien 

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    // console.log(bgColor);
    lv.style.background = bgColor;
     lv.style.color=bgColor;
    }


var d = 0; var hei = 200;
function rd() {      
    d += 100;
    document.getElementById("scores").innerHTML = "Scores: " + d; 
    level();
    x = Math.random() * (700 - hei);
    y = Math.random() * (700 - hei);
    // random vi tri trong ui
    hei -= 25;
    //giam kich thuoc 
    var sx = x + 'px';
    var sy = y + 'px';
    var blhei = hei + 'px';
    
    //Thuat toann
    document.getElementById("block").style.marginTop = sx;
    document.getElementById("block").style.marginLeft = sy;
    document.getElementById("block").style.width = blhei;
    document.getElementById("block").style.height = blhei;
    random_bg_color();
}
//Ham giam thoi gian
var time = 60;
function timeout() {
    const gameover = document.querySelector('.js-done')
    if (time > 0) {
        time--;
        document.getElementById('timeOut').innerHTML = "Time: " + time + "s";
        setTimeout(timeout, 1000);
    }
    // Game over khi het thoi gian
    if (time == 0) {
        gameover.classList.add('openDone');
        document.getElementById('block').classList.remove('openblock');
        document.getElementById("cmt1").classList.remove('openLevel1');
        document.getElementById("cmt2").classList.remove('openLevel2');
        document.getElementById("cmt3").classList.remove('openLevel3');
        document.getElementById("cmt4").classList.remove('openLevel4');
        document.getElementById('done').innerHTML = "Game Over!!";
        document.getElementById('done').innerHTML += "<br>";
        document.getElementById('done').innerHTML += "Scores: " + d;
        document.getElementById('done').innerHTML += "<br>";
        document.getElementById('done').innerHTML += "You can F5 or Click on Game Play to ReStart";
        gameover.addEventListener('click',function(e){
            location.reload();
        })
    }
}

function level() {
    if (d == 1000) {
        document.getElementById('cmt2').classList.add('openLevel2');
        document.getElementById('block').classList.remove('openblock');
        hei = 200;
        document.getElementById("block").style.width = hei + "px";
        document.getElementById("block").style.height = hei + "px";
        lv.removeEventListener('mouseover', rd);
        lv.addEventListener('click', rd);
    }

    if (d == 2000) {
        document.getElementById("cmt3").classList.add('openLevel3');
        document.getElementById('block').classList.remove('openblock');
        hei = 200;
        document.getElementById("block").style.width = hei + "px";
        document.getElementById("block").style.height = hei + "px";
        lv.removeEventListener('click', rd);
        lv.addEventListener('dblclick', rd);
    }

    if (d == 3000) {
        document.getElementById('cmt4').classList.add('openLevel4');
        document.getElementById('block').classList.remove('openblock');
        hei = 200;
        document.getElementById("block").style.width = hei + "px";
        document.getElementById("block").style.height = hei + "px";
        lv.removeEventListener('dblclick', rd);
        lv.addEventListener('contextmenu', rd);
    }
}
//su kien click vao block
const lv = document.querySelector('.js-block');
lv.addEventListener('mouseover', rd);
// ---------------------------------------------------------
//play
const play = document.querySelector('.js-cmt');
const cmt = document.querySelector('.js-cmt1');
function open() {
    play.classList.add('open');
    cmt.classList.add('openLevel1');
    timeout();
}
play.addEventListener('click', open)
// Start level1
const lv1 = document.querySelector('.js-cmt1');
const openblock = document.querySelector('.js-block');
function level1() {
    lv1.classList.remove('openLevel1');
    openblock.classList.add('openblock');
}
lv1.addEventListener('click', level1)


// Start level2
const lv2 = document.querySelector('.js-cmt2');
function level2() {
    lv2.classList.remove('openLevel2');
    document.getElementById('block').classList.add('openblock');
}
lv2.addEventListener('click', level2)

// Start level3
const lv3 = document.querySelector('.js-cmt3');
function level3() {
    document.getElementById("cmt3").classList.remove('openLevel3');
    document.getElementById('block').classList.add('openblock');
}
lv3.addEventListener('click', level3)

// Start level4
const lv4 = document.querySelector('.js-cmt4');
function level4() {
    lv4.classList.remove('openLevel4');
    document.getElementById('block').classList.add('openblock');
}
lv4.addEventListener('click', level4)



