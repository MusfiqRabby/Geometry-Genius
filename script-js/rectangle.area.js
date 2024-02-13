function calculateRectangleArea(){
    // get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengtText = lengthInput.value;
    const length = parseFloat(lengtText);
     console.log(length);

    // get length of the rectangle
    const widthInput = document.getElementById('rectangle-width')
    const widthText = widthInput.value;
    const width = parseFloat(widthText)
    console.log(width);

    // calculate rectangle area 
    const area = length * width;
    console.log('rectangle area of the:', area)

    //display rectangle area 
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}