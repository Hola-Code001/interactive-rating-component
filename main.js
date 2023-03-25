let submitBtn = document.querySelector('#submit');
let ratingPage = document.querySelector('#rating-page');
let thanksPage = document.querySelector('#thanks-page');
let selected = document.querySelector('#rating-star')
var ratingBtn = document.querySelectorAll('.rating-btn').length;

for(var i = 0; i < ratingBtn; i++){
  document.querySelectorAll('.rating-btn')[i].addEventListener('click', function(e){
    var buttonHtml = this.innerHTML;
    selected.innerHTML = buttonHtml;
    
  })
}


submitBtn.addEventListener('click', () => {
  ratingPage.style.display = 'none';
  thanksPage.style.display = 'flex';
  
})


