
let checkpos = document.getElementsByTagName("main")
let domandacorrente = 1
let creadivpagina3 = document.createElement("div")
creadivpagina3.classList = "classedivpg3"
let numerodomande=10//aggiungere variabile presa da input
let difficulty="easy"//aggiungere variabile presa da input
let rating=0


let arrayDati = [];




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

let contatore = 0
let timeout
function PickRandomQuestion(ListaDomande,num) { //,Numerodomande,Difficoulty quando farà gli extra
  let i2 = 0
  checkpos[0].style = "margin-top:150px"
  i2 = Math.floor(Math.random() * ListaDomande.length)
  if (document.getElementById("progress-container2")) {
    document.getElementById("progress-container2").remove()
  }
  //function timer
  


  if (ListaDomande != 0) {
    creaTimer()
    checkpos[0].innerHTML = ""
    CreaBottone(ListaDomande[i2])
    clearTimeout(timeout)
    timeout = setTimeout(function () {

      PickRandomQuestion(arrayDati,numerodomande)

    }, 20000)

    ListaDomande.splice(i2, 1)

  }
  else{
    clearTimeout(timeout)
    
    //creare classe css per il risultato
    checkpos[0].innerHTML=""
    checkpos[0].style="margin-top:50px"
    let creabottonefooter=document.createElement("input")
    let footerpos=document.getElementsByTagName("footer")
    creabottonefooter.type="button"
    creabottonefooter.classList="bottonefooter"
    creabottonefooter.value="RATE US"
    
    let creadivresults=document.createElement("div")
    creadivresults.classList="firstText"
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
    creaspan.innerText=parseInt((contatore/num)*100)+"%"
    creapquestion=document.createElement("p")
    creapquestion.style="font-weight:200;margin-top: 0;"
    creapquestion.innerText=contatore + `/`+num+` questions`
    creawrong.innerText="Wrong "
    creaspanwrong=document.createElement("span")
    creaspanwrong.style="font-weight:700;font-size:3.5em"
    creaspanwrong.innerText=parseInt((num-contatore)/num*100)+"%"
    creapquestionwrong=document.createElement("p")
    creapquestionwrong.style="font-weight:200;margin-top: 0;"
    creapquestionwrong.innerText=(num-contatore) + `/`+numerodomande+`questions`
    creadivpagina3.appendChild(creadivcorrect)
    creadivcorrect.appendChild(creacorrect)
    creadivcorrect.appendChild(creaspan)
    creadivcorrect.appendChild(creapquestion)
    
    console.log(parseInt((num*num)-(contatore*num)))
    CreaRisultato(parseInt((contatore/num)*100))
    creadivpagina3.appendChild(creadivwrong)
    creadivwrong.appendChild(creawrong)
    creadivwrong.appendChild(creaspanwrong)
    creadivwrong.appendChild(creapquestionwrong)
    creabottonefooter.style=""
    footerpos[0].appendChild(creabottonefooter)
    creabottonefooter.addEventListener("click",function () {

      addFeedback()
    })

}



}







let percentage = 100;

function creaTimer() {

  
  let elapsedSeconds = 20;
  let creadivtimer = document.createElement("div")
  creadivtimer.id = "progress-container2"
  let creasvg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  creasvg2.setAttribute("height", "200");
  creasvg2.setAttribute("width", "200");

  let creacircle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  creacircle1.id = "outer-circle";
  creacircle1.setAttribute("cx", "130");
  creacircle1.setAttribute("cy", "110");
  creacircle1.setAttribute("r", "60");
  creacircle1.setAttribute("transform", "rotate(270 100 100)");
  let creacircle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  creacircle2.id = "progress-circle";
  creacircle2.setAttribute("cx", "130");
  creacircle2.setAttribute("cy", "110");
  creacircle2.setAttribute("r", "60");
  creacircle2.setAttribute("transform", "rotate(270 100 100)");
  let circletext = document.createElementNS("http://www.w3.org/2000/svg", "text");
  circletext.id = "progress-text";
  circletext.setAttribute("x", "110");
  circletext.setAttribute("y", "70");



  document.getElementsByTagName("header")[0].appendChild(creadivtimer)
  creadivtimer.appendChild(creasvg2)
  creasvg2.appendChild(creacircle1)
  creasvg2.appendChild(creacircle2)
  creasvg2.appendChild(circletext)
  const durationInSeconds = 20;
  const initialDashOffset = parseFloat(getComputedStyle(creacircle2).strokeDasharray);
  const dashOffsetPerSecond = initialDashOffset / durationInSeconds;
  
  function startTimer() {
    let dashOffset = Math.max(0, initialDashOffset - dashOffsetPerSecond * elapsedSeconds);
    creacircle2.style.strokeDashoffset = dashOffset;
    
    circletext.setAttribute("y", "31")
    circletext.innerHTML = `<tspan style="font-size:0.8em" x="110" dy="1em" >SECONDS</tspan>
      <tspan style="font-size:3em" x="110" dy="1em">${elapsedSeconds}</tspan>
      <tspan style="font-size:0.8em" x="110"  dy="1.5em">REMAINING</tspan>`;
    const timerInterval = setInterval(() => {
      elapsedSeconds--;
      dashOffset = -1 * Math.max(0, initialDashOffset - dashOffsetPerSecond * elapsedSeconds);
      
      creacircle2.style.strokeDashoffset = dashOffset;


      circletext.setAttribute("y", "31")
      circletext.innerHTML = `<tspan style="font-size:0.8em" x="110" dy="1em" >SECONDS</tspan>
      <tspan style="font-size:3em" x="110" dy="1em">${elapsedSeconds}</tspan>
      <tspan style="font-size:0.8em" x="110"  dy="1.5em">REMAINING</tspan>`;
      if (elapsedSeconds < 0) {
        clearInterval(timerInterval);
        
      }
    }, 1000);

  }
  
  startTimer()


}
function CreaBottone(domanda) {
  
  let creaform = document.createElement("form")
  let creadiv = document.createElement("div")
  let createsto = document.createElement("h2")
  createsto.appendChild(creaform)
  let creapulsante = document.createElement("button")
  let creaquestion = document.createElement("label")
  creaquestion.classList = "labelquestion"
  creaquestion.innerHTML = `QUESTION ` + domandacorrente + `<span style="color:#d20094">/`+numerodomande+`</span>`
  createsto.innerHTML = domanda.question
  checkpos[0].appendChild(creadiv)
  creadiv.appendChild(createsto)
  let divrisposte = document.createElement("div")
  divrisposte.classList = "divrisposte"
  creadiv.appendChild(divrisposte)

  domanda.incorrect_answers.push(domanda.correct_answer)

  for (let i = domanda.incorrect_answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [domanda.incorrect_answers[i], domanda.incorrect_answers[j]] = [domanda.incorrect_answers[j], domanda.incorrect_answers[i]];
  }
  for (let i2 = 0; i2 < domanda.incorrect_answers.length; i2++)//parto dal numero massimo di risposte e ciclo finchè non arrivo a zero
  {
    creapulsante = document.createElement("button")
    creapulsante.innerText = domanda.incorrect_answers[i2]
    creapulsante.classList = "buttonrisposte"
    divrisposte.appendChild(creapulsante)
    creadiv.appendChild(creaquestion)
    if (domanda.incorrect_answers[i2]==domanda.correct_answer)
    {
      creapulsante.id="bottoneverde"
      creapulsante.addEventListener("click", function () {
      contatore++
  
      PickRandomQuestion(arrayDati,numerodomande)
      })
    }
    else{
      creapulsante.id="bottonerosso"
      creapulsante.addEventListener("click", function () {

      PickRandomQuestion(arrayDati,numerodomande)
    })
    }
  }
  domandacorrente++

}
function CreaRisultato(percent) {
  let stringarisultato=""
  console.log(percent)
  if(percent>=60)
  {
    stringarisultato=`<text  x="280" y="120" text-anchor="middle" alignment-baseline="middle" fill="white"><tspan x="250" dy="1.2em" style="font-weight: bold;font-size:1.1em">Congratulations!</tspan><tspan fill="#00ffff" x="250" dy="1.2em" style="font-weight: bold;font-size:1.1em" >You passed the exam.</tspan><tspan x="250" dy="3.5em"> We'll send you the certificate</tspan><tspan x="250" dy="1.2em">in few minutes.</tspan><tspan x="250" dy="1.2em">Check you email (including</tspan><tspan x="250" dy="1.2em">promotions/spam folder)<tspan></text>`
  }else
  {
    stringarisultato=`<text  x="280" y="120" text-anchor="middle" alignment-baseline="middle" fill="white"><tspan x="250" dy="1.2em" style="font-weight: bold;font-size:1.1em">Failed!</tspan><tspan fill="#d20094" x="250" dy="1.2em" style="font-weight: bold;font-size:1.1em" >You didn't pass the exam.</tspan><tspan x="250" dy="3.5em">Feel free to retry again.</tspan><tspan x="250" dy="1.2em"></tspan><tspan x="250" dy="1.2em">press f5 to refresh the page</tspan><tspan x="250" dy="1.2em">and to do it again<tspan></text>`
  }

  percent = 100-(Math.min(100, Math.max(0, percent)));
  let dashLength = (percent / 100) * 1131;
  let creadivsvg = document.createElement("div")
  creadivsvg.id = "progress-container"
  creadivpagina3.appendChild(creadivsvg).innerHTML = `
  <svg id="circular-progress" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  
    
    <circle  cx="-20" cy="250" r="180" fill="none" stroke="#00ffff" transform="rotate(270 100 100)" stroke-width="57" />`+stringarisultato+`  

    
    <circle cx="-20" cy="250" r="180" fill="none" stroke="#d20094" transform="rotate(270 100 100)" stroke-width="60"  stroke-dasharray="`+ dashLength + `, 1131" />
  </svg>`

}

function PrimaPagina() {

  let createbutton = document.createElement("input")
  checkpos[0].style = "margin-top:0px"
  checkpos[0].innerHTML = `<h1>Welcome to <br> <span>your exam</span>
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
  createbutton.setAttribute("type", "button")
  createbutton.id = "bottone"
  createbutton.value = "PROCEED"
  createbutton.setAttribute("onmousemove", "aggiornaPosizioneTextbox(event)")
  createbutton.setAttribute("onmouseover", "mostraTextbox()")
  createbutton.setAttribute("onmouseout", "nascondiTextbox()")

  checkpos[0].appendChild(createbutton)
  let trovacheckbox = document.getElementById("checkbox1")

  
  createbutton.addEventListener("click", function () {

    if (trovacheckbox.checked) {

      checkpos[0].innerHTML = ""
      selectDif()
      
    }
    else {

    }

  })





}

PrimaPagina()
function rimuovihover() {
  let trovacheckbox = document.getElementById("checkbox1")
  let trovabottone = document.getElementById("bottone")
  if (trovacheckbox.checked) {
    trovabottone.removeAttribute("onmousemove")
    trovabottone.removeAttribute("onmouseover")
    trovabottone.removeAttribute("onmousemout")
    trovabottone.removeAttribute("style")
  }
  else {
    trovabottone.style.cursor="not-allowed"
    trovabottone.setAttribute("onmousemove", "aggiornaPosizioneTextbox(event)")
    trovabottone.setAttribute("onmouseover", "mostraTextbox()")
    trovabottone.setAttribute("onmouseout", "nascondiTextbox()")
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



function addFeedback(){
  checkpos[0].innerHTML=""
  checkpos[0].style="text-align: center;"
  checkpos[0].id="main2"
  //checkpos[0].classList.add="firstText"
  let createbutton = document.createElement("input")
  createbutton.setAttribute("type", "button")
  createbutton.id = "bottone"
  createbutton.value = "MORE INFO"
  document.getElementsByClassName("bottonefooter")[0].remove()
  let creah2=document.createElement("h1")
  //creah2.classList="h1feedback"
  let creap=document.createElement("p")
  creah2.innerText="Tell us how it's going"
  creap.innerText="From 0 to 10, how likely are you to reccommend EPICODE to a friend or a colleague?"
  checkpos[0].appendChild(creah2)
  checkpos[0].appendChild(creap)
  for (let i=1;i<=10;i++)
  {
      let nuovoSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      nuovoSvg.classList="classestelline"
      nuovoSvg.setAttribute("width","47")
      nuovoSvg.setAttribute("height","46")
      nuovoSvg.setAttribute("fill","none")
      nuovoSvg.setAttribute("viewBox", "0 0 47 46");
      nuovoSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      nuovoSvg.setAttribute("data-rating", i);
      
      
        
      
      let nuovoPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      nuovoPath.setAttribute("d", "M22.2044 1.55551C22.6143 0.569963 24.0104 0.569964 24.4203 1.55552L29.9874 14.9402C30.1602 15.3557 30.5509 15.6396 30.9994 15.6756L45.4494 16.834C46.5134 16.9193 46.9448 18.2471 46.1341 18.9415L35.1248 28.3722C34.7831 28.6649 34.6338 29.1242 34.7382 29.5619L38.1018 43.6626C38.3494 44.7009 37.2199 45.5215 36.309 44.9651L23.9379 37.4089C23.5538 37.1743 23.0709 37.1743 22.6868 37.4089L10.3157 44.9651C9.40478 45.5215 8.27528 44.7009 8.52295 43.6626L11.8865 29.5619C11.9909 29.1242 11.8416 28.6649 11.4999 28.3722L0.490575 18.9415C-0.320069 18.2471 0.111362 16.9193 1.17535 16.834L15.6253 15.6756C16.0738 15.6396 16.4645 15.3557 16.6374 14.9402L22.2044 1.55551Z");
      nuovoPath.setAttribute("fill","#0B113B")
      nuovoPath.setAttribute("stroke","#00FFFF")
      nuovoPath.setAttribute("stroke-width","2")
      nuovoSvg.appendChild(nuovoPath);
      checkpos[0].appendChild(nuovoSvg);
      

      nuovoSvg.addEventListener("mouseover", ()=>{mousedentro(i)})
      nuovoSvg.addEventListener("mouseout",()=>{ mousefuori(i)}) 
      nuovoSvg.addEventListener("click", ()=>{funzioneclick(i)})


  }
  let creap2=document.createElement("p")
  creap2.innerText="Leave us an open feedback about your experience so far "
  let creainput=document.createElement("input")
  creainput.setAttribute("type","text")
  creainput.id="write"
  creainput.placeholder="Write your comment here"
  
  let creariga=document.createElement("p")
  creariga.id="lilla"
  checkpos[0].appendChild(creap2)
  checkpos[0].appendChild(creainput)
  checkpos[0].appendChild(creariga)



  function mousedentro(i){
    for(let i2=i;i2>0;i2--){
      document.querySelector(`svg[data-rating="`+i2+`"]`).children[0].classList="classeblue";

    }
  }
  function mousefuori(i){
    for(let i2=i;i2>0;i2--){
      document.querySelector(`svg[data-rating="`+i2+`"]`).children[0].classList="classenera"
    }
  }
  function funzioneclick(i) {     
    rating=i
    console.log(rating) 
    for(let i2=10;i2>0;i2--){
      
      document.querySelector(`svg[data-rating="`+i2+`"]`).removeEventListener("mouseout",()=>{mousedentro(i2)})
      document.querySelector(`svg[data-rating="`+i2+`"]`).removeEventListener("mouseover",()=>{ mousefuori(i2)})
      
      
    }
    for(i;i>0;i--)
    {
      document.querySelector(`svg[data-rating="`+i+`"]`).children[0].style.fill="#00FFFF";
    }
  }
  checkpos[0].appendChild(createbutton)
  
  let overlay = document.createElement("div");
  overlay.id = "overlay";
  document.body.appendChild(overlay);
 
  createbutton.addEventListener("click",function modale(){
    let creadivmodal=document.createElement("div")
    creadivmodal.id="myModal"
    creadivmodal.classList="modal"
    if(rating==0||creainput.value=="")
    {
      creadivmodal.innerHTML=`
 
      <div class="modal-content">
      <span class="close">&times;</span>
      <p style="color:black">Si prega di dare una valutazione al test</p>
      </div>`
    }
    else{
      creadivmodal.innerHTML=`
 
    <div class="modal-content">
    <span class="close">&times;</span>
    <p style="color:black">Grazie per il feedback a `+rating+` stelle</p>
    <p style="color:black">Testo feedback: `+ creainput.value +`</p>
    </div>`
    }
    
    checkpos[0].appendChild(creadivmodal)
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0]
    modal.style.display = "block";
    overlay.style.display = "block";

    
    span.addEventListener("click",function() {
      modal.style.display = "none";
    })
    window.addEventListener("click",function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    })
    

  })
  

}

function selectDif(){
  
  let elementoTitolo = document.createElement("h1")
  
  checkpos[0].id="main3"
  checkpos[0].appendChild(elementoTitolo)
  elementoTitolo.textContent = "SELEZIONA DIFFICOLTA"
  let contenitoreBottone = document.createElement("div")
  checkpos[0].appendChild(contenitoreBottone)
  contenitoreBottone.classList.add("bottoni")
  let arrayBottoni = ["easy","medium","hard"]
  for (let i = 0; i < arrayBottoni.length; i++) {
    let button = document.createElement("button");
    button.textContent = arrayBottoni[i]
    contenitoreBottone.appendChild(button);
    let arrayDiID = ["green","orange","red"]
    button.addEventListener("click",async function(){
      difficulty=arrayBottoni[i]
      
      arrayDati= await changeDiff(arrayBottoni[i],inputDiDomande.value)
      
      PickRandomQuestion(arrayDati,numerodomande)

    })
    
    button.id = arrayDiID[i]
  }
  let elementoTitolo2 = document.createElement("h2")
  checkpos[0].appendChild(elementoTitolo2)
  elementoTitolo2.textContent = "SELEZIONA NUMERO DI DOMANDE"
  let inputDiDomande = document.createElement("input")
  inputDiDomande.type="number"
  inputDiDomande.setAttribute("min","0")
  
  inputDiDomande.setAttribute("step","1")
  checkpos[0].appendChild(inputDiDomande)
  
}
//selectDif()


async function changeDiff(diff,num){
  numerodomande=num
  const apiUrl=`https://opentdb.com/api.php?amount=`+num+`&category=18&difficulty=`+diff
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.results
}