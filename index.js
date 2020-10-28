let fib = (n)=>  {
    if (n < 2){
      return n
    }
    return fib(n - 1) + fib (n - 2)
  }
console.log(fib(12));


function shift(arr, position, index) {
    let newArr = arr;
    const arrayLength = arr.length;
    if (position === 'right') {
        for (let i = 0; i < index; i++) {
            newArr.unshift(arr[arrayLength - 1]);
            newArr.pop();
        }
        console.log(newArr)
    }

    if (position === 'left') {
        for (let i = 0; i < index; i++) {
            newArr.push(arr[0]);
            newArr.shift();
        }
        console.log(newArr)
    }
}
const arr1 = ['j', 'j', 's', 'a'];
shift(arr1, 'left', 2);
const arr2 = ['1', '2', '3', '4', '5'];
shift(arr2, 'right', 3);

function secondMax(arr3){
    let Maxvalue=0,Secondvalue=0;
    for(let i=0;i<arr3.length;i++){
        if(arr3[i] > Maxvalue){
            Secondvalue = Maxvalue;
            Maxvalue = arr3[i];
        }
        else if(arr3[i]>Secondvalue && arr3[i]<Maxvalue){
            Secondvalue = arr3[i];
       } 
    }
    return Secondvalue;
}
const arr3=[9, 2, 21, 21];
console.log(secondMax(arr3));

function fizzBuzz(num) {
    switch (num % 3 === 0 & num % 5 === 0) {
        case 0: {
            switch(num%3===0){
                case true:{
                    console.log('Fizz');
                    break;
                }
                case false:{
                    switch(num%5===0){
                        case true:{
                            console.log('Buzz');
                            break;
                        }
                    }
                }
            }
            break;
            }     
        case 1: {
            console.log('FizzBuzz');
            break;
        }
    }  
}
fizzBuzz(15);

