import UserType from '../models/UserType.js'

export const getAllTypes = async () => {
  return await UserType.find()
}

export const getTypeById = async (id) => {
  return await UserType.findById(id)
}

export const createType = async (typeData) => {
  const userType = new UserType(typData)
  return await userType.save()
}

export const updateUserType = async (id, typeData) => {
  return await UserType.findByIdAndUpdate(id, typeData, {
    new: true,
    runValidators: true,
  })
}

export const deleteType = async (id) => {
  return await UserType.findByIdAndDelete(id)
}
