/*jshint multistr:true */

this.recline = this.recline || {};
this.recline.View = this.recline.View || {};

;(function ($, my) {
  'use strict';

  my.multiBarChart = recline.View.nvd3.Base.extend({
    initialize: function(options) {
      var self = this;
      self.graphType = 'multiBarChart';
      recline.View.nvd3.Base.prototype.initialize.call(self, options);
      self.state.set('computeXLabels', false, {silent: true});
    },
    render: function(){
      var self = this;
      recline.View.nvd3.Base.prototype.render.call(self, {});
    }
  });

})(jQuery, recline.View.nvd3);