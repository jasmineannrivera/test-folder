
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');

// drawing image of course!
function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let  img = $('#kitten')[0];
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

onload = function() {
    drawImage();
    drawText();

};


// styling for text
    ctx.lineWidth  = 5;
    ctx.font = '20pt sans-serif';
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.lineJoin = 'round';


// variables needed for text
    let textBox = $('#custom-text')[0];
    console.log(textBox);
    let text = textBox.value;
    console.log(text);

    //When user inputs new text, draw it on canvas. **still need to figure out how to get rid of old text
    textBox.oninput = function(ev) {
        removeText();
        text = this.value;
        console.log(text);
        drawText();
    };


    // Draw the text
    function drawText() {

        text = text.toUpperCase();
        let x = canvas.width/2;
        let y = canvas.height - canvas.height/4.5;
        ctx.strokeText(text, x, y);
        ctx.fillText(text, x, y);
    }

    function removeText() {
        text = "";
    }




