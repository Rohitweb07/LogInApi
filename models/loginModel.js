import { Schema, model } from 'mongoose';

const loginSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  graduation: { type: String, required: true }
}, {
  timestamps: true
});

const LoginModel = model('LoginModel', loginSchema);

export default LoginModel;
