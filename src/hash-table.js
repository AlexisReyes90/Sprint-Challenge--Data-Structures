/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, LinkedList, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  resize() {
    this.limit *= 2;
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldStorage.each((bucket) => {
      if (!bucket) return;
      bucket.forEach((pair) => {
        this.insert(pair[0], pair[1]);
      });
    });
  }

  capacityIsFull() {
    let fullCells = 0;
    this.storage.each((bucket) => {
      if (bucket !== undefined) fullCells++;
    });
    return fullCells / this.limit >= 0.75;
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    if (this.capacityIsFull()) this.resize();
    const index = getIndexBelowMax(key.toString(), this.limit);
    if (!this.storage.get(index)) {
      // has head and tail value now
      const bucket = new LinkedList();
      // create new bucket, add key: value pair
      bucket.addToTail([key, value]);
      this.storage.set(index, bucket);
    }
    if (this.storage.get(index)) {
      const bucket = this.storage.get(index);
      let flag = false;
      const curr = bucket.head;
      if (curr.value[0] === key) {
        curr.value[1] === value;
        flag = true;
        // what if this.storage.get(index) isnt the right key?
      }
      curr.next;
    }
    // if no key, add the value pair
    if (!flag) {
      bucket.addToTail([key, value]);
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(index);

    //check to see if there is a bucket
    if(bucket) {
      if (bucket.head[0] === key) {
        // remove bucket key here
      }
    }
    
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    let flag = false;
    // if there is a linkedList
    if (bucket) {
      while (bucket.head.next !== null) {
        if (bucket.head.value[0] === key) {
          flag = true;
          return bucket.head.value[1];
          
        }
        // itterate through to the next
        bucket.head.bext;
      }
      // if not found
      // I can use a flag here too to help find if it retrieved the key or not
      if (!flag) {
        return undefined;
      }
      // I dont think I need this
      // retrieved = bucket.filter(item => item[0] === key)[0];
    }

  }
}

module.exports = HashTable;
