/**
 * Main application routes
 */



'use strict';

var errors = require('./components/errors');


var auth = require('./auth/auth.service');
var config = require('./config/environment');
var configuration = require('./api/configuration/configuration.model');

// Connect to BrainTree
var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "dcmt47r72j9fj7r7",
  publicKey: "qdpwymhgxrxtz5j3",
  privateKey: "00ddc61c89fedf69496eaef559f0e11b"
});

module.exports = function(app) {

  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/contactslist', require('./api/contactslist'));
  app.use('/api/userchat', require('./api/userchat'));
  app.use('/api/meetingchat', require('./api/meetingchat'));
  app.use('/api/feedback', require('./api/feedback'));
  app.use('/api/configurations', require('./api/configuration'));
  app.use('/api/groupcall', require('./api/groupcall'));
  app.use('/api/companyaccounts', require('./api/companyaccount'));
  app.use('/api/filetransfers', require('./api/filetransfers'));
  app.use('/api/groupmessaging', require('./api/groupmessaging'));
  app.use('/api/groupmessaginguser', require('./api/groupmessaginguser'));
  app.use('/api/groupchat', require('./api/groupchat'));
  app.use('/api/groupchatstatus', require('./api/groupchatstatus'));

  app.use('/auth', require('./auth'));

  app.route('/client_token_braintree')
    .get(function(req,res){
      gateway.clientToken.generate({}, function (err, response) {
        if (err) return console.log(err);
        //console.log(response);
        res.send(response.clientToken);
      });
    });

  app.route('/checkout_braintree')
    .post(function(req, res){
      console.log(req.body)
      gateway.transaction.sale({
        amount: '10.00',
        paymentMethodNonce: req.body.payment_method_nonce,
      }, function (err, result) {
        console.log(result);
        res.redirect('/');
      });
    });



  // in NodeJS/Express (server)
  app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
    next();

  });


  app.route('/feedback')
    .post(function(req, res) {

      console.log('=====================================================');
      console.log('Feedback \n: ');
      console.log(req.body)
      console.log('=====================================================');

      configuration.findOne({}, function(err, gotConfig) {
        var sendgrid = require('sendgrid')(gotConfig.sendgridusername, gotConfig.sendgridpassword);

        var email     = new sendgrid.Email({
          to:       'support@cloudkibo.com',
          from:     'support@cloudkibo.com',
          subject:  req.body.subject,
          text:     'Welcome to KiboSupport'
        });

        email.setHtml('<body style="min-width: 80%;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;margin: 0;padding: 0;direction: ltr;background: #f6f8f1;width: 80% !important;"><table class="body", style="width:100%"> ' +
        '<tr> <td class="center" align="center" valign="top"> <!-- BEGIN: Header --> <table class="page-header" align="center" style="width: 100%;background: #1f1f1f;"> <tr> <td class="center" align="center"> ' +
        '<!-- BEGIN: Header Container --> <table class="container" align="center"> <tr> <td> <table class="row "> <tr>  </tr> </table> <!-- END: Logo --> </td> <td class="wrapper vertical-middle last" style="padding-top: 0;padding-bottom: 0;vertical-align: middle;"> <!-- BEGIN: Social Icons --> <table class="six columns"> ' +
        '<tr> <td> <table class="wrapper social-icons" align="right" style="float: right;"> <tr> <td class="vertical-middle" style="padding-top: 0;padding-bottom: 0;vertical-align: middle;padding: 0 2px !important;width: auto !important;"> ' +
        '<p style="color: #ffffff">Feedback from a visitor</p> </td></tr> </table> </td> </tr> </table> ' +
        '<!-- END: Social Icons --> </td> </tr> </table> </td> </tr> </table> ' +
        '<!-- END: Header Container --> </td> </tr> </table> <!-- END: Header --> <!-- BEGIN: Content --> <table class="container content" align="center"> <tr> <td> <table class="row note"> ' +
        '<tr> <td class="wrapper last"> <p> Hello Owner, <br> '+ req.body.name +' has sent you a feedback.<p> <ul> <li>Visitor Name: '+req.body.name+'</li> ' +
        '<li>Visitor Email: '+ req.body.email+' </li><li>Visitor Feedback: '+ req.body.message+' </li> </ul> </p>  <!-- BEGIN: Note Panel --> <table class="twelve columns" style="margin-bottom: 10px"> ' +
        '<tr> <td class="panel" style="background: #ECF8FF;border: 0;padding: 10px !important;"> </td> <td class="expander"> </td> </tr> </table>  <!-- END: Note Panel --> </td> </tr> </table><span class="devider" style="border-bottom: 1px solid #eee;margin: 15px -15px;display: block;"></span> <!-- END: Disscount Content --> </td> </tr> </table> </td> </tr> </table> <!-- END: Content --> <!-- BEGIN: Footer --> <table class="page-footer" align="center" style="width: 100%;background: #2f2f2f;"> <tr> <td class="center" align="center" style="vertical-align: middle;color: #fff;"> <table class="container" align="center"> <tr> <td style="vertical-align: middle;color: #fff;"> <!-- BEGIN: Unsubscribet --> <table class="row"> <tr> <td class="wrapper last" style="vertical-align: middle;color: #fff;"><span style="font-size:12px;"><i>This ia a system generated email and reply is not required.</i></span> </td> </tr> </table> <!-- END: Unsubscribe --> ' +
        '<!-- END: Footer Panel List --> </td> </tr> </table> </td> </tr> </table> <!-- END: Footer --> </td> </tr></table></body>')
        sendgrid.send(email, function(err, json) {
          if (err) { return console.log(err); }

          return res.send({status: 'success', msg: 'Email has been sent'});

        });
      })

    });




  /*
  app.route('/socket.io/socket.io.js')
	.get(function(req, res){
		res.sendfile('socket.io.js', {root: config.root + '/node_modules/socket.io-client'});
	});

   */

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);



  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.redirect('/');//res.render('404');
    })
    .post(function(req, res) {
      res.redirect('/');//res.render('404');
    });



};
