var typed = new Typed(".typing",{
    strings:["Frontend Developer","Backend Developer","Full Stack Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav li a");

window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSectionId) {
            link.classList.add("active");
        }
    });
});
