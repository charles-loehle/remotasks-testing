/**
REMOTETASKS INTERVIEW QUESTION
compare two strings and return YES if they have a common substring, otherwise return NO
'hello' and 'world' => YES
hi and bye => NO
 */
// FAILED!!!
// function commonSubstring2(a, b) {
//   // Write your code here
//   for (let i = 0; i < a.length; i++) {
//     // console.log(a[i]);
//     // console.log(b[i]);
//     for (let j = 0; j < a[i].length; j++) {
//       //console.log(a[i]);
//       if (b[i].includes(a[i][j])) {
//         console.log("YES");
//       } else {
//         console.log("NO");
//       }
//     }
//   }
// }
// commonSubstring2(["hello", "hi"], ["world", "bye"]);

// function commonSubstring(a, b) {
//   // Write your code here
//   // iterate through a array
//   for (let i = 0; i < a.length; i++) {
//     let common = false;
//     // compare each character in a[i] with each character in b[i] until a match is found
//     for (let j = 0; j < a[i].length; j++) {
//       // check if string b[i] includes character a[i][j]
//       if (b[i].includes(a[i][j])) {
//         common = true;
//         break;
//       }
//     }
//     console.log(common ? "YES" : "NO");
//   }
// }

// commonSubstring(["hello", "hi"], ["world", "bye"]);

function commonSubstring3(a, b) {
  let answer1;
  let answer2;

  // iterate through a array
  for (let i = 0; i < a.length; i++) {
    let common = false;

    // compare each character in a[i] with each character in b[i] until a match is found then return
    for (let j = 0; j < a[i].length; j++) {
      // check if string b[i] includes character a[i][j]
      if (b[i].includes(a[i][j])) {
        answer1 = `${a[i]} and ${b[i]} => YES`;
      } else {
        answer2 = `${a[i]} and ${b[i]} => NO`;
      }
      // console.log(common ? "YES" : "NO");
      //console.log(answer);
    }
  }
  return answer1 + "\n" + answer2;
}

console.log(commonSubstring3(["hello", "hi"], ["world", "bye"]));
