if (Meteor.isClient) {

  Template.recline-nvd3-app.onRendered(function() {
    var state = new recline.Model.ObjectState();
    var sharedObject = {state: state};

    var msv = new MultiStageView({
      state: state,
      el: $('#steps')
    });

    window.router = new recline.URLState();
    msv.addStep(new LoadDataView(sharedObject));
    msv.addStep(new DataOptionsView(sharedObject));
    msv.addStep(new ChooseChartView(sharedObject));
    msv.addStep(new ChartOptionsView(sharedObject));
    msv.addStep(new PublishView(sharedObject));
    msv.render();

    window.msv = msv;
    window.sharedObject = sharedObject;
  });


  Template.recline-nvd3-app.events({
    'click button': function () {
      // increment the counter when button is clicked
    }
  });
}
