const App = {
    data() {
        return {
            title: 'Список заметок',
            notePlaceholder: 'Введите название заметки',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        changeInput() {
            console.log(this.inputValue)
        },
        addNote(){
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
        }
    },
}
const app = Vue.createApp(App)
app.mount('#app')