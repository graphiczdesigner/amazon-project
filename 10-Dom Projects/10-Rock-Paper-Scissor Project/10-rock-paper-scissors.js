let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,    
            losses: 0,  
            ties: 0 
        };

        function updateScoreDisplay() {
            document.querySelector('.js-score')
                .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        // Initial display
        updateScoreDisplay();

        
                                           
        function playGame(playerMove){
            const computerMove = pickComputerMove();
            let result = '';

            if(playerMove === 'scissors'){
                if(computerMove === 'rock'){
                    result = 'You Lose.';
                }
                else if(computerMove === 'paper'){
                    result = 'Congratulations! You Won.';
                }
                else if(computerMove === 'scissors'){
                    result = 'Tie.';
                }
            }
            else if(playerMove === 'paper'){
                if(computerMove === 'rock'){
                    result = 'Congratulations! You Won.';
                }
                else if(computerMove === 'paper'){
                    result = 'Tie.';
                }
                else if(computerMove === 'scissors'){
                    result = 'You Lose.';
                }
            }    
            else if(playerMove === 'rock'){
                if(computerMove === 'rock'){
                    result = 'Tie.';
                }
                else if(computerMove === 'paper'){
                    result = 'You Lose.';
                }
                else if(computerMove === 'scissors'){
                    result = 'Congratulations! You Won.';
                }
            }

            if(result === 'Congratulations! You Won.'){
                score.wins += 1;
            } else if(result === 'You Lose.'){
                score.losses += 1;
            } else if(result === 'Tie.'){
                score.ties +=1;
            }

            localStorage.setItem('score', JSON.stringify(score));
            // Also update score in display
            updateScoreDisplay();

            document.querySelector('.js-result')
                .innerHTML = result;

            document.querySelector('.js-moves')
                .innerHTML = `You chose <i class="fas fa-hand-${playerMove}"></i>. Computer chose <i class="fas fa-hand-${computerMove}"></i>`;

           
        }

        function pickComputerMove(){
            const randomNumber = Math.random();
            let computerMove = '';

            if(randomNumber > 0 && randomNumber < 1/3){
                computerMove = 'rock';
            }
            else if(randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper';
            }
            else if(randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissors';
            } 

            return computerMove; 
        }