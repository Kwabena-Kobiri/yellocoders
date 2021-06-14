// console.log('Hello world');

// let a = 56;

// let b = 67;

// const c = a + b;

// console.log(c);

// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(1000, 35674);

// const add = num1 => console.log(num1 + 100);


// add(456)


// const head = document.querySelector('h1');

// console.log(head);

const MyForm = document.querySelector('#Form');

//console.log(MyForm);

MyForm.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();
    alert("Form not configured. Reach me via yellocode.club@gmail.com");
}

// setTimeout(function(){}, 2000);

setTimeout(() => {
    greet = document.querySelector('.Details');
    greet.children[0].innerText = 'Hello';
    document.querySelector('#LandingPage').style.background = 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)';
}, 3000);