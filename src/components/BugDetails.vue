<template>
  <div class="bugdetails">
    <div class="row d-flex">
      <div class="d-flex col-12 list-group">
        <a
          class="list-group-item list-group-item-action list-group-item-warning"
        >{{bug.creator}} {{bug.title}} {{bug.description}}</a>
        <!-- primary secondarydanger warning info light dark -->
      </div>
    </div>
  </div>
</template>


<script>
import BugForm from "@/components/BugForm.vue";
export default {
  name: "bugDetails",
  data() {
    return {};
  },
  computed: {
    bugDetails() {
      let id = this.$route.params.id;
      return this.$store.state.bugs.find(e => {
        return id == e._id;
      });
    }
  },
  methods: {},
  components: {
    BugForm
  }
};
</script>


<style scoped>
</style>