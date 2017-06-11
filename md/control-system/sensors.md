# sensors

sensors allow robots to understand their environment. sensors are useful for making smart robots capable of autonomous operations

### implementation
see the [programming section](../programming/overview.md) for implementing sensors

## color sensor

the color sensor can differentiate between **eight colors**. it can detect light intensities. for best results, the color sensor should be mounted at a right angle to the surface it's measuring.

### modes

the color sensor can be used in one of three different modes.

#### color mode

the sensor will recognize the seven following colors:

* black
* blue
* green
* yellow
* red
* white
* brown

#### reflected light intensity mode

this mode measures the intensity of red light reflected on a surface. the scale starts with very dark at 0 and ends with very bright at 100. 

#### ambient light intensity mode

this mode measures light from the environment around the sensor. the same scale used in `reflected light intensity mode` is used for this mode.

### lego quick tips video

<div class="youtube-player" data-id="bvQLrQdYX2U"></div>

## touch sensor

the touch sensor is simply a button that tells the robot if it's pressed or not

## ir sensor

the ir sensor **detects ir** reflected off solid objects. it also detects signals from the remote infrared beacon

### lego quick tips video

<div class="youtube-player" data-id="CFiP0cmURpw"></div>

## gyro

the gyro tells the robot about rotational motion and changes in orientation. the gyro works in the direction of the arrows on the top of the sensor.

### lego quick tips video

<div class="youtube-player" data-id="eRK3ZR0eq6E"></div>

## ultrasonic

the ultrasonic sensor uses **sound waves** to **measure distance**. it can measure between 1cm and 250cm or 1in and 100in with +/- 1cm accuracy

### lego quick tips video

<div class="youtube-player" data-id="jWvkVpfvq6w"></div>