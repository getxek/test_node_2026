import Cars from '../models/Car.js'

export const getAllCars = async () => {
  return await Cars.find()
}

export const getCarsById = async (id) => {
  return await Cars.findById(id)
}

export const createCars = async (CarsData) => {
  const Cars = new Cars(CarsData)
  return await Cars.save()
}

export const updateCars = async (id, CarsData) => {
  return await Cars.findByIdAndUpdate(id, CarsData, {
    new: true,
    runValidators: true,
  })
}

export const deleteCars = async (id) => {
  return await Cars.findByIdAndDelete(id)
}
