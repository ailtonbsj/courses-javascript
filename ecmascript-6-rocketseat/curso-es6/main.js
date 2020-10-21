// Aula Class
class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super()
        this.usuario = 'Ailton'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }

    static addTodo() {
        TodoList.staticData.push('Novo todo')
        console.log(TodoList.staticData)
    }
}
TodoList.staticData = []

var minhaLista = new TodoList()
document.getElementById('novotodo').onclick = function () {
    minhaLista.add('Novo Todo')
}

minhaLista.mostraUsuario()
console.log(TodoList.staticData);
TodoList.addTodo()

// Aula Array
const arr = [1, 3, 4, 5, 8, 9]

const newArr = arr.map(function (item, index) {
    return item + index
})
console.log(newArr)

const sum = arr.reduce(function (total, next) {
    return total + next
})
console.log(sum)

const filter = arr.filter(function (item) {
    return item % 2 === 0
})
console.log(filter)

const find = arr.find(function (item) {
    return item === 4
})

// Aula Arrow functions
const newArray = arr.map(item => item * 2)
console.log(newArray)

const teste = () => 'teste'
console.log(teste())

const newTest = () => ({ nome: 'Ailton' })
console.log(newTest())

// Aula Valores padrão
function soma(a = 10, b = 20) {
    return a + b
}
console.log(soma(1, 2))
console.log(soma(1))
console.log(soma())


// Aula Desestruturação
const usuario = {
    nome: 'Ailton',
    idade: 27,
    endereco: {
        cidade: 'Icó',
        estado: 'CE',
    }
}
console.log(usuario)
const { nome, idade, endereco: { cidade, estado } } = usuario
console.log(nome, idade, cidade, estado)

function mostraNomeEIdade({ nome, idade }) {
    console.log(nome, idade)
}

mostraNomeEIdade(usuario);

// Aula rest/spread
(function () {
    // rest
    const { nome, ...resto } = usuario
    console.log(nome)
    console.log(resto)

    const arr = [1, 2, 3, 4]
    const [a, b, ...c] = arr
    console.log(a)
    console.log(b)
    console.log(c)

    function soma(a, b, ...params) {
        return params.reduce( (acc, val) => acc + val)
    }
    console.log(soma(10, 20, 1, 2, 3))

    //spread
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const arr3 = [...arr1, ...arr2]
    console.log(arr3)

    const user = { name: 'Ailton', age: 27}
    const user2 = { ...user, name: 'Joao' }
    console.log(user2)
})()

// Aula Template Literals
console.log(`Meu nome é ${nome} tenho ${idade} anos`);



