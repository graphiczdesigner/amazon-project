let calculation = localStorage.getItem('calculation') || '';
      displayCalculation();

      function updateCalculation(getValue) {
        calculation += getValue;
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
        const displayElement = document.querySelector('.displayCalculation');
        displayElement.innerHTML = calculation;
      }