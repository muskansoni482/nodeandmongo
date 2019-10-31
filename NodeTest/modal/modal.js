import mongoose from 'mongoose';
var Scheme = mongoose.Schema;
var UserScheme = new Scheme({
  name: {
    required: true,
    type: String
  },
  detail: {
    userid: {
      type: String
    },
    amount: {
      type: Number
    },
    status: {
      type: String
    }
  },
  email: {
    required: true,
    type: String
  }
});
var User = mongoose.model('User', UserScheme);
export default User;
