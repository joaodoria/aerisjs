define([
  'aeris/util',
  'aeris/maps/layers/aeristile'
], function(_, AerisTile) {
  /**
   * Precipitation layer.
   *
   * @class aeris.maps.layers.Precip
   * @extends aeris.maps.layers.AerisTile
   * @publicApi
   *
   * @constructor
   */
  var Precip = function(opt_attrs, opt_options) {
    var attrs = _.defaults(opt_attrs || {}, {
      name: 'Precip',
      tileType: 'precip',
      futureTileType: 'frain-nam4k',
      autoUpdateInterval: AerisTile.updateIntervals.CURRENT
    });

    AerisTile.call(this, attrs, opt_options);
  };
  _.inherits(Precip, AerisTile);


  return _.expose(Precip, 'aeris.maps.layers.Precip');
});
