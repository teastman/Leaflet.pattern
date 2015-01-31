/*
 * L.PatternCircle is the implementation of PatternShape for adding Circles
 */

L.PatternCircle = L.PatternShape.extend({
	options: {
        x: 0,
        y: 0,
        radius: 0
	},

	_initDom: function () {
		this._initDomElement('circle');
	},

	_updateShape: function () {
        if (!this._dom) { return; }
		this._dom.setAttribute('cx', this.options.x);
		this._dom.setAttribute('cy', this.options.y);
		this._dom.setAttribute('r', this.options.radius);
	}
});