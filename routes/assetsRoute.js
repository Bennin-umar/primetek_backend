const express = require("express")
const { getAllAssets, getAnAssets, removeAssets } = require("../controllers/assetsControllers")

const router = express.Router()

router.route("/").get(getAllAssets)


module.exports =router