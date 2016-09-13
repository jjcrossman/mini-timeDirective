angular.module( 'timeApp' )

.directive( 'showTime', function () {

  return {
    restrict: 'E'
    , templateUrl: "./time.html"
    , link: function ( scope, elem, attr ) {
      scope.time = new Date().toString();
      
    }
  }

} );
