import api from './api'

class App {

    constructor() {
        this.repositories = []
        this.formEl = document.querySelector('#repo-form')
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.querySelector('#repo-list')
        this.registerHandlers()
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    setLoading(loading = true){
        if(loading) {
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando...'))
            loadingEl.setAttribute('id', 'loading')

            this.formEl.appendChild(loadingEl)
        } else {
            document.getElementById('loading').remove()
        }
    }

    async addRepository(event) {
        event.preventDefault()
        const repoInput = this.inputEl.value
        if (repoInput.length === 0) return
        this.setLoading()
        try {
            const { data } = await api.get(`/orgs/${repoInput}/repos`)

            data.forEach(repo => {
                const { name, description, html_url, owner: { avatar_url } } = repo
                this.repositories.push({
                    name, description, avatar_url, html_url
                })
            })

            this.inputEl.value = ''
            this.registerHandlers()
            this.render()
        } catch (error) {
            alert('O repositório não existe!')
        }
        this.setLoading(false)
    }

    render() {
        this.listEl.innerHTML = ''
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)
            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))
            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))
            let linkEl = document.createElement('a')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.setAttribute('target', '_blank')
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl)
        })
    }
}

new App()