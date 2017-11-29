const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Email = require('../models/email');
const multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
var upload = multer({ storage: storage });


// get a list of projects
router.get('/projects', function (req, res, next) {
    Project.find({}).then(function (projects) {
        res.send(projects);
    });
});
// add new project
router.post('/projects', upload.any(), function (req, res, next) {
    if (req.files) {
        req.files.forEach(function(item) {
            if (req.body[item.fieldname] && req.body[item.fieldname] != 'undefined') {
                req.body[item.fieldname].push(item.filename)
            } else {
                req.body[item.fieldname] = [item.filename];
            }
        });
    }

    Project.create(req.body).then(function (project) {
        res.send(project);
    }).catch(next);
});
// get one project
router.get('/projects/:id', function (req, res, next) {
    Project.findOne({_id: req.params.id}).then(function (project) {
        res.send(project);
    });
});
// update project
router.put('/projects/:id', function (req, res, next) {
    Project.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
        Project.findOne({_id: req.params.id}).then(function (project) {
            res.send(project);
        })
    });
});
// delete project
router.delete('/projects/:id', function (req, res, next) {
    Project.findByIdAndRemove({_id: req.params.id}).then(function (project) {
        res.send(project);
    });
});

// send email
router.post('/email', function (req, res, next) {
    Email.create(req.body).then(function (email) {
        res.send(email);
    }).catch(next);
    // res.send(req.body);
})
module.exports = router;