var sign = "X"
function boxclicked(id){
    //var username = document.getElementById(username)
   
    if ( document.getElementById(id).innerText == ""){
    

    document.getElementById(id).innerText = sign
    calculateres(sign)
    if(sign == "X"){
        username.innerText = "player1"
        sign = "O"
    }else{
        username.innerText = "player2"
        sign = "X"
    }
}
}
function calculateres(sign) {
   console.log(sign)
   if(sign == "X"){
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
   
    
     var  para =  document.getElementById("para");
     para.innerText="play1 won"
     //alert ("won")
     location.reload();
    }}
    else if(sign == "O"){
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
        
         
          var  para =  document.getElementById("para");
          para.innerText="play2 won"
          //alert ("won")
          location.reload();
        
    }
}
    

}
