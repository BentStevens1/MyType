export const init = () => {
  console.log('start executing this JavaScript');

  (function () {
    const wrapper = document.querySelector('.page-wrapper');
    const cursor = document.querySelector('.dot');

    const editCursor = function editCursor(event) {
      wrapper.style.left = event.clientX + 'px';
      wrapper.style.top = event.clientY + 'px';
      cursor.style.top = event.clientY + 'px';
      cursor.style.left = event.clientX + 'px';
    };
    window.addEventListener('mousemove', editCursor);
  })();

};
