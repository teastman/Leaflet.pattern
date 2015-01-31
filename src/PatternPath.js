/*
 * L.PatternPath is the implementation of PatternShape for adding Paths
 */

L.PatternPath = L.PatternShape.extend({
//	options: {
		// d: <svg path code>
//	},

	_initDom: function () {
		this._initDomElement('path');
	},

	_updateShape: function () {
        if (!this._dom) { return; }
		this._dom.setAttribute('d', this.options.d);
	}
});