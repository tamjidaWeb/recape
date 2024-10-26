function pentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    console.log(perimeter, apothem);

    const area = 0.5 * perimeter * apothem;
    setInnerText('pentagon-span', area)

}

function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
    return value;

}

function setInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}