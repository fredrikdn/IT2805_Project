// curtain menu on the right, listener
const iconMenu = document.querySelector('.menu_toggler');
const menu = document.querySelector('.menu');

iconMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
})


// form to json, handle filmtip-information submission
const formToJson = elements => [].reduce.call(elements, (data, element) => {
    
    data[element.name] = element.value;
    return data;
}, {});

const handleFormSubmit = event => { 
    event.preventDefault();
    
    const data = formToJson(form.elements);
    // this part of the handleFormSubmit should be handled with node.js to write
    // to a file on server-side, while this part only shows how the JSON-output would 
    // look like on the bottom of the page
    const dataContainer = document.getElementsByClassName('output')[0];
    dataContainer.textContent = JSON.stringify(data, null, " ");
};
    const form = document.getElementsByClassName('form')[0];
    form.addEventListener('submit', handleFormSubmit);
