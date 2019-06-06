// observer pattern

// Observer List Constructor
function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
  if (index >= 0 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex = 0) {
  return this.observerList.indexOf(obj, startIndex);
};

ObserverList.prototype.removeAt = function(index) {
  this.observerList.splice(index, 1);
};

// Subject
function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {
  this.observers.removeAt(this.observers.indexOf(observer));
}

Subject.prototype.notify = function(context) {
  const observerCount = this.observers.count();
  for (let i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
}

// Observer
function Observer() {
  this.count = 0;
  this.say = (id) => console.log(`Observer${id} count is: ${this.count}`);
  this.update = function() {
    // to be overwritten by each observers intended update method
    // ...
  }
}


// Test
const MySubject = new Subject();
const MyObserver1 = new Observer();
MyObserver1.update = function(value) {
  this.count += value;
}
const MyObserver2 = new Observer();
MyObserver2.update = function(value) {
  this.count += value;
}
MySubject.addObserver(MyObserver1);
MySubject.addObserver(MyObserver2);
MySubject.notify(2);
MyObserver1.say(1); // 2
MyObserver2.say(2); // 2
MySubject.removeObserver(MyObserver2);
MySubject.notify(2);
MyObserver1.say(1); // 4
MyObserver2.say(2); // 2

