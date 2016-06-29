/*
 * L.Pattern is the base class for fill patterns for leaflet Paths.
 */

L.Pattern = L.Class.extend({
	includes: [L.Mixin.Events],

	options: {
		x: 0,
		y: 0,
		width: 8,
		height: 8,
		patternUnits: 'userSpaceOnUse',
		patternContentUnits: 'userSpaceOnUse'
		// angle: <0 - 360>
		// patternTransform: <transform-list>
	},

	_addShapes: L.Util.falseFn,
	_update: L.Util.falseFn,

	initialize: function (options) {
		this._shapes = {};
		L.setOptions(this, options);
	},

	onAdd: function (map) {
        this._map = map.target ? map.target : map;
        this._map._initDefRoot();

		// Create the DOM Object for the pattern.
		this._initDom();

		// Any shapes that were added before this was added to the map need to have their onAdd called.
		for (var i in this._shapes) {
			this._shapes[i].onAdd(this);
		}

		// Call any children that want to add their own shapes.
		this._addShapes();

		// Add the DOM Object to the DOM Tree
		this._addDom();
		this.redraw();

		if (this.getEvents) {
            this._map.on(this.getEvents(), this);
		}
		this.fire('add');
        this._map.fire('patternadd', {pattern: this});
	},

	onRemove: function () {
		this._removeDom();
	},

	redraw: function () {
		if (this._map) {
			this._update();
			for (var i in this._shapes) {
				this._shapes[i].redraw();
			}
		}
		return this;
	},

	setStyle: function (style) {
		L.setOptions(this, style);
		if (this._map) {
			this._updateStyle();
			this.redraw();
		}
		return this;
	},

	addTo: function (map) {
		map.addPattern(this);
		return this;
	},

	remove: function () {
		return this.removeFrom(this._map);
	},

	removeFrom: function (map) {
		if (map) {
			map.removePattern(this);
		}
		return this;
	}
});

L.Map.addInitHook(function () {
	this._patterns = {};
});

L.Map.include({
	addPattern: function (pattern) {
		var id = L.stamp(pattern);
		if (this._patterns[id]) { return pattern; }
		this._patterns[id] = pattern;

		this.whenReady(pattern.onAdd, pattern);
		return this;
	},

	removePattern: function (pattern) {
		var id = L.stamp(pattern);
		if (!this._patterns[id]) { return this; }

		if (this._loaded) {
			pattern.onRemove(this);
		}

		if (pattern.getEvents) {
			this.off(pattern.getEvents(), pattern);
		}

		delete this._patterns[id];

		if (this._loaded) {
			this.fire('patternremove', {pattern: pattern});
			pattern.fire('remove');
		}

		pattern._map = null;
		return this;
	},

	hasPattern: function (pattern) {
		return !!pattern && (L.stamp(pattern) in this._patterns);
	}
});
