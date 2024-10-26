function pentagonArea (){
    const perimenetr = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    const area =0.5* perimenetr* apothem;
setInnerText('pentagon-span', area);

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