// Correct answers for the clues
const correctAnswers = {
    1: "4",       // Answer to Clue 1
    2: "paris",   // Answer to Clue 2
    3: "30"       // Answer to Clue 3
  };
  
  // Function to check the user's answer
  function checkAnswer(clueNumber) {
    const answerInput = document.getElementById(`answer${clueNumber}`);
    const messageElement = document.getElementById(`message${clueNumber}`);
  
    const userAnswer = answerInput.value.toLowerCase().trim();  // normalize answer
  
    if (userAnswer === correctAnswers[clueNumber]) {
      messageElement.textContent = "Correct!";
  
      // Show the next clue if there is one
      const nextClue = document.getElementById(`clue-${clueNumber + 1}`);
      if (nextClue) {
        nextClue.classList.remove("hidden");
      }
    } else {
      messageElement.textContent = "Wrong answer. Try again!";
    }
  }
  