const express = require("express");
const contactController = require ("../controller/contact");

const router = express.Router();
// const {contacts} = require ("./add")

router.get("/", contactController.gethomeContact)
// router.get("/contact/:id", contactController)
module.exports = router;