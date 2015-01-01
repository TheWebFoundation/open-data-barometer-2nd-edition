---
layout: page
weight: 4
title: Impact
group: snapshot
javascript:
 - script: http://d3js.org/d3.v3.min.js
 - script: /assets/js/nvd3/nv.d3.min.js
 - script: /assets/js/jquery.csv-0.71.min.js 
 - script: /assets/js/odb.js
css:
 - stylesheet: /assets/js/nvd3/nv.d3.min.css
---

# Impact

<span class="lead">Entrepreneurial open data use has overtaken accountability as the most observed impact from OGD. Transparency and accountability impacts are the second most observed impact, through within 'emerging and advancing' countries transparency and accountability impacts come top. The effective use of open data to increase environmental sustainability and support greater inclusion of marginalised groups remains extremely limited.</span>
    
Many different outcomes and impacts are anticipated from OGD. Our research finds that impacts cannot be attributed to datasets alone, but instead rely upon a constellation of practices in a country that make up open data initiatives as a whole. 

As a proxy measure for impact, the Open Data Barometer asks researchers to identify case studies in media or academic literature, over the last twelve months, of open data being used to create various kinds of impacts. The maximum scores are available for cases of strong peer-reviewed evidence. In general, most evidence of open data impacts remains anecdotal or captured in journalistic rather than academic reviews, and stories initially cited in research often describe outputs rather than outcomes and impacts. This influences the relatively low average scores in this section of the Barometer report.

## Areas of impact

When countries <a href='javascript:$("#select_comparison").val("init").trigger("change")'>without an open data initiative</a>, or those with <a href='javascript:$("#select_comparison").val("all").trigger("change")'>weaker and earlier stage initiatives</a>, are removed from the sample, there is a clear trend towards greater perceived impact.

Over the last year there has been a growth in the perceived use of open data by entrepreneurs to build new products and services. By contrast, there has been relatively little change in the perceived use of data to address environmental issues, or to increase inclusion. It is also notable that evidence proving the economic growth returns on open data, to back up the strong claims that have been made based on theoretical arguments, is not yet forthcoming. 

**Select comparison:** <select id="select_comparison">
    <option value="all">All Countries</option>
    <option value="init">Countries with any form of open data initiative</option>
    <option value="strong">Countries with a strong open data initiative</option>
</select>

*Purple bars represent the 2014 mean score on impact questions. Blue bars represent the 2013 scores.*

<div id='chart1'>
  <svg style='height:500px'> </svg>
</div>

## Readiness and impact

There is a strong correlation between open data readiness, and open data impact, as measured by the Barometer. 

The scatter plot below shows the readiness sub-index plotted against the impact sub-index. The colour coding by region indicates clearly that both readiness and impact remain unevenly distributed across the world. 

<div id='cor_chart'>
  <svg style='height:500px'> </svg>
</div>

The correlation between Readiness and Impact subindexes is between 0.8 and 0.9, indicating a strong connection between a countries readiness and the impact that expert researchers observe. 


<script>

var chart = ""

d3.json('/assets/data/impact.json', function(data) {
  return nv.addGraph(function() {
    chart = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .margin({top: 30, right: 20, bottom: 50, left: 250})
        .showValues(true)           //Show bar value next to each bar.
        .tooltips(false)             //Show tooltips on hover.
        .transitionDuration(350)
        .showControls(false)   //Allow user to switch between "Grouped" and "Stacked" mode.
        .forceY([0,10]);      

    chart.yAxis
        .tickFormat(d3.format(',.2f')).axisLabel('Mean impact score. Based on question of the form "To what extent has open data had a noticeable impact on X in a given country?"');;

    d3.select('#chart1 svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);
    
    return chart;
  });
});

$(document).ready(function() {
   $("#select_comparison").change(function(){
       state = chart.state()
       for(i=0; i < 6; i++) {
           state.disabled[i] = true
       }
       switch($(this).val()) {
           case "all":
                state.disabled[0] = false;
                state.disabled[3] = false;
           break;
           case "init":
               state.disabled[1] = false;
               state.disabled[4] = false;
           break;
           case "strong":
               state.disabled[2] = false;
               state.disabled[5] = false;
           break;
       }

       chart.dispatch.changeState(state);
       chart.update();
   })
});
</script>



<script>

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/assets/data/ODB-2014-Rankings.csv",
        success: function (data) { 
           window.odb_data = $.csv.toObjects(data);
            $.ajax({
                    type: "GET",
                    url: "/assets/data/indicators.csv",
                    success: function (data) { 
                       window.odb_key = $.csv.toObjects(data);
                       drawGraph("Region",'Readiness',"Impact")
                       
                    }      
            });
       }
    });
  
});

function drawGraph(groupBy,x,y) {

    nv.addGraph(function() {
      var cor_chart = nv.models.scatterChart()
                    .showDistX(true)    //showDist, when true, will display those little distribution lines on the axis.
                    .showDistY(true)
                    .showLegend(true)
                    .sizeRange([100, 100])
                    .transitionDuration(350)
                    .color(d3.scale.category10().range());

      //Configure how the tooltip looks.
      cor_chart.tooltipContent(function(key, x, y, data) {
          try {
            return '<h3>' + data.point.country + '</h3>';
          } catch (err) {
            return "ERROR"  
          }
      });

      //Axis settings
      cor_chart.xAxis.tickFormat(d3.format('.02f')).axisLabel("Readiness Sub-Index: Z-Score");
      cor_chart.yAxis.tickFormat(d3.format('.02f')).axisLabel("Impact Sub-Index: Z-Score");

      //We want to show shapes other than circles.
      cor_chart.scatter.onlyCircles(false);

      var myData = select_data(groupBy,x,y);
      d3.select('#cor_chart svg')
          .datum(myData)
          .call(cor_chart);

      nv.utils.windowResize(cor_chart.update);

      return cor_chart;
    });
}

function safeName(value) {
    return value.replace("&","and")
}

function select_data(groupBy,x,y) {
    data = window.odb_data
    keys = window.odb_key
    
    var output = []
    
    var groups = []
    for(i = 0; i<data.length; i++) {
        xVal = parseFloat(safeName(data[i][x]))
        yVal = parseFloat(safeName(data[i][y]))
        try {
            groups[safeName(data[i][groupBy])].values.push({x: xVal, y: yVal, size: 50, shape: "circle",country:data[i].Country})
        } catch (err) {
            groups[safeName(data[i][groupBy])] = {values:[]}
            groups[safeName(data[i][groupBy])].values.push({x: xVal, y: yVal, size: 50, shape: "circle",country:data[i].Country})
        }
    }
    
    for(group in groups) {
        output.push({
            key: group,
            values: groups[group].values
        })    
    }
    
    return output
}

</script>

