import mongoose from 'mongoose'

const CompanySchema = new mongoose.Schema({
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
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
  workers: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'users',
    },
    { default: null },
  ],
  info: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  is_allow: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
  avatar: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
})

// {
//   timestamps: {
//     createdAt: 'created_at',
//     updatedAt: 'updated_at',
//   },
//   versionKey: false,
// }

export const Company = mongoose.model('company', CompanySchema)
