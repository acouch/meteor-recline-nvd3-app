if (Meteor.isClient) {
  var recline = this.recline;

  Template.reclineNvd3App.onRendered(function() {
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


  Template.reclineNvd3App.events({
    'click button': function () {
      // increment the counter when button is clicked
    }
  });
}
