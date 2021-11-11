import { AppState } from "../AppState"
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

}
export const houseService = new HouseService()