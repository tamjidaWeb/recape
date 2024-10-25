


// console.log('connected paralellogram')

// function paralellogramArea(){
//     // const  baseInput = document.getElementById('input-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     const base = getParalellogramBase();
//     console.log(base);
// }

// function getParalellogramBase(){
//     const  baseInput = document.getElementById();
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }







function paralellogramArea(){
    const base = getInputValueById('input-base');
    // console.log('base value', base);

    const height = getInputValueById('input-height');
    // console.log('base value', height);

    const area = base* height;
    console.log(area);
    setInnerText('paralellogram-area', area)



}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;

}

function setInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
} 











