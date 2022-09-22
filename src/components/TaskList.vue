<template>
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
          <td><button @click="handleEditTask(task.id, task.title)">
            Edit task</button></td>
          <td><button @click="deleteTask(task.id)">Delete task</button></td>
        </tr>
      </table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'TaskList',
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'addTask', 'editTask', 'deleteTask']),
    getTasks() {
      this.fetchTasks();
      console.log(this.tasks);
    },
    handleNewTask() {
      this.addTask(this.newTaskTitle, this.newTaskDescription);
      this.newTask = '';
    },
    handleEditTask(taskId, title) {
      this.editTask(taskId, title);
    },
    handleDelete(taskId) {
      this.deleteTask(taskId);
    },
  },
};
</script>

<style>
.taskTable {
  border: 1px solid #dddd;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: hsla(0, 100%, 90%, 0.4);
  margin: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 30%;
}

th {
  padding-left: 3rem;
  justify-content: space-between;
}
</style>
