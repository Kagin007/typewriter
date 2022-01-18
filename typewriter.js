const sentence = "hello there from lighthouse labs \n";
let timeoutAmount = 0;

for (let char of sentence) {  
  setTimeout(()=> process.stdout.write(char),timeoutAmount);
  timeoutAmount += 50;
}