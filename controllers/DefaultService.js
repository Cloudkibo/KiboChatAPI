'use strict';

exports.filetransfersCheckpendingfilePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uniqueid (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "filepending" : {
    "date" : "aeiou",
    "path" : "aeiou",
    "file_name" : "aeiou",
    "file_type" : "aeiou",
    "from" : "aeiou",
    "to" : "aeiou",
    "_id" : "aeiou",
    "uniqueid" : "aeiou",
    "file_size" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.filetransfersConfirmdownloadPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uniqueid (String)
  **/
    var examples = {};
  examples['application/json'] = {
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

exports.filetransfersDownloadPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uniqueid (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.filetransfersUploadPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * to (String)
  * from (String)
  * filename (String)
  * filesize (String)
  * filetype (String)
  * uniqueid (String)
  * file (file)
  **/
    var examples = {};
  examples['application/json'] = {
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

exports.groupchatFetchSingleChatPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * unique_id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "msg" : "aeiou",
  "date" : "aeiou",
  "unique_id" : "aeiou",
  "from" : "aeiou",
  "from_fullname" : "aeiou",
  "group_unique_id" : "aeiou",
  "type" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupchatPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * group_unique_id (String)
  * from (String)
  * type (String)
  * msg (String)
  * from_fullname (String)
  * unique_id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "msg" : "aeiou",
  "date" : "aeiou",
  "unique_id" : "aeiou",
  "from" : "aeiou",
  "from_fullname" : "aeiou",
  "group_unique_id" : "aeiou",
  "type" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupchatstatusCheckStatusPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * unique_ids (List)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "chat_unique_id" : "aeiou",
  "user_phone" : "aeiou",
  "read_date" : "aeiou",
  "msg_unique_id" : "aeiou",
  "status" : "aeiou",
  "delivered_date" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupchatstatusGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "chat_unique_id" : "aeiou",
  "user_phone" : "aeiou",
  "read_date" : "aeiou",
  "msg_unique_id" : {
    "msg" : "aeiou",
    "date" : "aeiou",
    "unique_id" : "aeiou",
    "from" : "aeiou",
    "from_fullname" : "aeiou",
    "group_unique_id" : {
      "unique_id" : "aeiou",
      "group_name" : "aeiou",
      "group_icon" : "aeiou",
      "date_creation" : "aeiou"
    },
    "type" : "aeiou"
  },
  "status" : "aeiou",
  "delivered_date" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupchatstatusUpdateStatusPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * chat_unique_id (String)
  * status (String)
  **/
    var examples = {};
  examples['application/json'] = {
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

exports.groupmessagingDownloadIconPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * unique_id (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupmessagingPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * group_name (String)
  * unique_id (String)
  * members (List)
  **/
    var examples = {};
  examples['application/json'] = {
  "unique_id" : "aeiou",
  "group_name" : "aeiou",
  "group_icon" : "aeiou",
  "date_creation" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupmessagingSpecificGroupPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * unique_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "unique_id" : "aeiou",
  "group_name" : "aeiou",
  "group_icon" : "aeiou",
  "date_creation" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupmessagingUploadIconPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * unique_id (String)
  * file (file)
  **/
    var examples = {};
  examples['application/json'] = {
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

exports.groupmessaginguserLeaveGroupPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * group_unique_id (String)
  **/
    var examples = {};
  examples['application/json'] = {
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

exports.groupmessaginguserMygroupsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "member_phone" : "aeiou",
  "isAdmin" : "aeiou",
  "group_unique_id" : {
    "unique_id" : "aeiou",
    "group_name" : "aeiou",
    "group_icon" : "aeiou",
    "date_creation" : "aeiou"
  },
  "display_name" : "aeiou",
  "date_join" : "aeiou",
  "membership_status" : "aeiou",
  "date_left" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupmessaginguserMygroupsmembersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "member_phone" : "aeiou",
  "isAdmin" : "aeiou",
  "group_unique_id" : {
    "unique_id" : "aeiou",
    "group_name" : "aeiou",
    "group_icon" : "aeiou",
    "date_creation" : "aeiou"
  },
  "display_name" : "aeiou",
  "date_join" : "aeiou",
  "membership_status" : "aeiou",
  "date_left" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupmessaginguserMyspecificgroupsmembersPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * unique_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "member_phone" : "aeiou",
  "isAdmin" : "aeiou",
  "group_unique_id" : {
    "unique_id" : "aeiou",
    "group_name" : "aeiou",
    "group_icon" : "aeiou",
    "date_creation" : "aeiou"
  },
  "display_name" : "aeiou",
  "date_join" : "aeiou",
  "membership_status" : "aeiou",
  "date_left" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupmessaginguserPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * group_name (String)
  * group_unique_id (String)
  * members (List)
  **/
    var examples = {};
  examples['application/json'] = {
  "msg" : "aeiou",
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

exports.groupmessaginguserRemoveFromGroupPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * group_unique_id (String)
  * phone (String)
  **/
    var examples = {};
  examples['application/json'] = {
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

exports.groupmessaginguserUpdateRolePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * group_unique_id (String)
  * member_phone (String)
  * makeAdmin (String)
  **/
    var examples = {};
  examples['application/json'] = {
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

exports.userchatPartialchatsyncPOST = function(args, res, next) {
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

exports.userchatUpdateStatusPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * uniqueid (String)
  * status (String)
  * sender (String)
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

exports.usersLogPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * data (String)
  **/
    var examples = {};
  examples['application/json'] = {
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

exports.usersNewuserPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * display_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "date" : "aeiou",
  "phone" : "aeiou",
  "country_prefix" : "aeiou",
  "id" : "aeiou",
  "_id" : "aeiou",
  "display_name" : "aeiou",
  "national_number" : "aeiou",
  "picture" : "aeiou",
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

exports.usersSearchaccountsbyphonePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * phonenumbers (List)
  **/
    var examples = {};
  examples['application/json'] = {
  "available" : [ "aeiou" ],
  "notAvailable" : [ "aeiou" ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersSetstatusmessagePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * status (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "msg" : "aeiou",
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

