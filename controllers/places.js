const router = require("express").Router();
// const places = require("../models/places.js");

//GET
router.get("/", (req, res) => {
    let places = [
      {
        name: "H-Thai-ML",
        city: "Seattle",
        state: "WA",
        cuisines: "Thai, Pan-Asian",
        pic: "/images/rest2.jpg",
        className: "rest2",
      },
      {
        name: "Coding Cat Cafe",
        city: "Phoenix",
        state: "AZ",
        cuisines: "Coffee, Bakery",
        pic: "/images/rest1.jpg",
      },
    ];
  res.render("../views/places/index", { places });
});
router.get("/new", (req, res) => {
  res.render("../views/places/new");
});
router.get("/:id", (req, res) => {
  res.render("../views/places/showDetails");
});
router.get("/:id/edit", (req, res) => {
  res.render("../views/places/editForm");
});

//DELETE
router.delete("/:id", (req, res) => {
  res.send(`This Is DELETE/places/${req.params.id}`);
});
router.delete("/:id/rant/:rantId", (req, res) => {
  res.send(`This Is DELETE/places/${req.params.id}/rant/${req.params.rantId}`);
});

// POST 

router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

router.post("/:id/rant", (req, res) => {
  res.send(`This Is POST/places/${req.params.id}/rant`);
});

//PUT
router.put("/:id", (req, res) => {
  res.send(`This Is PUT/places/${req.params.id}`);
});

module.exports = router;
