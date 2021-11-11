<template>
  <div class="">
    <router-link :to="{ name: 'HouseDetails', params: { id: house.id} }">
    <div class="card selectable elevation-4">
          <img v-if="house" class="card-img-top " :src="house.imgUrl" alt="">
          <div class="card-body">
            <div class="flex-row d-flex justify-content-between">
              <h6 class="card-title">Year: {{house.year}}</h6>
              <h6 class="card-title"> Levels: {{house.levels}}</h6>
            </div>
              <p class="m-0"><small>Bathrooms: {{house.bathrooms}}</small></p>
            <p class="m-0 mb-2"><small>Bedrooms: {{house.bedrooms}}</small></p>
            <p class="card-text">{{house.description}}</p>
            <h6 class="text-end">Price: {{house.price}}</h6>
          </div>
        </div>
    </router-link>
  </div>
</template>


<script>
export default {
  props: {
    house: {
      type: Object,
      required: true
    }
  },
  setup(){
    return {}
  }}
</script>


<style lang="scss" scoped>

</style>