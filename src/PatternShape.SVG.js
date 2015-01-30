
L.PatternShape.SVG_NS = 'http://www.w3.org/2000/svg';

L.PatternShape = L.PatternShape.extend({
	_createElement: function (name) {
		return document.createElementNS(L.PatternShape.SVG_NS, name);
	},

	_initDom: L.Util.falseFn,
	_updateShape: L.Util.falseFn,

	_initDomElement: function (type) {
		this._dom = this._createElement(type);
		if (this.options.className) {
			L.DomUtil.addClass(this._dom, this.options.className);
		}
		this._updateStyle();
	},

	_addDom: function () {
		this._pattern._dom.appendChild(this._dom);
	},

	_updateStyle: function () {
		var dom = this._dom,
			options = this.options;

		if (!dom) { return; }

		if (options.stroke) {
			dom.setAttribute('stroke', options.color);
			dom.setAttribute('stroke-opacity', options.opacity);
			dom.setAttribute('stroke-width', options.weight);
			dom.setAttribute('stroke-linecap', options.lineCap);
			dom.setAttribute('stroke-linejoin', options.lineJoin);

			if (options.dashArray) {
				dom.setAttribute('stroke-dasharray', options.dashArray);
			} else {
				dom.removeAttribute('stroke-dasharray');
			}

			if (options.dashOffset) {
				dom.setAttribute('stroke-dashoffset', options.dashOffset);
			} else {
				dom.removeAttribute('stroke-dashoffset');
			}
		} else {
			dom.setAttribute('stroke', 'none');
		}

		if (options.fill) {
			if (options.fillPattern) {
				dom.setAttribute('fill', 'url(#' + L.stamp(options.fillPattern) + ")");
			}
			else {
				dom.setAttribute('fill', options.fillColor || options.color);
			}
			dom.setAttribute('fill-opacity', options.fillOpacity);
			dom.setAttribute('fill-rule', options.fillRule || 'evenodd');
		} else {
			dom.setAttribute('fill', 'none');
		}

		dom.setAttribute('pointer-events', options.pointerEvents || (options.interactive ? 'visiblePainted' : 'none'));
	}
});

