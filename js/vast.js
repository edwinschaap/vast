var VAST = function(opts) {
	if ( !(this instanceof VAST)) {
        return new VAST(opts);
    }

    var $ = this; //  Short reference
    $.version = '0.0.1';

    $.models = {}; // All models are stored in this
    $.graphs = []; // All graphs currently on the page
    $.utils = {};

    $.utils.defaultColor = function() {
    	var colors = d3.scale.category20().range();
    	return function(d, i) { return d.color || colors[i % colors.length] };
	}


    // Helper function 
    $h = {
        each: function(o,callback){
            if(typeof(o.length)!=='undefined') {
                for (var i=0; i<o.length; i++) {
                    // Array or FileList
                    if(callback(o[i])===false) return;
                }
            } else {
                for (i in o) {
                    // Object
                    if(callback(i,o[i])===false) return;
                }
            }
        }
    }

    // log function
    $.log = function(message) {
        if($.opts.log){
            console.log(message);
        }
    }

    $.models.line = function(){
    	function chart(selection){
    		selection.each(function(data){

    		});
    	};

    	return chart;
    };

    $.models.lineChart = function(){

    	var lines = $.models.line(),
    		xAxis = d3.svg.axis(),
    		yAxis = d3.svg.axis()
    	;
    	var margin = {top: 30, right: 20, bottom: 50, left: 60},
    		color = $.utils.defaultColor(),
    		width = null,
    		height = null,
    		x,
    		y
    	;

    	xAxis.orient('bottom');
    	yAxis.orient('left');

    	function chart(selection){
    		selection.each(function(data) {
    			var container = d3.select(this),
          			that = this;
          		var availableWidth = (width  || parseInt(container.style('width')) || 960)
                        - margin.left - margin.right,
          			availableHeight = (height || parseInt(container.style('height')) || 400)
                        - margin.top - margin.bottom;

                chart.update = function() { chart(selection) };
      			chart.container = this;


      			// Setup lines
      			lines
			        .width(availableWidth)
			        .height(availableHeight)
			        .color(data.map(function(d,i) {
			          return d.color || color(d, i);
			        }).filter(function(d,i) { return !data[i].disabled }));
    			}

    	};

    	return chart;
    }




    // default options
    $.defaults = {
    	rootElement: 'body',
    	elasticServer: 'http://localhost:9200/',
    	width: 800
    };

    // Set options with given arguments or defaults
    $.opts = opts||{};
    $h.each($.defaults, function(key,value){
        if(typeof($.opts[key])==='undefined') $.opts[key] = value;
    });
    // Return object
    return(this);
}
