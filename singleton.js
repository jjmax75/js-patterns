// singleton pattern

const mySingleton = (() => {
  let instance;

  const init = () => {
    const privateMethod = () => {
      console.log('I am a private method');
    }

    const privateVariable = 'I am a private variable';

    const privateNumber = Math.random();

    return {
      publicMethod: () => {
        console.log('I am a public method');
      },
      publicProperty: 'I am a public property',
      getPrivateNumber: () => {
        return privateNumber;
      }
    }
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();

const singletonInstance1 = mySingleton.getInstance();
const singletonInstance2 = mySingleton.getInstance();
console.log(singletonInstance1.getPrivateNumber() === singletonInstance2.getPrivateNumber());