/* Configuración
el comando de inicialización: tsc -init
Tener en cuenta las siguientes configuraciones:
-Cambiar la ruta "rootDir": "./" cambiar a  "./src"
-Cambiar "outDir": "./dist",  
-Cambiar "noEmitOnError": false, 
-Habilitar "removeComments": true, 

Permite solo escribir en la consola: tsc y automáticamente compilar el archivo
*/

/* Depurando
Los siguientes pasos:
-Habilitar   "sourceMap": true,  
-En VS en la opción de Runa and debug
-En la opciónd de "create a launch.json file" y escoger node.js
-Agregar entre program y outfiles,  "preLaunchTask": "tsc: build - tsconfig.json ",
-Se eligen los breakpoints y se puede depurar línea a línea
*/


/*Tipos básicos
en JS:
-number
-string
-boolean
-null
-undefined
-object
-function

en TS:
-any (tratar de no usarlo)
-unknow
-never
-arrays
-tuplas
-Enums

tipos inferidos
 */

//se define le tipo de variable
let extincionDinosaurios:number = 76_000_000
let dinosaurioFavorito:string = "T-Rex"
let extintos: boolean = true


//-------ANY-------
let mivariable //tipo any

function mundoFeliz(config:any){ // si no se escribe el valor, es recomendable no dejar ímplicito un any, escribirlo como qué tipo
    return config
}
// Nota: Se recomienda hacer el cambio de   "noImplicitAny": true,   con esto evita dejar implicitos

//-------ARRAYS--------
let animales:string[] = ["perro", "gato", "pollo"] //si no se escribe, infiera que son strings
let numeros:number[] = [12,23,23,12]
let checks:boolean[] = [] //para inicializar se indica el tipo de datos
let numeros2: Array<number> = [] //es una forma alternativa
//animales.map(x => x.) // al escribir el punto, ts es capaz de reconocer los métodos asociados a un arreglo y autocompletar

//-------Tuplas---------
let tupla:[number, string[], boolean] = [1, ["perro","gato"], false]
tupla.push(12)//tener en cuenta que si se agregan elementos, ts no lo nota

//--------Enums----------
//PascalCase
enum Talla {Chica="s", Mediana="m", Grande="l", ExtraGrande="xl"}  //ts por defaulta agrega valores de 0,1,2,3,...
//en JS genera un archivo llamado IFEE, inmediated invoked function expression
const variable1 = Talla.Grande 
const enum LoadinState {Idle, Loading, Success, Error} //un caso de uso para el llamado de un api como ejemplo, para optimizar no genera código en js hasta generarlo
const estado = LoadinState.Success //aquí finalmente genera código en js

//--------Objeto--------
type Direccion = {
    numero:number,
    calle:string,
    pais:string
} 
type Persona = {
        readonly id:number, //la propiedad readonly permite no modificarlo
        nombre?:string, //el signo ? lo hará de manera opcional, deja de ser mandatoria
        talla:Talla, //hereda los valores de enums
        direccion: Direccion //hereda el tipo de dirección
    }

const objeto: Persona= { //al definir los types en persona, ya pueden usarse en otros objetos
    id:2,
    nombre:"lagartija", 
    talla: Talla.Chica,
    direccion:{
        numero:23,
        calle:"pipila",
        pais:"Mexico"
    }
}

objeto.nombre = "coyote"

const arr: Persona[] = [] //se inicializa un arreglo de tipo persona con elementos ya definidos


//-------Funciones--------
const fn:(a:number)=> string = (edad:number) =>{ //una función que no retorna nada de le llama , función de tipo void, para no dejar parámetros sin usar se activa la opción  "noUnusedParameters": true,  
    if(edad>17){
        return 'Puedes ingresar'
    }else{
       return "No puedes ingresar"
    }
}

function validaEdad (edad:number): string{ //si no se define el valor de retorno, ts lo puede inferir, paro no generar inferencias se activa la opción  "noImplicitReturns": true, 
    if(edad>17){
        return 'Puedes ingresar'
    }else{
       return "No puedes ingresar"
    }
}


//-------Never-------------
function ErrorUsuario(): never{  //es importante que no sea inferido porque void podría efectuar algún tipo de lógica
    throw new Error('error de usuario')
}


//------Union type---------
let puntaje:number | string = 98 // de esta forma puede agregar dos tipos

type Animal_  = {
    id: number,
    estado: string
}

type Usuario = {
    id:number,
    name:string
}

let animal: Animal_|Usuario = {id:1, name:'',estado:''} //puede estar todos o solo una, de las propiedades de cada type

function sumaDos(n: number | string): number{ 
    if(typeof n === 'number'){
       return n +2  //si se usa alguna propiedad de n., de acuerdo al tipo de variable del if, este va a generar el método para número o para string dependiendo
    }
    return parseInt(n) +2 
}

//-------Intersection type--------
type Audit = {
    createdAt: string,
     modifiedAt: string,
}

type Producto_ = {
    name:string,
}

const product: Audit & Producto_ = { //junto ambos tipos y tiene que contener las propiedades de ambos types
    createdAt:'',
    modifiedAt:'',
    name:''
}

//------Literal type----------
type Fibo = 0|1|2|3|5
const nDeFibo: Fibo= 3  //esto lo hace de tipo literal que solo puede estar esos valores marcados de Fibo

//------Nullable types---------
function toNumber(s:string | null | undefined){
    if(!s){                 //al preguntar por la no existencia ya se cubren los dos casosde null y undefined
        return 0
    }
    return parseInt(s) 

}

const n = toNumber(null) //se detecta a través de "strictNullChecks": true,  si se escribe un valor de null


//----------Optional Chaining----------
function getUser (id:number){
    if(id<0){
       return null
    }
    return{
        id:1,
        name:'Felipe',
        createdAt: new Date()
    }
}

const user = getUser(1)
//('usuario',user?.createdAt) //el optional chaining verifica si existe antes de continuar con la siguiente acción

//------Nullish coalesing operator-------
const difficulty: number |null = 0
const  user2 = {
    username: "licenciado",
    difficulty: difficulty ?? 1, // se utiliza cuando el valor de 0 o cuando el valor de un string vacío es un valor útil o representativo para nosotros

}

//------Type assertion----------(precaución)
const elem: any = null
const elem1 = elem as number //si no se conoce el tipo de dato puede causar problemas, sirven cuando se buscan elemento dentro del html y se sabe perfectamente el tipo
//const input = document.getElementById('username') as HTMLInputElement // aquí se conoce el tipo y se cambia el tipo
//const inputC = <HTMLInputElement> document.getElementById('username') // forma alternativa de realizarlo

//---------Type narrowing----------
function Aleatoria(x:string | number){
    //type narrowing
    if(typeof x === 'number'){ //de acuerdo al tipo, desplegará x. las opciones para cada uno
        x.toString //para números
    }
    if(typeof x === 'string'){
        x.toUpperCase //para strings
    }
}

//---------Type Unknow------------
function procesa(algo:unknown):string | undefined{ //unknow nos va a obligar a tener que manejar los posibles caminos que pueda tener nuestro parámetro
    if(typeof algo ==="number"){
        return algo.toString()
    }else {
        return "no hay nada"
    }
    if(algo instanceof String){

        //algo.haceCosas()
        //algo.haceOtraCosa()
        //algo.noHaceNada()
    }
}


//---------------------------
//----------POO--------------
//---------------------------

//----------Clases-----------
class Personaje{
    readonly id: number  //posl readonly no permite usarse en métodos (funciones)
    name:string
    nivel:number
    private _hp:number //ca con private únicamente va a poder ser accedida dentro de la clase, de esta forma no se cambia el valor inicial
    profesion?:string  //posl ? permite hacerla opcional y que no se modifique de inicio
    constructor(id:number, name:string, nivel:number, hp:number){
        this.id = id
        this.name = name
        this.nivel = nivel
        this._hp = hp //el _ indica que una propiedad es privada
    }

    subirNivel():number{
        this.nivel = this.nivel +1
        return this.nivel
    }

    cambiarHP(cantidad:number):number{
        this._hp = this._hp + cantidad
        //no pasarse del máximo
        return this._hp
    }
}

const personaje = new Personaje(1,'Superman', 1, 100)
personaje.cambiarHP(-50)
//console.log(personaje)

if(personaje instanceof Personaje){ //de esta manera verifica si personaje es instancia de la clase y se puede usar

}

//---------Control de accesso--------ca
//Propiedad private

//--------Parámetros opciones y de solo lectura-----------posl
//se indica profesion? como opcional
//private permite no realizar modificaciones

//--------Propiedades con parámetros------------pp
//una forma de simplicar es mediante el uso de parámetros
class Personaje2{
    profesion?:string  //posl ? permite hacerla opcional y que no se modifique de inicio
    private static equipo:number =1 //inicializar la propiedad con un valor, con static se indica que no pertenece a las instancias de personaje
    constructor(
        public readonlyid:number, 
        public name:string, 
        public nivel:number, 
        private _hp:number
        ){

        }
        subirNivel():number{
            this.nivel = this.nivel +1
            return this.nivel
        }

        static agregarPersonaje():void{
            Personaje2.equipo++ //pme de esta forma se accede directo a la clase y se modifica con el bloque de equipo
        }
    
        cambiarHP(cantidad:number):number{
            this._hp = this._hp + cantidad
            //no pasarse del máximo
            return this._hp
        }

        get hp():number {  //gs
            return this._hp
        }

        set hp(cantidad: number){
            this._hp = this._hp + cantidad
        }

        static getEquipo():number{
            return Personaje2.equipo
        }
    }

const personaje1 = new Personaje2(2,'Batman', 1, 80)
personaje1.cambiarHP(-10)
personaje1.hp= 20 //aquí el seter únicamente le está cambiando el valor a la propiedad _hp *tener cuidado, redomendado utilizar para evaluaciones
//console.log(personaje1.hp)

const personaje2 = new Personaje2(3, 'Flash', 1, 90)
Personaje2.agregarPersonaje()
//console.log(Personaje2.getEquipo())

//-----------Getters y Setters------gs
// mediante el nombre get se puede obtener el valor actual, en este caso de hp 
// mediante el nombre set realiza una acción sin retorno

//----------Propiedades y Métodos estáticos---------pme
//Static se indica que no pertenece a las instancias de la clase

//----------Herencia---------------h
abstract class DatoBasicos{  //cab
    constructor(
        public name:string,
        public desc: string,
        protected created_at: Date, //ppr
        protected created_by: number, //ppr
    ){

    }

    get fullYear(){
        return this.created_at.getFullYear()
    }

    get fullDesc(){   //mo
        return this.name +''+ this.desc
    }

    abstract guardar():void //cab método abstracto, obliga a las clases heredadas implementar este método
}

class Producto extends DatoBasicos{ //extendes a aplicar todas las propiedades de DatosBasicos
    constructor(
        public stock: number,
        public sku: number,
        name:string,
        desc:string,
        created_at:Date,
        created_by:number
    ){
        super(name, desc, created_at,created_by)
    }

    override get fullDesc() { //mo
        return 'Producto: '+' - ' + super.fullDesc
    }

    guardar() { //cab obligada a declararse de la clase principal
        console.log('guardando producto')
    }
}
class Categoria extends DatoBasicos{ //extendes a aplicar todas las propiedades de DatosBasicos
    public prductos: Producto[]=[]
    constructor(
        name:string,
        desc:string,
        created_at:Date,
        created_by:number
    ){
        super(name, desc, created_at,created_by)
    }

    agregarProdutco(producto: Producto){
        this.prductos.push(producto)
    }

    override get fullDesc() { //mo
        return 'Producto: ' + super.fullDesc
    }

    guardar() { //cab obligada a declararse de la clase principal
        console.log('guardando categoria')
    }
}

let producto1 = new Producto(100, 1, 'Iphone', 'este es un smartphone', new Date(),1 )
let categoria = new Categoria('Celulares', '',new Date(),1)
categoria.agregarProdutco(producto1)
//console.log(producto1)
//console.log(producto1.fullDesc,categoria)


//--------Method Override---------mo
// se habilita la opción de    "noImplicitOverride": true, 
// se utiliza para reemplazar un método de la clase principa, la función de la clase es de una forma y esta la cambia

//---------Propiedades Protegidas o protected-------ppr
// cuando quiero que las herencias puedan acceder a propiedas que hasta cierto punto quiero mantenerlas privadas fuera de la clase principal, pero no desde afuera

//---------Clases Abstractas-------------cab
// se utiliza cuando no queremos usarla para crear algo, solo para heredarle propiedades a otras

//----------Interfaces---------------
//Cuando no vamos a compartir lógica de la clase principal pero si necesitamos implementar los métodos y las propiedades se pueden utilizar las interfaces
//interfaces para las clases
interface Animal{ // es posible también type, usar type cuando no se va a indicar la forma del objeto o clase y se va a hacer con otro objeto o clase
     name:string //ya no es necesario utilizar la palabra abstract
     caminar():void
     onomatopeya():string
}

class Caballo implements Animal { //en lugar de extends se utliliza implements
    name: string = 'Rocinante'

    caminar(){
        console.log('caminando')
    }

    onomatopeya(){
        return 'hin'
    }
}

class Cerdo implements Animal {
    name: string = 'Dr Tocino'

    caminar(){
        console.log('caminando')
    }

    onomatopeya(){
        return 'oink'
    }
}

class Perro implements Animal {
    name: string = 'Scooby'
    caminar(): void {
        console.log('Perro caminando')
    }
    onomatopeya(): string {
        return 'wow'
    }

}

//---------Index Signatures----------
//Se usa para objetos con propiedades dinámicas
class DiccionarioUsuarios{
    [id:string]:string      //esto indica que se tiene un largo número de ids pero no se saben cuántos específicamente
}

let diccionarioUsuarios = new DiccionarioUsuarios()
diccionarioUsuarios.a1 = 'usuario1'
diccionarioUsuarios['1a']= 'usuario2'


//-----------------------------------
//------------Genéricos--------------
//-----------------------------------

//---------Funciones---------------
function log<T, V>(a:T, b:V):V{ //permite crear un T tipo genérico para pasarle argumentos a medida que se necesitara
    console.log(a,b)
    return b
}
log<string, number>('dato', 42) //en este caso el valor de T toma el valor de number
log<string, string>('dato', 'dato genérico') //en este caso el valor de T toma el valor de string
log(1,2)    //typescript es capaz de inferir el tipo de dato

async function fetchData<T>(recurso: string): Promise<T>{ //para hacer una llamada
    const respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}

type User ={  //para buscar datos de un usuario
    id:string,
    name:string
}
async function main(){
    const user = await fetchData<User>('/usuarios')
}

//------------Clases-------------------
type Computador = {
    encender :()=>void
    apagar :()=>void
}
class Programador<T>{
    computador:T;
    constructor(t:T){
        this.computador = t
    }
}

const programador = new Programador<Computador>({encender:()=>{}, apagar:()=>{}}) //en este caso es una clase para usar las propiedades de Programador
const programador1 = new Programador<string>('hola mundo')  //en este caso espero un string
programador1.computador.length //aquí el genérico esperaba un string y ahora le asigna los métodos para string
programador.computador

//------------Interface-------------------
//La interface describe cómo debe verse el objeto, las propiedades y tipos
interface KeyValue<T,V>{
    key: T,
    value: V
}

interface Product{
    id:string
}

function fetchProduct(): KeyValue<string, Product>{
    return{
        key: 'id de producto',
        value: {id:'id de producto'}
    }
}

function fetchStock(): KeyValue<string, number>{
    return {
        key:'id de producto',
        value: 500
    }
}

//------------Restricciones de Genéricos----------
//Constraints logra restringir el tipo de génerios que se pueden usar en la clase
/*interface Usuario1{  para interfaces
    id:string
}*/ 

class Usuario1{
    constructor(public id:string){}
}
function print<T extends Usuario1>(t:T):T{ //esto significa que tiene que tener la forma de usuario
    console.log(t)

    return t
}

//print({id:'id desde usuaio', name: 'Lantern'})


//-------------Genéricos y Herencia-----------------
class Estado<T>{
    protected data: T[] = []
    agregar (t:T):void{
        this.data.push(t)
    }

    getEstado(){
        return this.data
    }
}
type ObjectId={
    id:string
}
class EstadoEliminar<T extends ObjectId> extends Estado<T>{ //se le conoce como pasar genérico (extends) con restrincciones
    eliminar(id:string){
        this.data.filter(x => x.id !== id)
    }
}

class EstadoUsuarios extends Estado<Usuario>{ //Pasar el génerico fijo, en este caso al reiniciar las contraseñas se pide directo a los usuarios, no tendría sentido enviarlo al tipo de usuarios 
    reiniciarContrasenas(){
        //lógica
    }
}

const estadoUsuarios = new EstadoUsuarios


//--------------Operador Keyof-----------------
type Calendar = {
    id:number,
    fuente: string,
    dueno: string,
}

const calendar: Calendar = {id:1, fuente: 'Google', dueno: 'yo'}

function getProp<T>(objeto:T, property:keyof T): unknown { //al pasar el valor Keyof de T este verifica únicamente las propiedades que existan definidas previamente y no genere algo nuevo
    return objeto[property]
}

getProp<Calendar>(calendar,'id')
getProp<Calendar>(calendar,'fuente')
//getProp<Calendar>(calendar,'propiedadqueNoExiste') esta propiedad como no es parte del keyoff no puede usarse

//--------------Utility types------------------
type Punto = {
    x:number,
    y: number,
    desc?: string
}

type PuntoOpcional = Partial<Punto> //está utilidad transforma todas la propiedades en optional (?)
type PuntoRequerido = Required<Punto> //transformar las propiedades en requeridas

const keyVaal : Record<string, number> = { //con record el primero valor es el nombre de la propiedad, y el segundo el valor de la propiedad
    'soy un string': 42
}
type kv = {[key:string]:number} //es la forma alternativa de Record

const p: Omit<Punto, 'desc' | 'y'> = { //Omit ayuda a omitit propiedades que no se quieren utilizar
    x:1,
}

const p1: Pick<Punto, 'x' | 'y'>={ //Pick permite eligir solo las que se van a utilizar
    x:1,
    y:2,
}

const readOnlyP: Readonly<Punto>={ //read only no permite modificaar las propiedades declaradas
    x:1,
    y:2,
    desc:"soy un punto"
}


//-----------------------------------
//--------------Módulos--------------
//-----------------------------------

//Mediante la palabra export al declarar una función o clase es posible distribuir ese módulo a otros archivos
//Mediante la palabra import { } from '' se puede acceder al archivo
//VS es capaz de tomar clases y colocarlas en un nuevo archivo cuando no se utilizan en el actual, no olvidar usar la palabra export en este archivo generado
//Cuando se exporta por defecto (export default), no es necesario usar name export ({nombre}), solo con import Nombre fromo './'
//Para importar de manera  global, se usa la wildcard, import * as Group frp, './'
//Re-exporting es la forma de importar y exportar al mismo tiempo con la finalidad de modularizar de manera más sencilla
//-------JS en TS--------------
//Se habilitan primero las opciones "allowJs": true, y "checkJs": true, 
//De esta forma se activa la funcionalidade de ts en js, al crear un index.js:
/**
 * @ param {string} mensaje  // de esta forma el mensaje ya tiene un tipo de variable
 * @ return {string}         // y con esto ya se sabe que retorna un valor de tipo string
 export fucntion holamunto (mensaje){
    return mensaje
 }
 */
//una forma alternativa es crear un archivo con terminación archivo.d.ts, donde la d sirve como definición, se declara la función como export declare function(mensaje:string, mensaje2:string):string



