const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_name: { type: String, required: true },
    is_Active: { type: Boolean, default: true },
    created_by: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_ad",
      updatedAt: "updated_ad",
    },
  }
);

class Users extends mongoose.Model {}

schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema);
