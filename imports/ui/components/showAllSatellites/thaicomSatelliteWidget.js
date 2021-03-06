/**
 * Created by Thanat on 8/7/2559.
 */

import './thaicomSatelliteWidget.html';

Template.thaicomSatelliteWidget.helpers({

  // Return satellite image url from the given satellite name.
  // All satellite images are stored in assest/images folder with slugified name
  imageAttributes(satelliteName) {
    return {
      src: `/assets/images/satellites/${satelliteName}.png`,
      alt: `${satelliteName}`,
      class: 'img-responsive',
    };
  },
});