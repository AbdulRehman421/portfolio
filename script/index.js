window.onbeforeunload = function () {
    console.log('Refreshing');
    window.scrollTo(0, 0);
    document.querySelector('.container').style.display = "none";
}
// Loader Animation


// Name Animation 

let name_h1 = document.querySelector('.animation')
let name = name_h1.textContent
let split_name = name.split('')
name_h1.innerHTML = ''
name.innerHTML = ''
for (let i = 0; i < split_name.length; i++) {
    name_h1.innerHTML += '<span class= "animation_span">' + split_name[i] + '</span>'
}
let char = 0;

// setTimeout(() => {
let timer = setInterval(() => {
    let span = document.querySelectorAll('.animation_span')[char];
    span.classList.add('fade_span');
    char++;
    if (char === split_name.length) {
        clearInterval(timer)
        timer = null;
    }
}, 50)



// Hamberger
let show_ham = document.querySelector("#show_ham");
let close_ham = document.querySelector("#close_ham");
let header__hamberg = document.querySelector(".header__name_nav");
let banner_name = document.querySelector(".banner__name");
let banner_link = document.querySelector(".banner__social_handles");

show_ham.addEventListener("click", (e) => {
    show_ham.style.display = "none";
    close_ham.style.display = "block";
    close_ham.style.position = "absolute";
    header__hamberg.style.display = "flex";
    header__hamberg.classList.add("sliding");
    header__hamberg.classList.remove("backSlide");
    banner_name.style.display = "none";
    banner_link.style.display = "none";
});

close_ham.addEventListener("click", (e) => {
    close_ham.style.display = "none";
    show_ham.style.display = "block";
    banner_name.style.display = "block";
    banner_link.style.display = "block";
    header__hamberg.classList.add("backSlide");
    setTimeout(() => {
        header__hamberg.style.display = "none";

        console.log("hi");
    }, 100);
});

// Skill Animation
let bookmark = document.querySelector(".bookmark");
bookmark.addEventListener("click", (e) => {
    bookmark.style.display = "none";
    setTimeout(() => {
        bookmark.style.display = "flex";
    }, 3000);
});
let skill = document.querySelectorAll(".skill");

let skill1 = document.querySelector("#skill_1");
let skill_after = window.getComputedStyle(skill1, "::after");
let skill2 = document.querySelector("#skill_2");
let skil2_after = window.getComputedStyle(skill2, "::after");
let skill3 = document.querySelector("#skill_3");
let skil3_after = window.getComputedStyle(skill3, "::after");
let skill4 = document.querySelector("#skill_4");
let skil4_after = window.getComputedStyle(skill4, "::after");
window.onscroll = (event) => {
    let scroll = window.pageYOffset;
    if (scroll > 550) {
        // console.log(scroll)
        skill.forEach((elem) => {
            // console.log(e)
            elem.style.visibility = "visible";
            elem.classList.add("skill_number");
            // elem.setAttribute('id', 'skill_slide');
        });
        skill1.style.setProperty("--afterdisplay", "block");
        skill2.style.setProperty("--afterdisplay", "block");
        skill3.style.setProperty("--afterdisplay", "block");
        skill4.style.setProperty("--afterdisplay", "block");
        bookmark.style.setProperty("--afterdisplay", "flex");
        clearInterval()
    }
    if (scroll < 500) {
        bookmark.style.setProperty("--afterdisplay", "none");
        setTimeout(() => {
            let counts1 = setInterval(updateHtml, 35);
            let upto1 = 0;
            function updateHtml() {

                skill1.innerHTML = `${++upto1}%`;
                if (upto1 === 95) {
                    clearInterval(counts1);
                    counts1 = null;
                }
            }
            let counts2 = setInterval(updateCss, 35);
            let upto2 = 0;
            function updateCss() {

                skill2.innerHTML = `${++upto2}%`;
                if (upto2 === 90) {
                    clearInterval(counts2);
                }
            }
            let counts3 = setInterval(updateJs, 35);
            let upto3 = 0;
            function updateJs() {

                skill3.innerHTML = `${++upto3}%`;
                if (upto3 === 85) {
                    clearInterval(counts3);
                }
            }
            let counts4 = setInterval(updateReact, 35);
            let upto4 = 0;
            function updateReact() {

                skill4.innerHTML = `${++upto4}%`;
                if (upto2 === 80) {
                    clearInterval(counts4);
                }
            }
        }, 500)
    }





    //     skill.forEach((elem) => {
    //         // console.log(e)
    //         elem.style.visibility = "hidden";
    //         // elem.classList.add("skill_number");
    //         // elem.setAttribute('id', 'skill_slide');
    //     });
    // }
};
