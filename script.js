// =====================================
// UtilityHub JavaScript
// =====================================

// ---------- Dark Mode ----------

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// ---------- Search ----------

const searchInput = document.getElementById("search");

const toolCards = document.querySelectorAll(".tool-card");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    toolCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ---------- Reveal Animation ----------

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.2

});

document.querySelectorAll(".card,.tool-card,.language-card,.learn-card,.timeline-item")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ---------- Navbar Scroll ----------

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(15,23,42,.95)";
        header.style.boxShadow="0 8px 25px rgba(0,0,0,.25)";

    }

    else{

        header.style.background="rgba(15,23,42,.75)";
        header.style.boxShadow="none";

    }

});

// ---------- Scroll To Top ----------

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ---------- Hero Buttons ----------

const exploreBtn=document.querySelector(".primary-btn");

exploreBtn.addEventListener("click",()=>{

    document.getElementById("tools").scrollIntoView({

        behavior:"smooth"

    });

});

const learnBtn=document.querySelector(".secondary-btn");

learnBtn.addEventListener("click",()=>{

    document.getElementById("languages").scrollIntoView({

        behavior:"smooth"

    });

});

// ---------- Hidden Animation ----------

const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;

transform:translateY(40px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.top-btn{

position:fixed;

bottom:25px;

right:25px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:#00b4ff;

color:white;

display:none;

justify-content:center;

align-items:center;

cursor:pointer;

font-size:20px;

box-shadow:0 10px 25px rgba(0,0,0,.3);

transition:.3s;

z-index:999;

}

.top-btn:hover{

transform:translateY(-5px);

}

.light-mode{

background:#f8fafc;

color:#111827;

}

.light-mode .card,
.light-mode .tool-card,
.light-mode .language-card,
.light-mode .learn-card,
.light-mode .timeline-item,
.light-mode .search-box{

background:white;

color:#111827;

}

.light-mode header{

background:rgba(255,255,255,.9);

}

.light-mode .nav-links a{

color:#111827;

}

.light-mode .hero-content p,
.light-mode .section-title p,
.light-mode .about p,
.light-mode .timeline-item p{

color:#475569;

}

`;

document.head.appendChild(style);

// ---------- Console Message ----------

console.log("%c🚀 Welcome to UtilityHub","color:#00b4ff;font-size:22px;font-weight:bold;");

console.log("Happy Coding! ❤️");