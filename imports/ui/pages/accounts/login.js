/**
 * Created by Thanat on 12/5/2559.
 */

import './login.html';
import { FlowRouter } from 'meteor/kadira:flow-router';

//Source: Roll your own authentication => https://themeteorchef.com/recipes/roll-your-own-authentication/

let template;

Template.login.onRendered(function(){
  handleAuthentication({
    form: '#login-form',
    template: Template.instance(),
  });
});


Template.login.events({
  'submit form'(event) {
    event.preventDefault();
    console.log('Form submitted');

    // Get username and password
    const username = event.target.username.value;
    const password = event.target.password.value;

  },
});

let handleAuthentication = function(options) {
  template = options.template;
  _validate( options.form );
}

let _validate = function(form) {
  $( form ).validate(validation());
};

let validation = function() {
  return {
    rules: {
      username: {
        required: true,
       },
      password: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Please input username.",
      },
      password: {
        required: "Please input password."
      }
    },
    submitHandler() { _handleAuth(); }
  };
};

let _handleAuth = function() {

  let username = template.find('[name="username"]').value,
    password = template.find ('[name="password"]').value;

  //console.log('Username = ' + username);

  Meteor.call('account.authenticate', username, password, (err, res) => {
    if(err) {
      // $('.error').text(err.reason).show();
      alert(err.reason);
    } else {
      //console.log('authen success');
      let dummyPassword = 'ecce1234';
      Meteor.loginWithPassword(username, dummyPassword, function(err,res){
        if ( err ) {

        } else {
          //console.log('login success');
          const redirect = Session.get('redirectAfterLogin');
          if(redirect){
            FlowRouter.go(redirect);
          } else {
            FlowRouter.go('/');
          }
        }
      });
    }
  });
};

