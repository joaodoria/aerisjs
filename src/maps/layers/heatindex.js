define([
  'aeris/util',
  'aeris/maps/layers/aeristile'
], function(_, AerisTile) {
  /**
   * @constructor
   * @publicApi
   * @class aeris.maps.layers.HeatIndex
   * @extends aeris.maps.layers.AerisTile
   */
  var HeatIndex = function(opt_attrs, opt_options) {
    var attrs = _.extend({
      name: 'HeatIndex',
      tileType: 'heat-index',
      autoUpdateInterval: AerisTile.updateIntervals.CURRENT
    }, opt_attrs);


    AerisTile.call(this, attrs, opt_options);
  };

  // Inherit from AerisTile
  _.inherits(HeatIndex, AerisTile);


  return _.expose(HeatIndex, 'aeris.maps.layers.HeatIndex');
});
