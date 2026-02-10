import mongoose from 'mongoose'

const car = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Відділення є обов"язковим'],
    minlength: [4, 'Довжина тиму має бути принаймні 4 символи!'],
    trim: true,
  },
 
})

export default mongoose.model('Car', car)
