
/*********************** Define functions before DOM is loaded *********************/

// Create qtip content for edges dynamically based on current edge weights and 
// whether transferred scores are included
function qContent(e) {
		
		var sourceName = cy.$('#'+e.data('source').replace(/\./g,'\\.')).data('name');
		var targetName = cy.$('#'+e.data('target').replace(/\./g,'\\.')).data('name');
		if (e.attr('type') == 'gene-gene' || e.attr('type') == 'gene-mediator') {
			var content = '<table>'
			content += '<tr><td> </td><td>Protein 1:</td><td>'+sourceName+'</td></tr>';
			content += '<tr><tr><td><td>Protein 2:</td> <td>'+targetName+'</td></tr>';

			content += '<tr><td></td><td class=e_row>E-score:</td> <td>';
			if ( e.data('escore') != 0 ) {
				var escore = '<a href="javascript:drawEvidence(\'experimental\',\''+e.data('id')+'\')">';
				escore += (e.data('escore')/1000).toFixed(3);
				escore += '</a></td></tr>';
			}else {
				var escore = '0.' + e.data('escore')+'</td></tr>';
			}
			content += escore;

			content += '<tr><td></td><td class=d_row>D-score:</td> <td>';
			if ( e.data('dscore') != 0 ) {
				var dscore = '<a href="javascript:drawEvidence(\'database\',\''+e.data('id')+'\')">';
				dscore += (e.data('dscore')/1000).toFixed(3);
				dscore += '</a></td></tr>';
			}else {
				var dscore = '0.' + e.data('dscore')+'</td></tr>';
			}
			content += dscore;

			content += '<tr><td ></td><td class=t_row>T-score:</td> <td>';
			if ( e.data('tscore') != 0 ) {
				var tscore = '<a href="javascript:drawEvidence(\'textmining\',\''+e.data('id')+'\')">';
				tscore += (e.data('tscore')/1000).toFixed(3);
				tscore += '</a></td></tr>';
			}else {
				var tscore = '0.' + e.data('tscore')+'</td></tr>';
			}
			content += tscore;

			content += '<tr><td></td><td class=c_row>A-score:</td> <td>';
			if ( e.data('ascore') != 0 ) {
				var ascore = '<a href="javascript:drawEvidence(\'coexpression\',\''+e.data('id')+'\')">';
				ascore += (e.data('ascore')/1000).toFixed(3);
				ascore += '</a></td></tr>';
			}else {
				var ascore = '0.' + e.data('ascore')+'</td></tr>';
			}
			content += ascore;

			content += '<tr><td></td><td class=f_row>F-score:</td> <td>';
			if ( e.data('fscore') != 0 ) {
				var fscore = '<a href="javascript:drawEvidence(\'fusion\',\''+e.data('id')+'\')">';
				fscore += (e.data('fscore')/1000).toFixed(3);
				fscore += '</a></td></tr>';
			}else {
				var fscore = '0.' + e.data('fscore')+'</td></tr>';
			}
			content += fscore;

			content += '<tr><td></td><td class=n_row>N-score:</td> <td>';
			if ( e.data('nscore') != 0 ) {
				var nscore = '<a href="javascript:drawEvidence(\'neighborhood\',\''+e.data('id')+'\')">';
				nscore += (e.data('nscore')/1000).toFixed(3);
				nscore += '</a></td></tr>';
			}else {
				var nscore = '0.' + e.data('nscore')+'</td></tr>';
			}
			content += nscore;

			content += '<tr><td></td><td class=tot_row>Combined Score:</td> <td>';
			if ( e.data('tot_score') != 0 ) {
				var tot_score = '<a href="javascript:drawEvidence(\'all\',\''+e.data('id')+'\')">';
				tot_score += (e.data('tot_score')/1000).toFixed(3);
				tot_score += '</a></td></tr>';
			}else {
				var tot_score = '0.0'+'</td></tr>';
			}
			content += tot_score;
			content += '</table>'

			return content

		} else {
			var content =  '<tr><td></td><td>Chemical:</td><td>'+sourceName+'</td></tr>'+
						'<tr><td></td><td>Protein: </td><td>'+targetName+'</td></tr>'
			content += '<tr><td></td><td class=e_row>E-score:</td> <td>';
			if ( e.data('escore') != 0 ) {
				var escore = '<a href="javascript:drawEvidence(\'experimental\',\''+e.data('id')+'\')">';
				escore += (e.data('escore')/1000).toFixed(3);
				escore += '</a></td></tr>';
			}else {
				var escore = '0.' + e.data('escore')+'</td></tr>';
			}
			content += escore;

			content += '<tr><td></td><td class=d_row>D-score:</td> <td>';
			if ( e.data('dscore') != 0 ) {
				var dscore = '<a href="javascript:drawEvidence(\'database\',\''+e.data('id')+'\')">';
				dscore += (e.data('dscore')/1000).toFixed(3);
				dscore += '</a></td></tr>';
			}else {
				var dscore = '0.' + e.data('dscore')+'</td></tr>';
			}
			content += dscore;

			content += '<tr><td ></td><td class=t_row>T-score:</td> <td>';
			if ( e.data('tscore') != 0 ) {
				var tscore = '<a href="javascript:drawEvidence(\'textmining\',\''+e.data('id')+'\')">';
				tscore += (e.data('tscore')/1000).toFixed(3);
				tscore += '</a></td></tr>';
			}else {
				var tscore = '0.' + e.data('tscore')+'</td></tr>';
			}
			content += tscore;

			content += '<tr><td></td><td class=c_row>P-score:</td> <td>';
			if ( e.data('pscore') != 0 ) {
				var pscore = '<a href="javascript:drawEvidence(\'prediction\',\''+e.data('id')+'\')">';
				pscore += (e.data('pscore')/1000).toFixed(3);
				pscore += '</a></td></tr>';
			}else {
				var pscore = '0.' + e.data('pscore')+'</td></tr>';
			}
			content += pscore;

			content += '<tr><td></td><td class=tot_row>Combined Score:</td> <td>';
			if ( e.data('tot_score') != 0 ) {
				var tot_score = '<a href="javascript:drawEvidence(\'all\',\''+e.data('id')+'\')">';
				tot_score += (e.data('tot_score')/1000).toFixed(3);
				tot_score += '</a></td></tr>';
			}else {
				var tot_score = '0.0'+'</td></tr>';
			}
			content += tot_score;
			content += '</table>'

			return content
		}
}
function combineScore(e) {
	if (e.data('type') == 'gene-gene' || e.data('type') == 'gene-mediator') {
		var tot_score = 1-(1000-e.data('escore'))*
							(1000-e.data('dscore'))*
							(1000-e.data('tscore'))*
							(1000-e.data('ascore'))*
							(1000-e.data('fscore'))*
							(1000-e.data('nscore'))/1e18;
		tot_score *= 1000;
	} else {
		var tot_score = 1-(1000-e.data('dscore'))*
							(1000-e.data('tscore'))*
							(1000-e.data('escore'))*
							(1000-e.data('pscore'))/1e12;
		tot_score *= 1000;
	}
		
	return  Math.round(tot_score);
}

function drawEvidence(evType, edgeID) {
	$('#evi_box_frame').show();
	$('#evi_table').empty();
	var edge = cy.edges('[id="'+edgeID+'"]')
	if (edge.data('type')=='chem-gene'){
		if (evType=='all') {
			var evType = ['database','experimental','textmining'];
			for (var i = 0; i < evType.length; i++) {
			
				var evi = cy.edges('[id="'+edgeID+'"]').data('evidence')[evType[i]];
				if (evi.length == 0) {continue}
				for (var j = 0; j < evi.length; j++) {
					var cells = evi[j].split('|');
					var row = '<tr class=' + evType[i][0]+'_row>'
					if (cells.length == 1) {
						$('#evi_table').append( '<tr class='+evType[i][0]+'_row><td colspan="4">' + cells[0] + '</td></tr>' );
						continue;
					}
					for (var c in [0,1,2,3]) {
						var row = row + '<td>' + cells[c] + '</td>';
					}
					$('#evi_table').append( row + '</tr>' );
				}
				$('#evi_table').append();
				$('#evi_table').append('<tr class=' + evType[i][0]+'_row>'+'<td colspan="4"> For more details, click <a href="' +
					generateStitchPermalink( evType[i], edge ) + 
					'"target="_blank">here</td></tr>' )
			}

		} else {
				if (evType == 'prediction') evi = []; //temp hack
				else {
					var evi = cy.edges('[id="'+edgeID+'"]').data('evidence')[evType];
				}
				for (var j = 0; j < evi.length; j++) {
					var cells = evi[j].split('|');
					var row = '<tr class=' + evType[0]+'_row>'
					if (cells.length == 1) {
						$('#evi_table').append( '<tr class='+evType[0]+'_row><td colspan="4">' + cells[0] + '</td></tr>' );
						continue;
					}
					for (var c in [0,1,2,3]) {
						var row = row + '<td>' + cells[c] + '</td>';
					}
					$('#evi_table').append( row + '</tr>' );
				}
				$('#evi_table').append();
				$('#evi_table').append('<tr class=' + evType[0]+'_row>'+'<td colspan="4"> For more details, click <a href="' +
						generateStitchPermalink( evType, edge ) + 
						'"target="_blank">here</td></tr>' )
		}

	}
	else {
		if (evType=='all') {
			var evType = ['database','experimental','fusion','textmining'];
			for (var i = 0; i < evType.length; i++) {
			
				var evi = cy.edges('[id="'+edgeID+'"]').data('evidence')[evType[i]];
				if (evi.length == 0) {continue}
				for (var j = 0; j < evi.length; j++) {
					var cells = evi[j].split('|');
					var row = '<tr class=' + evType[i][0]+'_row>'
					if (cells.length == 1) {
						$('#evi_table').append( '<tr class='+evType[i][0]+'_row><td colspan="4">' + cells[0] + '</td></tr>' );
						continue;
					}
					for (var c in [0,1,2,3]) {
						var row = row + '<td>' + cells[c] + '</td>';
					}
					$('#evi_table').append( row + '</tr>' );
				}
				$('#evi_table').append();
				$('#evi_table').append('<tr class=' + evType[i][0]+'_row>'+'<td colspan="4"> For more details, click <a href="' +
										generateStringPermalink( evType[i], edge ) + 
										'"target="_blank">here</td></tr>' )
			}
			if (edge.data('ascore') != 0) {
				$('#evi_table').append( '<tr class=c_row><td colspan="4"> This type of evidence cannot be displayed on this interface. Follow the below link to see it.</td></tr>' );
				$('#evi_table').append( '<tr class=c_row><td colspan="4"> For more details, click <a href="' +
									generateStringPermalink( 'coexpression', edge ) + 
									'"target="_blank">here</td></tr>' )
			}
			if (edge.data('nscore') != 0) {
				$('#evi_table').append( '<tr class=n_row><td colspan="4"> This type of evidence cannot be displayed on this interface. Follow the below link to see it.</td></tr>' );
				$('#evi_table').append( '<tr class=n_row><td colspan="4"> For more details, click <a href="' +
									generateStringPermalink( 'neighborhood', edge ) + 
									'"target="_blank">here</td></tr>' )
			}

		} else if (evType == 'coexpression' || evType == 'neighborhood') {
			$('#evi_table').append( '<tr class='+evType[0]+'_row><td colspan="4"> This type of evidence cannot be displayed on this interface. Follow the below link to see it.</td></tr>' );
			$('#evi_table').append( '<tr class='+evType[0]+'_row><td colspan="4"> For more details, click <a href="' +
									generateStringPermalink( evType, edge ) + 
									'"target="_blank">here</td></tr>' )
			}
		else {
			var evi = cy.edges('[id="'+edgeID+'"]').data('evidence')[evType];
			for (var i = 0; i < evi.length; i++) {
				var cells = evi[i].split('|');
				if (cells.length == 1) {
					$('#evi_table').append( '<tr class='+evType[0]+'_row><td colspan="4">' + cells[0] + '</td></tr>' );
					continue;
				}
				var row = '<tr class='+evType[0]+'_row>';
				for (var c in [0,1,2,3]) {
					row = row + '<td>' + cells[c] + '</td>';
				}
				$('#evi_table').append( row + '</tr>' );
			}
			$('#evi_table').append( '<tr class='+evType[0]+'_row><td colspan="4"> For additional information, click <a href="' +
									generateStringPermalink( evType, edge ) + 
									'"target="_blank">here</td></tr>' )
		}
		}
}

function generateStitchPermalink( dataChan, edge) {
	// Generate permalink for evidence for the particular data channel
	// prot1 and prot2 must be given as strings and must be valid string
	// ids
	var protName = cy.$('#'+edge.data('target').replace(/\./g,'\\.')).data('id');
	//var prot = cy.$('#'+edge.data('target').replace(/\./g,'\\.')).data('internal id');
	var prot = edge.data('target_internal_id')

	var chem = cy.$('#'+edge.data('source').replace(/\./g,'\\.')).data('internal id');

	
	var link = 'http://stitch.embl.de/cgi/';
	//var constantParameters = 'channel1=on&channel2=on&channel3=on&channel4=on&channel5=on&channel6=on&channel7=on&channel8=on&';
	var constantParameters = 'channel1=on&channel2=on&channel3=on&channel4=on&channel5=on&channel6=on&channel7=on&channel8=on&';
	switch( dataChan ) {
		case 'experimental':
			link += 'show_set_evidence.pl?';
			link += constantParameters;
			link += 'data_channel=experimental&direct_neighbor=1&'
			link += 'node1=' + prot + '&'
			link += 'node2=' + chem + '&'
			link += 'show_all_direct=off&show_all_transferred=on'
			link += '&targetmode=proteins&identifiers=' + protName.toUpperCase()
			link += '%250D' + chem
			break;
		case 'database':
			link += 'show_set_evidence.pl?';
			link += constantParameters;
			link += 'data_channel=database&direct_neighbor=1&'
			link += 'node1=' + prot + '&'
			link += 'node2=' + chem + '&'
			link += '&targetmode=proteins&identifiers=' + protName.toUpperCase()
			link += '%250D' + chem
			break;
		case 'textmining':
			link += 'show_textmining_evidence.pl?';
			link += constantParameters;
			link += 'direct_neighbor=1&'
			link += 'node1=' + prot + '&'
			link += 'node2=' + chem + '&'
			link += 'show_all_direct=off&show_all_transferred=on'
			link += '&targetmode=proteins&identifier=' + protName
			break;
		case 'prediction':
			link += 'show_set_evidence.pl?';
			link += constantParameters;
			link += 'data_channel=predictions&direct_neighbor=1&'
			link += 'node1=' + prot + '&'
			link += 'node2=' + chem + '&'
			link += 'show_all_direct=off&show_all_transferred=on'
			link += '&targetmode=proteins&identifiers=' + protName.toUpperCase()
			link += '%250D' + chem
			break;
	}

	return link;
}

function generateStringPermalink( dataChan, edge) {
	// Generate permalink for evidence for the particular data channel
	// prot1 and prot2 must be given as strings and must be valid string
	// ids
	var protName = cy.$('#'+edge.data('source').replace(/\./g,'\\.')).data('id');
	var prot1 = cy.$('#'+edge.data('target').replace(/\./g,'\\.')).data('internal id');
	var prot2 = cy.$('#'+edge.data('source').replace(/\./g,'\\.')).data('internal id');

	
	var link = 'http://version_10.string-db.org/cgi/';
	var constantParameters = 'channel1=on&channel2=on&channel3=on&channel4=on&channel5=on&channel6=on&channel7=on&channel8=off&';
	switch( dataChan ) {
		case 'experimental':
			link += 'set_evidence.pl?';
			link += constantParameters;
			link += 'data_channel=experimental&direct_neighbor=1&'
			link += 'node1=' + prot1 + '&'
			link += 'node2=' + prot2 + '&'
			link += 'show_all_direct=off&show_all_transferred=on'
			link += '&targetmode=proteins&identifier=' + protName
			break;
		case 'database':
			link += 'set_evidence.pl?';
			link += constantParameters;
			link += 'data_channel=database&direct_neighbor=1&'
			link += 'node1=' + prot1 + '&'
			link += 'node2=' + prot2 + '&'
			link += 'show_all_direct=off&show_all_transferred=on'
			link += '&targetmode=proteins&identifier=' + protName
			break;
		case 'coexpression':
			link += 'coexpression_evidence.pl?';
			link += constantParameters;
			link += 'direct_neighbor=1&'
			link += 'node1=' + prot1 + '&'
			link += 'node2=' + prot2 + '&'
			link += 'targetmode=proteins&identifier=' + protName
			break;
		case 'cooccurence':
			link += 'phylo_evidence.pl?';
			link += constantParameters;
			link += 'direct_neighbor=1&'
			link += 'targetmode=proteins&identifier=' + protName
			break;
		case 'textmining':
			link += 'textmining.pl?';
			link += constantParameters;
			link += 'direct_neighbor=1&'
			link += 'node1=' + prot1 + '&'
			link += 'node2=' + prot2 + '&'
			link += 'show_all_direct=off&show_all_transferred=on'
			link += '&targetmode=proteins&identifier=' + protName
			break;
		case 'neighborhood':
			link += 'neighborhood.pl?';
			link += constantParameters;
			link += 'direct_neighbor=1&'
			link += 'node1=' + prot1 + '&'
			link += 'node2=' + prot2 + '&'
			link += 'show_all_direct=off&show_all_transferred=on'
			link += '&targetmode=proteins&zom=1.0&identifier=' + protName
			break;
		case 'fusion':
			link += 'fusion.pl?';
			link += constantParameters;
			link += 'direct_neighbor=1&'
			link += 'node1=' + prot1 + '&'
			link += 'node2=' + prot2 + '&'
			link += 'show_all_direct=off&show_all_transferred=on'
			link += '&targetmode=proteins&zom=1.0&identifier=' + protName
	}

	return link;
}

function yens(eles, K, source, sink, weightFn) {
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

$(function(){ // on dom ready

	// hide evi window
	$('#evi_box_frame').hide();

    // Initialize cytoscape
    var condensedEdges = new Array();
    cy = cytoscape({
        container: document.getElementById('cy'),
        elements: $.getJSON('stitch_results/' + location.href.substr(location.href.indexOf("?")+1) + '.json'),
        style: [{"selector":"core",
            "style":{
                "selection-box-color":"#AAD8FF",
        "selection-box-border-color":"#8BB0D0",
        "selection-box-opacity":"0.5"}},
        {"selector":"node",
            "style":{"content":"data(name)",
                "font-size":"16px",
				"width":"50px",
				"height":"50px",
				"text-valign":"center",
				"text-halign":"center",
				"background-color":"#ccc",
				"border-width":4,
				"text-outline-color":"#ccc",
				"text-outline-width":"2px",
				"color":"#000",
				"border-color":"#ccc",
				"overlay-padding":"6px",
				"z-index":"10"}},

        {"selector":"node[type='chemical']",
            "style":{"border-color":"red",
				"shape":"hexagon",
                "border-opacity":"0.4"}},
        {"selector":"node[type='mediator']",
            "style":{"border-color":"blue",
				"shape":"roundrectangle",
                "border-opacity":"0.4"}},

        {"selector":"edge",
            "style":{"curve-style":"haystack",
                "opacity":"0.4"}},
        {"selector":"edge[type='gene-gene']",
            "style":{"edgeColor":"#AAD8FF"}},
        {"selector":"edge.filtered",
            "style":{"opacity":"0"}},
        {"selector":"node[type='invis']",
            "style":{"opacity":"0"}},
        {"selector":"edge[type='chem-gene']",
            "style":{"line-color":"red",
                "opacity":"0.4"}},
        {"selector":"edge[type='gene-mediator']",
            "style":{"line-color":"blue"}},
        {"selector":"edge.heavy_support",
            "style":{"opacity":"0.95",
            "width":6}},
        {"selector":".highlight",
            "style":{'line-color': '#ff8c1a'}
        },
        {"selector":"edge.medium_support",
            "style":{"opacity":"0.65",
            "width":4}}
    ]
    });

	// Setup close button for evidence window
	$('#close_btn').click(function (evt) {
		$('#evi_box_frame').hide();
	});
    
    // When cytoscape is ready
    cy.ready(function(event) {

        var mediator = cy.elements('node[type="mediator"]').remove();
        var options = {
            name: 'breadthfirst',

            fit: true, // whether to fit the viewport to the graph
            directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
            padding: 30, // padding on fit
            circle: false, // put depths in concentric circles if true, put depths top down if false
            spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
            boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
            avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
            roots: cy.elements('node[type="chemical"]'), // the roots of the trees
            maximalAdjustments: 0, // how many times to try to position the nodes in a maximal way (i.e. no backtracking)
            animate: false, // whether to transition the node positions
            animationDuration: 500, // duration of animation in ms if enabled
            animationEasing: undefined, // easing of animation if enabled
            ready: function() {
                
                // Stagger nodes on the same level in order to allow some collinearity
                var nodeDepths = [];
                cy.elements().bfs({
                    roots: cy.elements('node[type="chemical"]'), // the roots of the trees
                    visit: function(i, depth, v, e, u) {
                            if ( nodeDepths.length < depth+1 ) {
                                nodeDepths.push( [] );
                            }
                            nodeDepths[ depth ].push( v.data('id') );
                        }
                });
                var totalY = Math.abs( cy.elements('node[type="chemical"]').position('y') - cy.elements('node[id="'+nodeDepths[nodeDepths.length-1][0]+'"]').position('y') );
                var yDiff = cy.elements('node[type="chemical"]').position('y') - cy.elements('node[id="'+nodeDepths[1][0]+'"]').position('y');
                yDiff = Math.abs( yDiff );
                var translation = Math.abs( yDiff - (totalY / (nodeDepths.length+1)) );
                cy.elements('node[type!="chemical"]').forEach( function(n) { n.position( 'y', n.position( 'y' ) - translation); } );
                for (var i=1; i < nodeDepths.length; i++) {
                    if ( nodeDepths[i].length > 2 ) {
                        var xpos = [];
                        var xsorted = [];
                        for (var j=0; j< nodeDepths[i].length; j+= 1) { xpos[ cy.elements('node[id="' + nodeDepths[i][j] + '"]').position('x')] = nodeDepths[i][j];
                                                                        xsorted.push(cy.elements('node[id="' + nodeDepths[i][j] + '"]').position('x')); }
                        xsorted.sort(function(a,b){return a-b});
                        for (var j=0; j < xsorted.length; j+= 1) { nodeDepths[i][j] = xpos[ xsorted[j] ]; }
                        for (var j=0; j < nodeDepths[i].length; j+=2) {
                            var oldY = cy.elements('node[id="' + nodeDepths[i][j] +'"]').position('y');
                            cy.elements('node[id="' + nodeDepths[i][j] + '"]').position( 'y', oldY-(yDiff*0.2));
                        }
                    }
                }
                mediator.restore();
                mediator.position('x',cy.elements('node[type="chemical"]').position('x'));
                mediator.position('y',cy.elements('node[type="chemical"]').position('y')+totalY);

            },
            stop: undefined // callback on layoutstop
        };


        cy.layout( options );
        cy.nodes().grabify();
		var chemical = cy.elements('node[type="chemical"]');
		var mediator = cy.elements('node[type="mediator"]');
		$('#title').text('Evidence Network: ' + chemical.data('name') + '-' + mediator.data('name'));
		$(document).prop('title','Evidence Network: ' + chemical.data('name') + '-' + mediator.data('name'));

		/*************** Define tooltips for edges and ndoes *************************/
		var qtip_pos = { my: 'top center', at: 'bottom center' };
		var qtip_style = { classes: 'qtip-bootstrap', tip: {width: 32, height: 8} };
        cy.nodes('[type="gene"],[type="mediator"]').forEach(function(n){
            n.qtip({
                content: 'Name: <a href="http://www.ncbi.nlm.nih.gov/gene/'+
							n.data('entrez id')+'" target="_blank">'+
							n.data('name')+'</a><br>'+'Entrez ID: ' + n.data('entrez id') ,
                position: qtip_pos,
                style: qtip_style
            });
        });
        cy.nodes('[type="chemical"]').forEach(function(n){
            n.qtip({
                content: 'Name: <a href="https://pubchem.ncbi.nlm.nih.gov/search/#'+
							'collection=compounds&query_type=text&query='+
							n.data('name')+'" target="_blank">'+
							n.data('name')+'</a><br>',
                position: qtip_pos,
                style: qtip_style
            });
        });
		cy.edges().forEach(function(e){
			e.qtip({
				content: function(event,api) {return qContent(e)},
				position: qtip_pos,
				style: qtip_style
				});
		});


        // Delete duplicate edges
        var alreadyInEdges = new Array();
        cy.edges().forEach(function(e) {
            var edgeid = [e.data('pubmed id'), e.data('source'), e.data('target')];
            edgeid.sort();
            edgeid = edgeid.join('');
            if ($.inArray(edgeid,alreadyInEdges) != -1) {
                cy.remove(e);
            } else {
                alreadyInEdges.push(edgeid);
            }
        });
       

		/*************** Define shortest path highligher buttons *************************/

        var k = 0;
		var weightFn = function() {if (this.data('tot_score') == 0) {return Infinity} else return 1/this.data('tot_score');}
        // Define highlight shortest path
        $('#shortpathbtn').click (function(){

            var p = cy.elements().dijkstra(cy.$('node[type="chemical"]'), weightFn).pathTo(cy.$('node[type="mediator"]'));
            cy.$('.highlight').forEach( function(ele) { ele.removeClass('highlight'); } );
            for ( var i = 0; i < p.length; i++ ){
                p[i].addClass('highlight');
                }
            K = 1;
			$('#nextshortestbtn').removeAttr('disabled');

        } );

        $('#nextshortestbtn').click( function(evt){
            K++;
            var chemical = cy.$('node[type="chemical"]');
            var mediator = cy.$('node[type="mediator"]');
            var p =  yens( cy.elements(), K, chemical, mediator, weightFn )

            cy.$('.highlight').forEach( function(ele) { ele.removeClass('highlight'); } );
            for ( var i = 0; i < p.length; i++ ){
                p[i].addClass('highlight');
                }

        });

		$('#clearbtn').click( function() {
			K = 0;
			cy.$('.highlight').forEach( function(ele) { ele.removeClass('highlight'); } );
			$('#nextshortestbtn').attr('disabled',true);
		});


		/*************** Define widgets and buttons on side bar *************************/

        // Define on-check for exclude chkbox
		var excludeXfers = false;
        $('input[name=exclude_chkbox]').change( function(){
            if($(this).is(':checked')){
                excludeXfers = true;
            }
            else{
                excludeXfers = false;
            }
			updateEdgeScores();
        });


		// Define sliders
        sliderTexts = ['None', 'Very Low', 'Low', 'Default', 'High', 'Very High']
		sliderValues = [0,		0.25,		0.5,	1, 		1.5,	2.0		]
        $( ".slider" ).slider({
            min: 0,
            max: 5,
            step: 1,
            value: 3,
			tooltip:'hide'
        });

		var ggWts = { 'tscore': 1,
							'escore': 1,
							'dscore': 1,
							'ascore': 1,
							'fscore': 1,
							'nscore': 1
							};
		var gcWts = { 'tscore': 1,
							'escore': 1,
							'dscore': 1,
							'pscore': 1
							};
		$( '.slider' ).on('slide', function() {
			var sliderVal = sliderValues[ $(this).val() ];
			var scoretype = $(this).attr('id');
			if ($(this).hasClass('gene-gene')) {
				$('#gg_'+scoretype+'_slider_val').text(sliderTexts[$(this).val() ])
				ggWts[ scoretype ] = sliderVal;
				updateEdgeScores('G'+scoretype[0]);
			} else {
				$('#gc_'+scoretype+'_slider_val').text(sliderTexts[$(this).val() ])
				gcWts[ scoretype ] = sliderVal;
				updateEdgeScores('C'+scoretype[0]);
			}
		});

		
		// Define onclicks for export buttons
		$('#png_btn').click( function() {
			var png64 = cy.png({ bg:"#fff" });
			window.open(png64,"_blank");
		} );
		$('#jpeg_btn').click( function() {
			var jpeg64 = cy.jpeg({ bg:"#fff" });
			window.open(jpeg64,"_blank");
		} );
		$('#json_btn').click( function() {
			var cyJson = cy.json();
			var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cyJson));
			var dlAnchorElem = document.getElementById('downloadAnchorElem');
			dlAnchorElem.setAttribute("href",     dataStr     );
			dlAnchorElem.setAttribute("download", "EvNet.json");
			dlAnchorElem.click();
		} );
			
		updateEdgeScores();
		function updateEdgeScores(flags) {
			flags = flags || '';
			if (flags == '' || flags.indexOf('G') > -1) {
				cy.edges('[type="gene-gene"],[type="gene-mediator"]').forEach( function(e) {
					if (flags == '' || flags.indexOf('e') > -1)
					e.data('escore',(+e.data('experimental')-excludeXfers*e.data('experimental_xfer'))*ggWts['escore']);
					if (flags == '' || flags.indexOf('d') > -1)
					e.data('dscore',(+e.data('database')-excludeXfers*e.data('database_xfer'))*ggWts['dscore']);
					if (flags == '' || flags.indexOf('t') > -1)
					e.data('tscore',(+e.data('textmining')-excludeXfers*e.data('textmining_xfer'))*ggWts['tscore']);
					if (flags == '' || flags.indexOf('a') > -1)
					e.data('ascore',(+e.data('coexpression')-excludeXfers*e.data('coexpression_xfer'))*ggWts['ascore']);
					if (flags == '' || flags.indexOf('f') > -1)
					e.data('fscore',+e.data('fusion')*ggWts['fscore']);
					if (flags == '' || flags.indexOf('n') > -1)
					e.data('nscore',+e.data('neighborhood')*ggWts['nscore']);

					e.data('tot_score',combineScore(e));
					e.style('opacity',e.data('tot_score')/1000);
					});
			} 
			if (flags == '' || flags.indexOf('C') > -1) {
				cy.edges('[type="chem-gene"]').forEach( function(e) {

					if (flags == '' || flags.indexOf('e') > -1)
					e.data('escore',(+e.data('experimental')-excludeXfers*e.data('experimental_xfer'))*gcWts['escore']);
					if (flags == '' || flags.indexOf('d') > -1)
					e.data('dscore',(+e.data('database')-excludeXfers*e.data('database_xfer'))*gcWts['dscore']);
					if (flags == '' || flags.indexOf('t') > -1)
					e.data('tscore',(+e.data('textmining')-excludeXfers*e.data('textmining_xfer'))*gcWts['tscore']);
					if (isNaN(+e.data('prediction_xfer'))) e.data('prediction_xfer','0') //delme
					if (flags == '' || flags.indexOf('p') > -1)
					e.data('pscore',(+e.data('prediction')-excludeXfers*e.data('prediction_xfer'))*gcWts['pscore']);
					//e.data('pscore',+e.data('prediction'));

					e.data('tot_score',combineScore(e));
					e.style('opacity',e.data('tot_score')/1000);
					});
			}

		}
			
    });






}); // on dom ready
