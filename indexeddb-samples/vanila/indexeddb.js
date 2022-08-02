let db;
let res;

if (window.indexedDB) {

    const req = window.indexedDB.open('myDb', 1);
    req.onsuccess = (event) => db = req.result;

    req.onupgradeneeded = (event) => {
        const db = event.target.result;
        const table1 = db.createObjectStore('table1', {
            keyPath: 'id',
            autoIncrement: true
        });
        table1.createIndex('column1', 'column1', { unique: false });
        console.log('Table1 created!');
    }

    req.onerror = (event) => {
        console.log('Error', event);
    }

} else console.log('Browser doesnt have support to IndexedDB!');

function insert() {
    if (window.indexedDB) {
        const transactAdd = db.transaction(['table1'], 'readwrite');
        const table1 = transactAdd.objectStore('table1');
        const res = table1.add({
            column1: 'value1',
            column2: 'value2'
        });

        transactAdd.oncomplete = (event) => {
            alert("Salvo com sucesso!");
        }
    }
}

function select() {
    if (window.indexedDB) {
        let table1 = db.transaction('table1').objectStore('table1');
        res = [];
        table1.openCursor().onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor) {
                res.push({
                    id: cursor.value.id,
                    column1: cursor.value.column1,
                    column2: cursor.value.column2
                });
                cursor.continue();
            } else {
                console.log(res);
            }
        }
    }
}

function selectAll() {
    if (window.indexedDB) {
        let table1 = db.transaction('table1').objectStore('table1');
        const req = table1.getAll();
        
        req.onsuccess = (event) => {
            console.log(event.target.result);
        }
    }
}

function selectDataByIndex() {
    if (window.indexedDB) {
        let table1 = db.transaction('table1').objectStore('table1');
        let range = IDBKeyRange.only('value1');
        table1.index('column1').openCursor(range).onsuccess = (event) => {
            console.log(event.target.result.value);
        }
    }
}

function remove() {
    const id = parseInt(document.getElementById('deleteId').value);

    let table1 = db.transaction('table1', 'readwrite').objectStore('table1');
    let req = table1.delete(id);

    req.onsuccess = (event) => {
        console.log(event);
        alert("Removido com sucesso!");
    }
}

function update() {
    const obj = { id: 2, column2: 'New data' };

    let table1 = db.transaction('table1', 'readwrite').objectStore('table1');
    let req = table1.put(obj);

    req.onsuccess = (event) => {
        alert("Atualizado!");
    }

}