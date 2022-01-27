import gsap from 'gsap';

// get other plugins:
import ScrollTrigger from 'gsap/ScrollTrigger';

export const init = () => {
  console.log('start executing this JavaScript');
  changeCursor();
  animations();

  // document.addEventListener('DOMContentLoaded', function () {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
  //     hide(elem); // assure that the element is hidden when scrolled into view
  //     ScrollTrigger.create({
  //       trigger: elem,
  //       onEnter: function () { animateFrom(elem) },
  //       // onEnterBack: function () { animateFrom(elem, -1) },
  //       // onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
  //     });
  //   });
  // });


};


const changeCursor = () => {
  const wrapper = document.querySelector('.page-wrapper');
  const cursor = document.querySelector('.dot');

  const editCursor = function editCursor(event) {
    wrapper.style.left = event.clientX + 'px';
    wrapper.style.top = event.clientY + 'px';
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
  };
  window.addEventListener('mousemove', editCursor);
};

const animations = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    '(min-width: 1200px)': function() {
      document.addEventListener('DOMContentLoaded', function () {
        gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
          hide(elem); // assure that the element is hidden when scrolled into view
          ScrollTrigger.create({
            trigger: elem,
            onEnter: function () { animateFrom(elem);},
            // onEnterBack: function () { animateFrom(elem, -1) },
            // onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
          });
        });
      });

      const animateFrom = (elem, direction) => {
        direction = direction || 1;
        let x = 0;
        let y = direction * 100;
        let letterSpacing = 0;

        if (elem.classList.contains('date')) {
          x = - 1000;
          y = 0;
          letterSpacing = 0;

          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0, letterSpacing: letterSpacing}, {
            duration: 2,
            x: 100,
            y: 0,
            autoAlpha: 1,
            letterSpacing: 100,
            ease: 'expo',
            overwrite: 'auto'
          });

        } else if (elem.classList.contains('anim-1')) {
          x = - 200;
          y = 0;
          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 3,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo',
          });

        } else if (elem.classList.contains('anim-2')) {
          x = 200;
          y = 0;
          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 3,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo',
          });
        } else if (elem.classList.contains('anim-3')) {
          x = 0;
          y = 300;
          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 4,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo',
          });
        }
      };

      function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
      }
    },

    '(min-width: 900px)': function() {
      document.addEventListener('DOMContentLoaded', function () {
        gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
          hide(elem); // assure that the element is hidden when scrolled into view
          ScrollTrigger.create({
            trigger: elem,
            onEnter: function () { animateFrom(elem);},
          });
        });
      });

      const animateFrom = (elem, direction) => {
        direction = direction || 1;
        let x = 0;
        let y = direction * 100;
        let letterSpacing = 0;

        if (elem.classList.contains('date')) {
          x = - 1000;
          y = 0;
          letterSpacing = 0;

          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0, letterSpacing: letterSpacing}, {
            duration: 2,
            x: 10,
            y: 0,
            autoAlpha: 1,
            letterSpacing: 100,
            ease: 'expo',
            overwrite: 'auto'
          });
        }
      };

      function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
      }
    },

    '(min-width: 700px)': function() {
      document.addEventListener('DOMContentLoaded', function () {
        gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
          hide(elem); // assure that the element is hidden when scrolled into view
          ScrollTrigger.create({
            trigger: elem,
            onEnter: function () { animateFrom(elem);},
          });
        });
      });

      const animateFrom = (elem, direction) => {
        direction = direction || 1;
        let x = 0;
        let y = direction * 100;
        let letterSpacing = 0;

        if (elem.classList.contains('date')) {
          x = - 500;
          y = 0;
          letterSpacing = 0;

          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0, letterSpacing: letterSpacing}, {
            duration: 2,
            x: 0,
            y: 0,
            autoAlpha: 1,
            letterSpacing: 70,
            ease: 'expo',
            overwrite: 'auto'
          });

        } else if (elem.classList.contains('anim-1')) {
          x = - 150;
          y = 0;
          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 3,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo',
          });
        } else if (elem.classList.contains('anim-2')) {
          x = 200;
          y = 0;
          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 3,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo',
          });
        } else if (elem.classList.contains('anim-3')) {
          x = 0;
          y = 300;
          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 4,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo',
          });
        }
      };

      function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
      }
    },

    '(min-width: 200px)': function() {
      document.addEventListener('DOMContentLoaded', function () {
        gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
          hide(elem); // assure that the element is hidden when scrolled into view
          ScrollTrigger.create({
            trigger: elem,
            onEnter: function () { animateFrom(elem);},
          });
        });
      });

      const animateFrom = (elem, direction) => {
        direction = direction || 1;
        let x = 0;
        let y = direction * 100;
        let letterSpacing = 0;

        if (elem.classList.contains('date')) {
          x = - 400;
          y = 0;
          letterSpacing = 0;

          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0, letterSpacing: letterSpacing}, {
            duration: 2,
            x: 0,
            y: 0,
            autoAlpha: 1,
            letterSpacing: 35,
            ease: 'expo',
            overwrite: 'auto'
          });

        } else if (elem.classList.contains('anim-1')) {
          x = - 150;
          y = 0;
          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 3,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo',
          });
        } else if (elem.classList.contains('anim-2')) {
          x = 200;
          y = 0;
          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 3,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo',
          });
        } else if (elem.classList.contains('anim-3')) {
          x = 0;
          y = 200;
          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 4,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo',
          });
        }
      };

      function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
      }
    }

  });

};
