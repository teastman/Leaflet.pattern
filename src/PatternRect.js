/*
 * L.PatternRect is the implementation of PatternShape for adding Rectangles
 */

L.PatternRect = L.PatternShape.extend({
	options: {
        x: 0,
        y: 0,
        width: 10,
        height: 10,
        // rx: x radius for rounded corners
        // ry: y radius for rounded corners
	},

	_initDom: function () {
		this._initDomElement('rect');
	},

	_updateShape: function () {
        if (!this._dom) { return; }
		this._dom.setAttribute('x', this.options.x);
		this._dom.setAttribute('y', this.options.y);
		this._dom.setAttribute('width', this.options.width);
		this._dom.setAttribute('height', this.options.height);
        if (this.options.rx) { this._dom.setAttribute('rx', this.options.rx); }
		if (this.options.ry) { this._dom.setAttribute('ry', this.options.ry); }
	}
});