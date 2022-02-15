// Toggle the visibility of the modal window
function toggleModal() {
  var state = modal.getAttribute('data-state');
  if (state == 'open') {	
	  document.getElementById("cover").style.display = "none";
      modal.setAttribute('data-state', 'closed');
  } else {
	  document.getElementById("cover").style.display = "block";
      modal.setAttribute('data-state', 'open');
  }
}

// Element Variables
var modal = document.querySelector('.modal');
var modalwindow = document.querySelector('.modal__window');
var toggles = document.getElementsByClassName('togglesM');

// Assign event handlers to every element with the 'data-toggle' attribute
for (var i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', function() {
    toggleModal();
  });
}

// Prevent a click on the modal window itself from closing it
modalwindow.addEventListener('click', function() {
  event.stopPropagation();
});

// ______________________________________________________________
function blockRev() {
  var stateB = modalB.getAttribute('data-state');
  if (stateB == 'open') {	
	  document.getElementById("cover").style.display = "none";
      modalB.setAttribute('data-state', 'closed');
  } else {
	  document.getElementById("cover").style.display = "block";
      modalB.setAttribute('data-state', 'open');
  }
}

// Element Variables
var modalB = document.querySelector('.modalBlock');
var modalwindowB = document.querySelector('.modal__block');
var togglesB = document.getElementsByClassName('togglesV');

// Assign event handlers to every element with the 'data-toggle' attribute
for (var i = 0; i < togglesB.length; i++) {
  togglesB[i].addEventListener('click', function() {
    blockRev();
  });
}

// Prevent a click on the modal window itself from closing it
modalwindowB.addEventListener('click', function() {
  event.stopPropagation();
});

//______________________________________________________________
function blockRev3() {
  var stateB3 = modalB3.getAttribute('data-state');
  if (stateB3 == 'open') {	
	  document.getElementById("cover").style.display = "none";
      modalB3.setAttribute('data-state', 'closed');
  } else {
	  document.getElementById("cover").style.display = "block";
      modalB3.setAttribute('data-state', 'open');
  }
}

// Element Variables
var modalB3 = document.querySelector('.modalBlock3');
var modalwindowB3 = document.querySelector('.modal__block3');
var togglesB3 = document.getElementsByClassName('togglesV3');

// Assign event handlers to every element with the 'data-toggle' attribute
for (var i = 0; i < togglesB3.length; i++) {
  togglesB3[i].addEventListener('click', function() {
    blockRev3();
  });
}

// Prevent a click on the modal window itself from closing it
modalwindowB3.addEventListener('click', function() {
  event.stopPropagation();
});

//______________________________________________________________
function blockRev5() {
  var stateB5 = modalB5.getAttribute('data-state');
  if (stateB5 == 'open') {	
	  document.getElementById("cover").style.display = "none";
      modalB5.setAttribute('data-state', 'closed');
  } else {
	  document.getElementById("cover").style.display = "block";
      modalB5.setAttribute('data-state', 'open');
  }
}

// Element Variables
var modalB5 = document.querySelector('.modalBlock5');
var modalwindowB5 = document.querySelector('.modal__block5');
var togglesB5 = document.getElementsByClassName('togglesV5');

// Assign event handlers to every element with the 'data-toggle' attribute
for (var i = 0; i < togglesB5.length; i++) {
  togglesB5[i].addEventListener('click', function() {
    blockRev5();
  });
}

// Prevent a click on the modal window itself from closing it
modalwindowB5.addEventListener('click', function() {
  event.stopPropagation();
});
