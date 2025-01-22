**bug.js**
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value)); //Correct
  } catch (e) {
    console.error('Error storing data: ', e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null; //Correct
  } catch (e) {
    console.error('Error retrieving data: ', e);
  }
};

// Incorrect usage
storeData('myKey', { name: 'John Doe', age: 30 });

//Correct usage
storeData('myKey', { name: 'John Doe', age: 30 });
getData('myKey').then(data => console.log(data));
```

**bugSolution.js**
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // handle error
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // handle error
  }
};

// Example usage
const myObject = { name: 'John Doe', age: 30 };
await storeData('myKey', myObject);
const retrievedObject = await getData('myKey');
console.log(retrievedObject); // Output: { name: 'John Doe', age: 30 }
```