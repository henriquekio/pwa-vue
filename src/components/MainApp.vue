<template>
  <main>
    <div class="row">
      <div class="col s12 m6 offset-m3">
        <h4>Minhas Tarefas</h4>
        <form-task />
        <task-list />
      </div>
    </div>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </main>
</template>

<script>
import FormTask from "./FormTask";
import TaskList from "./TaskList";
export default {
  name: "MainApp",
  components: { TaskList, FormTask }
};
</script>

<style scoped></style>
