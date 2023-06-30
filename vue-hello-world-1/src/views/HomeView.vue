<template>
  <main>
    <button @click="logout" id="logout">Logout</button>
    <h1>Job Listings</h1>
    <div id="listings" v-if="jobs.length > 0">
      <JobListItem
          v-for="(item, i) in jobs"
          :key="i"
          :title="item.title"
          :salary_scale="item.salary_scale"
          :department="item.department"
          :division="item.division"
          :commitment="item.commitment"
      />
    </div>
    <div v-else>
      <h3>Sorry! No Jobs Available</h3>
    </div>
  </main>
</template>

<script>
import JobListItem from "../components/JobListItem.vue";
export default {
  name: 'HomeView',
  components: {JobListItem},
  data: () => ({
    jobs: []
  }),
  mounted() {
    this.retrieveJobs()
  },
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.replace({name: 'login'});
    },
    retrieveJobs() {
      this.$store.dispatch('retrieveJobs')
          .then(data => this.jobs = data)
          .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
#logout {
  position: fixed;
  top: 4rem;
  right: 4rem;
  background-color: blueviolet;
  color: palevioletred;
  border-radius: 10px;
  height: 40px;
  width: 120px;
}

#listings {
  max-width: 540px;
  margin: auto;
}
</style>
