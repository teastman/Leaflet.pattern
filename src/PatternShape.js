/*
 * L.PatternShape is the base class that is used to define the shapes in Patterns.
 */

L.PatternShape = L.Class.extend({

	options: {
		stroke: true,
		color: '#3388ff',
		weight: 3,
		opacity: 1,
		lineCap: 'round',
		lineJoin: 'round',
		// dashArray: null
		// dashOffset: null

		// fill: false
		// fillColor: same as color by default
		fillOpacity: 0.2,
		fillRule: 'evenodd',
		// fillPattern: L.Pattern
	},

	initialize: function (options) {
		L.setOptions(this, options);
	},

	// Called when the parent Pattern get's added to the map,
	// or when added to a Pattern that is already on the map.
	onAdd: function (pattern) {
		this._pattern = pattern;
		if (this._pattern._dom) {
			this._initDom();  // This function is implemented by it's children.
			this._addDom();
		}
	},

	addTo: function (pattern) {
		pattern.addShape(this);
		return this;
	},

	redraw: function () {
		if (this._pattern) {
			this._updateShape();  // This function is implemented by it's children.
		}
		return this;
	},

	setStyle: function (style) {
		L.setOptions(this, style);
		if (this._pattern) {
			this._updateStyle();
		}
		return this;
	},

	setShape: function (shape) {
        this.options = L.extend({}, this.options, shape);
		this._updateShape();
	},
});

L.Pattern.include({
	addShape: function (shape) {
		var id = L.stamp(shape);
		if (this._shapes[id]) { return shape; }
		this._shapes[id] = shape;
		shape.onAdd(this);
	}
});
