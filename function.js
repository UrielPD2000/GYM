const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

 document.addEventListener('click',activate,false);


// const items = document.querySelectorAll('.item');
// let currentIndex = 0;

// function activate() {
//   currentIndex = (currentIndex + 1) % items.length; // Avanza al siguiente índice (circular)
//   slider.appendChild(items[currentIndex]);
// }

// setInterval(activate, 5000);