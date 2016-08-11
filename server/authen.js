/**
 * Created by Thanat on 23/5/2559.
 */
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  'account.createUser'(username, password) {
    check(username, String);
    check(password, String);

    let dummyPassword = 'ecce1234';

    Accounts.createUser({
      username: username,
      password: dummyPassword,
    });

    return true;
  },
  'account.authenticate'(username, password) {

    // Implement authentication with Thaicom Employee Database here

    //If username/password is correct, check if user exists in the application database.
    // If yes, log this user in.
    // Otherwise, create new user from the given data from Thaicom employee database in our app, then log this user in.

    let employee = ThaicomAuthenticated(username, password);

    // TODO: Change this when APIkey is obtained
    if (employee) {

      // Check if username is already in our database
      let user = Meteor.users.findOne({ username: employee.username });

      if (user) {
        // Update user info to our app (in case their information has been changed
        console.log(`${user.fullName()} is logged in.`);

        // Update other info just in case there is a change in BU, DP, etc.
        UpdateUser(user._id, employee);

      } else {
        console.log('This is new user');

        // We put the dummy password here just to trick the Meteor user/password system
        let dummyPassword = 'ecce1234';
        employee.password = dummyPassword;

        const newUser = Accounts.createUser(employee);

        // Add Roles for this new user
        console.log(`${employee.firstName} ${employee.lastName} is now registered to the system with ID: ${newUser}`);

        // Make a member of DP-CS a global admin
        if (employee.dp === 'DP-CS') {
          Roles.addUsersToRoles(newUser, 'admin', Roles.GLOBAL_GROUP);
        }

        // UpdateUser(newUser, employee);

      }
      return true;
    } else {
      throw new Meteor.Error(403, 'Username/password is incorrect.');
    }
  },
});

// function to connect Thaicom open authentication database

function ThaicomAuthenticated(username, password){

  const apiKey = Meteor.settings.tcOAuth.apiKey; // Get API key from settings file
  const sysName = 'FRQP';
  const ipAddress = '172.18.200.73';

  const url = 'https://thcom2.thaicom.net/authservice/AuthenticationSystem.asmx?wsdl';
  let args = { param: {
    UserName: username,
    Password: password,
    System: sysName,
    IP_Address: ipAddress,
    APIKey: apiKey,
  },
  };
  /*
  const domeEmployee = {
    username: '37090',
    bu: 'BU-SEN',
    dp: 'DP-CS',
    email: 'thanatv@thaicom.net',
    gender: 'M',
    firstName: 'Thanat',
    lastName: 'Varathon',
    position: 'EN',
  };
  */
  try {
    var client = Soap.createClient(url);
    console.log(client.GetAuthen(args));
    var result = client.GetAuthen(args).GetAuthenResult;

    // result.GetAuthenResult returns TRUE if authen is success
    if (result.IsSuccess) {
      let empProfile = result.EmpProfile;
      let profile = {
        username: username,
        bu: empProfile.Bu,
        dp: empProfile.Dp,
        email: empProfile.Email,
        gender: empProfile.Gender,
        firstName: empProfile.FirstName,
        lastName: empProfile.LastName,
        position: empProfile.Position,
        image: empProfile.Image,
      };
      return profile;

    } else {
      // Return false to indicate that authen fails
      return false;
    }
  }
  catch (err) {
    if(err.error === 'soap-creation') {
      console.log('SOAP Client creation failed');
    }
    else if (err.error === 'soap-method') {
      console.log('SOAP Method call failed');
    }

  }

  /*
  if (username === '37090') {
    // Create a clone of Dome Employee Object
    //let employeeObject = Object.assign({}, employeeProfile);
    let employeeObject = Object.assign({}, domeEmployee);


    employeeObject.username = username;
    employeeObject.password = password;
    return employeeObject;
  }
  */
  return false;
}

function UpdateUser(userId, employee) {
  
  let updateInfo = {};
  updateInfo.firstName = employee.firstName;
  updateInfo.lastName = employee.lastName;
  updateInfo.dp = employee.dp;
  updateInfo.bu = employee.bu;
  updateInfo.gender = employee.gender;
  updateInfo.position = employee.position;
  updateInfo.image = employee.image;

  Meteor.users.update({ _id: userId }, { $set: updateInfo });
}

