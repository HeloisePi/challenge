import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function passhover(element, msg:string){
    var elementactives = document.querySelectorAll('.active');
    elementactives.forEach(elementactive => {
      elementactive.classList.remove('active');
    });
    const id = element.id
    var p = document.querySelector(`.${id}`)
    p.classList.toggle('active'); 
  }

export function animateNav() {
    gsap.to("#home", {
        scrollTrigger: {
          trigger: "#home",
          start: "top 7.6%",
          end: "bottom top",
          onEnter: (elmt) => passhover(elmt.trigger, 'enter'),
          onEnterBack: (elmt) => passhover(elmt.trigger, 'enterBack'),
          
          once: false
          },
        });
      gsap.to("#about", {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "bottom top",
          onEnter: (elmt) => passhover(elmt.trigger, 'enter'),
          onEnterBack: (elmt) => passhover(elmt.trigger, 'enterback'),
          
          once: false
          },
        });
        gsap.to("#portfolio", {
        scrollTrigger: {
          trigger: "#portfolio",
          start: "top center",
          end: "bottom top",
          onEnter: (elmt) => passhover(elmt.trigger, 'enter'),
          onEnterBack: (elmt) => passhover(elmt.trigger, 'enterback'),
          
          once: false
          },
        });
        gsap.to("#skills", {
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
          end: "bottom top",
          onEnter: (elmt) => passhover(elmt.trigger, 'enter'),
          onEnterBack: (elmt) => passhover(elmt.trigger, 'enterback'),
          
          once: false
          },
        });
        gsap.to("#experience", {
        scrollTrigger: {
          trigger: "#experience",
          start: "top center",
          end: "bottom top",
          onEnter: (elmt) => passhover(elmt.trigger, 'enter'),
          onEnterBack: (elmt) => passhover(elmt.trigger, 'enterback'),
          
          once: false
          },
        });
        gsap.to("#blog", {
        scrollTrigger: {
          trigger: "#blog",
          start: "top center",
          end: "bottom top",
          onEnter: (elmt) => passhover(elmt.trigger, 'enter'),
          onEnterBack: (elmt) => passhover(elmt.trigger, 'enterback'),
          
          once: false
          },
        });
        gsap.to("#testimonial", {
        scrollTrigger: {
          trigger: "#testimonial",
          start: "top center",
          end: "bottom top",
          onEnter: (elmt) => passhover(elmt.trigger, 'enter'),
          onEnterBack: (elmt) => passhover(elmt.trigger, 'enterback'),
          
          once: false
          },
        });
        gsap.to("#contact", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 50%",
          end: "bottom top",
          onEnter: (elmt) => passhover(elmt.trigger, 'enter'),
          onEnterBack: (elmt) => passhover(elmt.trigger, 'enterback'),
          
          once: false
          },
        });
}