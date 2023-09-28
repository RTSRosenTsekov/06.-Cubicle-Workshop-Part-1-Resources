const router = require('express').Router();

  router.get('/create' , (req,res)=>{
    res.render("create");
    // res.send("Hello from cubes");
  });
  module.exports = router;