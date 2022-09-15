<template>
  <div class="section">
    <div class="body">
      <h1>Add a new task</h1>
      <h2>Get organized and stay calm with Task App
      </h2>
      <div class="input">
        <label for="newTaskTitle">
         <input type="text"
          placeholder="  Add a task title"
          v-model="taskName"/>
        </label>
      </div>
      <div class="input">
        <label for="newTaskDescription">
         <input type="text"
          placeholder="  Add a task description"
          v-model="taskDescription"
        />
        </label>
      </div>
      <button @click="newTaskButton">Create a new task</button>
    </div>
  </div>
</template>

<style scoped>
.body {
  text-align: center;
  margin: auto;
  max-width: 47rem;
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
input {
  margin-bottom: 1.25rem;
  width: 100%;
}
</style>
