var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = 'Blanco';
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = 'BMW Generico';
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche("Renault Clío");
var coche_2 = new Coche();
var coche_3 = new Coche();
//coche.setColor('Rojo');
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log('El modelo del coche 1 es: ' + coche.getModelo());
console.log('El color del coche 1 es: ' + coche.getColor());
console.log('La velocidad del coche 1 es: ' + coche.getVelocidad());
coche.frenar();
console.log('La velocidad después de frenar del coche 1 es: ' + coche.getVelocidad());
/*
coche_2.setColor('Azul');
coche_3.setColor('Verde');
console.log('El color del coche 2 es: ' + coche_2.getColor());
console.log('El color del coche 3 es: ' + coche_3.getColor());
*/
