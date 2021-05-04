<template>
  <div>
    <h2>Here are the {{ visitedStates.length }} states you have visited</h2>
    <h4>
      If you have NOT visited one of these please uncheck it to update the list
    </h4>
    <div class="state-list-container">
      <div
        class="state-container"
        v-for="state in visitedStates"
        v-bind:key="state.name"
      >
        <state-detail v-bind:state="state" v-on:update-visited="updateVisited">
        </state-detail>
      </div>
    </div>
  </div>
</template>

<script>
import StateDetail from "./StateDetail.vue";

export default {
  components: { StateDetail },
  name: "VisitedStatesList",
  data() {
    return {
      visitedStates: [],
    };
  },
  mounted() {
    this.fetchVisitedStates();
  },
  methods: {
    fetchVisitedStates() {
      this.$stateService
        .getAllVisitedStates()
        .then((states) => {
          this.visitedStates = states;
        })
        .catch((err) => {
          alert("Sorry, can't fetch state list");
        });
    },
    updateVisited(stateName, visited) {
      this.$stateService
        .setVisited(stateName, visited)
        .then(() => {
          this.fetchVisitedStates();
        })
        .catch((err) => {
          alert("Sorry, can't update state");
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.state-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.state-container {
  margin: 1rem;
}
</style>
