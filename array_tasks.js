var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(value){
			return value * value;
		})
	},

	sum: function (arr) {
		return arr.reduce(function(sum, value){
			return sum + value;
		});
	},

	findDuplicates: function (arr) {
		arr.sort();
		var filtered = arr.filter(function(value, i, arr){
			return value === arr[i+1];
		});
		return filtered.filter(function(value, i, arr){
			return value !== arr[i+1];
		})

	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(function(value){
			return value !== valueToRemove;
		})
	},

	findIndexesOf: function (arr, itemToFind) {
		var result = [];
		var index = arr.indexOf(itemToFind);
		while (index != -1){
			result.push(index)
			index = arr.indexOf(itemToFind, index + 1);
		}
		return result;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var total = 0;
		var evenValues = arr.filter(function(value){
			return value % 2 === 0;
		});
		var squared = this.square(evenValues);
		return this.sum(squared);
	}

}

module.exports = arrayTasks
