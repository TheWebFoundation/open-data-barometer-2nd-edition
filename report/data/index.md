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
 - script: /assets/js/jquery.dataTables.min.js
---

# Data & analysis: clusters

<span class="lead">The Open Data Barometer provides a snapshot view of the state of open data around the world, designed to support advocates, policy makers and researchers understand and ask questions about how the development of an 'open by default' approach to government data is progressing, and how impacts from open data can best be secured.</span>

In the following pages you will find an individual breakdown of results on readiness, implementation and impact, as well as a overall ranking. In the results we draw upon a clustering of countries as described below. The readiness and impact sections are based on data collected covering the period May 2013 to July 2014, and the dataset implementation questions are based on data collected in September and October 2014. 

<div id="map_container" style="position: relative; width: 90%px; height: 600px;"></div>
<div id="map-caption" class="caption">Country clusters based on Open Data Barometer Readiness and Impact questions<br/>
<span style="color:#164F5F;">High capacity</span>, <span style="color:#1B6C61;">Emerging & advancing</span>, <span style="color:#83C04C;">Capacity constrained</span>, <span style="color:#D3DA61">One sided initiatives</span></div>

## Country clusters

The immediate potential of open data, the strategies to secure impact, and the key challenges faced by data suppliers and users varies across countries. Whilst the Open Data Barometer provides a global benchmark, it also enables more localised comparisons. To support this, in this edition of the Open Data Barometer we identify a set of country clusters using hierarchical cluster analysis. 

[Hierarchical cluster analysis](http://www.r-tutor.com/gpu-computing/clustering/hierarchical-cluster-analysis) is a method to look for similarities and differences between entries in a dataset, by working out the 'distance' between them on the basis of a set of variables. A statistical cluster analysis performed over the full Open Data Barometer expert survey and secondary data for **readiness** and **impact** provides a heuristic for identifying different patterns of engagement with open data around the world. We don't include implementation (levels of datasets publication) in this analysis in order to focus more on the broad capacity, potential and policy progress of countries, rather than having the clusters influenced by which countries have co-published particular datasets. Selecting the number of clusters to use in an analysis involves both the properties of the data, and a judgement as to the explanatory power of the clusters. Based on a number of experimental models, we selected a four-cluster analysis of the countries included in the Open Data Barometer, and, based on a detailed analysis labelled these clusters: <span style="color:#164F5F;">High capacity</span>, <span style="color:#1B6C61;">Emerging & advancing</span>, <span style="color:#83C04C;">Capacity constrained</span>, <span style="color:#D3DA61">One sided initiatives</span>.
 
You can hover over the map above to find the clusters assigned to individual countries, and the clusters are listed in the table below. 

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

The [rankings](rankings.html) section provides an analysis of country performance and changes in each cluster.

<script>
    var scores = {}
    var mapData = {}
    var map
        
    function generate_map_data(scores,variable) {
       var mapData = {}
       for(i=0;i<scores.length;i++) {
           mapData[scores[i]['ISO3']] = {fillKey:scores[i][variable],score:scores[i][variable]}
        } 
       map.updateChoropleth(mapData);

    }
    
    function setupMap(initialData) {
        var map = new Datamap({element: document.getElementById('map_container'),
          fills: {            
                      0: "#f5f5f5",
                      "Emerging and advancing": "#1B6C61",
                      "High capacity": "#164F5F",
                      "One sided initiative": "#D3DA61",
                      "Capacity constrained": "#83C04C",
                      defaultFill: 'white' //any hex, color name or rgb/rgba value
          },
          data: initialData,
          geographyConfig: {
                      borderWidth:1,
                      borderColor:'#8F8F8B',
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
                   generate_map_data(scores,$(this).val())
               })
            }
        });
    });

</script>

## G7 and G20 Analysis

In 2013, G8 Countries committed to an Open Data Charter[^g8]. The Charter set out a desire to become 'open by default', releasing data both for improved governance and for innovation, and making sure data is re-usable by all. In November 2014, the G20 emphasised the importance of open data in it's Anti-Corruption Action Plan[^mt1] committing to prepare new G20 open data principles.

As the table below shows, progress is mixed across the G7 towards providing a broad range of the datasets specified in the Charter technical annexe as open data, as is work to secure accountability and economic impacts from open data.

<div id="g7">
    
</div>

<script>

headers = {"ODB-Scaled":{"short_name":"Score"},"ODB-Rank":{"short_name":"Rank"},"Impact_Economic-Scaled":{"short_name":"Economic"},
            "Impact_Political-Scaled":{"short_name":"Political"},"Impact_Social-Scaled":{"short_name":"Social"},"d1":{"short_name":"Map Data"},"d2":{"short_name":"Land ownership data"},"d4":{"short_name":"Detailed census data"},"d5":{"short_name":"Detailed government budget"},"d6":{"short_name":"Detailed data on government spend"},"d7":{"short_name":"Company register"},"d8":{"short_name":"Legislation"},"d9":{"short_name":"Public transport timetables"},"d10":{"short_name":"International trade data"},"d11":{"short_name":"Health sector performance"},"d12":{"short_name":"Primary or secondary education performance data"},"d13":{"short_name":"Crime statistics"},"d14":{"short_name":"National environment statistics"},"d15":{"short_name":"National election results"},"d16":{"short_name":"Public Contracts"}}

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/assets/data/g7-analysis.csv",
        success: function (data) { 
           fields = ["Country","ODB-Rank","ODB-Scaled","Change","Impact_Economic-Scaled",
                    "Impact_Political-Scaled","Impact_Social-Scaled",
                    "d1","d2","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13","d14","d15","d16"]
           data = $.csv.toObjects(data);
           table = "<table class='table'>\n"
              table += "<thead><tr>\n"
              table += "<th colspan='4'>Overview</th><th colspan='3'>Impacts (scaled)</th><th colspan='15'>Dataset availability</th></tr>\n"
              table += "<tr>\n"
              for(col = 0;col<fields.length;col++) {
                  if(fields[col].indexOf("d")==0) {
                      colname=""
                  } else {
                      try {
                         colname = headers[fields[col]]['short_name']
                      } catch (err) {
                          colname = fields[col]
                      }
                  }
                      table += "<th>"+colname+"</th>\n"
              }
              table += "</tr></thead>\n"
              table += "<tbody>\n"
              for(i=0;i<data.length;i++) {
                      table += "<tr>\n"
                      for(field = 0;field<fields.length;field++) {
                          if(fields[field].indexOf("d")==0) {
                              table += "<td><img src='/assets/images/icons/noun/"+ fields[field]+ ".png' class='dataset-status-"+data[i][fields[field]] + "' width='25' data-toggle='tooltip' data-placement='top' title='"+headers[fields[field]]['short_name']+ (data[i][fields[field]] == 1 ? " - Available as open data" : " - Not available as open data")+"'/></td>\n"
                          } else {
                              table += "<td>"+ data[i][fields[field]] + "</td>\n"
                          }

                      }
                      table += "</tr>\n"
               }
               table += "</tbody>\n"
               table += "</table>"
               
               $("#g7").html(table)
               
               $(function () {
                 $('[data-toggle="tooltip"]').tooltip()
               })
               
               $("#g7 TABLE").dataTable({"order":[[1,"asc"]],
                            "paging":false,"searching":false})
        }
    });
});

</script>

### Footnotes
          
[^g8]: UK Cabinet Office, (June 18th 2013) G8 Open Data Charter and Technical Annex, [https://www.gov.uk/government/publications/open-data-charter](https://www.gov.uk/government/publications/open-data-charter) 
[^mt1]: Tisne, M (Nov 17th 2014), New Tool in the Fight Against Corruption: Open Data [http://tisne.org/2014/11/17/new-tool-in-the-fight-against-corruption-open-data/](http://tisne.org/2014/11/17/new-tool-in-the-fight-against-corruption-open-data/)
