let statisticsController = (function() {

	let ingredientsData = {
		currentPrice: 10,
		ingredientsAmount: {
			saladAmount: 1,
			baconAmount: 1,
			cheeseAmount: 1,
			meatAmount: 1
		},
		ingredientsPrice: {
			saladPrice: 0.20,
			baconPrice: 2,
			cheesePrice: 1,
			meatPrice: 1.50
		},
		ingredientsIds: {
			saladElementID: 0,
			saladIds: []
		}
	}

	const getIngredients = () => {
		return ingredientsData;
	}

	const addSalad = () => {
		let amountSalad = ingredientsData.ingredientsAmount.saladAmount;

		if (amountSalad <= 3) {
				amountSalad++;
				ingredientsData.currentPrice += ingredientsData.ingredientsPrice.saladPrice;
				ingredientsData.currentPrice = (Math.round(ingredientsData.currentPrice*100)/100); 
				controllerUI.addSalad();
		} else {
			alert('You can order max 3 bonus ingredients of the same ingredient')
		}

		ingredientsData.ingredientsAmount.saladAmount = amountSalad;

	}

	const minusSalad = () => {
		let amountSalad = ingredientsData.ingredientsAmount.saladAmount;

		if (amountSalad > 1) {
			amountSalad--;
			ingredientsData.currentPrice -= ingredientsData.ingredientsPrice.saladPrice;
			ingredientsData.currentPrice = (Math.round(ingredientsData.currentPrice*100)/100);
			controllerUI.minusSalad();
		}

		ingredientsData.ingredientsAmount.saladAmount = amountSalad;
	}

	return {
		getIngredients: getIngredients,
		addSalad: addSalad,
		minusSalad: minusSalad
	}

})();

let controllerUI = (function() {

	ingredientsData = statisticsController.getIngredients();

	let stringsDOM = {
		currentPrice: '.price__current-price',
		burgerMiddle: '.burger__middle',
		saladAmount: '.salad-amount',
		baconAmount: '.bacon-amount',
		cheeseAmount: '.cheese-amount',
		meatAmount: '.meat-amount',
		saladMore: '.salad-more',
		baconMore: '.bacon-more',
		cheeseMore: '.cheese-more',
		meatMore: '.meat-more',
		saladLess: '.salad-less',
		baconLess: '.bacon-less',
		cheeseLess: 'cheese-less',
		meatLess: '.meat-less'
	}

	const getStringsDOM = () => {
		return stringsDOM;
	}

	const addSalad = () => {
		let ingredientsData, burgerMiddle, ingredient;

		burgerMiddle = document.querySelector(stringsDOM.burgerMiddle);
		ingredient = document.createElement('div');

		ingredient.setAttribute('class', 'middle__salad middle__ingredient');
		ingredient.setAttribute('id', 'salad');
		burgerMiddle.appendChild(ingredient);
	}

	const minusSalad = () => {

		let ingredientsData, burgerMiddle, ingredient;

		burgerMiddle = document.querySelector(stringsDOM.burgerMiddle);
		ingredient = document.getElementById('salad');
		
		burgerMiddle.removeChild(ingredient);
	}

	const showSaladAmount = () => {
		document.querySelector(stringsDOM.saladAmount).innerHTML = `${ingredientsData.ingredientsAmount.saladAmount}`;
	}

	const showCurrentPrice = () => {
		document.querySelector(stringsDOM.currentPrice).innerHTML = `${ingredientsData.currentPrice} PLN`;
	}

	return {
		getStringsDOM: getStringsDOM,
		addSalad: addSalad,
		minusSalad: minusSalad,
		showSaladAmount: showSaladAmount,
		showCurrentPrice: showCurrentPrice
	}

})();

let globalController = (function() {

	let stringsDOM = controllerUI.getStringsDOM();

	const increaseSalad = () => {
		statisticsController.addSalad();
		controllerUI.showCurrentPrice();
		controllerUI.showSaladAmount();
	}

	const decreaseSalad = () => {
		statisticsController.minusSalad();
		controllerUI.showCurrentPrice();
		controllerUI.showSaladAmount();
	}

	document.querySelector(stringsDOM.saladMore).addEventListener('click', increaseSalad);
	document.querySelector(stringsDOM.saladLess).addEventListener('click', decreaseSalad);

})();