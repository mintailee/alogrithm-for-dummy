# HASH TABLE
## Terminology
> Hash function maps String to Numbers
+ Its need to be consistent, eg: put in "apple" and get back "4" for every time. Without it, hash table won't work

+ It should map different words to difference `number`

#### Example: We want to store fruit in your menu: Apple, Mango, Milk, ...
|index|0|1|2|3|4|
|-----|-|-|-|-|-|
| key |-|-|-|-|-|
|value|-|-|-|-|-|

=> the hash function will hash the apple -> `?` number and store correctly at the index in the array. `apple -> 2`

|index|0|1|  2  |3|4|
|-----|-|-|-----|-|-|
| key |-|-|Apple|-|-|
|value|-|-|0.67 |-|-|

_keep going and the whole array will be full of price._
> Then when you need to access the price of any key, just pass the `key` in the hash function and access the array by index -> `O(1)`

## Collisions
_The hash function always maps different keys to different slots in the array_
> Impossible in the to write a hash function that does this in reality
Multiple keys map to the same slot: `Start a linked list at that slot`
Avoid the giant linked list -> going slow down hash table: 
+ Hash function is really important.
+ good news: it's already implement in the language programming

### Behind the scenes
#### Low load factor
```
const loadFactor = numberOfItemInHashTable / totalNumberOfSlot
const arr = new Array(4);
arr.push(1);
arr.push(2);
loadFactor = 2/4
```
Load factor measures how many empty slot remain in hash table
Suppose hash table is getting pretty full (when `loadFactor >= 0.7`) we need to resized this table by create a new array that's bigger
*Resizing is expensive*
