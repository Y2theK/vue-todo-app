const app = Vue.createApp({
  data() {
    return {
      appName: "Vue Todo App",
      todo: { name: "", isCompleted: false },
      todolist: [
        { name: "to code", isCompleted: false },
        { name: "to swim", isCompleted: true },
        { name: "to do exercise", isCompleted: false },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.todo.name == "") {
        alert("Enter todo and try again");
        return;
      }
      this.todolist.push({
        name: this.todo.name,
        isCompleted: false,
      });

      this.todo.name = "";
      this.todo.isCompleted = false;
    },
    removeTodo(index) {
      this.todolist.splice(index, 1);
    },
    markCompleted(todo) {
      todo.isCompleted = !todo.isCompleted;
    },
  },
});
