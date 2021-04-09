// Subscribing to the published tasks
import { Meteor } from 'meteor/meteor';

Meteor.subscribe("tasks");


Template.body.helpers({

   tasks: function () {
      if (Session.get("hideCompleted")) {
         return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
      } else {
         return Tasks.find({}, {sort: {createdAt: -1}});
      }
   },

   hideCompleted: function () {
      return Session.get("hideCompleted");
   },

   incompleteCount: function () {
      return Tasks.find({checked: {$ne: true}}).count();
   }
});

Template.body.events({

   "submit .new-task": function (event) {
      event.preventDefault();
      let text = event.target.text.value;

      Meteor.call("addTask", text);
      event.target.text.value = "";
   },

   "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
   }
});

Template.task.events({
   
   "click .toggle-checked": function () {
      Meteor.call("setChecked", this._id, ! this.checked);
   },

   "click .delete": function () {
      Meteor.call("deleteTask", this._id);
   }
});