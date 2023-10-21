import mongoose from 'mongoose'

const RequestSchema = new mongoose.Schema(
  {
    job_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'job',
      required: true,
    },
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'users',
      required: true,
    },
    company_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'company',
      required: true,
    },
    is_allow: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
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

export const Request = mongoose.model('request', RequestSchema)
