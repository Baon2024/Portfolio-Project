
let pictureBorder = document.getElementById('pics');

function getRandomNum() {
    let randomNum = Math.floor(Math.random() * 360);
    return randomNum;
}


function changeBorder(event) {
    const picture = event.target;
    // create random new border color
    let newColor = 'rgb(' + getRandomNum() + ',' + getRandomNum() + ',' + getRandomNum() + ')';  
    picture.style.borderColor = newColor; 
    //it had to be borderColor rather than border
};

pictureBorder.onmouseover = changeBorder;
pictureBorder.onmouseout = changeBorder;

//okay, so create a function that changes the border of a picture
// and then create an event handler, so that this triggers when mouseover happens

//let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';


// need to check how to do the rgb thing
// and what the property is to access border color


/*let toggleButton = document.getElementById("toggle");
console.log(toggleButton);

let changeBackground = function(event) {
    let item = document.body;

    if (item.style.backgroundColor === 'black') {
      item.style.backgroundColor = white;
    } else if (item.style.backgroundColor === 'white') {
      item.style.backgroundColor = black;
    } 
};

toggleButton.addEventListener('click', changeBackground);*/

let toggleButton = document.getElementById("toggle");
        //console.log(toggleButton);
        
        let changeBackground = function(event) {
            let item = document.body;
        
            if (item.style.backgroundColor === 'black') {
              item.style.backgroundColor = 'white';
            } else {
              item.style.backgroundColor = 'black';
            } 
        };
        toggleButton.addEventListener('click', changeBackground);
// previous error was due to forgetting to put white and black in strings: 'white' and 'black'. And perhaps also using Else IF without a final Else.