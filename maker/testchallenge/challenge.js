const ws = new WebSocket('ws://192.168.1.15:3000');

ws.onopen = () => {
    console.log('Connected to WebSocket server');
};
let score ;

ws.onmessage = (message) => {
    const data = JSON.parse(message.data);
    //const obj = data.test;
    console.log("crvv"+data);
    console.log(`Change detected in row with ID ${data.id}, field ${data.changedField},dis ${data.disqualification}`);
    var chall1 = document.getElementById('sensor1');
    var chall2 = document.getElementById('sensor2');
    var chall3 = document.getElementById('sensor3');
    var chall4 = document.getElementById('sensor4');
    var chall5 = document.getElementById('sensor5');
    /*var challragnar = document.getElementById('sensor6');
    var challrollo = document.getElementById('sensor6');*/
    var chall6 = document.getElementById('sensor6');
  
    var chall7 = document.getElementById('sensor7');
    var chall8 = document.getElementById('sensor8');
    var chall9 = document.getElementById('sensor9');
   /* var boolrollo = true;
    var boolragnar = true;*/
    var disq = document.getElementById('word-container');
    var vkword = document.getElementById('viking-word');
    var main = document.getElementById('main');
    var header = document.getElementById('header');
    var robotName=document.getElementById("robot-name");
    var robotUser=document.getElementById("robot-user");
    var robotUnv=document.getElementById("robot-unv");

    let rest;
   // score=data.sc
   score=0; 
   if(data.refresh){

        location.reload();

        
    }
    else{
        robotName.innerText=data.robotname;
        robotUser.innerText=data.robotuser;
        robotUnv.innerText=data.university;


    }

    if (data.disqualification) {
        /*disq.style.zIndex = '1';
        vkword.innerText = "disqualification"
        //tab.style.display="flex";
        main.style.filter = `blur(7px)`;
        header.style.filter = `blur(7px)`;*/
        window.location.href="http://192.168.1.15:5000/data";
       console.log("disq");
      // res.sendFile("C:/Users/bouzi/Downloads/version_final - Copie/challenges/css/panel.html");
    }
   else {
        
        if (data.sensor1) {
            chall1.style.display = "block";
            rest=parseInt(data.sc, 10)-score;
           // console.log(rest);
            //console.log(score);

            score += rest;

            document.querySelector('.score').textContent = 'Score: ' + score;

           /* setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText = data.sc + "POINTS"
                chall1.classList.add("scale-and-flash");
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
                chall1.classList.remove("scale-and-flash");
            }, 2000);*/
        }
        if (data.sensor2) {
            chall2.style.display = "block";
            rest=parseInt(data.sc, 10)-score;
            //console.log(rest);
            console.log(score);

            score += rest;
            console.log(score);
            document.querySelector('.score').textContent = 'Score: ' + score;
            document.querySelector('.score').textContent = 'Score: ' + score;
           /* setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText= " 20 POINTS"
                chall2.classList.add("scale-and-flash");
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
                chall2.classList.remove("scale-and-flash");
            }, 2000);*/


        }
        if (data.sensor3) {
            chall3.style.display = "block";
            rest=parseInt(data.sc, 10)-score;
            score += rest; console.log(rest);
            document.querySelector('.score').textContent = 'Score: ' + score;
            document.querySelector('.score').textContent = 'Score: ' + score;
          /*  setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText ="30 POINTS"
                chall3.classList.add("scale-and-flash");
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
                chall3.classList.remove("scale-and-flash");
            }, 2000);*/



        }
        if (data.sensor4) {
            chall4.style.display = "block";
                        rest=parseInt(data.sc, 10)-score;
            score += rest; console.log(rest);
            document.querySelector('.score').textContent = 'Score: ' + score;
            document.querySelector('.score').textContent = 'Score: ' + score;
          /*  setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText ="20 POINTS"
                chall4.classList.add("scale-and-flash");
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
                chall4.classList.remove("scale-and-flash");
            }, 2000);*/

        }
      /*  if (data.ragnar && boolragnar === true) {
            boolrollo = false
            challragnar.style.display = "block";
                        rest=parseInt(data.sc, 10)-score;
            score += rest; console.log(rest);
            document.querySelector('.score').textContent = 'Score: ' + score;
            document.querySelector('.score').textContent = 'Score: ' + score;
            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText = rest + "POINTS"
                challragnar.classList.remove("scale-and-flash");
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
                challragnar.classList.remove("scale-and-flash");
            }, 2000);

        }
        if (data.rollo && boolrollo === true) {
            boolragnar = false;
            challrollo.style.display = "block";
            rest=parseInt(data.sc, 10)-score;
            score += rest; console.log(rest);
            document.querySelector('.score').textContent = 'Score: ' + score;
            document.querySelector('.score').textContent = 'Score: ' + score;
            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText = rest+"POINTS"
                challrollo.classList.add("scale-and-flash");
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
                challrollo.classList.remove("scale-and-flash");
            }, 2000);
        }*/
        if (data.sensor5) {
            chall5.style.display = "block";
                        rest=parseInt(data.sc, 10)-score;
            score += rest; console.log(rest);
            document.querySelector('.score').textContent = 'Score: ' + score;
            document.querySelector('.score').textContent = 'Score: ' + score;
         /*   setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText = "20 POINTS"
                chall5.classList.add("scale-and-flash");
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
                chall5.classList.remove("scale-and-flash");
            }, 2000);*/

        }
        if (data.sensor6) {
            chall6.style.display = "block";
            rest=parseInt(data.sc, 10)-score;
            score += rest; console.log(rest);
            document.querySelector('.score').textContent = 'Score: ' + score;
            document.querySelector('.score').textContent = 'Score: ' + score;
          /*  setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText =" 20 POINTS"
                chall6.classList.add("scale-and-flash");
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
                chall6.classList.remove("scale-and-flash");
            }, 2000);*/

        }
        if(data.position>=7){
            if (data.sensor7) {
                chall7.style.display = "block";
                rest=parseInt(data.sc, 10)-score;
                score += rest; console.log(rest);
                document.querySelector('.score').textContent = 'Score: ' + score;
                document.querySelector('.score').textContent = 'Score: ' + score;
               /* setTimeout(function () {
                    document.getElementById('flashscore').style.zIndex = '1';
                    document.getElementById('flashscore').innerText = "20 POINTS"
                    chall7.classList.add("scale-and-flash");
                }, 100);

                setTimeout(function () {
                    document.getElementById('flashscore').style.zIndex = '-1';
                    chall7.classList.remove("scale-and-flash");
                }, 2000);*/

            }

            else{
                rest=parseInt(data.sc, 10)-score;
                score += rest; console.log(rest);
                document.querySelector('.score').textContent = 'Score: ' + score;
                document.querySelector('.score').textContent = 'Score: ' + score;
                /*setTimeout(function () {
                    document.getElementById('flashscore').style.zIndex = '1';
                    document.getElementById('flashscore').innerText = "20 POINTS"
                    chall7.classList.add("scale-and-flash");
                }, 100);

                setTimeout(function () {
                    document.getElementById('flashscore').style.zIndex = '-1';
                    chall7.classList.remove("scale-and-flash");
                }, 2000);*/

            }

            }

        
        
       /* if (data.pause) {
            rest=parseInt(data.sc, 10)-score;
            score += rest; console.log(rest);
            document.querySelector('.score').textContent = 'Score: ' + score;
            document.querySelector('.score').textContent = 'Score: ' + score;
            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText = "PAUSE 5s + 20P"
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
            }, 2000);
        }*/
        if (data.sensor8) {
            chall8.style.display = "block";
            rest=parseInt(data.sc, 10)-score;
            score += rest; console.log(rest);
            document.querySelector('.score').textContent = 'Score: ' + score;
            document.querySelector('.score').textContent = 'Score: ' + score;
          /*  setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText = "20 POINTS"
                chall8.classList.add("scale-and-flash");
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
                chall8.classList.remove("scale-and-flash");
            }, 2000);*/
        }
        if (data.sensor9) {

            rest=parseInt(data.sc, 10)-score;
            score += rest; console.log(rest);
            document.querySelector('.score').textContent = 'Score: ' + score;
            document.querySelector('.score').textContent = 'Score: ' + score;
            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText =  "challenge 9 ✅️"
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
            }, 2000);
        }
        if(data.position===10){
            if (data.sensor10) {
                rest=parseInt(data.sc, 10)-score;
                score += rest; console.log(rest);
                chall9.style.display = "block";
                document.querySelector('.score').textContent = 'Score: ' + score;
                document.querySelector('.score').textContent = 'Score: ' + score;
                setTimeout(function () {
                    document.getElementById('flashscore').style.zIndex = '1';
                    document.getElementById('flashscore').innerText = rest + "POINTS"
                    chall9.classList.add("scale-and-flash");
                }, 100);

                setTimeout(function () {
                    document.getElementById('flashscore').style.zIndex = '-1';
                    chall9.classList.remove("scale-and-flash");
                }, 2000);
            }
            else{
                rest=parseInt(data.sc, 10)-score;
                score += rest; console.log(rest);
                document.querySelector('.score').textContent = 'Score: ' + score;
                document.querySelector('.score').textContent = 'Score: ' + score;
                setTimeout(function () {
                    document.getElementById('flashscore').style.zIndex = '1';
                    document.getElementById('flashscore').innerText = rest + "POINTS"
                    chall7.classList.add("scale-and-flash");
                }, 100);

                setTimeout(function () {
                    document.getElementById('flashscore').style.zIndex = '-1';
                    chall7.classList.remove("scale-and-flash");
                }, 2000);

            }

        }

        /*if (data.arret) {
            rest=parseInt(data.sc, 10)-score;
            score += rest; console.log(rest);
            document.querySelector('.score').textContent = 'Score: ' + score;
            document.querySelector('.score').textContent = 'Score: ' + score;
            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '1';
                document.getElementById('flashscore').innerText = "Arrét + 20P"
                chall1.classList.add("scale-and-flash");
            }, 100);

            setTimeout(function () {
                document.getElementById('flashscore').style.zIndex = '-1';
                chall1.classList.remove("scale-and-flash");
            }, 2000);
        }*/

    }






}
;
