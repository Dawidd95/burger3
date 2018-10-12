let priceListButton = document.querySelector('.navbar__price-list');
let modal = document.querySelector('.container__modal');
let close = document.querySelector('.content__close');

priceListButton.addEventListener('click', function() {
	modal.style.display = 'block';
})

close.addEventListener('click', function() {
	modal.style.display = 'none';
})