<template>
  <div>
    <h1>Page Not Found</h1>
    <router-link class="go-home-link" v-bind:to="{ name: 'StateList' }"
      >Go back to Homepage</router-link
    >
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
div {
  /* margin-bottom: 2rem; */
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.go-home-link {
  list-style: none;
  margin-top: -1rem;
  color: black;
  font-size: 1.2rem;
}
</style>
