const express= require("express").Router()
const user= require("../models/User")
const post = require("../models/Post")

router.get("/admin", (req, res, next)=>res.render("admin/profile"))