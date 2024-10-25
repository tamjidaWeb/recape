function paralellogramArea(){
    const base = getInputValueById('input-base');
    console.log(base);
    const height = getInputValueById('input-height');
    console.log(height);

    const area = base* height;
    console.log(area);
    setInnerTextById('paralellogram-area')
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
   const inputText = inputField.value;
   const text = parseFloat(inputText)
    return text;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}