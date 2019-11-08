// add functions on load
function setup() {
    createHeader();
    easyLoadAll();
    createFooter();
    curtainListener();
    activeListener();

}

// curtain menu on the right, listener
function curtainListener() {
    iconMenu = document.querySelector('.menu_toggler');
    menu = document.querySelector('.menu');

    iconMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    })
}

//active header-element
function activeListener() {
    var navCont = document.getElementById("navCont");
    var navElem = navCont.querySelectorAll(".navElem");
    console.log(navElem);

    for (var i = 0; i < navElem.length; i++) {
        console.log(navElem[i]);
        navElem[i].addEventListener('click', function () {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}

//easy load for cards in visninger and filmquiz.
function easyLoadAll() {
    cards = document.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        easyLoad(document.getElementsByClassName("card")[i]);
    }
}

function easyLoad(elem) {
    var op = 0.1;
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        elem.style.opacity = op;
        elem.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.05;
    }, 10);
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

    ul.setAttribute("id", "navCont");

    a1.setAttribute("href", "visninger.html");
    a1.innerHTML = "VISNINGER";

    a2.setAttribute("href", "filmquiz.html");
    a2.innerHTML = "FILMQUIZ";

    a3.setAttribute("href", "medlemskap.html");
    a3.innerHTML = "MEDLEMSKAP";

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);

    a1.setAttribute("class", "navElem");
    a2.setAttribute("class", "navElem");
    a3.setAttribute("class", "navElem");

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
    var a7 = document.createElement("a");

    a1.setAttribute("href", "visninger.html");
    a1.innerHTML = "VISNINGER";
    a1.setAttribute("id", "a1");
    alist.push(a1);

    a2.setAttribute("href", "filmquiz.html");
    a2.innerHTML = "FILMQUIZ";
    a2.setAttribute("id", "a2");
    alist.push(a2);

    a3.setAttribute("href", "medlemskap.html");
    a3.innerHTML = "MEDLEMSKAP";
    a3.setAttribute("id", "a3");
    alist.push(a3);

    a4.setAttribute("href", "styret.html");
    a4.innerHTML = "STYRET";
    alist.push(a4);

    a5.setAttribute("href", "vedtekter.html");
    a5.innerHTML = "VEDTEKTER";
    alist.push(a5);

    a6.setAttribute("href", "faq.html");
    a6.innerHTML = "FAQ";
    alist.push(a6);

    a7.setAttribute("href", "om.html");
    a7.innerHTML = "OM";
    alist.push(a7);

    for (i = 0; i < alist.length; i++) {
        menu.appendChild(alist[i]);
    }

    document.body.insertAdjacentElement('afterbegin', menu);
    document.body.insertBefore(header, menu);

}

function createFooter() {
    var footer = document.createElement("div");
    var soMe = document.createElement("div");
    var kont = document.createElement("div");
    var alist = [];

    footer.setAttribute("class", "footer");
    soMe.setAttribute("class", "soMe");
    kont.setAttribute("class", "kont")

    var a1 = document.createElement("a");
    a1.setAttribute("href", "https://www.facebook.com/Trondheim.Filmklubb");
    a1.setAttribute("class", "fa fa-facebook");
    a1.setAttribute("target", "_blank");
    alist.push(a1);

    var a2 = document.createElement("a");
    a2.setAttribute("href", "https://twitter.com/th_filmklubb?lang=en");
    a2.setAttribute("class", "fa fa-twitter");
    a2.setAttribute("target", "_blank");
    alist.push(a2);

    var a3 = document.createElement("a");
    a3.setAttribute("href", "https://www.instagram.com/trondheimfilmklubb/?hl=en");
    a3.setAttribute("class", "fa fa-instagram");
    a3.setAttribute("target", "_blank");
    alist.push(a3);

    for (i = 0; i < alist.length; i++) {
        soMe.appendChild(alist[i]);
    }

    var ulF = document.createElement("ul");
    var el1 = document.createElement("li");
    var el2 = document.createElement("li");
    el1.innerHTML = "Kjøpmannsgata 35, 7011 Trondheim";
    el2.innerHTML = "post@trondheim-filmklubb.no";
    ulF.appendChild(el1);
    ulF.appendChild(el2);

    kont.appendChild(ulF);
    footer.appendChild(kont);
    footer.appendChild(soMe);
    document.body.insertAdjacentElement('beforeend', footer);
}

// Form to json, handle filmtip-information submission
formToJson = elements => [].reduce.call(elements, (data, element) => {

    data[element.name] = element.value;
    return data;
}, {});

const handleFormSubmit = event => {
    //prevents submitting default
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
