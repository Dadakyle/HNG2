import mongoose from 'mongoose';

const personSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Person = mongoose.models.Person || mongoose.model('Person', personSchema);

export default Person;
