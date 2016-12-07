'use strict';

exports.geographiesGeo_idMediaRecentGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * geoId (Integer)
  * count (Integer)
  * min_id (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.userchatAlluserchatPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user1 (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "msg" : [ {
    "msg" : "aeiou",
    "date" : "aeiou",
    "date_server_sent" : "aeiou",
    "owneruser" : "aeiou",
    "fromFullName" : "aeiou",
    "type" : "aeiou",
    "file_type" : "aeiou",
    "from" : "aeiou",
    "_id" : "aeiou",
    "to" : "aeiou",
    "uniqueid" : "aeiou",
    "date_server_received" : "aeiou",
    "status" : "aeiou"
  } ],
  "status" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.userchatGetsinglechatPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uniqueid (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "msg" : [ {
    "msg" : "aeiou",
    "date" : "aeiou",
    "date_server_sent" : "aeiou",
    "owneruser" : "aeiou",
    "fromFullName" : "aeiou",
    "type" : "aeiou",
    "file_type" : "aeiou",
    "from" : "aeiou",
    "_id" : "aeiou",
    "to" : "aeiou",
    "uniqueid" : "aeiou",
    "date_server_received" : "aeiou",
    "status" : "aeiou"
  } ],
  "status" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.userchatPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user1 (String)
  * user2 (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "msg" : [ {
    "msg" : "aeiou",
    "date" : "aeiou",
    "date_server_sent" : "aeiou",
    "owneruser" : "aeiou",
    "fromFullName" : "aeiou",
    "type" : "aeiou",
    "file_type" : "aeiou",
    "from" : "aeiou",
    "_id" : "aeiou",
    "to" : "aeiou",
    "uniqueid" : "aeiou",
    "date_server_received" : "aeiou",
    "status" : "aeiou"
  } ],
  "status" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.userchatSave2POST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * to (String)
  * from (String)
  * date (String)
  * fromFullName (String)
  * msg (String)
  * uniqueid (String)
  * type (String)
  * file_type (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "uniqueid" : "aeiou",
  "status" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

