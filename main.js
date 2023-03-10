const btnbutton = document.querySelector('.js-en-vi');
function show() {
    document.getElementById("cmt").innerHTML = "Chào mừng bạn đến với chương trình Kỹ năng sử dụng chuột cơ bản của Gray Olltwit Có 5 cấp độ, mỗi cấp độ có 10 giai đoạn cần hoàn thành.Nhấn phím bất kỳ trên bàn phím hoặc nhấp chuột để bắt đầu và làm theo hướng dẫn ở giữa màn hình. Khi ở trong chương trình, nhấn Q để Thoát hoặc N cho cấp độ Tiếp theo.Toàn màn hình";
}

btnbutton.addEventListener('click', show)

const btnbutton2 = document.querySelector('.js-vi-en');
function show2() {
    document.getElementById("cmt").innerHTML = "Welcome to Gray Olltwit's basic mouse skill program with 5 levels, each level has 10 stages to be completed. Press any key on the keyboard or click to start and follow the instructions in the middle of the screen. When in the program, press Q to escape or n for the next level";
}
btnbutton2.addEventListener('click', show2);

var d = 0; var hei = 200;
const lv = document.querySelector('.js-block');

function rd() {
    var x = Math.random() * 450;
    var y = Math.random() * 450;
    // random vi tri trong ui

    hei -= 25;
    //giam kich thuoc 


    var sx = x + 'px';
    var sy = y + 'px';
    var blhei = hei + 'px';
    d += 100;
    //Thuat toann


    document.getElementById("block").style.marginTop = sx;
    document.getElementById("block").style.marginLeft = sy;
    document.getElementById("block").style.width = blhei;
    document.getElementById("block").style.height = blhei;
    document.getElementById("scores").innerHTML = "Scores: " + d;
    level();
}    


function level(){
    if(d==1000){
        document.getElementById('cmt2').classList.add('openLevel2');
        document.getElementById('block').classList.remove('openblock');
        hei=200;
        document.getElementById("block").style.width = hei + "px";
        document.getElementById("block").style.height = hei + "px";
    }
    if(d>=1000){

        lv.removeEventListener('mouseover',rd);
        lv.addEventListener('click',rd);
    }
    if(d==2000){
        document.getElementById("cmt3").classList.add('openLevel3');
        document.getElementById('block').classList.remove('openblock');
    }
}
// ---------------------------------------------------------
    
    lv.addEventListener('mouseover', rd);
    const lv2=document.querySelector('.js-cmt2');
    function level2(){
    lv2.classList.remove('openLevel2');
    document.getElementById('block').classList.add('openblock');
    }
    lv2.addEventListener('click',level2)
//-------------------------Che Do-----------------------------------

const play = document.querySelector('.js-cmt');
const openblock = document.querySelector('.js-block');
function open() {
    play.classList.add('open');
    // document.getElementById('cmt').style.display='none';
    // document.getElementById('block').style.display='block';
    openblock.classList.add('openblock');
}
play.addEventListener('click', open)