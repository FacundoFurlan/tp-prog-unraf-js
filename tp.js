// ## Ejercicios

// - Ingresar dos valores y sumarlos.
console.log("// - Ingresar dos valores y sumarlos.")
    let valor1 = 4, valor2 = 2;
    console.log("valores sumados: ", valor1+valor2);
// - Ingresar tres valores e indicar cual es el mayor y cual el menor.
console.log("// - Ingresar tres valores e indicar cual es el mayor y cual el menor.")
    let valor21 = 1, valor22 = 47, valor23 = 23;
    let mayor = 0, menor = 0;

    if(valor21 > valor22){
        mayor = valor21;
        menor = valor22;
    } else{
        mayor = valor22;
        menor = valor21;
    }

    if(mayor < valor23){
        mayor = valor23;
    }
    if(menor > valor23){
        menor = valor23;
    }

    console.log("El mayor es: ", mayor);
    console.log("El menor es: ", menor);
// - Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.
console.log("// - Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.");
    let palabra = "Adonalsium";
    console.log(`${palabra} tiene ${palabra.length} letras.`);
// - Ingresar un número e indicar si es par.
console.log("// - Ingresar un número e indicar si es par.");
    let valor3 = 34;
    if(valor3%2 === 0){
        console.log("Es par");
    } else {
        console.log("No es par");
    }
// - Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.
console.log("// - Ingresar una palabra y un numero `n`. Repetir la palabra `n` veces.");
    let palabra2 = "Adonalsiuuuum";
    let valor4 = 3;
    for (let i = 0; i < valor4; i++) {
        console.log(palabra2)
    }
// - Ingresar dos valores enteros y enumerar los elementos que los separan.
console.log("// - Ingresar dos valores enteros y enumerar los elementos que los separan.")
    let valor51 = 10, valor52 = 5;
    if(valor51 < valor52){
        for (let i = valor51+1; i < valor52; i++) {
            console.log(i);
        }
    }
    if(valor51 > valor52){
        for (let i = valor51-1; i != valor52; i--) {
            console.log(i);
        }
    }
// - Ejemplo 1: 2 y 6 --> 3 , 4, 5
// - Ejemplo 2: 10 y 5 --> 9, 8, 7, 6 
// - Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.  ----------------------------------------->Segun entiendo, <ENTRE> implica no incluir los numeros en los extremos.
console.log("// - Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.")
    let valor61 = 4, valor62 = 12;
    if(valor61 < valor62){
        for (let i = valor61+1; i < valor62; i++) {
            if(i%3===0){
                console.log(i);
            }
        }
    }
    if(valor61 > valor62){
        for (let i = valor61-1; i != valor62; i--) {
            if(i%3===0){
                console.log(i);
            }
        }
    }
// - Mostrar los multiplos de 2 y 5 menores a 100.  --------------------------------> Entiendo que no quieren los negativos tambien, sino seria infinito
console.log("// - Mostrar los multiplos de 2 y 5 menores a 100.");
    for (let i = 0; i < 100; i++) {
        if(i%2 === 0 && i%5 === 0){
            console.log(i);
        }
    }
// - Obtener la suma de los elementos de un array.
console.log("// - Obtener la suma de los elementos de un array.");
    let array = [2,4,52,2];
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    console.log("La suma del array es de: ", suma);
// - Sumar solo los elementos pares de un array.
console.log("// - Sumar solo los elementos pares de un array.");
    let array2 = [2,4,53,2];
    let suma2 = 0;
    for (let i = 0; i < array2.length; i++) {
        if(array2[i]%2 === 0){
            suma2 += array2[i];
        }
    }
    console.log("La suma del array es de: ", suma2);
// - Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal
console.log("// - Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal");
    let palabra3 = "anana";
    let objetoAux = {};
    for (let i = 0; i < palabra3.length; i++) {
        if(objetoAux[palabra3[i]]){
            objetoAux[palabra3[i]] += 1;
        } else {
            objetoAux[palabra3[i]] = 1;
        }
    }
    console.log(objetoAux)
// - Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.
console.log("// - Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.")
    let objeto1 = {
        nombre: "Adonalsium",
        sexoBiologico: undefined,
        edad: 1000
    }
    let objeto2 = {
        nombre: "Romina",
        sexoBiologico: "F",
        edad: 45
    }
    let objeto3 = {
        nombre: "Agustin",
        sexoBiologico: "M",
        edad: 25
    }
    let objeto4 = {
        nombre: "Laura",
        sexoBiologico: "F",
        edad: 40
    }
    let array3 = [objeto1,objeto2,objeto3,objeto4];
    let sumaEdad = 0, mayorMujerNombre = "", mayorMujerEdad = 0, menorHombreNombre = "", menorHombreEdad = Infinity, sumaEdadMujeres = 0, cantMujeres = 0;
    for (let i = 0; i < array3.length; i++) {
        sumaEdad = sumaEdad + array3[i].edad;
        if(array3[i].sexoBiologico === "F"){
            sumaEdadMujeres = sumaEdadMujeres + array3[i].edad;
            cantMujeres++;
            if(array3[i].edad > mayorMujerEdad){
                mayorMujerEdad = array3[i].edad;
                mayorMujerNombre = array3[i].nombre;
            }
        }
        if(array3[i].sexoBiologico === "M"){
            if(array3[i].edad < menorHombreEdad){
                menorHombreEdad = array3[i].edad;
                menorHombreNombre = array3[i].nombre;
            }
        }
        
    }
    console.log("promedio de edad: ", sumaEdad/array3.length)
    console.log("Mayor mujer: ", mayorMujerNombre);
    console.log("Menor Hombre: ", menorHombreNombre);
    console.log("Promedio edad mujeres: ", sumaEdadMujeres/cantMujeres);
// - Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.
console.log("// - Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.")
    function getAverageAge(lista){
        let sumaEdad = 0;
        for (let i = 0; i < lista.length; i++) {
            sumaEdad = sumaEdad + lista[i].edad
        }
        console.log("promedio de edad: ", sumaEdad/lista.length)
    }

    function getOlderWoman(lista){
        let mayorMujerNombre = "", mayorMujerEdad = 0;
        for (let i = 0; i < lista.length; i++) {
            if(lista[i].sexoBiologico === "F"){
                if(lista[i].edad > mayorMujerEdad){
                    mayorMujerEdad = lista[i].edad;
                    mayorMujerNombre = lista[i].nombre;
                }
            }
            
        } 
        console.log("Mayor mujer: ", mayorMujerNombre);
    }

    function getYoungerMan(lista){
        let menorHombreNombre = "", menorHombreEdad = Infinity;
        for (let i = 0; i < lista.length; i++) {
            if(lista[i].sexoBiologico === "M"){
                if(lista[i].edad < menorHombreEdad){
                    menorHombreEdad = lista[i].edad;
                    menorHombreNombre = lista[i].nombre;
                }
            }
        } 
        console.log("Menor Hombre: ", menorHombreNombre);
    }

    function getWomenAverageAge(lista){
        let sumaEdadMujeres = 0, cantMujeres = 0;
        for (let i = 0; i < lista.length; i++) {
            if(lista[i].sexoBiologico === "F"){
                sumaEdadMujeres = sumaEdadMujeres + lista[i].edad;
                cantMujeres++;
            }
        }
        console.log("Promedio edad mujeres: ", sumaEdadMujeres/cantMujeres);
    }

    getAverageAge(array3);
    getOlderWoman(array3);
    getYoungerMan(array3);
    getWomenAverageAge(array3);
// - Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. Devolver una lista con los divisores del numero ingresado.
console.log("// - Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. Devolver una lista con los divisores del numero ingresado.")
    function divisores(minimo, max, divisor){
        let lista = [];
        for (let i = minimo; i < max+1; i++) {
            if(divisor%i === 0){
                lista.push(i);
            }
        }
        console.log(lista);
        return lista;
    }

    divisores(1,15,10);
