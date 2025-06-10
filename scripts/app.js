const myFullname  = 'Jigen Patel';
const myStudentNumber = '1252161';

const result = `${myFullname} - ${myStudentNumber}`;
console.log(result);

const primaryHeadingContent = document.querySelector("h1");
console.log(primaryHeadingContent.innerHTML);

primaryHeadingContent.classList.add("primaryHeading");
primaryHeadingContent.innerHTML="Jigen Patel-1252161";