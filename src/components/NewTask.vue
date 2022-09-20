<template>
  <div class="section">
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
        <button type="button" @click.prevent="newTaskButton">Create a new task</button>
      </form>
    </div>
    <div class="AllTasksContainer">
      <table class="taskTable">
        <tr>
          <th>Task title</th>
          <th>Date</th>
          <th>Status</th>
          <th>Modify</th>
          <th>Delete</th>
        </tr>
        <tr v-for = "task in tasks" :key="task.id">
          <td>{{task.title}}</td>
          <td>{{task.inserted_at}}</td>
          <td><label for='taskStatus'> {{task.is_complete}}
          <input v-model ="task.is_complete" name="taskStatus" type="checkbox"></label></td>
          <td><button @click="handleEditTask(title)">
            Edit task</button></td>
          <td><button @click="deleteTask(task.id)">Delete task</button></td>
        </tr>
      </table>
    </div>
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
    newTaskButton() {
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

<style scoped>
.NewTaskContainer {
  text-align: center;
  margin: auto;
  max-width: 40rem;
}
h1 {
  display: block;
  margin-top: 3rem;
  font-size: 2.5rem;
}
h2 {
  display: block;
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
}
.taskTable {
  border: 1px solid #dddd;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: hsla(0, 100%, 90%, 0.4);
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 30%;
}

th {
  padding-left: 3rem;
  justify-content: space-between;
}
</style>
