// VUE JS
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        newInput: '',
        taskList: [
          { text: 'Do homework', done: true },
          { text: 'Buy groceries', done: false },
          { text: 'Clean room', done: false },
          { text: 'Do laundry', done: false },
        ]
      }
    },
    methods:{
      removeTask(index){
        this.taskList.splice(index, 1)
      },
      addNewTask(){
        this.taskList.push({text: this.newInput, done:false});
        this.newInput = '';
      },
      changeStatus(index){
        this.taskList[index].done = !this.taskList[index].done;
      }

    },
    mounted() {
    console.log(`the component is now mounted.`)
  }
  }).mount('#app')

// vanilla JS