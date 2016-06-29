
L.Pattern.SVG_NS = 'http://www.w3.org/2000/svg';

L.Pattern = L.Pattern.extend({
	_createElement: function (name) {
		return document.createElementNS(L.Pattern.SVG_NS, name);
	},

	_initDom: function () {
		this._dom = this._createElement('pattern');
		if (this.options.className) {
			L.DomUtil.addClass(this._dom, this.options.className);
		}
		this._updateStyle();
	},

	_addDom: function () {
		this._map._defRoot.appendChild(this._dom);
	},

	_removeDom: function () {
		L.DomUtil.remove(this._dom);
	},

	_updateStyle: function () {
		var dom = this._dom,
			options = this.options;

		if (!dom) { return; }

		dom.setAttribute('id', L.stamp(this));
		dom.setAttribute('x', options.x);
		dom.setAttribute('y', options.y);
		dom.setAttribute('width', options.width);
		dom.setAttribute('height', options.height);
		dom.setAttribute('patternUnits', options.patternUnits);
		dom.setAttribute('patternContentUnits', options.patternContentUnits);

		if (options.patternTransform || options.angle) {
			var transform = options.patternTransform ? options.patternTransform + " " : "";
			transform += options.angle ?  "rotate(" + options.angle + ") " : "";
			dom.setAttribute('patternTransform', transform);
		}
		else {
			dom.removeAttribute('patternTransform');
		}

		for (var i in this._shapes) {
			this._shapes[i]._updateStyle();
		}
	}
});

L.Map.include({
	_initDefRoot: function () {
        if (!this._defRoot) {
            if (typeof this.getRenderer === 'function') {
                var renderer = this.getRenderer(this);
                this._defRoot = L.Pattern.prototype._createElement('defs');
                renderer._container.appendChild(this._defRoot);
            } else {
                if (!this._pathRoot) {
                    this._initPathRoot();
                }
                this._defRoot = L.Pattern.prototype._createElement('defs');
                this._pathRoot.appendChild(this._defRoot);
            }
        }
    }
});

if (L.SVG) {
    L.SVG.include({
        _superUpdateStyle: L.SVG.prototype._updateStyle,

        _updateStyle: function (layer) {
            this._superUpdateStyle(layer);

            if (layer.options.fill && layer.options.fillPattern) {
                layer._path.setAttribute('fill', 'url(#' + L.stamp(layer.options.fillPattern) + ")");
            }
        }
    });
}
else {
    L.Path.include({
        _superUpdateStyle: L.Path.prototype._updateStyle,

        _updateStyle: function () {
            this._superUpdateStyle();

            if (this.options.fill && this.options.fillPattern) {
                this._path.setAttribute('fill', 'url(#' + L.stamp(this.options.fillPattern) + ")");
            }
        }
    });
}
