"use strict";

var router = require('express').Router();

var Entry = require('../models/entry.model');

router.route('/').get(function (req, res) {
  Entry.find().then(function (entries) {
    return res.json(entries);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
});
router.route('/add').post(function (req, res) {
  var username = req.body.username;
  var title = req.body.title;
  var text = req.body.text;
  var date = Date.parse(req.body.date);
  var newEntry = new Entry({
    username: username,
    title: title,
    text: text,
    date: date
  });
  newEntry.save().then(function () {
    return res.json('Entry added!');
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
});
router.route('/:id').get(function (req, res) {
  Entry.findById(req.params.id).then(function (entry) {
    return res.json(entry);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
});
router.route('/:id')["delete"](function (req, res) {
  Entry.findByIdAndDelete(req.params.id).then(function () {
    return res.json('Entry deleted.');
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
});
router.route('/update/:id').post(function (req, res) {
  Entry.findById(req.params.id).then(function (entry) {
    entry.username = req.body.username;
    entry.title = req.body.title;
    entry.text = req.body.text;
    entry.date = Date.parse(req.body.date);
    entry.save().then(function () {
      return res.json('Entry updated!');
    })["catch"](function (err) {
      return res.status(400).json('Error: ' + err);
    });
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
});
module.exports = router;