var btnEle = document.getElementById('btn');
const random = Math.floor(Math.random() * 100) + 1;
var count = 0;
var correctGuess = false;

btnEle.addEventListener('click', (e)=>{
    e.preventDefault();
    var inputVal = document.getElementById('guessField');
    console.log("inputVal ---",inputVal);

    if (count <=5 && !correctGuess ){
        if (random ==inputVal.value) {
            alert("correct guess ...");
            inputVal.value = '';
            count++;
            correctGuess = true;
        }
        else if (random > inputVal.value){
            alert("wrong guess!! try greater number");
            inputVal.value = '';
            count++;
        }
        else {
          alert("wrong guess!! try smaller number");
          inputVal.value = '';
          count++;
        }
    }
    else{
        alert("oops !! you have reached guess limit..")
    }
})
