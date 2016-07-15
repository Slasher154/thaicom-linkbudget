/**
 * Created by Thanat on 8/7/2559.
 */

// Convert longitude number into text (positive = E, negative = W)
Template.registerHelper('longitudeNumberToText', (longitude) => {
  if (longitude) {
    if (longitude >= 0 && longitude < 180) {
      return `${longitude} E`;
    } else if (longitude < 0 && longitude > -180) {
      return `${longitude} W`;
    }
  }
});

// Convert latitude number into text (positive = E, negative = W)
Template.registerHelper('latitudeNumberToText', (latitude) => {
  if (latitude) {
    if (latitude >= 0 && latitude < 90) {
      return `${latitude} N`;
    } else if (latitude < 0 && latitude > -90) {
      return `${latitude} S`;
    }
  }
});

// Slugify Template Helpers
Template.registerHelper('slugify', (text) => {
  if (text) {
    return slugify(text);
  }
});

Template.registerHelper('equals', (a1, a2) => {
  return a1 === a2;
});