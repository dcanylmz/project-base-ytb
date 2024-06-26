const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    level: String,
    email: { type: String, required: true },
    location: String,
    proc_type: String,
    log: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_ad",
      updatedAt: "updated_ad",
    },
  }
);

class AuditLogs extends mongoose.Model {}

schema.loadClass(AuditLogs);
module.exports = mongoose.model("audit_logs", schema);
