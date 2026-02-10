import * as userService from '../services/userService.js'
import * as userTypesService from '../services/userTypesService.js'
import * as departmentsService from '../services/departmentsService.js'
import * as carService from '../services/CarService.js'

class UserController {
  static async usersList(req, res) {
    try {
      const users = await userService.getAllUsers()

      res.render('usersList', { users })
    } catch (error) {
      res.status(500).send('Помилка отримання користувачів')
    }
  }

  static async registerForm(req, res) {
    const id = req.params.id
    let user = null
    if (id) {
      try {
        user = await userService.getUserById(id)
      } catch (error) {
        user = null
      }
    }
    const typesList = await userTypesService.getAllTypes()
    const departments = await departmentsService.getAllDepartments()
    const car = await carService.getAllTest()

    res.render('register', {
      data: user,
      typesList,
      departments,
      car,
      errors: null,
    })
  }

  static async registerUser(req, res) {
    const { email, password, name, type, department, car } = req.validatedUserData
    console.log('----- req.validatedUserData')
    console.log(req.validatedUserData)

    try {
      if (req.params.id) {
        await userService.updateUser(req.params.id, {
          email,
          password,
          name,
          type,
          department,
          car
        })
      } else {
        await userService.createUser({
          email,
          password,
          name,
          type,
          department,
          car
        })
      }
      res.redirect('/users')
    } catch (error) {
      res.status(500).send('Помилка збереження користувача')
    }
  }

  static async deleteUser(req, res) {
    try {
      await userService.deleteUser(req.body.id)
      res.json({ success: true })
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to delete user' })
    }
  }
}

export default UserController
