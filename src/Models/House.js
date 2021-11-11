export class House {

  constructor(houseData = {}){
  this.id = houseData.id
  this.price = houseData.price 
  this.description = houseData.description 
  this.levels = houseData.levels 
  this.year = houseData.year 
  this.bedrooms = houseData.bedrooms
  this.bathrooms = houseData.bathrooms
  this.imgUrl = houseData.imgUrl 
  this.creatorId = houseData.creatorId
  this.creator = houseData.creator || {}
  }
}