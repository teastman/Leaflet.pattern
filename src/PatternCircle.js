/*
 * L.PatternCircle is the implementation of PatternShape for adding Circles
 */

L.PatternCircle = L.PatternShape.extend({
//	options: {
		// x: center x coordinate
		// y: center y coordinate
		// radius: radius
//	},

	setShape: function (shape) {
		this.options.x = shape.x;
		this.options.y = shape.y;
		this.options.radius = shape.radius;
		this._updateShape();
	},

	_initDom: function () {
		this._initDomElement('circle');
	},

	_updateShape: function () {
		this._dom.setAttribute('cx', this.options.x);
		this._dom.setAttribute('cy', this.options.y);
		this._dom.setAttribute('r', this.options.radius);
	}
});