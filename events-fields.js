if (Meteor.isClient) {
  $(document).on('click button', function (event) {
    console.log("document level, event", event.customValue);
	console.log("document level, originalEvent", event.originalEvent.customValue)
  });

  Template.oneMore.events({
    'click button': function (event) {
	  event.customValue = true;
	  event.originalEvent.customValue = true;
	  console.log("oneMore level, event", event.customValue);
	  console.log("oneMore level, originalEvent", event.originalEvent.customValue)
    }
  });
}
