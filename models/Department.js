import mongoose from 'mongoose'

const department = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Відділення є обов"язковим'],
    minlength: [4, 'Довжина тиму має бути принаймні 4 символи!'],
    trim: true,
  },
  score: Number,
})

export default mongoose.model('Department', department)
