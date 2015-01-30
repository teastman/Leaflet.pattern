describe('onAdd', function () {
	var map, div;

	beforeEach(function () {
		div = document.createElement('div');
		div.style.width = '200px';
		div.style.height = '200px';
		document.body.appendChild(div);

		map = L.map(div);

		map.fitBounds(new L.LatLngBounds([
			[1, 1],
			[2, 2]
		]));
	});

	afterEach(function () {
		document.body.removeChild(div);
	});

	it('successfully handles adding a pattern to the map', function () {

		var path = new L.PatternPath({
			d: 'M10 0 L7 20 L25 20 Z',
			color: '#000000',
			fill: true,
			fillColor: '#ff0000',
			fillOpacity: 1.0
		});

		var pattern = new L.Pattern({width:50, height:50});
		pattern.addShape(path);
		pattern.addTo(map);

		expect(map.hasPattern(pattern)).to.be(true);
		expect(pattern._map).to.not.be(null);
	});
});