<template lang="">
    <div class="dogs">
    <h2>Dogs</h2>
    <ul>
        <li v-for="dog in dogs" :key="dog.id" class="dog-listing">{{dog.name}} - {{dog.age}}</li>
    </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dogs: [
                {
                    id: 1,
                    name: "Bixby",
                    age: 20
                    }, {
                    id: 2,
                    name: "Mesa",
                    age: 18
                }, {
                    id: 3,
                    name: "Harmony",
                    age: 4
                }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>