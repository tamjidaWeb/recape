

// get triangle vase value

function calculateArea (){
    const triangleeBase = document.getElementById('triangle-base');
const triangleBaseText = triangleeBase.value;
    const base = parseFloat(triangleBaseText)
console.log(base);

const triangleHeight = document.getElementById('triangle-height');
const triangleHeightText = triangleHeight.value;
const height =parseFloat( triangleHeightText);
console.log(height);

const area = 0.5 * base * height;
console.log('triangle area',area);


// display triangle area
const triangleAreaSpan = document.getElementById('traiangle-area')
triangleAreaSpan.innerText = area;

}