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
    
    console.log(contatore)//contatore funziona 
        
        i2=Math.floor(Math.random()*ListaDomande.length)
        
        
        if(ListaDomande!=0)
        {
            document.getElementById("main").innerHTML=""
            CreaBottone(ListaDomande[i2])
            clearTimeout(timeout)
            timeout=setTimeout(function(){
        
              PickRandomQuestion(questions)
              
            },10000)
            
            ListaDomande.splice(i2,1)
            
        }
        else{
            clearTimeout(timeout)
            
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
     //classe label question
    createsto.innerText=domanda.question
    checkpos.appendChild(creadiv)
    creadiv.appendChild(createsto)
    creapulsante.innerText=domanda.correct_answer
    
    creapulsante.classList="buttonrisposte"
    creadiv.appendChild(creapulsante)
    
    creapulsante.addEventListener("click",function(){
        contatore++
        
        PickRandomQuestion(questions)
        
        
    })
    
    for(let i2=0;i2<domanda.incorrect_answers.length;i2++)//parto dal numero massimo di risposte e ciclo finchè non arrivo a zero
    {      
            creapulsante=document.createElement("button")
            creapulsante.innerText=domanda.incorrect_answers[i2]
            
            creapulsante.classList="buttonrisposte"
            creadiv.appendChild(creapulsante)
            creadiv.append(creaquestion)
            creapulsante.addEventListener("click",function(){  
                PickRandomQuestion(questions)   
            })
    }
    domandacorrente++
}
function CreaRisultato(percent){

 
  percent = Math.min(100, Math.max(0, percent));
  var dashLength = (percent / 100) * 1131;
  let creadivsvg=document.createElement("div")
  creadivsvg.id="progress-container"
  creadivpagina3.appendChild(creadivsvg).innerHTML=`
  <svg id="circular-progress" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  
    
    <circle  cx="-20" cy="250" r="180" fill="none" stroke="#00ffff" transform="rotate(270 100 100)" stroke-width="57" />
    <text  x="280" y="120" text-anchor="middle" alignment-baseline="middle" fill="white"><tspan x="250" dy="1.2em" style="font-weight: bold;font-size:1.1em">Congratulations!</tspan><tspan fill="#00ffff" x="250" dy="1.2em" style="font-weight: bold;font-size:1.1em" >You Passed the exam.</tspan><tspan x="250" dy="3.5em"> We'll send you the certificate</tspan><tspan x="250" dy="1.2em">in few minutes.</tspan><tspan x="270" dy="1.2em">Check you email (including</tspan><tspan x="270" dy="1.2em">promotions/spam folder)<tspan></text>

    
    <circle cx="-20" cy="250" r="180" fill="none" stroke="#d20094" transform="rotate(270 100 100)" stroke-width="60"  stroke-dasharray="`+ dashLength +`, 1131" />
  </svg>`

}

function PrimaPagina(){
    
    let createbutton=document.createElement("input")
    
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
   <input class="" type="checkbox" id="checkbox1" name="checkbox1">
   <label for="checkbox1">I promise to answer myself without help from anyone</label>`
    createbutton.setAttribute("type","button")
    createbutton.id="bottone"
    createbutton.value="PROCEED"
    checkpos[0].appendChild(createbutton)
    createbutton.addEventListener("click",function(){
        checkpos[0].innerHTML=""
        PickRandomQuestion(questions)
    })
    
    
    
}
PrimaPagina()