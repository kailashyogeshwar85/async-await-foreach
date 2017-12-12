/**
 *  Author: Kailash K Yogeshwar
 *  Module: async-await-foreach
 *  Description: Sequential looping of async calls like async.waterfall or bluebird.each
 */

 /**
  * Usage
  * const asyncForEach = require('async-await-foreach);
  * const storyIds = [1, 2, 3, 4];
  *
  * asyncForEach(storyIds, async (item, index, array) => {
  *   await someAsyncCall(item);
  * });
  *
  */



async function asyncForEach(array, callback){
    try {

        if(!Array.isArray(array)){
            throw new Error('Invalid argument expected Array but got ', typeof array);
        }

        let totalElements = array.length;

        for (let index = 0; index < totalElements; index++){
            await callback(array[index], index, array);
        }

    }catch(e){
        return e;
    }
}