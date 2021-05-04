<template>
  <div>
    <div class="navigation-links">
      <router-link v-bind:to="{ name: 'StateList' }">Home</router-link>
      <router-link v-bind:to="{ name: 'AboutSite' }"
        >About this site</router-link
      >
      <router-link v-bind:to="{ name: 'VisitedStatesList' }"
        >Visited States</router-link
      >
    </div>

    <p>
      Header image by
      <a target="_blank" href="https://unsplash.com/photos/KpBXAOs80YI"
        >@chrislawton on Unsplash</a
      >
    </p>
    <p>
      <a href="undefined/icons/set/map">Map icon</a> icon by
      <a target="_blank" href="">Icons8</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

// footer styles
<style scoped>
.navigation-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
