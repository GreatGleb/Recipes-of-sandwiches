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
function blockRev2() {
  var stateB2 = modalB2.getAttribute('data-state');
  if (stateB2 == 'open') {	
	  document.getElementById("cover").style.display = "none";
      modalB2.setAttribute('data-state', 'closed');
  } else {
	  document.getElementById("cover").style.display = "block";
      modalB2.setAttribute('data-state', 'open');
  }
}

// Element Variables
var modalB2 = document.querySelector('.modalBlock2');
var modalwindowB2 = document.querySelector('.modal__block2');
var togglesB2 = document.getElementsByClassName('togglesV2');

// Assign event handlers to every element with the 'data-toggle' attribute
for (var i = 0; i < togglesB2.length; i++) {
  togglesB2[i].addEventListener('click', function() {
    blockRev2();
  });
}

// Prevent a click on the modal window itself from closing it
modalwindowB2.addEventListener('click', function() {
  event.stopPropagation();
});