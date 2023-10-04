import mongoose from 'mongoose'

const CompanyCategorySchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
})

export const CompanyCategory = mongoose.model(
  'company_category',
  CompanyCategorySchema
)
