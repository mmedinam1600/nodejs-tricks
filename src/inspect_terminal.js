//Execute this program with the parameter inspect
// Example: node inspect .\inspect_terminal
// Use "cont" to continue the debugger
// Use "repl" to view the values of the variables
// Use "sb(line)" to pause in specific line
// Use ".exit" to exit the menu of debug

let base = 10;

function multiply(value1, value2) {
  let result = value1 * value2;
  return `The total is ${result}`;
}

//Breakpoint
debugger;

for (let a = 0; a < 5; a++) {
  console.log(multiply(10, base));
  base += 10;
}
