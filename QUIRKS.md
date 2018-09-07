Gyroscope
=========

Measures device's rotation around 3 axis

Portrait mode:
--------------

```

 Front view                      Top view
  _______                    
 | _____ |  +---> beta                  
 ||     ||  |     axis           
 ||     ||  v                 
 ||     ||  alpha              ___________
 ||     ||  axis              |___________| +----> beta
 ||     ||                     \\‾‾‾‾‾‾‾//  |      axis
 ||     ||                      \\_____//   v
 ||     ||                       \__o__/    gamma
 ||_____||                                  axis
 |___o___|


```

Landscape mode (left):
----------------------

```

 Front view                           Top view
  _______________                    _______________             
 | ____________  |  +---> gamma     |_______________| +----> gamma axis
 ||            | |  |     axis       \ ========= o /  |      (reversed)
 ||            |o|  v                 ‾‾‾‾‾‾‾‾‾‾‾‾‾   v      
 ||____________| |  alpha                             beta
 |_______________|  axis                              axis


```

Landscape mode (right):
----------------------

```

 Front view                           Top view
  _______________                    _______________             
 |  ____________ |  +---> gamma     |_______________| +----> gamma
 | |            ||  |     axis       \ o ========= /  |      axis
 |o|            ||  v                 ‾‾‾‾‾‾‾‾‾‾‾‾‾   v
 | |____________||  alpha                             beta
 |_______________|  axis                              axis


```

- Alpha should be 0 on load (but it is not reliable on all devices).
  Rotate to your left: value increases. Rotate to your right: value decreases.
  Value loops between 0 and 360.

In landscape mode:

- Beta has values between 180 and -180 (90 to -90 on Safari mobile).
  Value = 0 when the device is held vertically. Tilt to your left: value decreases. Tilt to your right: value increases.

- Gamma is between 90 and -90 (180 to -180 on Safari mobile).
  When the device is held vertically: value = 90 = -90. when screen is facing up/down: value reaches ±0.
  (Portrait mode: facing up = 90 to 0. Landscape left: facing up = -90 to -0. Landscape right: facing up = 90 to 0.)

In portrait mode, beta and gamma are interchanged.

- By default, measures are "relative" (i.e. done along the device's X/Y/Z axis).
  Chrome < 50 did absolute measures by default, and can still do them using the non-standard event ondeviceorientationabsolute.


Accelerometer
=============

Measures the device's acceleration, but along the world's X/Y/Z axis.
(moving the phone "up" in the air will update the up/down acceleration axis, whatever the angle of the phone)

- accelerationIncludingGravity.x / y / z include earth's gravity. 
- acceleration.x / y / z shouldn't include Earth's gravity (some old devices still do).
- Earth's gravity is measured as a positive or negative number (~10 m/s²) depending on the devices and their orientation.
- On some devices, the object returned by the ondevicemotion event doesn't contain some expected fields like acceleration.

In portrait mode:

- x: 0 if immobile. Negative if moving right. Positive if moving left.
- y: 0 if immobile. Negative if moving up. Positive if moving down.
- z: 0 if immobile. Negative if moving front. Positive if moving back.

In landscape left mode:

- x: 0 if immobile. Negative if moving front. Positive if moving back.
- y: 0 if immobile. Negative if moving right. Positive if moving right.
- z: 0 if immobile. Negative if moving up. Positive if moving down.

In landscape right mode:

- x: 0 if immobile. Negative if moving back. Positive if moving front.
- y: 0 if immobile. Negative if moving right. Positive if moving left.
- z: 0 if immobile. Negative if moving down. Positive if moving up.


Interesting reads:
==================
- http://www.asterixcreative.com/blog/mobile-gyroscope-with-javascript-and-quaternions-programming-tutorial-part-1/
- https://dev.opera.com/articles/w3c-device-orientation-usage/
- Gyronorm.js documentation
