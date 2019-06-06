// observer pattern
function ObserverList(){
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
  if (index >= 0 && index < this.count) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex = 0) {
  return this.observerList.indexOf(obj, startIndex);
};

ObserverList.prototype.removeAt = function(index) {
  this.observerList.splice(index, 1);
};

