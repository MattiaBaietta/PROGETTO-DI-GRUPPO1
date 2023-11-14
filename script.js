let checkpos=document.getElementsByTagName("main")
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
function PickRandomQuestion(ListaDomande){ //,Numerodomande,Difficoulty quando farà gli extra
    let i2=0
    console.log(contatore)//contatore funziona 
        
        i2=Math.floor(Math.random()*ListaDomande.length)
        
        
        if(ListaDomande!=0)
        {
            CreaBottone(ListaDomande[i2])
            
            ListaDomande.splice(i2,1)
            
        }
        else{
            //creare classe css per il risultato
            document.getElementById("main").innerHTML=""
            let checkpos=document.getElementById("main")
            
            let creacorrect=document.createElement("h4")
            let creawrong=document.createElement("h4")
            creacorrect.innerText="Correct "+ (contatore/10)*100+"%" + contatore + "/10 questions"
            creawrong.innerText="Wrong " + (10-contatore)/10*100+"%" + (10-contatore) + "/10 questions"
            checkpos.appendChild(creacorrect)
            creacorrect.appendChild(creawrong)
        
        }
        

}
function CreaBottone(domanda){
    
    let checkpos=document.getElementById("main")
    let creaform=document.createElement("form")
    let creadiv=document.createElement("div")
    let createsto=document.createElement("h2")
    createsto.appendChild(creaform)
    let creapulsante=document.createElement("button")
    
    createsto.innerText=domanda.question
    checkpos.appendChild(creadiv)
    creadiv.appendChild(createsto)
    creapulsante.innerText=domanda.correct_answer
    
    creapulsante.classList="buttonrisposte"
    creadiv.appendChild(creapulsante)
    
    creapulsante.addEventListener("click",function(){
        contatore++
        creadiv.remove()
        PickRandomQuestion(questions)
        
        
    })
    
    for(let i2=0;i2<domanda.incorrect_answers.length;i2++)//parto dal numero massimo di risposte e ciclo finchè non arrivo a zero
    {      
            creapulsante=document.createElement("button")
            creapulsante.innerText=domanda.incorrect_answers[i2]
            
            creapulsante.classList="buttonrisposte"
            creadiv.appendChild(creapulsante)
            creapulsante.addEventListener("click",function(){
                
                creadiv.remove()
                PickRandomQuestion(questions)
                
                
            })
    }
    
    /*setTimeout(function(){
        PickRandomQuestion(questions)},5000)*/
    

}



//PickRandomQuestion(questions)
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

