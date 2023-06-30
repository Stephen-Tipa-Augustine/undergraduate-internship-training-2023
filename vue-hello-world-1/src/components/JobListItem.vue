<template>
  <div class="wrapper">
    <div class="flex-item">
      <h6>{{title}}</h6>
      <p>Salary Scale: {{salary_scale}}</p>
    </div>
    <div class="flex-item">
      <h6>Department: {{department}}</h6>
      <p>Division: {{division}}</p>
    </div>
    <p>Commitment: {{commitment}}</p>
  </div>
</template>

<script>
export default {
  name: "JobListItem",
  props: {
    title: {default: ''},
    salary_scale: {default: ''},
    department: {default: ''},
    division: {default: ''},
    commitment: {default: ''}
  }
}
</script>

<style scoped>
.flex-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  alignment: center;
  align-content: center;
}

.wrapper {
  background-color: palevioletred;
  border-radius: 10px;
  border: 3px dashed orangered;
  margin: 3rem auto;
}

p {
  font-size: 1rem;
}

h6 {
  font-size: 1.2rem;
}
</style>
