Leaflet.pattern
===============

Provides the ability to use SVG patterns as backgrounds for [Leaflet](http://leafletjs.com) Paths.

*Requires Leaflet 0.7.0 or newer.*


Usage Examples
==============

* [Circle Pattern](https://teastman.github.io/Leaflet.pattern/pattern-circle.html)
* [Rectangular Pattern](https://teastman.github.io/Leaflet.pattern/pattern-rect.html)
* [Stripe Pattern](https://teastman.github.io/Leaflet.pattern/pattern-stripes.html)
* [Path Pattern](https://teastman.github.io/Leaflet.pattern/pattern-path.html)
* [GeoJson Pattern](https://teastman.github.io/Leaflet.pattern/pattern-geojson.html)

You can define a pattern in 2 ways.
1. Using a pre-defined provided pattern.
2. Creating a custom pattern.


In either case the Pattern object needs to be initialized.  This can be done as follows.

<code>
var pattern = new L.Pattern({options});
</code>

**Options**
All custom and pre-defined patterns can make use of the following options.

* **patternUnits**: {userSpaceOnUse | objectBoundingBox} (default: userSpaceOnUse) - Defines if the x, y, width, and height values are measured against the current user coordinate system, or are in the range of 0.0 - 1.0 as a percentage of the bounding box of their parent element. 
* **patternContentUnits**: {userSpaceOnUse | objectBoundingBox} (default: userSpaceOnUse) - Similar to patternUnits but applies to the shapes within the pattern. 
* **x**: {number} (default: 0) - The x offset of the pattern starting position. 
* **y**: {number} (default: 0) - The y offset of the pattern starting position. 
* **width**: {number} (default: 8) - The width of the pattern. 
* **height**: {number} (default: 8) - The height of the pattern. 
* **patternTransform**: {string} (default: null) - see http://www.w3.org/TR/SVG/coords.html#TransformAttribute. 
* **angle**: {number} (default: null) - a quick way to add rotate(angle) to the patternTransform. 


Pre-Built Patterns
------------------

Pre-Built patterns are just an easier way to use some common patterns.  Pre-Built patterns typically have their own special options, but all can use the base options mentioned above.

### Stripes

<code>
var stripes = new L.StripePattern({options});
stripes.addTo(map);
</code>

**Options**

* **weight**: {number} (default: 4) - The width of the primary stripe. 
* **spaceWeight**: {number} (default: 4) - The width of the secondaty stripe, typically an empty space. 
* **color**: {color} (default: #000000) - The color of the primary stripe. 
* **spaceColor**: {color} (default: #ffffff) - The color of the secondary stripe. 
* **opacity**: {0.0 - 1.0} (default: 1.0) - The opacity of the primary stripe. 
* **spaceOpacity**: {0.0 - 1.0} (default: 0.0) - The opacity of the secondary stripe. 

## Usage

Once the pre-built patterns are defined you can use them by adding them as the fill pattern property of any Path in leaflet.

<code>
 var circle = new L.Circle({LatLng}, {radius}, {
    fillPattern: stripes,
    fillOpacity: 1.0});
circle.addTo(_map);
</code>

Custom Patterns
---------------

To create custom patterns you must first create some shapes to define what the pattern looks like.

### Shapes

**Options**

All shapes have the following options.

* **stroke**: {boolean} (default: true) - Whether to draw along the path or not.
* **color**: {color} (default: 3388ff) - Color of the stroke.
* **weight**: {number} (default: 3) - Width of the stroke.
* **opacity**: {0.0 - 1.0} (default: 1.0) - Opacity of the stroke.
* **lineCap**: {butt | round | square | inherit} (default: round) - Defines how the stroke looks at its ends
* **lineJoin**: {butt | round | square | inherit} (default: round) - Defines how the stroke looks at its corners.
* **dashArray**: {dashArray} (default: null) - Defines the strokes dash pattern. ex: '5, 5'
* **dashOffset**: {number} (default: null) - 
* **fill**: {boolean} (default: false) - Should the shape be filled.
* **fillColor**: {color} (default: same as color) - Color of the fill.
* **fillOpacity**: {0.0 - 1.0} (default: 0.2) - Opacity of the fill.
* **fillRule**: {nonzero | evenodd | inherit} (default: evenodd) - 
* **fillPattern**: {L.Pattern} (default: null) - The pattern to fill the Shape with.

### Path

<code>
    var shape = new L.PatternPath({
        d: 'M10 0 L7 20 L25 20 Z',
        fill: true
    });
</code>

**Options**
* **d**: {path} (default: null) - The SVG path definition.

### Circle

<code>
    var shape = new L.PatternCircle({
        x: 12,
        y: 12,
        radius: 10,
        fill: true
    });
</code>

**Options**
* **x**: {number} (default: 0) - x offset of the circle.
* **y**: {number} (default: 0) - y offset of the circle.
* **radius**: {number} (default: 0) - radius of the circle.

### Rectangle

<code>
    var shape = new L.PatternRect({
        x: 5,
        y: 5,
        width: 40,
        height: 40,
        rx: 10,
        ry: 10,
        fill: true
    });
</code>

**Options**
* **x**: {number} (default: 0) - x offset of the rectangle.
* **y**: {number} (default: 0) - y offset of the rectangle.
* **width**: {number} (default: 10) - width of the rectangle.
* **height**: {number} (default: 10) - height of the rectangle.
* **rx**: {number} (default: null) - x radius for rounded corners
* **ry**: {number} (default: null) - y radius for rounded corners

## Usage

Once the paths are defined you can use them by adding them to a Pattern.

<code>
var pattern = new L.Pattern({options});
pattern.addShape(shape);
pattern.addTo(map);
</code>

Finally you can now use the pattern in the fill pattern property of any Path in leaflet.

<code>
 var circle = new L.Circle({LatLng}, {radius}, {
    fillPattern: pattern,
    fillOpacity: 1.0});
circle.addTo(_map);
</code>
