let submitBtn = document.querySelector('#submit');
let ratingPage = document.querySelector('#rating-page');
let thanksPage = document.querySelector('#thanks-page');
let selected = document.querySelector('#rating-star')
var ratingBtn = document.querySelectorAll('.rating-btn').length;

for(var i = 0; i < ratingBtn; i++){
  document.querySelectorAll('.rating-btn')[i].addEventListener('click', function(){
    var buttonHtml = this.innerHTML;
    selected.innerHTML = buttonHtml;
    submitBtn.innerHTML = 'submit';
  })
};


submitBtn.addEventListener('click', () => {
  if(selected.innerHTML == Boolean('')){
     submitBtn.innerHTML = 'ops you forget to rate';
  } else {
  ratingPage.style.display = 'none';
  thanksPage.style.display = 'flex';
  };
});


