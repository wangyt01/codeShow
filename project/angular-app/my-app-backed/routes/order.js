var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var products = [
      {
          title: 'kendo-ui Angular',
          content: 'Kendo UI for Angular Professional Grade Angular UI Components',
          imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557374878878&di=2f632a810feb188d4fed652710fee1cd&imgtype=0&src=http%3A%2F%2F0513sy.com%2Ftemplate%2Fskin6%2Fcn%2Fimages%2Fhome_banner_web-q2.png',
          address:'https://www.telerik.com/kendo-angular-ui'
      }, {
        title: 'jquery',
        content: 'Query is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.',
        imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557374603910&di=88f4a7f8ec7890e2be5eae8851a7b767&imgtype=0&src=http%3A%2F%2Fpic2.orsoon.com%2F2016%2F1110%2F20161110092130685.jpg',
        address:'https://jquery.com/'
    }, {
        title: 'bootstrap',
        content: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.',
        imageUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=541860943,3721876425&fm=26&gp=0.jpg',
        address:'https://getbootstrap.com/'
    }, {
        title: 'angular',
        content: 'One framework,Mobile & desktop',
        imageUrl:'https://angular.io/assets/images/logos/angular/angular.svg',
        address:'https://angular.io/'
    }
  ]
  res.json(products);
  // res.send('respond with a resource');
});

module.exports = router;
