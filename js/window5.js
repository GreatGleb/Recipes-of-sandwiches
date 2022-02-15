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

//______________________________________________________________
function blockRev6() {
  var stateB6 = modalB6.getAttribute('data-state');
  if (stateB6 == 'open') {	
	  document.getElementById("cover").style.display = "none";
      modalB6.setAttribute('data-state', 'closed');
  } else {
	  document.getElementById("cover").style.display = "block";
      modalB6.setAttribute('data-state', 'open');
  }
}

// Element Variables
var modalB6 = document.querySelector('.modalBlock6');
var modalwindowB6 = document.querySelector('.modal__block6');
var togglesB6 = document.getElementsByClassName('togglesV6');

// Assign event handlers to every element with the 'data-toggle' attribute
for (var i = 0; i < togglesB6.length; i++) {
  togglesB6[i].addEventListener('click', function() {
    blockRev6();
  });
}

// Prevent a click on the modal window itself from closing it
modalwindowB6.addEventListener('click', function() {
  event.stopPropagation();
});