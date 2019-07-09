$(document).ready(function () {
    // randomizes goal number
    var randnum = Math.floor(Math.random(101 + 49));

    $("#randnum").text(randnum);
    //randomizes gem value
    var gem1 = Math.floor(Math.random() * 19 + 1);
    var gem2 = Math.floor(Math.random() * 19 + 1);
    var gem3 = Math.floor(Math.random() * 19 + 1);
    var gem4 = Math.floor(Math.random() * 19 + 1);

    var userScore = 0;
    var wins = 0;
    var losses = -1;

    $('#Wins').text(wins);
    $('#Losses').text(losses);
    
    
    
    $('#gemOne').on('click', function () {
        userScore = userScore + gem1;
        console.log("New userScore " + userScore);
        $('#finalScore').text(userScore);
        if (userScore == randnum) {
            winner();
        }
        else if (userScore > randnum) {
            loser();
        }
    });
    
    
    $('#gemTwo').on('click', function () {
        userScore = userScore + gem2;
        console.log("New userScore= " + userScore);
        $('#finalScore').text(userScore);
        if (userScore == randnum) {
            winner();
        }
        else if (userScore > randnum) {
            loser();
        }
    });
   
   
    $('#gemThree').on('click', function () {
        userScore = userScore + gem3;
        console.log("New userScore= " + userScore);
        $('#finalScore').text(userScore);
        if (userScore == randnum) {
            winner();
        }
        else if (userScore > randnum) {
            loser();
        }
    });
    
    
    $('#gemFour').on('click', function () {
        userScore = userScore + gem4;
        console.log("New userScore= " + userScore);
        $('#finalScore').text(userScore);

        if (userScore == randnum) {
            winner();
        }
        else if (userScore > randnum) {
            loser();
        }

    });
    
    
    function winner(){
        alert("WINNER!!! YOU WIN");
          wins++; 
          $('#Wins').text(wins);
          reset();
        }
        
        
        function loser(){
        alert ("OOF YOU LOST! TRY AGAIN");
          losses++;
          $('#Losses').text(losses);
          reset()
        }

        
        
        function reset(){
            randnum=Math.floor(Math.random()*101+49);
            console.log(randnum)
            $('#randnum').text(randnum);
            gem1= Math.floor(Math.random()*19+1);
            gem2= Math.floor(Math.random()*19+1);
            gem3= Math.floor(Math.random()*19+1);
            gem4= Math.floor(Math.random()*19+1);
            userScore= 0;
            $('#finalScore').text(userScore);
            } 
      
    })