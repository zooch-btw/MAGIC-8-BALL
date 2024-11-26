let userName = prompt("Hi! Who are you?");
userName
  ? (document.getElementById("greeting").innerText = `Hello, ${userName}`)
  : (document.getElementById("greeting").innerText = "Hello!");

function shakeMagic8Ball() {
  let randomNumber = Math.floor(Math.random() * 8);
  let eightball = "";

  let userQuestion = prompt("What is thy question for the MIGHTY 8 ball?");

  switch (randomNumber) {
    case 0:
      eightball = "It is certain";
      break;
    case 1:
      eightball = "It is decidely so";
      break;
    case 2:
      eightball = "Reply hazy try again";
      break;
    case 3:
      eightball = "Cannot predict now";
      break;
    case 4:
      eightball = "Do not count on it";
      break;
    case 5:
      eightball = "My sources say no";
      break;
    case 6:
      eightball = "Signs point to yes";
      break;
    case 7:
      eightball = "It is certain";
      break;
  }

  console.log(`${eightball}`);
  document.getElementById(
    "response-text"
  ).innerText = `${userName} has asked the Magic 8 Ball ${userQuestion}. The wise and wondrous 8 Ball has replied with ${eightball}`;
}
