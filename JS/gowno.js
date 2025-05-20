let bottomImg, topImg;
let btn;

function preload() {
  bottomImg = loadImage('../data/multipla.png');
  topImg = loadImage('../data/svg/piekne.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);
  
  // Wyświetlenie obrazka na środku ekranu
  topImg.resize(windowWidth / 3.5, windowHeight / 3.5);
  image(topImg, width / 2, height / 2);
  
  // Tworzenie przycisku tylko raz, w stałym miejscu
  btn = createButton('Dalej');
  btn.position(width / 2 - 30, height / 2 + 100); // Stała pozycja względem obrazka
  btn.size(80, 40);
  btn.style('background-color', 'red');
  btn.style('color', 'white');
  btn.style('border', 'none');
  btn.style('border-radius', '10px');
  btn.style('font-size', '16px');
  btn.style('cursor', 'pointer');

  // Ustawienie przycisku nad canvas
  btn.style('position', 'absolute');
  btn.style('z-index', '10');

  // Przekierowanie po kliknięciu
  btn.mousePressed(() => {
    window.location.href = '../brzydkie2.html';
  });
}

function mouseDragged() {
  let size = 100;
  copy(bottomImg, mouseX, mouseY, size, size, mouseX, mouseY, size, size);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Przycisk musi być ponownie ustawiony po zmianie rozmiaru okna
  btn.position(width / 2 - 30, height / 2 + 100);
}





