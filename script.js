let userName = prompt("Hi! Who are you?");
userName
  ? (document.getElementById("greeting").innerText = `Hey ${userName}`)
  : (document.getElementById("greeting").innerText = "Hi!");

function shakeMagic8Ball() {
  let randomNumber = Math.floor(Math.random() * 8);
  let eightball = "";
  let responseImg;
  let userQuestion = prompt("What is thy question for the MIGHTY 8 ball?");

  switch (randomNumber) {
    case 0:
      eightball = "it is certain";
      responseImg = "it is certain.jpg";
      break;
    case 1:
      eightball = "it is decidely so";
      responseImg = "It is decidely so.jpg";
      break;
    case 2:
      eightball = "reply hazy try again";
      responseImg = "reply hazy try again.jpg";
      break;
    case 3:
      eightball = "cannot predict now";
      responseImg = "Cannot predict now.jpg";
      break;
    case 4:
      eightball = "do not count on it";
      responseImg = "Do not count on it.jpg";
      break;
    case 5:
      eightball = "my sources say no";
      responseImg = "My sources say no.jpg";
      break;
    case 6:
      eightball = "signs point to yes";
      responseImg = "Signs point to yes.jpg";
      break;
    case 7:
      eightball = "it is certain";
      responseImg = "it is certain.jpg";
      break;
  }

  console.log(`${eightball}`);
  document.getElementById(
    "response-text"
  ).innerText = `${userName} has asked the Magic 8 Ball ${userQuestion}. The wise and wondrous 8 Ball has replied with ${eightball}`;
  document.getElementById("response-image").src = responseImg;
}
