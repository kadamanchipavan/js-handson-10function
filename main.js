//1Q    
function one(){
    console.log("hello")

}
one()

//2Q
function two(num1,num2){
    return num1+num2;
}
const sum1=two(3,4)
console.log(sum1)

//3Q
let three =((x,y)=>{
 return x*y
})
console.log(three(10,40))

//4Q
//"Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

//5Q
//"Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//6Q
//"Print output

var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

//7Q
const fun=((n)=>{
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
})
console.log(fun(10));

