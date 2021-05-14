<template lang="">
    <div class="places">
    <h2>Places</h2>
    <ul>
        <li v-for="place in places" :key="place.id" class="place-listing">
            <h3>{{place.name}}</h3>
            <img :src="place.image_url" :alt="place.name"/>
        </li>
        <!-- in-line for-loop  -->
    </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            places: []
        }
    },
    created() {
        fetch("http://localhost:3000/places")
        .then(response => response.json())
        .then(({places}) => {
            // destructured
            this.places = places
        })
    }
}
</script>

<style lang="scss">
    .places {
        width: 300px;
        img {
            max-width: 100%;
        }
    }
</style>