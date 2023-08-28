"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
let mivariable;
function mundoFeliz(config) {
    return config;
}
let animales = ["perro", "gato", "pollo"];
let numeros = [12, 23, 23, 12];
let checks = [];
let numeros2 = [];
let tupla = [1, ["perro", "gato"], false];
tupla.push(12);
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
const estado = 2;
const objeto = {
    id: 2,
    nombre: "lagartija",
    talla: Talla.Chica,
    direccion: {
        numero: 23,
        calle: "pipila",
        pais: "Mexico"
    }
};
objeto.nombre = "coyote";
const arr = [];
const fn = (edad) => {
    if (edad > 17) {
        return 'Puedes ingresar';
    }
    else {
        return "No puedes ingresar";
    }
};
function validaEdad(edad) {
    if (edad > 17) {
        return 'Puedes ingresar';
    }
    else {
        return "No puedes ingresar";
    }
}
function ErrorUsuario() {
    throw new Error('error de usuario');
}
let puntaje = 98;
let animal = { id: 1, name: '', estado: '' };
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
const product = {
    createdAt: '',
    modifiedAt: '',
    name: ''
};
const nDeFibo = 3;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(null);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: 'Felipe',
        createdAt: new Date()
    };
}
const user = getUser(1);
const difficulty = 0;
const user2 = {
    username: "licenciado",
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1,
};
const elem = null;
const elem1 = elem;
function Aleatoria(x) {
    if (typeof x === 'number') {
        x.toString;
    }
    if (typeof x === 'string') {
        x.toUpperCase;
    }
}
function procesa(algo) {
    if (typeof algo === "number") {
        return algo.toString();
    }
    else {
        return "no hay nada";
    }
    if (algo instanceof String) {
    }
}
class Personaje {
    constructor(id, name, nivel, hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    cambiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
}
const personaje = new Personaje(1, 'Superman', 1, 100);
personaje.cambiarHP(-50);
if (personaje instanceof Personaje) {
}
class Personaje2 {
    constructor(readonlyid, name, nivel, _hp) {
        this.readonlyid = readonlyid;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    static agregarPersonaje() {
        Personaje2.equipo++;
    }
    cambiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    set hp(cantidad) {
        this._hp = this._hp + cantidad;
    }
    static getEquipo() {
        return Personaje2.equipo;
    }
}
Personaje2.equipo = 1;
const personaje1 = new Personaje2(2, 'Batman', 1, 80);
personaje1.cambiarHP(-10);
personaje1.hp = 20;
const personaje2 = new Personaje2(3, 'Flash', 1, 90);
Personaje2.agregarPersonaje();
class DatoBasicos {
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
    get fullDesc() {
        return this.name + '' + this.desc;
    }
}
class Producto extends DatoBasicos {
    constructor(stock, sku, name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDesc() {
        return 'Producto: ' + ' - ' + super.fullDesc;
    }
    guardar() {
        console.log('guardando producto');
    }
}
class Categoria extends DatoBasicos {
    constructor(name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.prductos = [];
    }
    agregarProdutco(producto) {
        this.prductos.push(producto);
    }
    get fullDesc() {
        return 'Producto: ' + super.fullDesc;
    }
    guardar() {
        console.log('guardando categoria');
    }
}
let producto1 = new Producto(100, 1, 'Iphone', 'este es un smartphone', new Date(), 1);
let categoria = new Categoria('Celulares', '', new Date(), 1);
categoria.agregarProdutco(producto1);
class Caballo {
    constructor() {
        this.name = 'Rocinante';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'hin';
    }
}
class Cerdo {
    constructor() {
        this.name = 'Dr Tocino';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'oink';
    }
}
class Perro {
    constructor() {
        this.name = 'Scooby';
    }
    caminar() {
        console.log('Perro caminando');
    }
    onomatopeya() {
        return 'wow';
    }
}
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios.a1 = 'usuario1';
diccionarioUsuarios['1a'] = 'usuario2';
function log(a, b) {
    console.log(a, b);
    return b;
}
log('dato', 42);
log('dato', 'dato genérico');
log(1, 2);
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch(`${recurso}`);
        return respuesta.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchData('/usuarios');
    });
}
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({ encender: () => { }, apagar: () => { } });
const programador1 = new Programador('hola mundo');
programador1.computador.length;
programador.computador;
function fetchProduct() {
    return {
        key: 'id de producto',
        value: { id: 'id de producto' }
    };
}
function fetchStock() {
    return {
        key: 'id de producto',
        value: 500
    };
}
class Usuario1 {
    constructor(id) {
        this.id = id;
    }
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: 'id desde usuaio', name: 'Lantern' });
//# sourceMappingURL=guia.js.map