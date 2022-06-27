const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Pizzeria } = require("../../db/models/pizzeria");


const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
      const pizzerias = await Pizzeria.findAll({});
      return res.json(pizzerias);
    })
  );

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const pizzeria = await Pizzeria.findByPk(req.params.id);
    return res.json(pizzeria);
  })
);

module.exports = router;