<template>
  <div class="state-map">
    <h2>The state of {{ state.name }}</h2>
    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state yet</p>

    <!-- show map only when data is ready/found from API -->
    <div id="map-container" v-if="dataReady">
      <!-- map configuration -->
      <l-map
        ref="map"
        v-on:ready="onMapReady"
        v-bind:center="mapCenter"
        v-bind:zoom="state.zoom"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy"
        >
        </l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import PageNotFound from "./PageNotFound.vue";

export default {
  name: "StateMap",
  components: {
    LMap,
    LTileLayer,
    PageNotFound,
  },
  data() {
    return {
      state: {},
      dataReady: false,
      mapReady: false,
    };
  },
  mounted() {
    this.state.name = this.$route.params.state;
    this.fetchStateData();
  },
  methods: {
    fetchStateData() {
      this.$stateService
        .getOneState(this.state.name)
        .then((state) => {
          this.state = state; // override data with the state name getting from this function
          this.dataReady = true;
        })
        .catch((err) => {
          // 404 not found
          if (err.response && err.response.status === 404) {
            this.state.name = "?"; // todo think about a better way to communicate to the user
          } else {
            // 500 server error
            alert("Sorry, error fetching data about this state");
            console.log(err); // message for developer
          }
        });
    },
    onMapReady() {
      this.mapReady = true;
    },
    setMapView() {
      // render map on screen only when map and data are available from API and ready to be read
      if (this.mapReady && this.dataReady) {
        this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom);
      }
    },
  },
  computed: {
    mapCenter() {
      return [this.state.lat, this.state.lon];
    },
  },
};
</script>

<style scoped>
#map-container {
  height: 30rem;
}
</style>
