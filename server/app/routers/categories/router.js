const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
const {
  browseCategories,
  readCategory,
} = require("../../controllers/categoryActions");
/* ************************************************************************* */

/* Here you code */
router.get("/", browseCategories);
router.get("/:id", readCategory);

/* ************************************************************************* */

module.exports = router;
