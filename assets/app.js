const app = Vue.createApp({
  data() {
    return {
      appName: "Vue Todo App",
      todo: "",
      todolist: [],
    };
  },
  methods: {
    addTodo() {
      if (this.todo == "") {
        alert("Enter todo and try again");
        return;
      }
      this.todolist.push(this.todo);
      this.todo = "";
    },
    removeTodo(index) {
      this.todolist.splice(index, 1);
      console.log(index);
    },
  },
});
