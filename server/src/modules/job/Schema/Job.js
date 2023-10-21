import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    location: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    requirements: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    experience_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'experience',
      required: true,
    },
    salary: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    company_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'company',
      required: true,
    },
    is_active: {
      type: mongoose.SchemaTypes.Boolean,
      default: true,
    },
  },

  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    versionKey: false,
  }
)

export const Job = mongoose.model('job', JobSchema)
