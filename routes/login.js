import express from "express"

const router = express.Router()

router.get("/login", async (req, res) => {


    res.render("login.njk", {
        title: "Kvitter",
        message: "Lajit",
    })
})

export default router
