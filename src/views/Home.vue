<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <bug-form></bug-form>
  </div>
</template>

<script>
// @ is an alias to /src
import BugForm from '@/components/BugForm.vue'
export default {
  name: 'home',
  components: {
    BugForm
  }
}
</script>