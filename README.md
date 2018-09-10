What Gyro.js does:
==================

- listens for deviceorientation and devicemotion events<br>
- converts and adjusts the measured values so they are the same for every orientation (portrait, landscape<br> left, landscape right)<br>
- updates a `gyro` object with 7 attributes that you can read at any given time:
- Android only (iOS support coming soon)

orientation:
------------

0 : portrait,
90: landscape left,
-90: landscape right.

alpha:
------

value = 0 on load,<br>
values up to 180 by rotating on your left and down to -180 by rotating on your right.

beta:
-----

value: 0 when standing vertically,<br>
values down to -90 when the screen is facing down, up to 90 when it's facing up,<br>
whatever the value of gyro.orientation is.

gamma:
------

value: 0 when standng vertically,<br>
values up to 180 by tilting the device on the left and down to -180 by tilting on the right,<br>
whatever the value of gyro.orientation is.

x:
--

acceleration along the axis from your front (positive values) to your back (negative values),<br>
whatever the value of alpha, beta and gamma are.

y:
--

acceleration along the axis from your left (positive values) to your right (negative values),<br>
whatever the value of alpha, beta and gamma are.

z:
--

acceleration along the axis from your up (positive values) to your down (negative values),<br>
whatever the value of alpha, beta and gamma are.

---

*Note*

The values returned for alpha, beta and gamma are non-standard (specific to Gyro.js).<br>
I've put them this way to make them more dev-friendly.<br>
(see QUIRKS.md for more details about native values)

---

*Note 2*

Gyro.js is < 700b minified, promise-less, and ES6-less.<br>
For more features and less value harmonization, take a look at Full-Tilt + Gyronorm.js (18.1kb minified)