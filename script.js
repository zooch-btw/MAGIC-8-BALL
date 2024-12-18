let userName = prompt("Hi! Who are you?");
userName
  ? (document.getElementById("greeting").innerHTML = `Hello ${userName}`)
  : (document.getElementById("greeting").innerHTML = "Hi!");

function shakeMagic8Ball() {
  let randomNumber = Math.floor(Math.random() * 8);
  let eightball = "";
  let responseImg;
  let userQuestion = prompt("What is thy question for the MIGHTY 8 ball?");

  switch (randomNumber) {
    case 0:
      responseImg = "It is certain.jpg";
      eightball = "it is certain";
      break;
    case 1:
      responseImg = "it is decidely so.jpg";
      eightball = "it is decidely so";
      break;
    case 2:
      responseImg = "reply hazy try again.jpg";
      eightball = "reply hazy try again";
      break;
    case 3:
      responseImg = "Cannot predict now.jpg";
      eightball = "cannot predict now";
      break;
    case 4:
      responseImg = "Do not count on it.jpg";
      eightball = "do not count on it";
      break;
    case 5:
      responseImg = "My sources say no.jpg";
      eightball = "my sources say no";
      break;
    case 6:
      responseImg = "Signs point to yes.jpg";
      eightball = "signs point to yes";
      break;
    case 7:
      responseImg = "it is certain.jpg";
      eightball = "it is certain";
      break;
  }

  console.log(`${eightball}`);

  if (userQuestion) {
    document.getElementById(
      "rsptxt"
    ).innerHTML = `${userName} asked the Magic 8 Ball: ${userQuestion}. The wise and wondrous 8 Ball has replied with: ${eightball}`;
  } else {
    document.getElementById(
      "rsptxt"
    ).innerHTML = `You asked the Magic 8 Ball: nothing. The Magic 8 Ball feels bad, so it replies with: ${eightball}`;
  }

  document.getElementById("rspimg").src = responseImg;
}
