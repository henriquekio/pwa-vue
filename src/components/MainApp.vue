<template>
  <main>
    <div class="row">
      <div class="col s12 m6 offset-m3">
        <h4>Minhas Tarefas</h4>
        <form-task v-if="newTask" v-on:updateListTasks="getTasks" />
        <task-list v-on:updateTask="setTask" v-bind:task-list="todos" />
        <div class="row">
          <ul class="collapsible">
            <li>
              <div class="collapsible-header">
                <h6>
                  <strong>Concluidas ({{ todoDones.length }})</strong>
                </h6>
              </div>
              <div class="collapsible-body no-padding">
                <task-list
                  v-on:updateTask="setTask"
                  v-bind:task-list="todoDones"
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="fixed-action-btn">
          <button @click="insertNewTask" class="btn-floating btn-large red">
            <i class="large material-icons">add</i>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FormTask from "./FormTask";
import TaskList from "./TaskList";
import TaskListService from "../services/TaskListService";

export default {
  name: "MainApp",
  components: { TaskList, FormTask },
  data() {
    return {
      tasks: [],
      newTask: false
    };
  },
  computed: {
    todoDones: function() {
      return this.tasks.filter(task => task.value.done);
    },
    todos: function() {
      return this.tasks.filter(task => !task.value.done);
    }
  },
  methods: {
    async getTasks() {
      this.tasks = await TaskListService.getTasks();
    },
    async setTask(value) {
      const {
        task: { description, done }
      } = value;
      await TaskListService.setTask({ description, done }, value.key);
      this.getTasks();
    },
    insertNewTask() {
      this.newTask = !this.newTask;
    }
  },
  mounted() {
    this.getTasks();
  }
};
</script>

<style scoped>
.collapsible {
  box-shadow: none;
}
</style>
