let attempts = 0;

document.getElementById('go').onclick = () => {
  myCode(attempts);
  attempts += 1;
}

function myCode(myAttempts) {
  const one = 1;
  console.log(one);
  const two = '2';
  console.log(two);
  // Insert conditional breakpoint here (`myAttempts >= 4`)
  const onePlusTwo = one + two;
  console.log(onePlusTwo);
  console.log(one + two);
}
