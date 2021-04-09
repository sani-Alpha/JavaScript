import { Meteor } from 'meteor/meteor';
import { Tasks } from '../collections/collection';

Tasks.insert({text: "hasdassadsdata la vista", createdAt: new Date()});
   
async function ab() {
   return await Tasks.find({});
}
console.log(ab());


Meteor.publish("tasks", function () {
   console.log(Tasks.find());
   return Tasks.find({});
});

Meteor.methods({

  addTask: function (text) {
     Tasks.insert({
        text: text,
        createdAt: new Date(),
     });
  },

  deleteTask: function (taskId) {
     let task = Tasks.findOne(taskId);
     Tasks.remove(taskId);
  },

  setChecked: function (taskId, setChecked) {
     let task = Tasks.findOne(taskId);
     Tasks.update(taskId, { $set: { checked: setChecked} });
  }
});