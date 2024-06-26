const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    permission: { type: String },
    role_id: { type: Boolean, default: true },
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

class RolePriveleges extends mongoose.Model {}

schema.loadClass(RolePriveleges);
module.exports = mongoose.model("role_priveleges", schema);
