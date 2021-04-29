<template>
    <div class="state-info">
        <span class="state-name">{{ state.name }}</span>
        <div>
            <input type="checkbox" 
                class="visit-state" 
                v-model="visited" 
                v-on:change="visitedChanged">
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'StateDetail',
    emits: ['update-visited'],
    props: {
        state: Object
    },
    data() {
        return {
            visited: this.state.visited
        }
    },
    methods: {
        visitedChanged() {
            this.$emit('update-visited', this.state.name, this.visited)
        }
    }
}
</script>

<style scoped>

.state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 1px solid gainsboro;
    border-radius: .3rem;
    background-color: whitesmoke;
}

.visit-state {
    margin: 1rem;
    text-align: center;
}
</style>
