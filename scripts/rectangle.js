function rectanglaArea (){
    console.log('rectangle area');
    const lengthInput = document.getElementById('rectangle-width');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    //get width of the rectangle

    const widthInput = document.getElementById('rectangle-length');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    const area = length * width;
    console.log("rectangle area",area);


    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}