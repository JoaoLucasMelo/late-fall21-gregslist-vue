import { AppState } from "../AppState"
import { Car } from "../Models/Car"
import { House } from "../Models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class HouseService {
async getAll(){
  const res = await api.get('api/houses')
  logger.log(res.data)
  AppState.houses = res.data.map(h => new House(h))
  logger.log(AppState.houses)
}
async getById(id){
  const res = await api.get('api/houses/'+ id)
  logger.log('by id',res.data)
  AppState.activeHouse = new House(res.data)
}
async create(newHouse){
  const res = await api.post('api/houses', newHouse)
  logger.log(res.data)
  AppState.houses.push(new House(res.data))
  AppState.activeHouse = new House(res.data)
}
async edit(house){
  const res = await api.put('api/houses/'+ house.id, house)
  logger.log(res.data)
  const updatedHouse = new House(res.data)
  AppState.activeHouse = updatedHouse
  const index = AppState.houses.findIndex(h => h.id === updatedHouse.id)
  if (index === -1) {
    AppState.houses.push(updatedHouse)
    return
  }
  AppState.houses.splice(index, 1, updatedHouse)
}
async remove(){
  const res = await api.delete('api/houses/' + AppState.activeHouse.id)
  logger.log(res.data)
  AppState.houses = AppState.houses.filter( h => h.id !== AppState.activeHouse.id)
  AppState.activeHouse = new Car()
}

}
export const houseService = new HouseService()