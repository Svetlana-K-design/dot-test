var routeTemp = document.querySelector('.route__block-temperature');
var routeCheck = document.querySelector('.route__input-checkbox');

routeTemp.classList.remove('route__block-temperature--nojs');

routeCheck.addEventListener('click', function() {
  if (routeTemp.classList.contains('route__block-temperature--closed')) {
    routeTemp.classList.remove('route__block-temperature--closed');
    routeTemp.classList.add('route__block-temperature--opened');
  } else {
    routeTemp.classList.add('route__block-temperature--closed');
    routeTemp.classList.remove('route__block-temperature--opened');
  }
});

var routeInput = document.querySelector('.route__input--carrying');
var routeSelect = document.querySelector('.route__carryind-select');
var routeDisabled = document.querySelector('.route__select-label--disabled');

routeTemp.classList.remove('route__carryind-select--nojs');

routeInput.addEventListener('click', function() {
  if (routeSelect.classList.contains('route__carryind-select--closed')) {
    routeSelect.classList.remove('route__carryind-select--closed');
    routeSelect.classList.add('route__carryind-select--opened');
  } else {
    routeSelect.classList.add('route__carryind-select--closed');
    routeSelect.classList.remove('route__carryind-select--opened');
  }
});

routeDisabled.addEventListener('click', function() {
  if (routeSelect.classList.contains('route__carryind-select--opened')) {
    routeSelect.classList.remove('route__carryind-select--opened');
    routeSelect.classList.add('route__carryind-select--closed');
  }
});
