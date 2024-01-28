function changeColors() {
    const body = document.body;
    const header = document.querySelector('header');
    
    const randomColor = () => Math.floor(Math.random() * 256);
    const startColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    const endColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

    // Generate random RGB values for text color, ensuring it is readable
    const textColor = `rgb(${255 - randomColor()}, ${255 - randomColor()}, ${255 - randomColor()})`;

    body.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
    body.style.color = textColor;

    header.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
    header.style.color = textColor;
}
