let gameSq = [];
let userSq = [];
let lvl = document.querySelector('#level');
let btns = ['subbox1','subbox2','subbox3','subbox4'];
// console.dir(lvl)
let gamestart = false;
let level = 0;

let timeout = 100;

document.addEventListener('keypress', function(){
    if(gamestart == false){
        console.log('gamestart');
        gamestart = true;
        levelup();
    }
})

function flash(btn){
    btn.classList.add('flash');
    setTimeout( function() {
        btn.classList.remove('flash');
    }, timeout);
}

function corrct(btn){
    btn.classList.add('corrct');
    setTimeout( function() {
        btn.classList.remove('corrct');
    }, timeout);
}

function levelup(){
    userSq = [];
    level++;
    lvl.innerText = `Level ${level}`;
    randomIdx = Math.floor(Math.random()*4);
    randombtn = btns[randomIdx];
    console.log(randombtn)
    let rbtn = document.querySelector(`#${randombtn}`);
    gameSq.push(randombtn);
    flash(rbtn);
}


function buttonpress(){
    let btn = this;
    corrct(btn);
    user = btn.getAttribute('id');
    userSq.push(user);
    check(userSq.length-1);
}

let button = document.querySelectorAll('button');
for(butt of button){
    butt.addEventListener('click', buttonpress);
}

function check(indx){
    if(gameSq[indx]===userSq[indx]){
        if(gameSq.length==userSq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        gamestart = false;
        lvl.innerText = `Game Over. your score is ${level} Press any key to strat.`;
        document.querySelector('body').style.background = 'red';
        setTimeout(function(){
            document.querySelector('body').style.background = 'white';
        }, 150);
        level = 0;
        gameSq = [];
        userSq = [];

        
    }
}
