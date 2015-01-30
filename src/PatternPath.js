/*
 * L.PatternPath is the implementation of PatternShape for adding Paths
 */

L.PatternPath = L.PatternShape.extend({
//	options: {
		// d: <svg path code>
//	},

	setShape: function (shape) {
		this.options.d = shape;
		this._updateShape();
	},

	_initDom: function () {
		this._initDomElement('path');
	},

	_updateShape: function () {
		this._dom.setAttribute('d', this.options.d);
	}
});