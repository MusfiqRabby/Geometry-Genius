function calculateParallelogramArea(){
    // get base of the parallelogram
    const parallelogramBaseInput = document.getElementById('para-base')
    const parallelogramText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramText);
    console.log(base);

    // get height of the parallelogram 
    const parallelogramHeightInput = document.getElementById('para-height')
    const parallelogramHText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHText);
    console.log(height);

     // calculate parallelogram area 
     const area = base * height;
     console.log('parallelogram of the:', area);

    //display parallelogram area 
     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
     parallelogramAreaSpan.innerText = area;
}