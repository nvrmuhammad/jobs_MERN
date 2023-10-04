import mongoose from 'mongoose'

const CompanySchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  recruiter: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  category_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'company_category',
    required: true,
  },
  workers: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users',
    default: null,
  },
  info: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
})

export const Company = mongoose.model('company', CompanySchema)
