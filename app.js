const state = {
player1: 0,
player2: 0,
currentquestion: {},
which: true
}

let questions = []

///Main Dom Element\\\

const $question =  $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1score = $("#player1  h4")
const $p2score = $("#player2 h4")

/////////////////
//Fuctions
/////////////////

const chooseAnnswer = (event, question) => {
    console.log(event)
   if(event.target.innerText === question.answer){
       console.log("correct")
       if (state.which){
           state.player1++
           state.which = !state.which
       }else{
        state.player2++
        state.which = !state.which
       }
       setBoard(questions)
   } else {
       console.log("incorrect")
       setBoard(questions)
       state.which = !state.which
   }
}


const setBoard = (q) => {
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a) 
    $b.text(randomQuestion.b) 
    $c.text(randomQuestion.c) 
    $d.text(randomQuestion.d) 
    
    $p1score.text(state.player1)
    $p2score.text(state.player2)
   
      
    $("li").off()
    $("li").on("click", (event) => {
        chooseAnnswer(event, randomQuestion)
    }) 

}






const URL = "https://cdn.contentful.com/spaces/o5abz2xu52wf/environments/master/entries?access_token=LJrVq8w0f1Nfv7VP5ZimYK1qqFxeTTk3NjKhaHVuhhA&content_type=triviaq"
$.ajax(URL)
.then ((data) => {
    console.log(data)
    questions = data.items.map((q) => q.fields)
    console.log(data)
    console.log(questions)

    setBoard(questions)
})

function myButton() {
    location.reload();
}