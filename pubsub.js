// Pub / Sub Pattern
function Events() {
  this.topics = {};
}

Events.prototype.hasTopic = function(topic) {
  return this.topics.hasOwnProperty(topic);
}

Events.prototype.addTopic = function(topic) {
  this.topics[topic] = [];
}

Events.prototype.subscribe = function(topic, listener) {
  !this.hasTopic(topic) && this.addTopic(topic);
  this.topics[topic].push(listener);
}

Events.prototype.unsubscribe = function(topic, listener) {
  if(!this.hasTopic(topic)) {
    console.log('this topic doesn\'t exist');
    return;
  }
  const listenerIndex = this.topics[topic].indexOf(listener);
  if(listenerIndex === -1) {
    console.log(`${listener} does not exist in ${topic}`);
  } else {
    this.topics[topic].splice(listenerIndex, 1);
  }
}

Events.prototype.publish = function(topic, info) {
  if(!this.hasTopic(topic)) {
    console.log('this topic doesn\'t exist');
    return;
  }

  this.topics[topic].forEach(listener => {
    listener(info);
  });
}



const myEvents = new Events();
const myTopic1 = 'news/world';
const myTopic2 = 'news/sport';
const myListener1 = event => {
  console.log(`myListener1 received ${event}`);
};
const myListener2 = event => {
  console.log(`myListener2 received ${event}`);
};
myEvents.subscribe(myTopic1, myListener1);
myEvents.subscribe(myTopic2, myListener2);
myEvents.publish(myTopic1, 'donald trump visits Ireland');
myEvents.publish(myTopic2, 'Ireland draw with Denmark');
myEvents.unsubscribe(myTopic1, myListener1);
console.log(myEvents);
