function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let costas1, costas2;
let quieto, farra1, farra2;

function preload() {
  // Carregando as imagens do prof
  costas1 = loadImage("costas1.jpg");
  costas2 = loadImage("costas2.jpg");

  // Carregando as imagens dos estudantes
  quieto = loadImage("quieto.jpg");
  farra1 = loadImage("farra1.jpg");
  farra2 = loadImage("farra2.jpg");
}

function setup() {
  createCanvas(1024, 576);
}

function draw() {
  image(costas1, 0, 0);

  let tempo = millis() % 1000;
  if (tempo > 500) {
    image(costas2, 0, 0);
  } else {
    image(costas1, 0, 0);
  }

  if (mouseIsPressed || touches.length > 0 || keyIsPressed) {
    image(farra1, 50, 420, 100, 160, 180, 100, 450, 720);
    image(farra1, 150, 420, 100, 160, 180, 100, 450, 720);
    image(farra1, 250, 420, 100, 160, 180, 100, 450, 720);
  } else {
    // Adicionando três estudantes lado a lado
    image(quieto, 50, 420, 100, 160, 180, 100, 450, 720);
    image(quieto, 150, 420, 100, 160, 180, 100, 450, 720);
    image(quieto, 250, 420, 100, 160, 180, 100, 450, 720);
  }
}