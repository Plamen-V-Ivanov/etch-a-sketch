// Adding grid style to created DOM element and attaching it to the body //
function createStyledGridContainer(size = 16) {
    const container = document.createElement('div');
    container.className = 'grid-container';
    container.style.cssText = `width: 800px; \
margin: 25px auto; \
display: grid; \
grid-template-columns: ${generateGridProperty(size)}; \
border: 1px solid rgba(0, 0, 0, 0.8);`;
    document.body.appendChild(container);
    return container;
}

// Creating styled grid items and attaching them to DOM element //
function createAndAttachStyledGridItems(element, size = 16) {
    for (let i = 1; i <= size * size; i++) {
        let item = document.createElement('div');
        item.className = 'grid-item';
        item.style.cssText = "background-color: #04345c; \
        border: 1px solid rgba(0, 0, 0, 0.8); \
        aspect-ratio: 1;"
        item.addEventListener('mouseover', changeColor);
        element.appendChild(item);
    }
}

// Creating and attaching styled button with event listener to body //
function createStyledButton(container) {
    const btnDiv = document.createElement('div');
    const button = document.createElement('button');
    btnDiv.className = 'button';
    btnDiv.style.cssText = "width: 150px; margin: 50px auto";
    document.body.appendChild(btnDiv);

    button.textContent = 'Change Grid';
    button.style.cssText = "padding: 10px; \
background: #04345c; \
text-align: center; \
font-size: 20px; \
border-radius: 5px; \
color: whitesmoke; \
font-weight: bolder; \
border: 1px solid black;"
    button.addEventListener('click', changeDashboard.bind(null, container, btnDiv, button));
    btnDiv.appendChild(button);
    return [btnDiv, button];

};

// Generate the syntax property for style based on desired size //
function generateGridProperty(size) {
    let property = '';
    for (let i = 1; i <= size; i++) {
        property += "auto ";
    }
    return property.trim();
}

function changeColor(e) {
    e.target.style.background = 'tan';
}

function changeDashboard(container, btnDiv, button) {
    let size = Number(prompt('Pick dashboard size! A number up to 100.'));
    if (isNaN(size) || size > 100 || size == '') {
        alert('Please insert correct data!')
        return;
    }

    removeChildElements(container);
    btnDiv.removeChild(button);
    document.body.removeChild(container);
    document.body.removeChild(btnDiv);

    container = createStyledGridContainer(size);
    createAndAttachStyledGridItems(container, size);
    [btnDiv, button] = createStyledButton(container);

}

function removeChildElements(element) {
    let lastGridItem = element.lastChild;
    while (lastGridItem) {
        element.removeChild(lastGridItem);
        lastGridItem = element.lastChild;
    }
}


const container = createStyledGridContainer();
createAndAttachStyledGridItems(container);
const [btnDiv, button] = createStyledButton(container);
