/* eslint-disable eol-last */
'use strict';
let scorel = 0;
let answer1 = "Yes".toLowerCase();
let answer2 = "Y".toLowerCase();

let userName = prompt('what is your nam: ');
alert('welcome ' + userName);

function q1() {
  let ans1 = prompt('do yo expect that i am tall some one').toLowerCase();
  switch (ans1) {
    case answer1:
    case answer2:
      console.log('you right');
      alert('you right');
      scorel = scorel + 1;
      break;

    default:
      console.log('wrong');
      alert('wrong');
      break;
  }

}





let funQ2 = function q2() {

  let ans2 = prompt('do you think that i like foot ball or no').toLowerCase();
  switch (ans2) {
    case answer1:
    case answer2:
      console.log('you right');
      alert('you right');
      scorel = scorel + 1;
      break;
    default:
      console.log('wrong');
      alert('wrong');
      break;
  }

}


function q3() {
  let ans3 = prompt('do youthink i live in jordan').toLowerCase();
  switch (ans3) {
    case answer1:
    case answer2:
      console.log('you right');
      alert('you right');
      scorel = scorel + 1;
      break;

    default:
      console.log('wrong');
      alert('wrong');
      break;

  }
}


function q4() {
  let ans4 = prompt('do you think that i like my major').toLowerCase();
  switch (ans4) {

    case answer1:
    case answer2:
      console.log('you right');
      alert('you right');
      scorel = scorel + 1;
      break;
    default:

      console.log('rong');
      alert('rong');
      break;

  }

}

function q5() {

  let ans5 = prompt('do you think that I like shawromaa').toLowerCase();
  switch (ans5) {
    case answer1:
    case answer2:
      console.log('you right');
      alert('you right');
      scorel = scorel + 1;
      break;
    default:

      console.log('wrong');
      alert('wrong');
      break;
  }
}
function q6() {
  for (let i = 0; i < 4; i++) {
    let ques5 = Number(prompt('How many times have I traveled by plane'));
    if (ques5 === 5) {
      alert('you get it');
      scorel = scorel + 1;
      break;
    }
    else if (ques5 > 5) {
      alert('no that to much');
      // continue;
    }
    else if (ques5 < 5) {
      alert('that is less');
      // continue;

    }
  }
}

let funQ7 = function q7() {
  let flag=false;
  let cars = ["kia", "bmw", "MC", "tesla", "mazda"];
  for (let i = 0; i < 6; i++) {
    if(flag==false){
      let ques7 = prompt("Guess one of tow from my favort Car :");
    for (let j = 0; j < cars.length; j++) {
      if (ques7 == cars[j]) {
        alert('you get it');
        scorel = scorel + 1;
        flag=true;
        break;
      }
    }
    }
  }
}
q1();
funQ2();
q3();
q4();
q5();
q6();
funQ7();

 console.log(scorel);
 alert('you have ' + scorel + ' correct answer');