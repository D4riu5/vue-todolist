// VUE JS
  const { createApp } = Vue;

  createApp({
    data() {
      return {
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
      }
    },
    mounted() {
    console.log(`the component is now mounted.`)
  }
  }).mount('#app')

