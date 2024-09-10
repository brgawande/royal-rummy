function toggleAnswer(index) {
  const answers = document.querySelectorAll(".answer");
  const currentAnswer = answers[index];

  // Toggle the display of the selected answer
  if (currentAnswer.style.display === "block") {
    currentAnswer.style.display = "none";
  } else {
    // Hide all answers
    answers.forEach((answer) => (answer.style.display = "none"));
    // Show the selected answer
    currentAnswer.style.display = "block";
  }
}
