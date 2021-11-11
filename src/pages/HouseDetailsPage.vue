<template>
  <div class="house-details container-fluid">
    <div class="row">
      <div class="col">
        <div class="card my-5">
          <img class="" :src="house.imgUrl" alt="">
          <div class="card-body">
            <h4 class="card-title text-center">Year: {{house.year}} | Price: ${{house.price}} | Levels: {{house.levels}}</h4>
            <h5
             class="card-text m-2">{{house.description}}</h5>
          </div>
          <div class="d-flex justify-content-end" v-if="house.creatorId === account.id">
                <button data-bs-toggle="modal" data-bs-target="#house-modal" class="btn btn-outline-warning border-3 m-2"><i class="mdi mdi-24px text-dark mdi-pencil"></i></button>
        <button  @click="remove" class="btn border-3 btn-outline-danger m-2"><i class="mdi mdi-24px mdi-close"></i></button>
        </div>
        </div>
      </div>
    </div>

<HouseFormModal :house="house" />
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import { useRoute, useRouter } from "vue-router"
import { logger } from "../utils/Logger"
import { houseService } from "../services/HouseService"
import { AppState } from "../AppState"
import Pop from "../utils/Pop"
export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        await houseService.getById(route.params.id)
      } catch (error) {
        logger.error(error)
        router.push({ name: 'Houses' })
      }
    })
    return {
house: computed(() => AppState.activeHouse),
account: computed(() => AppState.account),
async remove(){
  try {
    if (await Pop.confirm()) {
    await houseService.remove()
    router.push({ name: 'Houses' })
    }
  } catch (error) {
    logger.error
    Pop.toast('Failed to Delete', 'error')
  }
}
    }
  }}
</script>


<style lang="scss" scoped>

</style>