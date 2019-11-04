// add functions on load
function setup(){
    createHeader();
    curtainListener();
}

// curtain menu on the right, listener
function curtainListener() {
    const iconMenu = document.querySelector('.menu_toggler');
    const menu = document.querySelector('.menu');

    iconMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    })
}

// clone header and footer
function createHeader() {
    var header = document.createElement("div");
    var menuToggler = document.createElement("div");
    var span = document.createElement("span");
    var main = document.createElement("div");
    var a = document.createElement("a");
    var img = document.createElement("img");

    var nav2 = document.createElement("nav");
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var a1 = document.createElement("a");
    var a2 = document.createElement("a");
    var a3 = document.createElement("a");

    a1.setAttribute("href", "visninger.html");
    a1.innerHTML = "VISNINGER";

    a2.setAttribute("href", "filmquiz.html");
    a2.innerHTML = "FILMQUIZ";

    a3.setAttribute("href", "medlemskap.html");
    a3.innerHTML = "MEDLEMSKAP";

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    nav2.appendChild(ul);

    header.setAttribute("class", "header");
    menuToggler.setAttribute("class", "menu_toggler");
    main.setAttribute("class", "main");

    a.setAttribute("id", "logo");
    a.setAttribute("href", "index.html");
    img.setAttribute("src", "resources/logo.png");
    img.setAttribute("alt", "logo not loaded");

    a.appendChild(img);

    main.appendChild(a);

    menuToggler.appendChild(span);

    header.appendChild(menuToggler);
    header.appendChild(main);
    header.appendChild(nav2);



    var menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    var alist = [];
    var a1 = document.createElement("a");
    var a2 = document.createElement("a");
    var a3 = document.createElement("a");
    var a4 = document.createElement("a");
    var a5 = document.createElement("a");
    var a6 = document.createElement("a");

    a1.setAttribute("href", "visninger.html");
    a1.innerHTML = "VISNINGER";
    a1.setAttribute("class", "mobile");
    alist.push(a1);

    a2.setAttribute("href", "filmquiz.html");
    a2.innerHTML = "FILMQUIZ";
    a2.setAttribute("class", "mobile");
    alist.push(a2);

    a3.setAttribute("href", "medlemskap.html");
    a3.innerHTML = "MEDLEMSKAP";
    a3.setAttribute("class", "mobile");
    alist.push(a3);

    a4.setAttribute("href", "#");
    a4.innerHTML = "STYRET";
    alist.push(a4);

    a5.setAttribute("href", "#");
    a5.innerHTML = "VEDTEKTER";
    alist.push(a5);

    a6.setAttribute("href", "#");
    a6.innerHTML = "FAQ";
    alist.push(a6);

    for (i = 0; i < alist.length; i++) {
        menu.appendChild(alist[i]);
    }

    document.body.insertAdjacentElement('afterbegin', menu);
    document.body.insertBefore(header, menu);

}

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
