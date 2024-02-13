function calculateEllipseArea(){
    
    const peramiter = getInputValueId('ellipse-pera');
    const nomie = getInputValueId('ellipse-no');
    console.log(peramiter, nomie);

    const area = peramiter * nomie;
    setInnerTextById('rhombus-area', area);



}

function getInputValueId(inputFieldId){
    const inpulField = document.getElementById(inputFieldId);
    const inputValueText = inpulField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}