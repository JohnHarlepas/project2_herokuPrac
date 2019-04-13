var db = require("../models");

module.exports = function(app) {


 


  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};




module.exports = function(app1) {


  // Get all examples
  app1.get("/api/playbooks", function(req, res) {
    db.Playbooks.findAll({}).then(function(dbPlaybook) {
      res.json(dbPlaybook);
    });
  });

  // Create a new example
  app1.post("/api/playbooks", function(req, res) {
    db.Playbooks.create(req.body).then(function(dbPlaybook) {
      res.json(dbPlaybook);
    });
  });

  // Delete an example by id
  app1.delete("/api/playbooks/:id", function(req, res) {
    db.Playbooks.destroy({ where: { id: req.params.id } }).then(function(dbPlaybook) {
      res.json(dbPlaybook);
    });
  });
};

