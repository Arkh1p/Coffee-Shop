$(document).ready(function () {
  $('.numb').number_plugin({
    style: 'line', 
  });
});

document.querySelector('.cooking-method-btn').addEventListener('click',function(){
  this.classList.toggle("activated");
});