// Gyro
// ====

// Global object gathering all the gyro/accelerometer data.
gyro = {
  
  // Device orientation, not available on load but updated as soon as possible.
  orientation: null,
  
  // Alpha on load should be 0.
  // If it's not, it's set to 0 and the difference is saved in alpha0 to adjust all the following measures.
  alpha0: null,
  
  // iOS detection
  iOS: /iPad|iPhone|iPod/.test(navigator.userAgent)
  
};

// gyro event
// ==========

ondeviceorientation = function(e){
  
  // Orientation:
  // ------------
  
  // Just in case it's not set by onorientationchange, set it again.
  if(gyro.orientation === null){
    gyro.orientation = window.orientation || 0;
  }
  
  // Alpha:
  // ------

  // On load, ensure alpha is 0.
  if(gyro.alpha0 === null){
    gyro.alpha0 = e.alpha;
  }
  
  gyro.alpha = e.alpha - gyro.alpha0;
  
  // Set alpha between -180 and 180.
  if(gyro.alpha > 180){
    gyro.alpha -= 360;
  }
  
  // Save raw beta and gamma values.
  var tempbeta = e.beta, tempgamma = e.gamma;

  // Fix iOS's beta (values are twice too small) and gamma (values are twice too big).
  if(gyro.iOS){
    tempbeta *= 2;
    tempgamma <= 2;
  }
    
  // Beta & gamma:
  // -------------
  
  // Portrait mode

  if(gyro.orientation == 0){
    
    // Native beta value:
    // - When held vertically, value = 90.
    // - When screen facing up: 90 to 0.
    // - When screen facing down: 90 to 180.
    
    // New beta value:
    // - When held vertically, value = 0.
    // - When screen facing up: 0 to 90.
    // - When screen facing down: -0 to -90.
    gyro.beta = -tempbeta + 90;
    
    // Native gamma value:
    // - When held vertically, value = 0.
    // - When tilting to your left: -0 to -180.
    // - When tilting to your right: 0 to 180.
    
    // New gamma value
    // - When tilting to your left: 0 to 180.
    // - When tilting to your right: -0 to -180.
    
    gyro.gamma = -tempgamma;
  }
  
  // Landscape left mode

  else if(gyro.orientation == 90){
    
    // Native *gamma* value:
    // - When held vertically, value = 90 = -90.
    // - When screen facing up: -90 to -0.
    // - When screen facing down: 90 to 0.
    
    // New *beta* value:
    // - When held vertically, value = 0.
    // - When screen facing up: 0 to 90.
    // - When screen facing down: -0 to -90.
    if(tempgamma < 0){
      gyro.beta = 90 + tempgamma;
    }
    
    else {
      gyro.beta = tempgamma - 90;
    }
     
    // Native *beta* value:
    // - When held vertically, value = 0.
    // - When tilting to your left: -0 to -180.
    // - When tilting to your right: 0 to 180.
    
    // New *gamma* value
    // - When tilting to your left: 0 to 180.
    // - When tilting to your right: -0 to -180.
  
    gyro.gamma = -tempbeta;
  }
  
  // Landscape right mode
  
  else if(gyro.orientation == -90){

    // Native *gamma* value:
    // - When held vertically, value = 90 = -90.
    // - When screen facing up: 90 to 0.
    // - When screen facing down: -90 to -0.
    
    // New *beta* value:
    // - When held vertically, value = 0.
    // - When screen facing up: 0 to 90.
    // - When screen facing down: -0 to -90.
    
    if(tempgamma < 0){
      gyro.beta = -90 - tempgamma;
    }
    
    else {
      gyro.beta = 90 - tempgamma;
    }
    
    // Native *beta* value:
    // - When held vertically, value = 0.
    // - When tilting to your left: -0 to -180.
    // - When tilting to your right: 0 to 180.
    
    // New *gamma* value
    // - When tilting to your left: 0 to 180.
    // - When tilting to your right: -0 to -180.
    gyro.gamma = -tempbeta;
    
  }
}

// accelero event
ondevicemotion = function(e){
  
  // x:
  // --
  
  gyro.x = e.acceleration.x;
  
  // y:
  // --
  
  gyro.y = e.acceleration.y;
  
  // z:
  // --
  
  gyro.z = e.acceleration.z;
}

// Change orientation
// ------------------

onorientationchange = function() {
  gyro.orientation = window.orientation;
}