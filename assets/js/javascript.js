$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)
    $('#randomNumber').text(Random);

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }

    function won() {
        wins++;
        alert("You win");
        $('#numberWins').text(wins);
        reset();
    }

    function lost() {
        losses++;
        alert("You lost");
        $('#numberLosses').text(losses);
        reset()
    }

    $('#one').on('click', function () {
        userTotal = userTotal + num1;        
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            won();
        }
        else if (userTotal > Random) {
            lost();
        }
    })

    $('#two').on('click', function () {
        userTotal = userTotal + num2;       
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            won();
        }
        else if (userTotal > Random) {
            lost();
        }
    })

    $('#three').on('click', function () {
        userTotal = userTotal + num3;        
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            won();
        }
        else if (userTotal > Random) {
            lost();
        }
    })

    $('#four').on('click', function () {
        userTotal = userTotal + num4;        
        $('#finalTotal').text(userTotal);

        if (userTotal == Random) {
            won();
        }
        else if (userTotal > Random) {
            lost();
        }
    });
}); 