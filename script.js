console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = " 🎉Correct Number!🎉";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 14;
document.querySelector(".score").textContent = 10;
//getting the value of the input field from the user
document.querySelector(".guess").value;

// console.log(document.querySelector(".guess").value);
//setting the value of the input field in static way

// document.querySelector(".guess").value = 21;
document.querySelector(".check").addEventListener("click", function () {
  const userGuess = Number(document.querySelector(".guess").value);
  console.log(userGuess, typeof userGuess);
  //   console.log(typeof userGuess);

  //when there is no input
  if (!userGuess) {
    document.querySelector(".message").textContent = "🛑 Enter a Number!";
  }
});
