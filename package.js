Package.describe({
  name: 'recline-nvd3-app',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('templating', 'client');
  api.versionsFrom('1.1.0.2', 'client');
  api.addFiles('public/node_modules/nvd3_visualization_app/public/bootstrap/dist/css/bootstrap.min.css', 'client');
  api.addFiles('public/node_modules/nvd3_visualization_app/public/slickgrid/slick.grid.css', 'client');
  api.addFiles('public/node_modules/nvd3_visualization_app/public/chosen-bootstrap/chosen.bootstrap.css', 'client');
  api.addFiles('public/node_modules/nvd3_visualization_app/css/slickgrid.css', 'client');
  api.addFiles('public/node_modules/nvd3_visualization_app/css/style.css', 'client');
  api.addFiles('public/node_modules/nvd3_visualization_app/public/nvd3/build/nv.d3.css', 'client');

  api.addFiles('public/node_modules/nvd3_visualization_app/public/slickgrid/lib/jquery-1.7.min.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/chosen/chosen.jquery.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/lodash/lodash.min.js', 'client', {bare: true});
  api.addFiles('recline-nvd3-app-load.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/lodash.data/dist/lodash.data.min.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/backbone/backbone.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/mustache/mustache.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/bootstrap-css/js/bootstrap.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/slickgrid/lib/jquery-ui-1.8.16.custom.min.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/slickgrid/lib/jquery.event.drag-2.0.min.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/slickgrid/lib/jquery.event.drop-2.0.min.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/slickgrid/slick.core.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/slickgrid/slick.formatters.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/slickgrid/slick.editors.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/slickgrid/slick.grid.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/slickgrid/plugins/slick.rowselectionmodel.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/slickgrid/plugins/slick.rowmovemanager.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/moment/moment.js', 'client', {bare: true});
  api.addFiles('public/node_modules/reclinejs/dist/recline.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/csv.js/csv.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/recline.backend.gdocs/backend.gdocs.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/d3/d3.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/public/nvd3/build/nv.d3.js', 'client', {bare: true});
  api.addFiles('public/node_modules/recline.view.nvd3/dist/recline.view.nvd3.js', 'client', {bare: true});
  api.addFiles('public/node_modules/recline.view.nvd3/src/utils.js', 'client', {bare: true});
  api.addFiles('public/node_modules/recline.view.nvd3/dist/recline.view.nvd3.controls.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/src/recline.URLState.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/src/recline.view.nvd3.embedControl.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/src/MultiStageView.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/src/LoadDataView.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/src/DataOptionsView.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/src/ChooseChartView.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/src/ChartOptionsView.js', 'client', {bare: true});
  api.addFiles('public/node_modules/nvd3_visualization_app/src/PublishView.js', 'client', {bare: true});
  api.addFiles('recline-nvd3-app.html', 'client');
  api.addFiles('recline-nvd3-app.js', 'client', {bare: true});
});
