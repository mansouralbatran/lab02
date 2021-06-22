/* eslint-disable eol-last */
'use strict';
let x =0;
let ans1 = prompt('do yo expect that i am tall some one').toUpperCase();

switch (ans1) {
case 'YES':
  console.log('you right');
  alert('you right');
  x =x +1;
  break;
case 'NO':
  console.log('rong');
  alert('rong');
  break;
default:

  console.log('please answer by yes or no');

  alert('please answer by yes or no');
  break;
}





let ans2 = prompt('do you think that i like foot ball or no').toUpperCase();
switch (ans2) {
case 'YES':
  console.log('you right');
  alert('you right');
  x = x +1;
  break;
case 'NO':
  console.log('rong');
  alert('rong');
  break;
default:

  console.log('please answer by yes or no');

  alert('please answer by yes or no');
  break;
}


let ans3 = prompt('do youthink i live in jordan').toUpperCase();
switch (ans3) {
case 'YES':
  console.log('you right');
  alert('you right');
  x = x +1;
  break;
case 'NO':
  console.log('rong');
  alert('rong');
  break;
default:

  console.log('please answer by yes or no');

  alert('please answer by yes or no');
  break;
}


let ans4 = prompt('do you think that i like my major').toUpperCase();
switch (ans4) {
case 'YES':
  console.log('you right');
  alert('you right');
  x = x +1;
  break;
case 'NO':
  console.log('rong');
  alert('rong');
  break;
default:

  console.log('please answer by yes or no');

  alert('please answer by yes or no');
  break;
}


let ans5 = prompt('do you think that I like shawromaa').toUpperCase();
switch (ans5) {
case 'YES':
  console.log('you right');
  alert('you right');
  x = x +1;
  break;
case 'NO':
  console.log('rong');
  alert('rong');
  break;
default:

  console.log('please answer by yes or no');

  alert('please answer by yes or no');
  break;
}
let userName = prompt('what is your nam');
alert('welcome' + userName);



let ques5 = prompt('How many times have I traveled by plane');

for (let i = 0; i < 4; i++) {
  if (ques5 === '5') {
    alert('you get it');
    x = x +1;
    break;
  }
  else if (ques5 > '5') {
    alert('no that to much');
    ques5 = prompt('How many times have I traveled by plane');
  }
  else if (ques5 < '5') {
    alert('that is less');
    ques5 = prompt('How many times have I traveled by plane');
  }
  if (i === 3) {
    alert('the correct answer is 5');
  }
}

let favNUM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
let ques7 = prompt('Guess one of tow from my favort number from this list' + favNUM);

for (let i = 0; i < 6; i++) {
  if (ques7 === '7') {
    alert('thats great the corect answer(3,7)');
    x = x +1;
    break;
  } else if (ques7 === '3') {
    alert('thats great the corect answer(3,7');
    x = x +1;
    break;
  }
  else {
    alert('that is wrong keep trying');
    ques7 = prompt('Guess how many brothers I have from this list' + favNUM);
  } if (i === 5) { alert('the corect answer(3,7)'); }
}
console.log(x);
alert('you have ' + x + 'correct answer');