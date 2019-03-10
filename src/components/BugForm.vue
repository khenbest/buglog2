<template>
  <div class="col-12 bugform container-fluid">
    <form @submit.prevent="createBug">
      <input v-model="newBug.creator" type="text" name="creator" placeholder="Name">
      <input v-model="newBug.title" type="text" name="title" placeholder="What happened?">
      <input
        v-model="newBug.description"
        type="text"
        name="description"
        placeholder="What's bugging you?"
      >
      <button type="submit">Submit</button>
    </form>
    <div class="row d-flex">
      <div class="d-flex col-12 list-group" v-for="bug in bugs">
        <a
          @click="getBug()"
          class="list-group-item list-group-item-action list-group-item-warning"
        >{{bug.creator}} {{bug.title}} {{bug.description}}</a>
        <!-- primary secondarydanger warning info light dark -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bugform",
  data() {
    return {
      newBug: {
        creator: "",
        title: "",
        description: ""
      }
    };
  },
  mounted() {
    this.$store.dispatch("getAllBugs");
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  methods: {
    createBug() {
      this.$store.dispatch("createBug", this.newBug);
    }
  },
  components: {}
};
</script>


<style>
.list-group {
  text-align: center;
  justify-content: center;
}
.bugform {
  text-align: center;
  justify-content: center;
}
</style>