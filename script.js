// ===============================
// FAQ ACCORDION
// ===============================

const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(faq => {
    faq.querySelector('.q').addEventListener('click', () => {

        faqs.forEach(item => {
            if(item !== faq){
                item.classList.remove('active');
            }
        });

        faq.classList.toggle('active');
    });
});


// ===============================
// NAVBAR BLUR ON SCROLL
// ===============================

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 80){

        nav.style.background =
        "rgba(0,0,0,0.8)";

        nav.style.backdropFilter =
        "blur(15px)";

        nav.style.boxShadow =
        "0 5px 25px rgba(0,0,0,0.4)";
    }
    else{

        nav.style.background =
        "transparent";

        nav.style.backdropFilter =
        "none";

        nav.style.boxShadow =
        "none";
    }
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }
    });

},{
    threshold:0.15
});

const animatedItems =
document.querySelectorAll(
'.cinema,.reason,.trending,.footer1,.footer-ready,.questions'
);

animatedItems.forEach(item=>{

    item.classList.add("hidden");

    observer.observe(item);
});


// ===============================
// MOVIE CARD 3D EFFECT
// ===============================

document.querySelectorAll(".cinema")
.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width)-0.5)*18;

        const rotateX =
        ((y / rect.height)-0.5)*-18;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)`;
    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });
});


// ===============================
// HERO TEXT TYPING EFFECT
// ===============================

const heroHeading =
document.querySelector(".movies h1");

if(heroHeading){

    const originalText =
    heroHeading.innerText;

    heroHeading.innerText = "";

    let index = 0;

    function typeText(){

        if(index < originalText.length){

            heroHeading.innerText +=
            originalText.charAt(index);

            index++;

            setTimeout(typeText,40);
        }
    }

    setTimeout(typeText,500);
}


// ===============================
// CUSTOM CURSOR GLOW
// ===============================

const glow =
document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left =
    e.clientX + "px";

    glow.style.top =
    e.clientY + "px";
});


// ===============================
// MOVIE CARD GLOW EFFECT
// ===============================

document.querySelectorAll(".cinema")
.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow =
        "0 0 35px rgba(229,9,20,.8)";
    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow = "none";
    });
});


// ===============================
// FLOATING PARTICLES
// ===============================

for(let i=0;i<30;i++){

    const particle =
    document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
    Math.random()*100 + "vw";

    particle.style.animationDuration =
    (5 + Math.random()*10) + "s";

    particle.style.opacity =
    Math.random();

    document.body.appendChild(particle);
}


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll("button")
.forEach(button=>{

    button.addEventListener("click",(e)=>{

        const ripple =
        document.createElement("span");

        const rect =
        button.getBoundingClientRect();

        const size =
        Math.max(rect.width,rect.height);

        ripple.style.width =
        ripple.style.height =
        size + "px";

        ripple.style.left =
        e.clientX - rect.left - size/2 + "px";

        ripple.style.top =
        e.clientY - rect.top - size/2 + "px";

        ripple.classList.add("ripple");

        button.appendChild(ripple);

        setTimeout(()=>{
            ripple.remove();
        },600);
    });
});


// ===============================
// PRELOADER
// ===============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");
});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
"%c🎬 UI FOR MOVIES",
"color:red;font-size:25px;font-weight:bold;"
);

console.log(
"%cPremium Version Loaded Successfully",
"color:white;background:red;padding:8px;"
);
