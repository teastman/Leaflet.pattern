/*
 * L.StripePattern is an implementation of Pattern that creates stripes.
 */

L.StripePattern = L.Pattern.extend({

	options: {
		weight: 4,
		spaceWeight: 4,
		color: '#000000',
		spaceColor: '#ffffff',
		opacity: 1.0,
		spaceOpacity: 0.0
	},

	_addShapes: function () {
		this._stripe = new L.PatternPath({
			stroke: true,
			weight: this.options.weight,
			color: this.options.color,
			opacity: this.options.opacity
		});

		this._space = new L.PatternPath({
			stroke: true,
			weight: this.options.spaceWeight,
			color: this.options.spaceColor,
			opacity: this.options.spaceOpacity
		});

		this.addShape(this._stripe);
		this.addShape(this._space);

		this._update();
	},

	_update: function () {
		this._stripe.options.d = 'M0 ' + this._stripe.options.weight / 2 + ' H ' + this.options.width;
		this._space.options.d = 'M0 ' + (this._stripe.options.weight + this._space.options.weight / 2) + ' H ' + this.options.width;
	},

	setStyle: L.Pattern.prototype.setStyle
});

L.stripePattern = function (options) {
	return new L.StripePattern(options);
};