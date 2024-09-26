function fun1(num){
    console.log(num);
    function fun2(){
        console.log('hi',num);
    }
    return fun2;
}
let add=fun1(78);
add()

    
