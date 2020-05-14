let txtCreditava = document.getElementById("creditava");
let txtWinTake = document.getElementById("winTake");
const btnSpin = document.getElementById("spin");
const btnCollect = document.getElementById("collect");
const btnCredit = document.getElementById("credit");
let img = document.getElementById("img");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
const message = document.getElementById("message");
btnCredit.addEventListener("click", credits);
btnSpin.addEventListener("click", spin);
btnCollect.addEventListener("click", collects);



let winnings=0;
txtWinTake.innerText=winnings;


let Credit=0;
txtCreditava.innerText=Credit;
function credits(){
    event.preventDefault()
    if( Credit >= 0)
        btnSpin.disabled = false;
    Credit++
    txtCreditava.innerText= Credit;
    
}
let picture = new Array();

    picture[0] = new Image();
    picture[0].src=  "apple.png";
    picture[1] = new Image();
    picture[1].src = "banana.png";
    picture[2] = new Image();
    picture[2].src = "bar.png";
    picture[3] = new Image();
    picture[3].src = "cherries.png"
    picture[4] = new Image();
    picture[4].src = "grapes.png"
    picture[5] = new Image();
    picture[5].src = "lemon.png"
    picture[6] = new Image();
    picture[6].src = "melon.png"
    picture[7] = new Image();
    picture[7].src = "orange.png"
    

function spin(){
    event.preventDefault()
    message.innerText ="no winnings"
    if( Credit <=0)
    
        btnSpin.disabled = true;
        

   
    
    
    Credit--
    txtCreditava.innerText= Credit;
   
  
   
    for(let l = 0 ; l<picture.length;l++){
        var random = Math.floor(Math.random()*picture.length);
        document.getElementById("Img2").src = picture[random].src;
    }
   
    
    
    for(let x = 0 ; x<picture.length;x++){
        var random = Math.floor(Math.random()*picture.length);
        document.getElementById("Img1").src = picture[random].src;
    }
    
    
    for(let i = 0;i<picture.length;i++){
        
        var random = Math.floor(Math.random()*picture.length);
        document.getElementById("Img").src = picture[random].src;
           
           
        }
        
     if( document.getElementById("Img2").src == document.getElementById("Img1").src){
         winnings += 5;
         txtWinTake.innerText = winnings;
         alert("you have won 5 points")
         
     } 
     if(document.getElementById("Img2").src == document.getElementById("Img1").src && document.getElementById("Img2").src == document.getElementById("Img").src && document.getElementById("Img").src == document.getElementById("Img1").src){
         winnings +=10
         txtWinTake.innerText = winnings
         alert("you have won 10 points")

     }
    
    
}
function collects(){
    event.preventDefault()
    message.innerText = "you have collected "+winnings+ " points";
    winnings = 0;
    if(txtWinTake.innerText>1){
    txtWinTake.innerText = 0;
    alert("winnings has been taken");
    }
    if (txtWinTake.innerText<1){
        btnCollect.disabled = true;
        alert("button disabled");
    }
}



    
    