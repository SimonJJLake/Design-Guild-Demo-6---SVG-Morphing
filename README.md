# Design-Guild-Demo-6---SVG-Morphing

![keyhole](https://github.com/SimonLTheodo/Design-Guild-Demo-6---SVG-Morphing/assets/113339746/3326f6d2-bd7f-4780-a4a6-903cb0bfa043)

A quick demonstration of a keyhole svg that morphs to fill up the whole screen, demonstrated on https://2authenticators.co/

<img width="1512" alt="image" src="https://github.com/SimonLTheodo/Design-Guild-Demo-6---SVG-Morphing/assets/113339746/97b9bf79-0bbe-4c9b-a806-792fe9ecbaef">


The demo uses 2 different svg paths with the same viewbox size and the same number of points, which were manually drawn in https://yqnn.github.io/svg-path-editor/ 
When the switch is enabled, the path is swapped from the keyhole path to the rectangle path. The effect is animated by applying the transition CSS property to the path itself.

In order to fill the screen with the rectangle path, the svg is set to 100% height and width, and the property `preserveAspectRatio="none"` is applied, to allow sizing with the container div. 
To ensure the keyhole svg isn't stretched, the container div is manually sized according to the svg's original aspect ratio.
