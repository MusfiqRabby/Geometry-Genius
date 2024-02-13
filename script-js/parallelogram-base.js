/*function calculateParallelogramArea(){
    // get base of the parallelogram
    // const parallelogramBaseInput = document.getElementById('para-base')
    // const parallelogramText = parallelogramBaseInput.value;
    // const baseInput = parseFloat(parallelogramText);
    // console.log(baseInput);
    // const base = calculateParallelogramArea();
    // console.log(base);

    // function calculateParallelogramArea(){
    //     const parallelogramBaseInput = document.getElementById('para-base')
    //     const parallelogramText = parallelogramBaseInput.value;
    //     const base = parseFloat(parallelogramText);
    //     return base;
    // }
    // get height of the parallelogram 
    // const parallelogramHeightInput = document.getElementById('para-height')
    // const parallelogramHText = parallelogramHeightInput.value;
    // const height = parseFloat(parallelogramHText);
    // console.log(height);

    //  // calculate parallelogram area 
    //  const area = base * height;
    //  console.log('parallelogram of the:', area);

    // //display parallelogram area 
    //  const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    //  parallelogramAreaSpan.innerText = area;

    const base = getParallelogramBase();
    console.log(base);

}

    function getParallelogramBase(){
        const parallelogramBaseInput = document.getElementById('parallelogram-base')
        const baseText = parallelogramBaseInput.value;
        const base = parseFloat(baseText);
        return base;
    }*/

 function calculateParallelogramArea(){

    const base = getInputValueId('parallelogram-base');
    // console.log('base vlue', base);

    const height = getInputValueId('parallelogram-height');
    // console.log('height value', height);

    // parallelogram calculate
    const area = base * height;
    console.log('area of the parallelogram', area);

    setInnerTextById('parallelogram-area', area);

 }

 function getInputValueId(inputFieldId){
    const inpulField = document.getElementById(inputFieldId);
    const inputValueText = inpulField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue)
    return inputValue;
 }

 function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
 }