/**
 * Created by Thanat on 6/6/2559.
 */

import './notfound.html';

// import these .js and .css to get Gentelella Styles
import '../../../../public/assets/css/custom.css';
import '../../../../public/assets/css/animate.min.css';
import '../../../../public/assets/fonts/css/font-awesome.min.css';
import '../../../../public/assets/css/icheck/flat/green.css';

Template.body.onRendered = function () {
  $('body').addClass('nav-md');
};