/**
 * Created by Thanat on 6/6/2559.
 */

// Source: https://medium.com/all-about-meteorjs/extending-meteor-users-300a6cb8e17f#.kkgk3xb8i
Accounts.onCreateUser(function(options, user){

  // Assigns first and last names to the newly created user object
  user.firstName = options.firstName;
  user.lastName = options.lastName;
  user.dp = options.dp;
  user.bu = options.bu;
  user.gender = options.gender;
  user.position = options.position;
  user.image = options.image;
  // Returns the user object
  return user;
});

