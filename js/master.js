// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("c");

if (mainColors !== null) {
    
    document.documentElement.style.setProperty('--main-color', mainColors);

}

// Random Backgound Option
let backgroundOption = true;

// Variable To Contol The Background Interval
let backgroundInterval;

// Check If there's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option"); 

// Check If Random backround Local Storage Is Not Empty
    if ( backgroundLocalItem !== null) {
        if (backgroundLocalItem == 'true') {
            
            backgroundOption = true;
        }
        else {
            backgroundOption = false;
        }
       // Remove Active Class From All Spans
    document.querySelectorAll(".option-box span").forEach(element => {

        element.classList.remove("active");
    });

    if (backgroundLocalItem === 'true') {

        document.querySelector(".option-box .yes").classList.add("active");
    }
    else {

        document.querySelector(".option-box .no").classList.add("active");
    }
    }

// Toggle Spin Class On Icon
document.querySelector(".toggle-settings i").onclick = function () {
    // toggle Class Fa-spin For Rotation On Self
    this.classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

    // click On Every set Items
    li.addEventListener("click", (e) => {


        // Ste Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);
    });

});

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".option-box span");

// Loop on All Spans
randomBackEl.forEach(span => {

    // Click On Every Span
    span.addEventListener("click", (e) => {

            // Remove Active Class From All Spans
            e.target.parentElement.querySelectorAll(".active").forEach(element => {

                element.classList.remove("active");
            });

        // Add Active Class On Self 
        e.target.classList.add("active");

        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            ranndomizeImgs();
            localStorage.setItem("background_option", true);

        }

        else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        }

    });

});

// Select Landing Page
let landingPage = document.querySelector(".landing-page");

// Get Array Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

function ranndomizeImgs() {
    if ( backgroundOption === true) {

        backgroundInterval = setInterval(() => {
            // Get Random Number
             let randomNumber = Math.floor(Math.random() * imgsArray.length);
            
            // Change Background Image Url
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
            
        }, 10000);
    }
}
ranndomizeImgs();


// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;
    
    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window Scroll Top
    let windowScrollTop = this.pageYOffset; // pageYOffset / scrollY


    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });
    }
};


// Creat Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // Creat Overlay Element
        let overlay = document.createElement("div");

        // Add Class To Overlay
        overlay.className = 'popup-overlay';

        // append overlay To The Body
        document.body.appendChild(overlay);

        // Creat The Popup Box
        let popupBox = document.createElement("div");

        // Add Class To The Popup Box
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            //Creat Heading
            let imgHeading = document.createElement("h3");

            // Creat Text For Heading
            let imgText = document.createTextNode(img.alt);

            // Append The Text To Heading
            imgHeading.appendChild(imgText);

            // Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);
        }

        // Creat The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        // Add image To popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);

        // Creat The Close Span
        let Closebutton = document.createElement("span");

        // Creat The Close Button Text
        let CloseButtonText = document.createTextNode("X");

        // Append Text To Close Button
        Closebutton.appendChild(CloseButtonText);

        // Add Clase To Close Button
        Closebutton.className = 'close-button';

        // Add The Close Button To The Popup Box
        popupBox.appendChild(Closebutton);

    });

});

// Close Pupup 
document.addEventListener("click", function (e){

    if (e.target.className == 'close-button') {

        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();
    }
});


// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet => {

    bullet.addEventListener("click", (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'

        })
    });
});


// Select All Links
const allLinks = document.querySelectorAll(".links a");

allLinks.forEach(links => {

    links.addEventListener("click", (e) => {

        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'

        })
    });
});


let bulletSpan = document.querySelectorAll(".bullets-option span");

let bulletContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {
    
    bulletSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletLocalItem === 'block') {
        bulletContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {
        bulletContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }
};

bulletSpan.forEach(span => {

    span.addEventListener('click', (e) => {
        
        if (span.dataset.display === "show") {

            bulletContainer.style.display = 'block';

            localStorage.setItem("bullets-option", 'block');

        } else {

            bulletContainer.style.display = 'none';
            localStorage.setItem("bullets-option", 'none');

        }

    });

});

// Reset Button
document.querySelector(".reset-options").onclick = function () {

        //  localStorage.clear();
        
        localStorage.removeItem("color_option");
        localStorage.removeItem("background_option");
        localStorage.removeItem("bullets-option");


        // Reload window
        window.location.reload();

};


// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");


toggleBtn.onclick = function (e) {

    // Stop Propagation
    e.stopPropagation();

    // Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");
    
    // Toggle Class "open" On Links
    tLinks.classList.toggle("open");
};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {
        
        // Check If Menu Is Open
        if (tLinks.classList.contains("open")) {

            // Toggle Class "menu-active" On Button
            toggleBtn.classList.toggle("menu-active");
            
            // Toggle Class "open" On Links
            tLinks.classList.toggle("open");
        }

    }

});

// Stop Propagation On Menu
tLinks.onclick = function (e) {

    e.stopPropagation();

};