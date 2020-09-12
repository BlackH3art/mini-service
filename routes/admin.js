const express = require('express');
const router = express.Router();
const News = require('../models/news');


router.all('*', (req, res, next) => {
  if(!req.session.admin) { 
    res.redirect('login');

    return
  } 
  next();
})

router.get('/', (req, res) => {
  // const newsData = new News({
  //   title: 'Title testing',
  //   description: 'description testing is this working?'
  // })

  // newsData.save((err) => {
  //   console.log(err);
  // })


  res.render('admin/index', { title: 'Admin panel' });
});


router.get('/news/add', (req, res) => {

  
  res.render('admin/news-form', { title: 'Create News' });

})




module.exports = router;

// admin 
// OnAe9WRtRUBf2Iom
// mongodb+srv://admin:OnAe9WRtRUBf2Iom@mongocloud.tszms.mongodb.net/<dbname>?retryWrites=true&w=majority