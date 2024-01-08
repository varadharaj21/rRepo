var sign = "X"
function boxclicked(id){
    if ( document.getElementById(id).innerText == ""){


    document.getElementById(id).innerText = sign
    calculateres(sign)
    if(sign == "X"){
        sign = "O"
    }else{
        sign = "X"
    }
}
}
function calculateres(sign) {
   // console.log(sign)
   // console.log(document.getElementById("box1").innerText)
    if( document.getElementById("box1").innerText == sign && document.getElementById("box2").innerText == sign && document.getElementById("box3").innerText == sign
    || document.getElementById("box4").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box6").innerText == sign 
    || document.getElementById("box7").innerText == sign && document.getElementById("box8").innerText == sign && document.getElementById("box9").innerText == sign
    || document.getElementById("box1").innerText == sign && document.getElementById("box4").innerText == sign && document.getElementById("box7").innerText == sign
    || document.getElementById("box2").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box8").innerText == sign
    || document.getElementById("box3").innerText == sign && document.getElementById("box6").innerText == sign && document.getElementById("box9").innerText == sign
    || document.getElementById("box1").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box9").innerText == sign
    || document.getElementById("box3").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box7").innerText == sign){
     console.log("winner")
     alert ("won")
    
     var  para =  document.getElementById("para");
     para.innerText="won"
     location.reload();
    }

}
