console.log('connected paralellogram')

function paralellogramArea(){
    // const  baseInput = document.getElementById('input-base');
    // const baseText = baseInput.value;
    // const base = parseFloat(baseText);
    const base = getParalellogramBase();
    console.log(base);
}

function getParalellogramBase(){
    const  baseInput = document.getElementById('input-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    return base;
}