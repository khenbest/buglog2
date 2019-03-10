<template>
  <div class="bugdetails">{{bug.description}}</div>
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