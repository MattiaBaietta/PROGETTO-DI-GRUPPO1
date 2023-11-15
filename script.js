let checkpos=document.getElementsByTagName("main")
let domandacorrente=1
let creadivpagina3=document.createElement("div")
creadivpagina3.classList="classedivpg3"


const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

let contatore=0
let timeout
function PickRandomQuestion(ListaDomande){ //,Numerodomande,Difficoulty quando farà gli extra
    let i2=0
    checkpos[0].style="margin-top:150px"
    console.log(contatore)//contatore funziona 
        
        i2=Math.floor(Math.random()*ListaDomande.length)
        if(document.getElementById("progress-container2"))
        {
          document.getElementById("progress-container2").remove()
        }
        //function timer
        creaTimer()
        
        
        if(ListaDomande!=0)
        {
            document.getElementById("main").innerHTML=""
            CreaBottone(ListaDomande[i2])
            clearTimeout(timeout)
            timeout=setTimeout(function(){
        
              PickRandomQuestion(questions)
              
            },20000)
            
            ListaDomande.splice(i2,1)
            
        }
        else{
            clearTimeout(timeout)
            checkpos[0].style="margin-top:0px"
            document.getElementById("progress-container2").remove()
            //creare classe css per il risultato
            document.getElementById("main").innerHTML=""
            let creabottonefooter=document.createElement("input")
            let footerpos=document.getElementsByTagName("footer")
            creabottonefooter.type="button"
            creabottonefooter.classList="bottonefooter"
            creabottonefooter.value="RATE US"
            let creadivresults=document.createElement("div")
            creadivresults.id="firstText"
            let creah1=document.createElement("h1")
            let creap=document.createElement("p")
            creah1.innerText="Results"
            creap.innerText="The summary of your answers:"
            checkpos[0].appendChild(creadivresults)
            creadivresults.appendChild(creah1)
            creadivresults.appendChild(creap)
            checkpos[0].appendChild(creadivpagina3)
            let creacorrect=document.createElement("h4")
            let creawrong=document.createElement("h4")
            let creadivcorrect=document.createElement("div")
            let creadivwrong=document.createElement("div")
            creadivcorrect.classList="elemento"
            creadivwrong.classList="elemento"
            creadivwrong.style="text-align:end"
            

            
            creacorrect.innerText="Correct "
            creaspan=document.createElement("span")
            creaspan.style="font-weight:700;font-size:3.5em"
            creaspan.innerText=(contatore/10)*100+"%"
            creapquestion=document.createElement("p")
            creapquestion.style="font-weight:200;margin-top: 0;"
            creapquestion.innerText=contatore + "/10 questions"
            creawrong.innerText="Wrong "
            creaspanwrong=document.createElement("span")
            creaspanwrong.style="font-weight:700;font-size:3.5em"
            creaspanwrong.innerText=(10-contatore)/10*100+"%"
            creapquestionwrong=document.createElement("p")
            creapquestionwrong.style="font-weight:200;margin-top: 0;"
            creapquestionwrong.innerText=(10-contatore) + "/10 questions"
            creadivpagina3.appendChild(creadivcorrect)
            creadivcorrect.appendChild(creacorrect)
            creadivcorrect.appendChild(creaspan)
            creadivcorrect.appendChild(creapquestion)
            
            
            CreaRisultato(100-(contatore*10))
            creadivpagina3.appendChild(creadivwrong)
            creadivwrong.appendChild(creawrong)
            creadivwrong.appendChild(creaspanwrong)
            creadivwrong.appendChild(creapquestionwrong)
            creabottonefooter.style=""
            footerpos[0].appendChild(creabottonefooter)
        
        }
        

}







let percentage = 100;

function creaTimer(){
  
        
  let elapsedSeconds = 0;
  let creadivtimer=document.createElement("div")
  creadivtimer.id="progress-container2"
  let creasvg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  creasvg2.setAttribute("height", "200");
  creasvg2.setAttribute("width", "200");
  
  let creacircle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  creacircle1.id = "outer-circle";
  creacircle1.setAttribute("cx", "130");
  creacircle1.setAttribute("cy", "110");
  creacircle1.setAttribute("r", "60");
  creacircle1.setAttribute("transform" ,"rotate(270 100 100)");
  let creacircle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  creacircle2.id = "progress-circle";
  creacircle2.setAttribute("cx", "130");
  creacircle2.setAttribute("cy", "110");
  creacircle2.setAttribute("r", "60");
  creacircle2.setAttribute("transform" ,"rotate(270 100 100)");
  let circletext = document.createElementNS("http://www.w3.org/2000/svg", "text");
  circletext.id = "progress-text";
  circletext.setAttribute("x", "110");
  circletext.setAttribute("y", "70");
  
  
  
  document.getElementsByTagName("header")[0].appendChild(creadivtimer)
  creadivtimer.appendChild(creasvg2)
  creasvg2.appendChild(creacircle1)
  creasvg2.appendChild(creacircle2)
  creasvg2.appendChild(circletext)
  const durationInSeconds = 23;
  const initialDashOffset = parseFloat(getComputedStyle(creacircle2).strokeDasharray);
  const dashOffsetPerSecond = initialDashOffset / durationInSeconds;

  function startTimer() {
    
    const timerInterval = setInterval(() => {
      elapsedSeconds++;
      const dashOffset = Math.max(0, initialDashOffset - dashOffsetPerSecond * elapsedSeconds);
      creacircle2.style.strokeDashoffset = dashOffset;
      circletext.innerHTML = `SECONDS
      ${durationInSeconds - 3 - elapsedSeconds}
      REMAINING`;
      if (elapsedSeconds >= durationInSeconds) {
        clearInterval(timerInterval);
      }
    }, 1000);
   
  }
  
  startTimer()
  
  
  
  
  
  
  
  
  
  
  
  /*percentage = Math.min(100, Math.max(0, percentage));
  let dashLength = (percentage / 100) * 377.09;
  console.log(dashLength)

  let creadivtimer=document.createElement("div")
  creadivtimer.id="progress-container2"
  document.getElementsByTagName("header")[0].appendChild(creadivtimer)
  creadivtimer.innerHTML=`
  <svg height="100%" width="100%" transform: rotate(270deg)>
  <!-- Cerchio esterno (contorno) -->
  <circle id="outer-circle" cx="50%" cy="50%" r="55" stroke-dasharray="></circle>

  <!-- Cerchio di riempimento -->
  <circle id="progress-circle" cx="50%" cy="50%" r="55" stroke-dasharray="`+ dashLength +`, 377.09"></circle>
  <text id="progress-text" x="50%" y="50%">0%</text>
</svg>`*/



}
function CreaBottone(domanda){
    
    let checkpos=document.getElementById("main")
    let creaform=document.createElement("form")
    let creadiv=document.createElement("div")
    let createsto=document.createElement("h2")
    createsto.appendChild(creaform)
    let creapulsante=document.createElement("button")
    let creaquestion=document.createElement("label")
    creaquestion.classList="labelquestion" 
    creaquestion.innerHTML=`QUESTION `+domandacorrente+`<span style="color:#d20094">/10</span>`
    createsto.innerText=domanda.question
    checkpos.appendChild(creadiv)
    creadiv.appendChild(createsto)
    let divrisposte=document.createElement("div")
    divrisposte.classList="divrisposte"
    creadiv.appendChild(divrisposte)
    creapulsante.innerText=domanda.correct_answer
    
    creapulsante.classList="buttonrisposte"
    divrisposte.appendChild(creapulsante)
    
    creapulsante.addEventListener("click",function(){
        contatore++
        
        PickRandomQuestion(questions)
        
        
    })
    
    for(let i2=0;i2<domanda.incorrect_answers.length;i2++)//parto dal numero massimo di risposte e ciclo finchè non arrivo a zero
    {      
            creapulsante=document.createElement("button")
            creapulsante.innerText=domanda.incorrect_answers[i2]
            
            creapulsante.classList="buttonrisposte"
            divrisposte.appendChild(creapulsante)
            creadiv.append(creaquestion)
            creapulsante.addEventListener("click",function(){  
                PickRandomQuestion(questions)   
            })
    }
    domandacorrente++
}
function CreaRisultato(percent){

 
  percent = Math.min(100, Math.max(0, percent));
  let dashLength = (percent / 100) * 1131;
  let creadivsvg=document.createElement("div")
  creadivsvg.id="progress-container"
  creadivpagina3.appendChild(creadivsvg).innerHTML=`
  <svg id="circular-progress" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  
    
    <circle  cx="-20" cy="250" r="180" fill="none" stroke="#00ffff" transform="rotate(270 100 100)" stroke-width="57" />
    <text  x="280" y="120" text-anchor="middle" alignment-baseline="middle" fill="white"><tspan x="250" dy="1.2em" style="font-weight: bold;font-size:1.1em">Congratulations!</tspan><tspan fill="#00ffff" x="250" dy="1.2em" style="font-weight: bold;font-size:1.1em" >You passed the exam.</tspan><tspan x="250" dy="3.5em"> We'll send you the certificate</tspan><tspan x="250" dy="1.2em">in few minutes.</tspan><tspan x="250" dy="1.2em">Check you email (including</tspan><tspan x="250" dy="1.2em">promotions/spam folder)<tspan></text>

    
    <circle cx="-20" cy="250" r="180" fill="none" stroke="#d20094" transform="rotate(270 100 100)" stroke-width="60"  stroke-dasharray="`+ dashLength +`, 1131" />
  </svg>`

}

function PrimaPagina(){
    
    let createbutton=document.createElement("input")
    checkpos[0].style="margin-top:0px"
    checkpos[0].innerHTML=`<h1>Welcome to <br> <span>your exam</span>
    </h1>

    <div class="testop1">
        <h3>Istructions</h3>
        <p>
            We don't expect most engineers to know the answers to all of these<br> 
            questions, so don't worry if you're unsure of a few of them.
        </p>
       <ul>
        <li>
            Each question is <span>timed</span> and can only be <span>answered once.</span> 
        </li>
        <li>
            Chanching browser tab or opening other windows will <span>invalidate the question.</span>
        </li>
        <li>
            This exam will take approx. <span>0-5 minutes</span>
        </li>
       </ul>
   </div>
   <input class="" type="checkbox" id="checkbox1" name="checkbox1" onchange="rimuovihover()">
   <label for="checkbox1">I promise to answer myself without help from anyone</label>
   
    <div id="hoverTextbox">
    Devi prima spuntare la checkbox
    </div>`
    createbutton.setAttribute("type","button")
    createbutton.id="bottone"
    createbutton.value="PROCEED"
    createbutton.setAttribute("onmousemove","aggiornaPosizioneTextbox(event)")
    createbutton.setAttribute("onmouseover","mostraTextbox()")
    createbutton.setAttribute("onmouseout","nascondiTextbox()")
    
    checkpos[0].appendChild(createbutton)
    let trovacheckbox=document.getElementById("checkbox1")
    
      console.log(trovacheckbox.checked)
      createbutton.addEventListener("click",function(){
          
          if(trovacheckbox.checked)
          {

            checkpos[0].innerHTML=""
            PickRandomQuestion(questions)   
          }
          else{
            
          }
         
    })   

 
    
    
    
}

PrimaPagina()
function rimuovihover(){
  let trovacheckbox=document.getElementById("checkbox1")
  let trovabottone=document.getElementById("bottone")
  if(trovacheckbox.checked)
  {
    trovabottone.removeAttribute("onmousemove")
    trovabottone.removeAttribute("onmouseover")
    trovabottone.removeAttribute("onmousemout")
  }
  if(!trovacheckbox.checked)
  {
    trovabottone.setAttribute("onmousemove","aggiornaPosizioneTextbox(event)")
    trovabottone.setAttribute("onmouseover","mostraTextbox()")
    trovabottone.setAttribute("onmouseout","nascondiTextbox()")
  }
}
rimuovihover()
function mostraTextbox() {
  var textbox = document.getElementById("hoverTextbox");
  textbox.style.display = "block";
}

function nascondiTextbox() {
  var textbox = document.getElementById("hoverTextbox");
  textbox.style.display = "none";
}

function aggiornaPosizioneTextbox(event) {
  var textbox = document.getElementById("hoverTextbox");
  textbox.style.left = (event.clientX + 10) + "px"; // Aggiunge 10 pixel per separare il cursore dalla textbox
  textbox.style.top = (event.clientY + window.scrollY + 10) + "px"; // Aggiunge 10 pixel per separare il cursore dalla textbox
}













/*document.addEventListener("DOMContentLoaded", function () {
  let checkbox = document.getElementById('checkbox1');
  let button = document.getElementById('bottone');
  let message = document.getElementById('hoverMessage');

  document.addEventListener('mousemove', function (event) {
      if (!checkbox.checked) {
          if (isCursorOverButton(event, button)) {
              showHoverMessage();
              updateHoverMessagePosition(event.clientX, event.clientY);
          } else {
              hideHoverMessage();
          }
      } else {
          hideHoverMessage();
      }
  });

  function isCursorOverButton(event, button) {
      let buttonRect = button.getBoundingClientRect();
      return (
          event.clientX >= buttonRect.left &&
          event.clientX <= buttonRect.right &&
          event.clientY >= buttonRect.top &&
          event.clientY <= buttonRect.bottom
      );
  }

  function showHoverMessage() {
      message.style.display = 'block';
  }

  function updateHoverMessagePosition(x, y) {
      message.style.left = x + 'px';
      message.style.top = y + 'px';
  }

  function hideHoverMessage() {
      message.style.display = 'none';
  }
});
function applyCheckboxStyles() {
  button.style.backgroundColor = '#00ffff';
  button.style.color = '#051339';
  button.style.border = '0px';
  button.addEventListener('mouseover', function () {
      button.style.cursor = 'pointer';
      button.style.boxShadow = '0px 0px 20px 3px #00ffff';
  });
  button.addEventListener('mouseout', function () {
      button.style.boxShadow = 'none';
  });
}
function removeCheckboxStyles() {
  button.style.backgroundColor = 'transparent'; 
  button.style.color = 'white';
  button.style.border = '';
  button.removeEventListener('mouseover', function () {
      button.style.cursor = 'pointer';
      button.style.boxShadow = '0px 0px 20px 3px #00ffff';
  });
  button.removeEventListener('mouseout', function () {
      button.style.boxShadow = 'none';
  });
}*/

