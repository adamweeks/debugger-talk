document.getElementById('go').onclick = () => {
  myCode();
}

function myCode() {
  const one = 1;
  console.log(one);
  const two = '2';
  console.log(two);
  const onePlusTwo = one + two;

  console.log(onePlusTwo);
  console.log(one + two);
}