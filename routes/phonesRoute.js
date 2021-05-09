const express = require("express");

const {
  createPhone,
  getAllPhones,
  getSinglePhone,
  updatePhone,
  deletePhone,
} = require("../controllers/phonesControllers");

const router = express.Router();

router.route("/").post(createPhone).get(getAllPhones);
router
  .route("/:_id")
  .get(getSinglePhone)
  .put(updatePhone)
  .delete(deletePhone);

module.exports = router;
