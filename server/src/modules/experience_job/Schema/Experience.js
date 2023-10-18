import mongoose from 'mongoose'

const ExperienceSchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
})

export const Experience = mongoose.model('experience', ExperienceSchema)
