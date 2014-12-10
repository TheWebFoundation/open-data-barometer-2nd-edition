---
layout: page
weight: 3
menu_title: Data 
title: Clusters
group: navigation
subgroup: snapshot
javascript:
 - script: http://d3js.org/d3.v3.min.js
 - script: http://d3js.org/topojson.v1.min.js
 - script: /assets/js/datamaps.world.min.js 
 - script: /assets/js/jquery.csv-0.71.min.js 
 - script: /assets/js/odb.js
---

# Snapshot

<span class="lead">The Open Data Barometer provides a snapshot view of the state of open data around the world, designed to support advocates, policy makers and researchers understand and ask questions about how the development of an 'open by default' approach to government data is progressing, and how impacts from open data can best be secured.</span>

The readiness and impact sections are based on data collected covering the period May 2013 to July 2014, and the dataset implementation questions are based on data collected in September and October 2014. 

## Country clusters

The immediate potential of open data, the strategies to secure impact, and the key challenges faced by data suppliers and users varies across countries. Whilst the Open Data Barometer provides a global benchmark, it also supports more localised comparisons. To support this, in this edition of the Open Data Barometer we identify a set of country clusters using hierarchical cluster analysis. 

[Hierarchical cluster analysis](http://www.r-tutor.com/gpu-computing/clustering/hierarchical-cluster-analysis) is a method to look for similarities and differences between entries in a dataset, by working out the 'distance' between them on the basis of a set of variables. A statistical cluster analysis performed over the full Open Data Barometer expert survey and secondary data for **readiness** and **impact** provides a heuristic for identifying different patterns of engagement with open data around the world. We don't include implementation (levels of datasets publication) in this analysis in order to focus more on the broad capacity, potential and policy progress of countries, rather than having the clusters influenced by which countries have co-published particular datasets. Selecting the number of clusters to use in an analysis involves both the properties of the data, and a judgement as to the explanatory power of the clusters. Based on a number of experimental models, we selected a four-cluster analysis of the countries included in the Open Data Barometer, and, based on a detailed analysis labelled these clusters: <span style="color:#01665e">High capacity</span>, <span style="color:#5ab4ac;">Emerging & advancing</span>, <span style="color:#9FBBB7">Capacity constrained</span>, <span style="color:#C5BA9C">One sided initiatives</span>.
 
You can hover over the map below to find the clusters assigned to individual countries, and the clusters are listed in the table below. 

<div id="map_container" style="position: relative; width: 90%px; height: 600px;"></div>
<div id="map-caption" class="caption">Country clusters based on Open Data Barometer Readiness and Impact questions</div>

<table class="table">
  <thead>
    <tr>
      <th style="text-align: center" width="25%">High capacity</th>
      <th style="text-align: center" width="25%">Emerging and advancing</th>
      <th style="text-align: center" width="25%">One sided initiative</th>
      <th style="text-align: center" width="25%">Capacity constrained</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center">UK, US, Sweden, France, New Zealand, Netherlands, Canada, Norway, Denmark, Australia, Germany, Finland, Estonia, Korea, Austria, Japan, Israel, Switzerland, Belgium, Iceland and Singapore</td>
      <td style="text-align: center">Spain, Chile, Czech Republic, Brazil, Italy, Mexico, Uruguay, Russia, Portugal, Greece, Ireland, Hungary, Peru, Poland, Argentina, Ecuador, India, Colombia, Costa Rica, South Africa, Tunisia, China, Philippines and Morocco</td>
      <td style="text-align: center">Malaysia, Kazakhstan, UAE, Saudi Arabia, Bahrain and Qatar</td>
      <td style="text-align: center">Indonesia, Turkey, Ghana, Rwanda, Jamaica, Kenya, Mauritius, Ukraine, Thailand, Vietnam, Mozambique, Jordan, Nepal, Egypt, Uganda, Pakistan, Benin, Bangladesh, Malawi, Nigeria, Tanzania, Venezuela, Burkina Faso, Senegal, Zimbabwe, Namibia, Botswana, Ethiopia, Sierra Leone, Zambia, Yemen, Cameroon, Mali, Haiti, Myanmar</td>
    </tr>
  </tbody>
</table>



<script>
    var scores = {}
    var mapData = {}
    var map
        
    function generate_map_data(scores,variable) {
       var mapData = {}
       for(i=0;i<scores.length;i++) {
           console.log(scores[i])
           mapData[scores[i]['ISO3']] = {fillKey:scores[i][variable],score:scores[i][variable]}
        } 
       map.updateChoropleth(mapData);

    }
    
    function setupMap(initialData) {
        var map = new Datamap({element: document.getElementById('map_container'),
          fills: {            
                      0: "#f5f5f5",
                      "Emerging and advancing": "#5ab4ac",
                      "High capacity": "#01665e",
                      "One sided initiative": "#f6e8c3",
                      "Capacity constrained": "#c7eae5",
                      defaultFill: 'white' //any hex, color name or rgb/rgba value
          },
          data: initialData,
          geographyConfig: {
                      borderWidth:1,
                      borderColor:'#000000',
                      highlightOnHover: false,
                      popupOnHover: true,
                      popupTemplate: function(geography, data) { //this function should just return a string
                          try {
                            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong> Cluster:' +  data.score + '</div>';
                          } catch(err) {
                             return '<div class="hoverinfo">' + geography.properties.name + ' is was not covered by the Open Data Barometer survey</div>';
                          }
                      },
          }
        });
        return map
    }
    
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "/assets/data/ODB-2014-Rankings.csv",
            success: function (data) { 
               scores = $.csv.toObjects(data);
               map = setupMap({})
               generate_map_data(scores,"Cluster")
               
               $("#map_var").change(function() {
                   console.log($(this).val())
                   generate_map_data(scores,$(this).val())
               })
            }
        });
    });

</script>