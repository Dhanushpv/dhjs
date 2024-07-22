let str='';
for(let i=0; i<10;i++){
    for (let j=0; j<i; j++){
        str=str+'*';
    }
    str=str+'\n';
}
console.log(str);


console.log(
    "\n\n\n"
)
// first
let x = '';
for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        x=x+ '*';
    }
    x=x+ '\n';
}
console.log(x);

console.log(
    "\n\n\n"
)

// second
// let n=5;
let y='';
for(let i=0; i<=5;i++){
    for (let j=1; j<=i; j++){
        y+=j;
    }
    y=y+'\n';
}
console.log(y);


console.log(
    "\n\n\n"
)

// third
for( let i=1; i<=10; i++)
console.log(i)


console.log(
    "\n\n\n"
)

// forth


let k=10
let sum=0
for(let i=0;i<=k;i++){
    sum+=i;
}
console.log(sum)

console.log(
    "\n\n\n"
)


// even number


for(let i=0;i<=50; i++){
    if (i % 2 ==0){
        console.log(i)
    }
}


console.log("\n\n\n\n\n")

// prime numbers



//largest number

let array =[10,40,80,120];
let e = array[0];
for(let i=0; i<array.length; i++){
    if( array[i] > e){
        e= array[i];
    }
}
console.log(e);

console.log('\n\n\n\n\n\n')

//smallest number

let arr =[10,40,80,120];
let b = array[0];
for(let i=0; i<array.length; i++){
    if( arr[i] > e){
        e= arr[i];
    }
}
console.log(b);