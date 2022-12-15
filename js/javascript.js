let previewContainer = document.querySelector('.product-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .products').forEach (products =>{
  products.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = products.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(closeprev =>{
  closeprev.querySelector('.fa-long-arrow-left').onclick = () => {
    closeprev.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});


const plus = document.querySelector('.plus'),
      minus = document.querySelector('.minus'),
      num = document.querySelector('.num');

      let a = 1;

      plus.addEventListener('click', () => {
        a++;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
        console.log(a);
      });

      minus.addEventListener('click', () => {
        if(a > 1){
          a--;
          a = (a < 10) ? "0" + a : a;
          num.innerText = a;
        }
      });
