;(function(){ 'use strict';

  // registers the extension on a cytoscape lib ref
  var register = function( cytoscape ){

    if( !cytoscape ){ return; } // can't register if cytoscape unspecified

    cytoscape( 'collection', 'yens', function(K,source, sink, weightFn){
      var eles = this;
      var cy = this.cy();

      // your extension impl...
      var arrayEquals = function(a,b) {
          if (a == null || b == null) return false;
          if (a.length != b.length) return false;
          for (var i = 0; i < a.length; i++) {
              if (a[i] != b[i]) return false;
          }
          return true;
      }
      var pathEquals = function(p1,p2) {
          if (p1 == null || p2 == null) return false;
          if (p1.length != p2.length) return false;
          for ( var key in p1 ) {
              if (!isNaN(key)) {
                  if (p1[key].data == null || p2[key].data == null){
                      return false;
                  }
                  else if (p1[key].data('id') != p2[key].data('id')) {
                      return false;
                  }
              }
          }
          return true;
      }

      var pathSlice = function(p, idx1, idx2) {
          var ret = {};
          for (var i = idx1; i < idx2; i++) {
              ret[ i ] = p[ i ];
          }
          return ret;
      }

      var indexOf = function(arr, ele) {
          for (var i = 0; i < arr.length; i ++) {
              if (arr[i] == 'removed' ) {
                  continue;
              } else if (arr[i].data('id') == ele.data('id')){
                  return i;
              }
          }
          return -1;
      }

      //var weightFn = is.fn( weightFn ) ? weightFn : function() { return 1; };
      var weightFn = weightFn || function() { return 1; };

      var pathLength = function( path, weightFn ) {
          for (key in path) {
              var dist = 0;
              if ( !isNaN(+key) ) {
                  if (path[key].isEdge()) {
                      dist += weightFn.apply( path[key], [ path[key] ] );
                  }
              }
          }
          return dist;
      }

      var A = new Array(); // Array for shortest paths
      var B = new Array(); // Candidate shortest paths

      // Start with the shortest path
      A.push(eles.dijkstra(source, weightFn).pathTo(sink));

      // Array to hold removed eles for later restoration
      var removedEles = {};
      for (var k = 0; k < K-1; k++) {
          for ( var i = 0; i < A[k].length-1; i++ ) {
              if (A[k][i].isEdge()) continue;
              var spurNode = A[k][i];
              var rootPath = A[k].slice(0,i+1);

              // Remove following edge from all paths with the same
              // root path
              for ( var j = 0; j < A.length; j++ ) {
                  if (pathEquals( A[j].slice(0,i+1), rootPath ) ){
                      if ( indexOf( eles, A[j][i+1] ) != -1 ) {
                          removedEles[ indexOf( eles, A[j][i+1] ) ] = A[j][i+1];
                          eles[ indexOf( eles, A[j][i+1] ) ] = 'removed';
                      }
                  }
              }

              // Remove all nodes of root path except for spur node
              for ( var j = 0; j < rootPath.nodes().length-1; j++ ) {
                  var n = rootPath.nodes()[j];
                  if ( indexOf( eles, n ) != -1 ) {
                      removedEles[ indexOf( eles, n ) ] = n;
                      eles[ indexOf( eles, n ) ] = 'removed';
                  }
              }

              // Calculate spur path from spur node to sink
              var dijkstra = eles.filter( function(i,ele) { return (ele != 'removed') }).dijkstra(spurNode,weightFn);
              if (dijkstra.distanceTo(sink) != Infinity) {

                  // Find spur path
                  var spurPath = dijkstra.pathTo(sink);

                  // Merge spur path and root path into total path and add to B
                  var totalPath = rootPath.slice(0,-1);
                  for ( var key in spurPath ) {
                      if ( !isNaN(+key) ) {
                          totalPath[ totalPath.length ] = spurPath[ key ];
                          totalPath.length++;
                      }
                  }
                  B.push( totalPath );

                  // Restore removed elements
                  for ( var key in removedEles ) {
                      if ( removedEles.hasOwnProperty(key) ){
                          eles[ key ] = removedEles[ key ];
                      }
                  }
                  removedEles = {}
              }

          }
          // If there are no candidate paths, we've generated all the possible
          // paths
          if ( B.length == 0 ) break;

          // Sort by path length
          B.sort( function( a, b ) { return pathLength( a, weightFn ) - pathLength( b, weightFn ); } );

          // Add the shortest candidate path
          A.push( B.splice(0,1)[0] );

      }
      if (A.length > K) {
          return {};
      }
      else {
          return A[K-1];
      }
      }

    } );

  };

  if( typeof module !== 'undefined' && module.exports ){ // expose as a commonjs module
    module.exports = register;
  }

  if( typeof define !== 'undefined' && define.amd ){ // expose as an amd/requirejs module
    define('cytoscape-yens', function(){
      return register;
    });
  }

  if( typeof cytoscape !== 'undefined' ){ // expose to global cytoscape (i.e. window.cytoscape)
    register( cytoscape );
  }

})();
