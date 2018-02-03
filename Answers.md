# Sprint- Challenge: Data- Structures Saturday February, 3rd 2018 Answers.md
---
## What are the order of insertions/removals for the following data structures?
* stack: A stack works in LIFO, or Last in, first out. Meaning that if I have ` let arr = [1, 2, 3, 4]` and I use the array method `arr.pop()`; since `4` is the last value in, pop will remove that value: `4`, first. Then if we keep re-calling, it'll then remove `3`, then `2`, then `1`.

* queue Similar to stack, a queue works in FIFO, First in first out,  like a line in a DMV, or a line to go buy food or tickets. If I also have an array `let arr = [1, 2, 3, 4]`, we will have to call a different array method, known as `shift`. So, if we call `arr.shift()`, it will return the `1` value, because that is position `arr[0]` which means it is out first element. And if we keep calling `shift` we will return `2`, then `3`, then `4`, in that order.
---
## What is the retreival time complexity for the following data structures?
* Linked List: a Singly/doubly- linked list has a time complexity of O(n), for accessing and searching. Or linear time complexity
* Hash-Table: a hash table has a time complexity of O(1), or constant time.
* Binary-Search-Tree: A BST has a time complexity of O(log N), but it's worst case scenario equal a linear time complexity, as in, if it's un-sorted, or poorly sorted.
---
## What are some advantages to using a Hash Tables over an array in JavaScript?
Arrays and Hash-tables each use a sort of key: value pair in javascript. So in that regard they are similar. If we study their time complexity we start to see why Hash-Tables would be used over arrays. While a Hash-Table has a constant time- complexity, and an array has a linear. It might not seem different at first, but only at first. Let's say an array has 1 million values in it; the only way we can find the element that we are looking for is to look at every array. That means itterating over every single element to find it, especially if we don't really know what the value or key is. Whereas with a Hash- Table, once an element is given a value, it can instantly search that element, based on the value it was given by the code.

If you are already given the key, arrays will work just as fast.