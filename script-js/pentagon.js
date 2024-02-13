


function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter')
    
    const apothem = getInputValueById('pentagon-apothem');
    console.log(perimeter, apothem);

    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area', area);



}

function getInputValueById(inpulFieldId){
    const inpulField = document.getElementById(inpulFieldId);
    const inputValueText = inpulField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}



