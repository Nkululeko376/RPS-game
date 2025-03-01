

//Score save inside an object
score = JSON.parse(localStorage.getItem('myScore'));





function select0Move(){

  
    const randomNumber = Math.random();

    let computerMove = '';

    if ( randomNumber >= 0 && randomNumber < 1/3 ) {
        computerMove = 'Rock';
    } 
    else if( randomNumber >= 1/3 && randomNumber < 2/3 ){
        computerMove = 'Paper';
    } 
    else if ( randomNumber >= 2/3 && randomNumber < 1 ){
        computerMove = 'Scissors';
    }


    let results = '';

    if ( computerMove === 'Rock' ){
        results = 'Tie.';
    }
    else if ( computerMove === 'Paper' ){
        results = 'Lose.';
    }
    else if( computerMove === 'Scissors' ){
        results = 'Win.';
    }

    if(results === 'Win.'){
        score.wins += 1;
    }
    else if(results === 'Lose.'){
        score.losses += 1;
    }
    else if(results === 'Tie.'){
        score.ties += 1;
    }

    localStorage.setItem('myScore', JSON.stringify(score));

        /* alert( `You picked Rock. The computer picked ${computerMove}. It is a ${results}.
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.` );
        */
        //Changing the display of results from alert and be display using Dom

        document.querySelector('.displayYourMoveResults').innerHTML = `You picked Rock.`;
        document.querySelector('.displayComputerMoveResults').innerHTML = `The computer picked: ${computerMove}.`;
        document.querySelector('.displayGameResults').innerHTML = `It is a ${results}`;
        document.querySelector('.displayGameScore').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;

    }








function select1Move(){
    const random1Number = Math.random();

            let computer1Move = '';

            if ( random1Number >= 0 && random1Number < 1/3 ) {
                computer1Move = 'Rock';
            } 
            else if( random1Number >= 1/3 && random1Number < 2/3 ){
                computer1Move = 'Paper';
            } 
            else if ( random1Number >= 2/3 && random1Number < 1 ){
                computer1Move = 'Scissors';
            }


            let results1 = '';

            if ( computer1Move === 'Rock' ){
                results1 = 'Win.';
            }
            else if ( computer1Move === 'Paper' ){
                results1 = 'Tie.';
            }
            else if( computer1Move === 'Scissors' ){
                results1 = 'Lose.';
            }

            if( results1 === 'Win.' ){
                score.wins += 1;
            }
            else if( results1 === 'Lose.'){
                score.losses += 1;
            }
            else if(results1 === 'Tie.'){
                score.ties += 1;
            }

            localStorage.setItem('myScore', JSON.stringify(score));

            /*alert( `You picked Paper and the computer picked ${computer1Move}. it is a ${results1}.
            Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.` );
            */
            
            document.querySelector('.displayYourMoveResults').innerHTML = `You picked Paper.`;
            document.querySelector('.displayComputerMoveResults').innerHTML = `The computer picked: ${computer1Move}.`;
            document.querySelector('.displayGameResults').innerHTML = `it is a ${results1}.`;
            document.querySelector('.displayGameScore').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}


function select2Move(){
    const chooseNumber = Math.random();

    let theMove = '';

    if ( chooseNumber >= 0 && chooseNumber < 1/3 ){
        theMove = 'Rock';
    }

    else if( chooseNumber >= 1/3 && chooseNumber < 2/3 ){
        theMove = 'Paper';
    }

    else if ( chooseNumber >= 2/3 && chooseNumber < 1 ){
        theMove = 'Scissors';
    }

    let myResults = '';

    if ( theMove === 'Rock' ){
        myResults = 'Lose.'
    }

    else if ( theMove === 'Paper' ){
        myResults = 'Win.'
    }

    else if( theMove === 'Scissors' ){
        myResults = 'Tie.'
    }

    if(myResults === 'Win.'){
        score.wins += 1;
    }
    else if(myResults === 'Lose.'){
        score.losses += 1;
    }
    else if(myResults === 'Tie.'){
        score.ties += 1;
    }


    localStorage.setItem('myScore', JSON.stringify(score));
    /*
    alert( `You Picked Scissors and the computer picked ${theMove}. It is a ${myResults}.
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`);
    */

    document.querySelector('.displayYourMoveResults').innerHTML = `You Picked Scissors.`;
    document.querySelector('.displayComputerMoveResults').innerHTML = `The computer picked: ${theMove}.`;
    document.querySelector('.displayGameResults').innerHTML = `It is a ${myResults}.`;
    document.querySelector('.displayGameScore').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;

}