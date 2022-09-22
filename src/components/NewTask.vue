<template>
    <div class="NewTaskContainer">
      <h1>Add a new task</h1>
      <h2>Get organized and stay calm with Task App
      </h2>
      <form>
        <label for="taskTitle">
         <input type="text" v-model="newTaskTitle"
          placeholder="Add a task title"/>
        </label>
        <label for="taskDescription">
         <input type="text" v-model="newTaskDescription"
          placeholder="Add a task description"/>
        </label>
        <button type="button" @click.prevent="handleNewTask()">Create a new task</button>
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
  methods: {
    ...mapActions(taskStore, ['addTask']),
    handleNewTask() {
      this.addTask(this.newTaskTitle, this.user.id);
      this.newTask = '';
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
  font-size: 2.2rem;
}
h2 {
  font-size: 1.25rem;
}
</style>
