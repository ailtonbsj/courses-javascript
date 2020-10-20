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
document.getElementById('novotodo').onclick = function() {
    minhaLista.add('Novo Todo')
}

minhaLista.mostraUsuario()
console.log(TodoList.staticData);
TodoList.addTodo()