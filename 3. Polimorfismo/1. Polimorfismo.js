//! Polimorfismo dinámico:

class Shape {
    // Puedo modificar esta función a medida que la extiendo:
    calcularArea() {
        console.log('Calculando área...');
        return 0;
    }

    loguear() {
        console.log('Esta es una figura.');
    }
}

// Porque un "rectángulo" necesita alto y ancho, pero un "círculo", necesita radio.
class Rectangulo extends Shape {
    constructor(length, width) {
        super()
        this.length = length;
        this.width = width;
    }

    // Le paso por encima a "la función padre" con los valores que necesito:
    calcularArea() {
        console.log(`Área calculada: ${this.length * this.width}.`);
    }
}

// Círculo:
class Circulo extends Shape {
    constructor(radius) {
        super()
        this.radius = radius;
    }
    calcularArea() {
        console.log(`Área calculada: ${Math.PI * this.radius ** 2}.`);
    }
}

// Rectángulo:
const rec = new Rectangulo(3, 4);
console.log(rec.calcularArea(), rec.loguear());

// Círculo:
const cir = new Circulo(5);
console.log(cir.calcularArea(), cir.loguear());

//! Name: ES7+ React/Redux/React-Native snippets
//Id: dsznajder.es7-react-js-snippets
//Description: Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Custom+izable. Built-in integration with prettier.
//Version: 4.4.3
//Publisher: dsznajder
//VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets