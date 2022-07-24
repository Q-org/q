var datasets = function(){
	var doc = document;
	this.legend = function(){
		if (arguments.length < 2) return null;

		var points= [];
		var point;
		var le = doc.getElementsByName(arguments[0]);
		var ve = doc.getElementsByName(arguments[1]);
		if (le && ve)
		{
			var len = le.length > ve.length ? ve.length : le.length;
			for (var i = 0; i < len; i++)
			{
				point = [le[i].value, ve[i].value];
				points.push(point);
			}
		}
		else
		{
			return null;
		}
		return points;
	};

	this.datable = function(){
		if (arguments.length < 2) return null;
		var table = [];
		var len = arguments.length;
		for (li = 1; li < len; li++)
		{
			var leg = this.legend(arguments[0],arguments[li]);
			table.push(leg);
		}
		return table;
	};

	this.dataset = function(){
		if (arguments.length < 2) return null;
		var daset = new Object();
		var len = arguments.length;
		for (li = 1; li < len; li++)
		{
			var leg = this.legend(arguments[0],arguments[li]);
			daset[arguments[li]] = {label: this.findLabel(arguments[li]),data:leg};
		}
		return daset;
	};

	this.dataset4plot = function(){
		if (arguments.length < 2) return null;
		var daset = new Object();
		var len = arguments.length;
		for (li = 1; li < len; li++)
		{
			var leg = this.legend(arguments[0],arguments[li]);
			daset[arguments[li]] = leg;
		}
		return daset;
	};

	this.findLabel = function(refname){
		var e = jQuery("*[ref='" + refname + "']");
		return e && e.attr("label") ? e.attr("label") : refname;
	};

	this.label4chart = function(grnum, sernum){
		var e = jQuery("input[graph*='\[" + grnum + "\.y" + sernum + "\.label\]']");
		return e && e.attr("value") ? e.attr("value") : "";
	};

	this.dataset4chart = function(grname){
		//grname?ĸ?ʽҪ??Ϊ:gr1,һ??Ϊ??Ҫ??ͼ??DIV??ID
		if (grname.indexOf("gr") < 0) return null;

		var grnum = grname.substring(2, grname.length);
		var lblelements = jQuery("input[graph*='\[" + grnum + "\.x']"); //?м???Xֵ
		//var seriesnum = jQuery("input[graph*='\[" + grnum + "\.y'][graph*='.1\]']").length; //?м???????
		var reg = new RegExp("\\[" + grnum + "\\.y\\d+\\.1\\]", "gi");
		var se = jQuery("input[graph*='\[" + grnum + "\.y'][graph*='.1\]']").filter(function(){
			return jQuery(this).attr("graph").match(reg);
		});
		var seriesnum = se.length; //?м???????
		var legends = [];
		for (var i = 1; i <= seriesnum; i++)
		{
			var legend = [];
			var ticks = [];
			var j = 0;
			var grtype = "line";
			lblelements.each(function(){
				var lbl = jQuery(this).attr("value");
				
				//ȡ??Ӧ??Yֵ??Y??????Ҫ??Ϊ??1.y1.1 ... 1.yn.1,???п?ʼ??1??????һ??ͼ??y1??????һ?????ߣ?y1????.1??????һ??ֵ
				var pointname = jQuery(this).attr("graph");
				//var point = pointname.substring(pointname.lastIndexOf(".") + 1, pointname.length);
				var point = pointname.substring(pointname.indexOf("\[" + grnum + "\.x") + 1, pointname.indexOf("\]",(pointname.indexOf("\[" + grnum + "\.x") + 1)));
				point = point.substring(point.lastIndexOf(".") + 1, point.length);
				var pos = point.indexOf(":");
				if (pos > 0)
				{
					grtype = point.substring(pos + 1, point.length);
					point  = point.substring(0, pos);
				}
				var e = jQuery("input[graph*='\[" + grnum + "\.y" + i + "\." + point + "\]']");
				if (e && e.attr("value")){
					legend.push([j,e.attr("value")]);
					ticks.push([j, lbl]);
				}
				j++;
			});
			legends.push({data:legend, label:this.label4chart(grnum,i), tick:ticks, graphtype:grtype});
		}
		return legends;
	};
};

var NinGraph = function(){
	this.draw = function(){
		var graphs = jQuery("div[graph]");
		if (graphs.length >= 0)
		{
			var dset = new datasets();
			graphs.each(function(){
				var series = dset.dataset4chart(jQuery(this).attr("graph"));
				try{
					$.plot(jQuery(this), series, {
						points: {show: series[0].graphtype=="line"},
						lines: {show: (series[0].graphtype=="line")},
						pies: {show: (series[0].graphtype=="pie")},
						bars: {show: (series[0].graphtype=="bar"), autoScale: true, fillOpacity: 1},
						xaxis:{ticks: series[0].tick}
					});
				}
				catch(expp){window.status+=expp.message;};
			});
		}
	};
	
	this.redraw = function(){
		jQuery("input[graph]").change(function(){ draw(); });
	}

	return {draw:draw,redraw:redraw};
}();