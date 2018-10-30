let attempts = 0;

document.getElementById('go').onclick = () => {
  myCode();
}

function myCode() {
  // Cause our code to throw
  cats.likesDogs = true;
}
