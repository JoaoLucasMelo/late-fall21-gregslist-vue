<template>
  <div class="housesPage container-fluid">
    <div class="row">
      <div class="col d-flex justify-content-between my-4">
        <h2>Houses</h2>
        <button class="btn btn-outline-success border-3" data-bs-toggle="modal" data-bs-target="#house-modal"><i class="mdi mdi-24px mdi-plus"></i></button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="h in houses" :key="h.id">
        <House :house="h"/>
        <!-- <div class="card selectable elevation-4">
          <img class="card-img-top " :src="house.imgUrl" alt="">
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
        </div> -->
      </div>
    </div>
  </div>
  <HouseFormModal />
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import {houseService} from "../services/HouseService"
import { AppState } from "../AppState"
export default {
  setup(){
    onMounted(async () => {
      try {
        await houseService.getAll()
      } catch (error) {
        logger.log(error)
        Pop.toast('Error get All houses', 'error')
      }
    })
    return {
      houses: computed(() => AppState.houses)
    }
  }}
</script>

<style lang="scss" scoped>


</style>