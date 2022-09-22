<template>
    <div class="NewTaskContainer">
      <h1>Add a new task</h1>
      <h2>Get organized and stay calm with Task App
      </h2>
      <form class="input">
        <label for="newTaskTitle">
         <input type="text" v-model="newTaskTitle"
          placeholder="Add a task title"/>
        </label>
        <label for="newTaskDescription">
         <input type="text" v-model="newTaskDescription"
          placeholder="Add a task description"/>
        </label>
        <button type="button" @click.prevent="handleNewTask">Create a new task</button>
      </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'NewTask',
  data() {
    return {
      newTaskTitle: '',
      newTaskDescription: '',
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'addTask', 'editTask']),
    getTasks() {
      this.fetchTasks();
      console.log(this.tasks);
    },
    handleNewTask() {
      this.addTask(this.newTaskTitle, this.newTaskDescription);
      this.newTask = '';
    },
    handleEditTask(title) {
      this.editTask(title);
    },
    handleDelete(taskId) {
      this.deleteTask(taskId);
    },
  },
};
</script>

<style>
.NewTaskContainer {
  text-align: center;
  margin: auto;
  max-width: 40rem;
}
h1 {
  display: block;
  font-size: 2.25rem;
}
h2 {
  display: block;
  font-size: 1.25rem;
}
</style>
