const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_id: { type: Boolean, default: true },
    user_id: { type: Boolean, default: true },
  },
  {
    timestamps: {
      createdAt: "created_ad",
      updatedAt: "updated_ad",
    },
  }
);

class UserRoles extends mongoose.Model {}

schema.loadClass(UserRoles);
module.exports = mongoose.model("user_roles", schema);
