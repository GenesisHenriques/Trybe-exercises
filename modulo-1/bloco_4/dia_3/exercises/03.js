let num = 5;
let nums = [];


for (let contUm = 0; contUm < num; contUm += 1){

  if (num > contUm + 1){
    nums.push(' ');
  } else {
    nums.push('*');
  }
    
}

let a = nums.join(" ");

console.log(a);


