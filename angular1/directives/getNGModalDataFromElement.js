/*Things to note
1. The order of the elements in the link function matters
2. If you restrict the directive use to a specific type 'EAC' and use it differently
   the error is silently swallowed.
*/


angular.module('myApp', [])
	   .directive('helloWorld', function(){
  			return {
  				 restrict: 'E',
   				 template: '{{message}}',
   				 require: 'ngModel',
   				 scope: { msg: '=msg' },
   				 link: function(scope, element, attrs, ngModel){
						scope.message = 'This message is from the link function';
   				 }
 			 };
	   })
	   .directive('inputBox', function(){
	   		return {
	   			restrict: 'A',
	   			require: ['ngModel', 'inputBox'],
	   			controller: function(){
	   				this.log = function(newVal){
	   					console.log('Something changed. Current state: ' + newVal);	
	   				}
	   			},
	   			link: function(scope, ele, attrs, controllers){
	   				scope.$watch(function(){
	   					return controllers[0].$modelValue;
	   				}, function(changeMsg){
	   					controllers[1].log(controllers[0].$modelValue);
	   					if(changeMsg){
	   						if(changeMsg.length > 6){
								//DOESNT WORK controllers[0].$modelValue = 'LENGTH EXCEEDED';
								//DOESNT WORK controllers[0].$setViewValue('LENGTH EXCEEDED');
								//DOESNT WORK controllers[0].$viewValue = 'LENGTH EXCEEDED';
								//WORKS:-) 
								scope.inputBox = 'LENGTH EXCEEDED';
	   						}
	   					}
	   				});
	   			}
	   		}
	   });