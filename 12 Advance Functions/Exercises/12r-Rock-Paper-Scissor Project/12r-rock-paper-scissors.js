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

        let isAutoPlaying = false;
        let intervalId;
        let autoPlayBtn = document.querySelector('.js-autoplay-btn');

        function autoplay(){
            if(!isAutoPlaying){
               intervalId = setInterval(()=>{
                const playerMove = pickComputerMove();
                playGame(playerMove);
            }, 2000);
            isAutoPlaying = true;
            autoPlayBtn.innerHTML = 'Stop Play';

            } else{
                clearInterval(intervalId);
                isAutoPlaying = false;
                autoPlayBtn.innerHTML = 'Auto Play';
            }
            
        }

        document.querySelector('.js-rock-btn')
        .addEventListener('click', () =>{
            playGame('rock');
        });

        document.querySelector('.js-paper-btn')
        .addEventListener('click', () =>{
            playGame('paper');
        });

        document.querySelector('.js-scissors-btn')
        .addEventListener('click', () =>{
            playGame('scissors');
        });

        function resetFunction(){
            console.log(1);
            let resetMsg = document.querySelector('.reset-confirmation');
            resetMsg.style.display = 'block';
            resetMsg.innerHTML = `Are you sure you want to reset the score?
            <button class='confirmation yes'>Yes</button>  <button class='confirmation no'>No</button>`;
            let yesBtn = document.querySelector('.confirmation.yes');
            let noBtn = document.querySelector('.confirmation.no');

            yesBtn.onclick = ()=>{
                console.log('clicked');
                score.wins = 0;
                score.losses = 0;
                score.ties = 0;
                localStorage.removeItem('score');
                updateScoreDisplay();
                resetMsg.style.display = 'none';
            };

            noBtn.onclick = ()=>{
                resetMsg.style.display = 'none';
            };
        }

        document.querySelector('.js-reset-btn')
        .addEventListener('click', () =>{
            resetFunction();

        });
            
       
        autoPlayBtn.addEventListener('click', () =>{
            autoplay();
        });

        document.body.addEventListener('keydown', (event) => {
            if(event.key === 'r'){
                playGame('rock');
            }else if(event.key === 'p'){
                playGame('paper');
            }else if(event.key === 's'){
                playGame('scissors');
            }else if(event.key === 'a'){
                autoplay();
            }else if(event.key === 'Backspace'){
                resetFunction();
            }
        });

                                           
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