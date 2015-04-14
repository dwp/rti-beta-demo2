
var tableData = require('./assets/javascripts/json/test.js');
module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    // add your routes here
    app.post('/RTI/data.html', function (req, res) {
      var tableData = require('./assets/javascripts/json/data_' + req.body.radioGroup + '.js'); 

      res.render('RTI/data.html', {
        data : tableData.getTableData()
      })
    });

    app.post('/RTI/data2.html', function (req, res) {
      var tableData = require('./assets/javascripts/json/data_' + req.body.radioGroup + '.js');

      res.render('RTI/data2.html', {
        data : tableData.getTableData()
      })
    });

    app.post('/RTI/data3.html', function (req, res) {

      var tableData = require('./assets/javascripts/json/data_' + req.body.radioGroup + '.js');
      res.render('RTI/data3.html', {
        data : tableData.getTableData()
      })
    });

    app.get('/RTI/data4.html', function (req, res) {
      res.render('RTI/data4.html');
    });

    app.get('/RTI/data5.html', function (req, res) {
      res.render('RTI/data5.html');
    });

    app.get('/RTI/earnings.html', function (req, res) {
      res.render('RTI/earnings.html');
    });

    app.get('/RTI/earnings2.html', function (req, res) {
      res.render('RTI/earnings2.html');
    });

    app.get('/RTI/setInterest.html', function (req, res) {
      res.render('RTI/setInterest.html');
    });

    app.get('/RTI/interestSet.html', function (req, res) {
      res.render('RTI/interestSet.html');
    });

    app.get('/RTI/testJson.html' , function (req, res) {
      res.render('RTI/testJson.html', {
        data : tableData.getTableData()
      })
    });

  }
};
