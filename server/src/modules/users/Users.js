import mongoose from 'mongoose'

const UsersSchema = new mongoose.Schema({
  first_name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  last_name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  username: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  age: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },
  resume: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  portfolio: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
})

export const Users = mongoose.model('users', UsersSchema)
