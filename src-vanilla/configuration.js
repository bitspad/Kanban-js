#!/usr/bin/env node
/**
 * Entry point for Kanban
 * 
 */

"use strict";
const pathnames = require('./pathnames');
const fs = require('fs');

function Configuration () {
  //defaults below. The defaults are overridden by this.readSecretsAdmin();
  //which reads config.json from pathnames.path.configurationSecretsAdmin
  this.kanbanGO = {
    dataDirName: ".kanban-go"
  }
  this.myNodes = {};

  this.readSecretsAdmin(); 
  //<- reads json entries from config.json in pathnames.path.configurationSecretsAdmin
  //<- and attaches them to the this object
}

Configuration.prototype.readSecretsAdmin = function() {
  try {
    var contentRead = fs.readFileSync(pathnames.pathname.configurationSecretsAdmin);
    console.log(`Configuration file read: ` + `${pathnames.pathname.configurationSecretsAdmin}`.blue);
    for (var label in contentRead) {
      this[label] = contentRead[label];
    }
  } catch (e) {
    console.log(`Failed to read file: ${pathnames.pathname.configurationSecretsAdmin}. `.red);
  }
}

var configuration = new Configuration();
module.exports = {
  configuration
}