 /*
 console.log("Jack Ma Advices");
 const list = [ 
    "Be a good student", // 0-20
    "Follow correct boss and make more mistakes", // 20-30
    "Focus on yourself", // 30-40
    "Do what you are good at", // 40-50
    "Invest on young people", // 50-60
    "Rest now, it doesnot matter", // 60
 ];

 function giveAdvice(a, callback) {
    if (typeof a !== "number") callback ("insert number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(function () {
         callback(null, list[5]);
        }, 7000);
         
    }
 }
 console.log("passed here 0");
 giveAdvice(65, (err, data) => {
    if (err) console.log("ERROR", err);
    else {
      console.log("answer:", data);
    }
 });
 console.log("passed here 1");
 */
/*
 console.log("Jack Ma Advices");
 const list = [ 
    "Be a good student", // 0-20
    "Follow correct boss and make more mistakes", // 20-30
    "Focus on yourself", // 30-40
    "Do what you are good at", // 40-50
    "Invest on young people", // 50-60
    "Rest now, it doesnot matter", // 60
 ];
// callback
 function giveAdvice(a, callback) {
    if (typeof a !== "number") callback ("insert number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
         callback(null, list[5]);
        }, 1000);
         
    }
 }
 console.log("passed here 0");
 giveAdvice(65, (err, data) => {
    if (err) console.log("ERROR", err);
    else {
      console.log("answer:", data);
    }
 });
 console.log("passed here 1");
 */
 // Async
 // call via async/then/catch
 /*
 console.log("passed here 0");
 giveAdvice(25)
 .then(data => {     
 console.log("answer:", data);
 })
 .catch(err => {
console.log("ERROR:", err);
 })
 console.log("passed here 1");    // sync  
 */
/*
  async function giveAdvice(a) {
    if (typeof a !== "number") throw new Error("insert number");
    else if (a <= 20)  return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        return  new Promise((resolve, reject) => {
         setInterval(() => {
            resolve(list[5]);
         }, 1000);
        }); 
    }
 }
    */



//  call via async/await
/*
 async function run() {
    let answer = await giveAdvice(65);
    console.log(answer);
 }
 run();
*/
// A-TASK


function countLetter(word, letter) {

  console.log(word.split(letter).length-1);
}
countLetter('engineere', 'e');
