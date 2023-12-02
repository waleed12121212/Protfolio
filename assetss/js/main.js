const navbar=document.querySelector(".navbar");
const headerContentSpan=document.querySelector(".header-conten span");
const loading=document.querySelector(".loading");
const scrollToTopBtn=document.querySelector(".scroll-to-top");
const aboutSection=document.querySelector(".about");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener('scroll',function(e) {
    if(this.window.scrollY >= headerContentSpan.offsetTop){
        navbar.style.backgroundColor="#fff";
    }
    else{
        navbar.style.backgroundColor="transparent"; 
    }
    if(window.scrollY >= aboutSection.offsetTop){
         scrollToTopBtn.classList.remove('opacity-0','invisible');
    }
    else{
        scrollToTopBtn.classList.add('opacity-0','invisible');
    }
});

window.addEventListener('load',function(e) {
    this.setTimeout(function(){
        loading.classList.add('opacity-0','invisible');// عشان اللودنج تختفي من الصفحةi invisible
        document.body.style.overflow="auto";//هيك لغيت السكرول اثناء التحميل
     },1500);
});

scrollToTopBtn.addEventListener("click",function(e) {
    window.scroll({
        top: 0,
        behavior:'smooth'//بطئ في الانتقال
    });
});

for(let i=0;i<navLinks.length;i++) {

    navLinks[i].addEventListener("click",function(e){
        e.preventDefault();


        // for(let j=0; j< navLinks.length; j++){
        //     navLinks[j].classList.remove('active');
        // }

        document.querySelector('.nav-link.active').classList.remove('active');
        navLinks[i].classList.add('active');

        let currentId = this.getAttribute('href');
        let targetSection = document.querySelector(currentId);
        window.scroll({
            top: targetSection.offsetTop,
            behavior:'smooth'
        });
    });
}