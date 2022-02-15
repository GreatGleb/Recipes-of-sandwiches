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
function blockRev4() {
  var stateB4 = modalB4.getAttribute('data-state');
  if (stateB4 == 'open') {	
	  document.getElementById("cover").style.display = "none";
      modalB4.setAttribute('data-state', 'closed');
  } else {
	  document.getElementById("cover").style.display = "block";
      modalB4.setAttribute('data-state', 'open');
  }
}

// Element Variables
var modalB4 = document.querySelector('.modalBlock4');
var modalwindowB4 = document.querySelector('.modal__block4');
var togglesB4 = document.getElementsByClassName('togglesV4');

// Assign event handlers to every element with the 'data-toggle' attribute
for (var i = 0; i < togglesB4.length; i++) {
  togglesB4[i].addEventListener('click', function() {
    blockRev4();
  });
}

// Prevent a click on the modal window itself from closing it
modalwindowB4.addEventListener('click', function() {
  event.stopPropagation();
});