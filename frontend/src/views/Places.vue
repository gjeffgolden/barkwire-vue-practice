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
            places: [
                {
                    id: 1,
                    image_url: "https://shoptennyson.com/wp-content/uploads/job-manager-uploads/main_image_3/2016/11/Local-front.jpg",
                    name: "Local 46"        
                }, {
                    id: 2,
                    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/MvcWAHvuTWpVTDQNpoj3tQ/l.jpg",
                    name: "US Thai Cafe"
                }
            ]
        }
    },
    // created() {
    //     fetch("http://localhost:3000/dogs")
    //     .then(response => response.json())
    //     .then(({dogs}) => {
    //         // destructured
    //         this.dogs = dogs
    //     })
    // }
}
</script>

<style lang="scss">
    places {
        width: 300px;
        img {
            max-width: 100%;
        }
    }
</style>