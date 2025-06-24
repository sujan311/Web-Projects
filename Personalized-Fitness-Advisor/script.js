document.getElementById('fitnessForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get user inputs
    const goal = document.getElementById('goal').value;
  
    // Redirect based on goal
    switch (goal) {
      case 'lose':
        window.location.href = 'lose.html';
        break;
      case 'gain':
        window.location.href = 'gain.html';
        break;
      case 'maintain':
        window.location.href = 'maintain-fitness.html';
        break;
      default:
        alert('Please select a valid fitness goal.');
    }
  });