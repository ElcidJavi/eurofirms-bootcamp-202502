var products = []

// populate

var cinquecento = {
    id: '2025031-1601',
    brand: 'Fiat',
    model: '500',
    color: 'pink',
    year: 2019,
    kilometers: 145000
}

products[0] = cinquecento

var clio = {
    id: '2025031-1603',
    brand: 'Renault',
    model: 'Clio',
    color: 'red',
    year: 2015,
    kilometers: 225000
}

products[1] = clio

var c3 = {
    id: '2025031-1605',
    brand: 'Citroen',
    model: 'C3',
    color: 'black',
    year: 2010,
    kilometers: 310000
}

products[2] = c3

// logic

function addcar(brand, model, color, year, kilometers) {
    /*
    STEPS
    - create id for car
    - create object for car data and id
    - insert object in products
    */
}

    let car = {
        id: Math.random(),
        brand: brand,
        model: model,
        color: color,
        year: year,
        kilometers: kilometers
    };

    products[products.length] = car;

addCar('Audi', 'A1', 'gray', 2013, 170000)
addCar('Smart', 'ForTwo', 'yellow', 2024, 17000)
addCar('Fiat', '500 Abarth', 'skyblue', 2023, 56000)
//view cars
console.table(products)

//update cars (buscar coche por su id y actualizar sus propiedades)
function actualizacion(id, brand, model, color, year, kilometers) {
    //encontrar la id del coche en el array products
    //extrar el coche del array usando la id del paso anterior
    //actualizar las propiedades del coche encontrado
    for (let i = 0; i < products.length; i++) {
        if(products[i].id === id) {
            let cocheEncontrado = products[i]
            cocheEncontrado.brand = brand;
            cocheEncontrado.model = model; 
            cocheEncontrado.color = color;
            cocheEncontrado.year = year;
            cocheEncontrado.kilometers = kilometers
        }
    }
}

actualizacion("2025031-1605", "Citroen", "C3", "white", 2010, 310000);
console.table(products)