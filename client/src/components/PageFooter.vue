<template>
    <div>
        <div class="navigation-links">
            <router-link v-bind:to="{ name: 'StateList' }">Home</router-link>
            <router-link v-bind:to="{ name: 'AboutSite' }">About this site</router-link>
        </div>

        <p>Header image by <a href="https://unsplash.com/photos/KpBXAOs80YI">@chrislawton on Unsplash</a></p>
    </div>
</template>

<script>

export default {
    name: 'PageFooter'
}
</script>

// footer styles
<style scoped>

.navigation-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

</style>