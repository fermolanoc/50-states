<template>
    <div class="state-list-container">
        <div class="state-container" v-for="state in states" v-bind:key="state.name">
            <state-detail 
                v-bind:state="state"
                v-on:update-visited="updateVisited">
            </state-detail>
        </div>
    </div>
</template>
    
<script>
import StateDetail from './StateDetail.vue'

export default {
  components: { StateDetail },
    name: 'StateList',
    data() {
        return {
            states: []
        }
    },
    mounted() {
        this.fetchAllStates()
  },
  methods: {
      fetchAllStates() {
          this.$stateService.getAllStates().then( states => {
              this.states = states
          })
          .catch( err => {
              alert("Sorry, can't fetch state list")
          })
      },
      updateVisited(stateName, visited) {
          this.$stateService.setVisited(stateName, visited).then(() => {
              this.fetchAllStates()
          })
          .catch( err => {
              alert("Sorry, can't update state")
              console.log(err);
          })
      }
  }
}

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