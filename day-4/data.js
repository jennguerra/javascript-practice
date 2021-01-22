//Primative
const numbers = 1;
const string = 'string' + "string" + `${numbers}   ${6}`;
const boolean = true;

//Complex/containers
const array = [1, 2, 3, 4, 'hi', true, [], {}];
const object = {length: 5, username: 'v', isActive: true, myArray: array};

//Document
console.log(document.body);

//
//create an tag in memory
const ptag = document.createElement('p');

//place a tag in the view
document.body.appendChild(ptag);

//write a text inside a tag
ptag.innerHTML = string;
//select tags
const oneTag = document.querySelector('h1.test'); //one item
const multipleTags = document.querySelectorAll('h1 span'); // all the items

//css
//change style
ptag.style.border = '50px solid red';

console.log('oneTag', oneTag);
console.log('multipleTags', multipleTags);

//logic/choices
if (numbers === 21) {
    console.log('runs this code')

} else if (numbers === 22) {
    console.log('don\'t run that code. run this code.')
} else {
    console.log('it was not 21 or 22')
}

switch(numbers) {
    case 21:
       console.log('runs this code');
        break;
    case 22:
        console.log('don\'t run that code. run this code.');
        break;
    default:
        console.log('it was not 21 or 22')       

}












