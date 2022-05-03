const router = require("express").Router();

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

module.exports = router;
