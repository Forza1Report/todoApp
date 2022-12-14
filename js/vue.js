const { createApp } = Vue

let id = 0
createApp({
	data() {
		return {
			newTodo: '',
			todos: [
				{ id: id++, text: 'Learn HTML', done: true },
				{ id: id++, text: 'Learn Css', done: true },
				{ id: id++, text: 'Learn Sass', done: true },
				{ id: id++, text: 'Learn Vue', done: false },
				{ id: id++, text: 'learn Laravel', done: false }

			]
		}
	},
	methods: {
		addTodo() {
			this.todos.push({ id: id++, text: this.newTodo, done: false })
			this.newTodo = ''
		},
		removeTodo(todo) {
			this.todos = this.todos.filter((t) => t !== todo)
		}
	}
}).mount('#project')