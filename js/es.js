// depends on jquery

(function($){
	var es = window.es || {};

	es.version = '0.1';
	es.dev = false;

	window.es = es;

	// defaults
	es.elasticServer = 'http://vas.plexis.eu:9200/';

	es.query = function(data, index, callback){
		$.ajax({
			url: es.elasticServer + index + '/_search',
			type: 'POST',
			crossDomain: true,
			dataType: 'json',
			data: JSON.stringify(data),
			success: callback
		});
	};

	// netflow namespace
	es.nf = {};

	// get flow statistics
	es.nf.getFlows = function(callback, interval){
		var data = {
			query: {
				"match_all": {}
			},
			"facets": {
     		   "histo1": {
            		"date_histogram": {
                	"field": "parsedDate",
                	"interval": interval || "1h",
                	"value_field": "firstSeenSrcTotalBytes"
	            	}
	        	}
	    	}
		};

		es.query(data, 'nf', function(result){
			console.log(result);
			callback(result.facets.histo1.entries);
		});
	};



})($);