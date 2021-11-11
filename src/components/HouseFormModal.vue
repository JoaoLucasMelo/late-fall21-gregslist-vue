<template>
  <Modal id="house-modal">
    <template #modal-title class="bg-success">
      <h4>{{house.id ? "Post" : "Edit" }} House</h4>
    </template>
    <template #modal-body>
<form @submit.prevent="handleSubmit">
    <div class="mb-3 d-flex justify-content-between">
    <div class="me-2 ms-2">
    <label class="form-label">Year Built</label>
    <input for="year" type="number" class="form-control" name="year" id="year" aria-describedby="year" placeholder="Year..."
      min="1950" max="2022" required v-model="editable.year"/>
    </div>
      <div>
        <label class="form-label">Levels</label>
        <input type="number" class="form-control" name="levels" id="bathroom" aria-describedby="levels" v-model="editable.levels"
          placeholder="Levels..." min="1" required/>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label class="form-label">Bedrooms</label>
        <input type="number" class="form-control" v-model="editable.bedrooms" name="bedroom" id="bedroom" aria-describedby="bedroom"
          placeholder="Bedrooms..." min="1" required/>
      </div>
      <div>
        <label class="form-label">Bathrooms</label>
        <input type="number" class="form-control" v-model="editable.bathrooms" name="bathroom" id="bathroom" aria-describedby="bathroom"
          placeholder="Bathrooms..." min="1" required/>
      </div>
    </div>
    <div class="mb-3">
    <div>
      <label class="form-label">Description</label>
      <textarea type="text"  class="form-control"  name="description" id="description"
        aria-describedby="description" placeholder="Description..." min="5" max="250" v-model="editable.description" required></textarea>
    </div>
  </div>
    <div class="mb-3">
      <div>
        <label class="form-label">Image Url</label>
        <input type="url" class="form-control" v-model="editable.imgUrl" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
          placeholder="Image Url..." required/>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-end">
      <div>
        <label class="form-label">Price</label>
        <input type="number" class="form-control" name="price" v-model="editable.price" id="price" aria-describedby="price"
          placeholder="Price..." min="1" required/>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">{{ house.id ? "Save" : "Post"}}</button>
    </div>
  </form>
  </template>
  </Modal>
</template>


<script>
import { ref } from '@vue/reactivity'
import { watchEffect } from "@vue/runtime-core"
import { useRouter } from "vue-router"
import { House } from "../Models/House"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { houseService } from "../services/HouseService"
import { Modal } from "bootstrap"
import { AppState } from "../AppState"

export default {
  props: {
    house: {
      type: House,
      default: () => new House()
    }
  },
  setup(props){
    const router = useRouter()
    const editable = ref({})
    watchEffect(() => {
      editable.value = { ...props.house }
    })
    return {
      editable,
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await houseService.edit(editable.value)
          } else {
            await houseService.create(editable.value)
          }
          Modal.getOrCreateInstance(document.getElementById('house-modal')).hide()
          router.push({ name: 'HouseDetails', params: { id: AppState.activeHouse.id}})
        } catch (error) {
          logger.log(error)
          Pop.toast('Failed to Post House', 'error')
        }
      }
    }
  }}
</script>


<style lang="scss" scoped>

</style>