const express = require("express");
const router = express.Router();

const Roles = require("../db/models/Roles");
const RolePriveleges = require("../db/models/RolePriveleges");
const CustomError = require("../lib/Error");
const Response = require("../lib/Response");
const Enum = require("../config/Enum");

router.get("/", async (req, res) => {
  try {
    let roles = await Roles.find({});

    res.json(Response.successResponse(roles));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
  }
});

router.post("/add", async (req, res) => {
  let body = req.body;
  try {
    if (!body.role_name)
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation Error!",
        "role_name field must be filled"
      );
    let role = new Roles({
      role_name: body.role_name,
      is_active: true,
      created_by: req.user?.id,
    });

    await role.save();

    res.json(Response.successResponse({ success: true }));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
  }
});

router.post("/update", async (req, res) => {
  let body = req.body;
  try {
    if (!body._id)
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation Error!",
        "role_name field must be filled"
      );
    let updates = {};
    if (body.role_name) updates.role_name = body.role_name;

    if (typeof body.is_active === "boolean") updates.is_active = body.is_active;

    await Roles.updateOne({ _id: body._id }, updates);

    res.json(Response.successResponse({ success: true }));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
  }
});

router.post("/delete", async (req, res) => {
  let body = req.body;
  try {
    if (!body._id)
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation Error!",
        "role_name field must be filled"
      );
    await Roles.remove({ _id: body._id });

    res.json(Response.successResponse({ success: true }));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
  }
});

module.exports = router;
