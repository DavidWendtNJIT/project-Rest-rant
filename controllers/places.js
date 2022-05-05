const router = require("express").Router();
const places = require("../models/places.js");

//GET
router.get("/", (req, res) => {
  res.render("../views/places/index", { places });
});
router.get("/new", (req, res) => {
  res.render("../views/places/new");
});
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", {place: places[id], id});
  }
});


router.get("/:id/edit", (req, res) => {
  res.render("../views/places/editForm");
});

//DELETE
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send(`..views/places/${req.params.id}/rant/${req.params.rantId}`);
});

// POST 

router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/300/300";
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
  res.send(`..views/places/${req.params.id}/rant`);
});

//PUT
router.put("/:id", (req, res) => {
  res.send(`..views/places/${req.params.id}`);
});

module.exports = router;
