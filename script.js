// JS Basics

// let a = 10
// const b = 11
// var c = 12
// console.log(a, b, c);

// console.log(f);
// console.log(d);
// console.log(e);
// let d = 10
// const e = 11
// var f = 12


    //      Data Type

// let numb = 1;
// console.log(typeof numb, ':', numb);

// let str = 'Javid';
// console.log(typeof str, ':', str);

// let boo = true
// console.log(typeof boo, ':', boo);

// let empty = null
// console.log(typeof empty, ':', empty);

// let und;
// console.log(typeof und, ':', und);

// let big = 2454567876543213456754
// console.log(typeof big, ':', big);


    //      Operators
// let x = 5
// let y = 8

// console.log(x + y); //  addition
// console.log(x - y); //  substraction
// console.log(x * y); //  multiplication
// console.log(x / y); //  Division
// console.log(x ** y);//  Exponentiation
// console.log(x % y); //  Modulus
// console.log(x++);   //  increment
// console.log(y--);   //  decrement


    //  Type Conversion
// let a = '12'
// console.log(a, typeof a);
// let ns = Number(a)
// console.log(typeof ns);


// let b = 12
// console.log(b, typeof b);
// let ss = String(b)
// console.log(typeof ss, ss);

// let c = 'hello'
// console.log(c, typeof c);
// let st = Number(c)
// console.log(typeof st, st);

// let d = 'joo';
// console.log(d, typeof d);
// let bs = Boolean(d)
// console.log(typeof bs, bs);




// let t = 2344323
// let tss = t.toString()
// console.log(t ,typeof tss);


// console.log(parseFloat("4354.65fdg")); // parseFloat (change to number)
// console.log(parseFloat("fd4354fdg")); // parseFloat (change to number)


// console.log(parseInt("44.5dd")); // parseInt (remove float point & letter)



    //      Condition

// const age = 17;

// if (age >= 18) {
//     console.log(age, ':',"Adult");
// } else if (age >= 15) {
//     console.log(age, ':',"Teenage");
// } else {
//     console.log(age, ':',"Minor");
// }


// let day = 5;

// switch (day) {
//     case 1 :
//         console.log("Sunday");
//         break;
//     case 2 :
//         console.log("Monday");
//         break;
//     case 3 :
//         console.log("Tuesday");
//         break;
//     case 4 :
//         console.log("Wednesday");
//         break;
//     case 5 :
//         console.log("Thursday");
//         break;
//     case 6 :
//         console.log("Friday");
//         break;
//     case 7 :
//         console.log("Saturday");
//         break;
//     default :
//         console.log(day);
// }


// for (let i = 0; i <= 5; i++) {
//     let v = 10 - i
//     console.log(v);
// }



// let fruits = ['apple','banana','grape','orange']

// for (let i = 0; i < fruits.length; i++ ) {
//     console.log(fruits[i]);
// }



// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }



// for (let i = 0; i < 5; i++) {
//     if (i === 3){
//         break;
//     }
//     console.log(i);
    
// }


// for (let num = 2; num <= 50; num++) {
//     let isPrime = true;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break
//         }
//     }

//     if (isPrime) {
//         console.log(num);
//     }
// }


// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBizz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Bizz");
//     } else {
//         console.log(i);
        
//     }
// }




// let sent = "hello i am javid ibrahim cp"
// let words = sent.split(' ')
// let longest = ''

// for (let word of words) {
//     if (word.length > longest.length) {
//         longest = word
//     }
// }

// console.log(longest);








// let  i = 0
// while (i < 10) {
//     console.log(i);
//     i++
// }

// let i =10
// do {
//     console.log(i);
//     i++
// } while(i < 10)

// let even = 2;
// while (even <= 20) {
    
//     console.log(even);
//     even += 2
    
// }


// let des = 10;

// while (des > 0) {
//     console.log(des);
//     des--
// }


// let i = 0
// while (i < 10) {
//     i++
//     let tot = i * 7
//     if (tot > 50) {
//         console.log(i,':' , tot);
//         break;
//     }
// }




// let str = 'hello';
// let sp = str.split('')

// function removed (sp) {
//     let j = 0
// let i = 1
// while (i < sp.length) {
//     if (sp[i] !== sp[j]) {  
//     sp[j] = sp[i]
//     }
//     i++
// }
// console.log(j + 1);
// }
// removed(sp)



// let sum = 0, k = 0;
// while (k <= 50) {
//     sum += k
//     k++
// }
// console.log(sum);


// let x = 51;
// while (x % 7 !== 0) {
//     x++
// }
// console.log(x);


// let word = 'javid';
// let reversed = ''
// let index = word.length - 1

// while ( index >= 0) {
//     reversed += word[index]
//     index--
// }
// console.log(reversed);

// let str = 'don'
// let sp = str.split('')
// let reversed = sp.reverse()
// let val = reversed.join('')

// console.log(val);



// let js = 'javascript'
// let vowel = 'aeiouAEIOU'
// let res = ''
// let i = 0

// while (i < js.length) {
//     if (!vowel.includes(js[i])){
//         res += js[i]
//     }
//     i++
// }
// console.log(res);




// let num = 121
// let nums  = num.toString().split('').map(Number)
// console.log(nums);

// for (let i = 0; i < nums.length; i++) {
//     let noo = [...nums].reverse()

//     if (nums.join('') === noo.join('')) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }


// let n = 10;
// let a = 0, b = 1, countFib = 0;

// while (countFib < n) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//     countFib++;
// }



// let arr = [1,2,3,2,5,4,5]
// let unique = [...new Set(arr)]
// console.log(unique);



// let fruits = ['apple','mango','grape'];

// console.log(fruits);
// console.log(fruits[1]);
// console.log(fruits.push('orange'));
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.unshift('banana'));
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);
// console.log(fruits.slice(1,3));
// console.log(fruits.includes('grape'));
// console.log(fruits.includes('banana'));
// console.log(fruits.indexOf('mango'));
// console.log(fruits.indexOf('banana'));
// // console.log(fruits.splice(1,1));

// for (let i = 0; i < fruits.length; i++) {
//         console.log(fruits[i]);
//         console.log(fruits);
// }



// let person = [
//     {name : 'ali', mark : 80},
//     {name : 'marco', mark : 76},
//     {name : 'steve', mark : 85}
// ]

// let mapped = person.map((per) => per.name )
// console.log(mapped);


// let filtered = person.filter((per) => per.mark > 80)
// console.log(filtered);


// let reduced = person.reduce((acc, val) => acc + val.mark, 0)
// console.log(reduced);



// function came(city, country) {
//     console.log(`I am ${this.name}. I lives in ${city}, ${country}`);
// }

// const person = {name : "Javid"}

// // came.call(person,'Kerala', 'India') // call method
// // came.apply(person, ['kondotty', 'malappuram'])

// const newAdd = came.bind(person, 'Musliyaragadi', "kondotty")
// newAdd()




// const demo = document.getElementById('demo');

// demo.innerHTML = 'ibrahim';
// demo.style.color = 'red';
// demo.style.fontSize = '20px'

// demo.classList.add('high')


// const btn = document.getElementById('change');
// const tag = document.querySelector('p')

// btn.addEventListener("click", () => {
//     tag.classList.toggle('high')
// })



// const mouse = document.getElementById('mouse')

// mouse.addEventListener('mouseenter', () => {
//     mouse.style.backgroundColor = 'red'
// })

// mouse.addEventListener('mouseleave', () => {
//     mouse.style.backgroundColor = 'blue'
// })

// // document.addEventListener('keyup', (event) => {
// //     console.log(`key pressed ${event.key}`);
// // })


// document.addEventListener("keydown", (event) => {
//     if (event.ctrlKey && event.key === "s") {
//         event.preventDefault(); // Prevents browser's save dialog
//         alert("Custom Save Action Triggered!");
//     }
//     });



// const move = document.getElementById('move');
// let xpos = 0
// let ypos = 0


// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowRight') {
//         xpos += 10
//     }
//     if (event.key === 'ArrowLeft') {
//         xpos -= 10
//     }
//     if (event.key === 'ArrowDown') {
//         ypos += 10;
//     }
//     if (event.key === 'ArrowUp') {
//         ypos -= 10;
//     }
//     move.style.transform = `translate(${xpos}px, ${ypos}px)`
// })



// const parent = document.getElementById('container');
// const newElement = document.createElement('div')

// parent.style.padding = '10px';
// parent.style.backgroundColor = 'aqua'

// newElement.innerHTML = 'heyy'
// newElement.style.backgroundColor = 'red'

// parent.appendChild(newElement)
// parent.removeChild(newElement)


// if (parent.lastElementChild.tagName !== 'div') {
//     parent.removeChild(parent.lastElementChild)
// }


        //  callback

// function greet(name, callback) {
//     console.log(name);
//     callback()
// }
// function goodBye() {
//     console.log('Good Bye');
// }
// greet('javid', goodBye)



// function person(name, callback) {
//     console.log('Hello', name);
//     callback()
// }
// person('Jhon', function() {
//     console.log('Kondotty');
// })




        //  ToDo
// function addTask() {
//     let inputTask = document.getElementById('inputTask');
//     let inputText = inputTask.value.trim()
//     if (inputText === '') return;

//     let li = document.createElement('li')
//     li.textContent = inputText;

//     let btn = document.createElement('span')
//     btn.textContent = 'Remove'
//     btn.style.padding = '5px'
//     btn.style.marginLeft = '10px'
//     btn.onclick = () => li.remove()
    
//     li.appendChild(btn)
//     document.getElementById('taskList').appendChild(li)
//     inputTask.value = ''
// }


let shaOrg = {
    name : 'javid',
    detail : {
        age : 19
    }
}
let shallow = {...shaOrg}
shallow.detail.age = 20

console.log(shaOrg);
console.log(shallow);




let deeOrg = {
    name : 'alice',
    detail : {
        age : 21
    }
}
let deep = JSON.parse(JSON.stringify(deeOrg))
deep.detail.age = 23

console.log(deeOrg);
console.log(deep);
