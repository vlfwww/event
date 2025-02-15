//2
// function task2(){
//     let inp =document.getElementById('input');
//     inp.value = '+375(29)111-11-11'
// }
// document.querySelector('button').addEventListener('click',task2)

//3
// function task3(){
//     let inp =document.getElementById('input');
//     alert(inp.value)
// }
// document.querySelector('button').addEventListener('click',task3)

//4
// function task4(){
//     let inp =document.getElementById('input');
//     try{
//         if(inp.value=='') throw new Error('пустой ввод');
//         alert(inp.value)
//     }
//     catch(error){
//         alert(error.message);
//     }
// }
// document.querySelector('button').addEventListener('click',task4)

//5
// function task5(){
//     let inp =document.getElementById('input');
//     const resultDiv = document.getElementById('result');
//     try{
//         if(inp.value=='') throw new Error('пустой ввод');
//         if(inp.value<=0) throw new Error('ввод меньше 0');
//         let fib = [0, 1];
//         for (let i = 2; i < inp; i++) {
//             fib[i] = fib[i - 1] + fib[i - 2];
//         }
//         resultDiv.innerHTML = `Ряд Фибоначчи: ${fib.slice(0, inp).join(', ')}`;
//     }
//     catch(error){
//         alert(error.message);
//     }
// }
// document.querySelector('button').addEventListener('click',task5)

//6
// function task6(){
//     let inp =document.getElementById('input');
//     inp.value = '!!!'
// }
// document.querySelector('button').addEventListener('click',task6)

//7
// function task7(){
//         let inp =document.getElementById('input');
//         const resultDiv = document.getElementById('result');
//         try{
//             if(inp.value=='') throw new Error('пустой ввод');
//             let rez = inp.value*inp.value;
//             resultDiv.innerHTML = `Результат:${rez}`;
//         }
//         catch(error){
//             alert(error.message);
//         }
//     }
//     document.querySelector('button').addEventListener('click',task7)

//8
// function task8(){
//           let body = document.querySelector('body');
//           body.style.background='blue'
//         }
//         document.querySelector('button').addEventListener('click',task8)

//9
// const colors = [
//     "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF5",
//     "#F5FF33", "#A133FF", "#FF3333", "#33FFA1", "#5733FF",
//     "#33FF33", "#FF8333", "#3383FF", "#FF33F5", "#33FF83",
//     "#8333FF", "#FF3383", "#33F5FF", "#FF5733", "#33FF57"
// ];
// function task9(){
//     let body = document.querySelector('body');
//     body.style.background = colors[Math.floor(Math.random()* colors.length)]
// }
// document.querySelector('button').addEventListener('click',task9)

//10
// const input = document.getElementById('input');
// const unlockButton = document.getElementById('unlock');
// const lockButton = document.getElementById('lock');

// unlockButton.addEventListener('click', () => {
//     input.disabled = false;
//     unlockButton.disabled = true;
//     lockButton.disabled = false;
// });

// lockButton.addEventListener('click', () => {
//     input.disabled = true;
//     unlockButton.disabled = false;
//     lockButton.disabled = true;
// });

//11
// function task11() {
//     let inp1 = document.getElementById('inputOne');
//     let inp2 = document.getElementById('inputTwo');
//     let inp1Value = inp1.value; 
//     inp1.value = inp2.value; 
//     inp2.value = inp1Value;
// }

// document.querySelector('button').addEventListener('click', task11);

//12
const values = [];

function task12() {
    let inp = document.getElementById('input');
    const resultDiv = document.getElementById('result');
    try {
        if (inp.value === '') throw new Error('пустой ввод');
        values.push(inp.value); 
        resultDiv.innerHTML = `Результат: [${values.join(', ')}]`;
        inp.value = ''; 
    } catch (error) {
        alert(error.message);
    }
}

document.querySelector('button').addEventListener('click', task12);