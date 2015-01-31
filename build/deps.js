var deps = {

	Pattern: {
		src: ['Pattern.js',
				'Pattern.SVG.js',
				'StripePattern.js'],
		desc: 'Pattern definitions'
	},

	Shape: {
		src: ['PatternShape.js',
		      'PatternShape.SVG.js',
		      'PatternPath.js',
              'PatternCircle.js',
              'PatternRect.js'],
		desc: 'Shapes for use in patterns.'
	}
};

if (typeof exports !== 'undefined') {
	exports.deps = deps;
}
