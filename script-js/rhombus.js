function calculateRhombusArea(){
    
    const perameter = getInputValueById('rhombus-perameter');
    const minor = getInputValueById('rhombus-minor')
    
    const area = perameter * minor;
    setInnerTextById('rhombus-area', area)

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputvalue = parseFloat(inputValueText);
    return inputvalue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
