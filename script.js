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


for(let i=0;i<=10; i++){
    if (i % 2 ==0){
        console.log(i)
    }
}


console.log("\n\n\n\n\n")

// prime numbers

function print(){

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
}
print();


console.log("\n\n\n\n\n")

{
    function update(a){
        a=20
        console.log("a inside the update function:",a)
    }
    let a=10;
    console.log("a1:",a);

    update(a);
    console.log("a2:",a);
console.log("\n\n")
    function updatearr(arr){
        arr[0]=100;
        console.log("inside array:",arr);
    }
    let arr =[1,2,3,4,5];
    console.log("arr1",arr);

    updatearr(arr);
    console.log("arr2",arr);
}
console.log("\n\n\n")
// {
//     function outerFuntion(){
//         let outerVariable = "from outer function";

//         function innFunction(){
//             function innerfunction1(){
//                 function innerfunction2(){
//                     console.log("outerVariable: ", outerVariable);

//                 }
//             }
//         }

//     }

// }



let num=13;
let count=0;
 for(let i=2; i<=num/2; i++){
    if(num % i == 0){
        count++;
    }
 }
 if(count == 0){
    console.log("prime number")
    
 }else{
    console.log("not a prime number")
 }


 // Dom 
let text= document.getElementById('text');
console.log("text:",text);

let text_content= text.textContent;
