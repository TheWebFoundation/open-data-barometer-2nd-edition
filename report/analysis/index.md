---
layout: page
weight: 3
menu_title: Report 
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

<span class="lead">The Open Data Barometer provides a snapshot of the state of open data around the world. It is designed to help advocates, policy makers and researchers understand and ask questions about how the development of an “open by default” approach to government data is progressing, and how impacts from open data can best be secured.</span>

<div id="map_container" style="position: relative; width: 100%; height: 600px;"></div>
<div id="map-caption" class="caption">Country clusters based on Open Data Barometer Readiness and Impact questions<br/>
<span style="color:#164F5F;">High capacity</span>, <span style="color:#1B6C61;">Emerging & advancing</span>, <span style="color:#83C04C;">Capacity constrained</span>, <span style="color:#D3DA61">One sided initiatives</span></div>

## Country clusters

The immediate potential of open data, the strategies to secure impact, and the key challenges faced by data suppliers and users each vary across countries. While the Open Data Barometer provides a global benchmark, it also enables more localised comparisons. To support this, we have used hierarchical cluster analysis to identify a set of country clusters.

[Hierarchical cluster analysis](http://www.r-tutor.com/gpu-computing/clustering/hierarchical-cluster-analysis) is a method to look for similarities and differences between entries in a dataset, by working out the “distance” between them on the basis of a set of variables. A statistical cluster analysis performed over the full Open Data Barometer expert survey and secondary data for  **readiness** and **impact** provides a heuristic for identifying different patterns of engagement with open data around the world. We don't include implementation (levels of dataset publication) in this analysis in order to focus more on the broad capacity, potential, and policy progress of countries, rather than having the clusters influenced by which countries have co-published particular datasets. Selecting the number of clusters to use in an analysis involves both the properties of the data and a judgement as to the explanatory power of the clusters. Based on an evaluation of a number of models, we selected a four-cluster analysis and, based on a detailed review of qualitative and quantitative data in each cluster, labelled them: <span style="color:#164F5F;">High capacity</span>, <span style="color:#1B6C61;">Emerging & advancing</span>, <span style="color:#83C04C;">Capacity constrained</span>, <span style="color:#D3DA61">One sided initiatives</span>.
 
You can hover over the map above to find the clusters assigned to individual countries, and the clusters are listed in the table below. 

<table class="table">
  <thead>
    <tr>
      <th style="text-align: center" width="25%">High capacity</th>
      <th style="text-align: center" width="25%">Emerging and advancing</th>
      <th style="text-align: center" width="25%">Capacity constrained</th>
      <th style="text-align: center" width="25%">One sided initiative</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center">UK, US, Sweden, France, New Zealand, Netherlands, Canada, Norway, Denmark, Australia, Germany, Finland, Estonia, Korea, Austria, Japan, Israel, Switzerland, Belgium, Iceland and Singapore</td>
      <td style="text-align: center">Spain, Chile, Czech Republic, Brazil, Italy, Mexico, Uruguay, Russia, Portugal, Greece, Ireland, Hungary, Peru, Poland, Argentina, Ecuador, India, Colombia, Costa Rica, South Africa, Tunisia, China, Philippines and Morocco</td>
      <td style="text-align: center">Indonesia, Turkey, Ghana, Rwanda, Jamaica, Kenya, Mauritius, Ukraine, Thailand, Vietnam, Mozambique, Jordan, Nepal, Egypt, Uganda, Pakistan, Benin, Bangladesh, Malawi, Nigeria, Tanzania, Venezuela, Burkina Faso, Senegal, Zimbabwe, Namibia, Botswana, Ethiopia, Sierra Leone, Zambia, Yemen, Cameroon, Mali, Haiti, Myanmar</td>
        <td style="text-align: center">Malaysia, Kazakhstan, UAE, Saudi Arabia, Bahrain and Qatar</td>
    </tr>
  </tbody>
</table>

The clusters can be described as follows:

* **High capacity** - These countries all have established open data policies, generally with strong political backing. They have extended a culture of open data out beyond a single government department with open data practices adopted in different government agencies, and increasingly at a local government level. These countries tend to adopt similar approaches to open data, incorporating key principles of the open definition, and emphasising issues of open data licensing. They have government, civil society and private sector capacity to benefit from open data. 

* **Emerging & advancing** - These countries have emerging or established open data programmes, often as dedicated initiatives, but sometimes through linking open data into existing policy agendas. Many of these countries are innovating in the delivery of open data policy, contextualising open data for their populations: for example, by focussing on the need for governments to make data accessible through visualisation in contexts of limited literacy and data literacy, as in India, or exploring the linkages between Right to Information laws and open data, as in the Philippines. The countries in this cluster have a variety of different strengths - and have great potential to innovate in developing best-fit approaches to open data. However, many still face challenges before open data is mainstreamed across government and institutionalised as a sustainable practice.

* **Capacity constrained** - The countries in this cluster all face challenges in establishing sustainable open data initiatives as a result of limited government, civil society or private sector capacity, limits on affordable widespread Internet access, and weaknesses in digital data collection and management. A small number of the countries in this cluster, such as Kenya, Ghana and Indonesia, have established open data initiatives, but these remain highly dependent upon a small network of leaders and technical experts. Without sustained leadership and investment, moves towards open data are difficult to make sustainable, as Kenya's dramatic fall in the Barometer rankings demonstrates. Limited availability of relevant training and technical capacity for working with open data presents an extra challenge for these countries to overcome in developing the availability and use of open data.

* **One-sided initiatives** - These countries each have some form of open data initiative, ranging from departmental web pages listing open data, to full open data portals. However, government action to publish selected datasets is not matched by civil society capacity and freedom to engage with the data, nor by private sector involvement in the open data process. As a result, these initiatives appear to be very supply-side driven, without engagement with a broad community of users. Without wider political freedoms, the potential of open data to bring about political and social change in these contexts will be limited. 

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

## G7 and G20: Commitments vs Reality

In 2013, the G8 (now the G7) committed to an Open Data Charter[^g8]. The Charter set out a desire to become 'open by default', and to ensure that data is re-usable by all, in order to spur innovation and increase government transparency. In November 2014, the G20 emphasised the importance of open data in it's Anti-Corruption Action Plan[^mt1] committing to prepare new G20 open data principles.

As the table below shows, the G7 still needs to do much more to fulfil their Charter commitments. Several G7 countries made strides in 2014 on opening up government contracting data. Access to health and education data was also boosted appreciably. But beyond the top-ranked UK and US, G7 nations largely failed to improve their abysmal 2013 scores on the high value datasets they themselves pledged to release. The UK remains the only country to have opened up its company register, while public spending data is fully open only in the US and UK, and land titles are open only in the UK and Canada. Availability of maps and legislation also remained mediocre in 2014, with only Germany and France, respectively, joining the UK and US in opening up these datasets.    The same can be said with regards to work to secure political, social and economic impacts from open data. Impacts were strong in the UK and US, but mediocre to poor in the other countries. This, in turn, is correlated with mediocre levels of readiness and capacity among government agencies, citizens and entrepreneurs, suggesting that some G7 countries still need to invest more in capacity-building and support for data users. No G7 countries have seen their overall score drop substantially, and France moved ahead an impressive six places. But Germany, Japan and Italy have all fallen in the rankings, as other countries have moved ahead of them. 

<div id="g7">
    
</div>

How far will the action plans prepared by the G7 countries address these gaps? An [analysis](http://sunlightfoundation.com/blog/2014/07/28/g8-open-data-charter-action-plan-open-data-by-default-but-you-may-have-to-pay-for-it/) by the Sunlight Foundation found that there is some distance to go to achieve the promise of making data “open by default”. Canada is the only country that committed to review and eliminate fees for access to data, which remains a key barrier to wider use. Canada and the UK were the only countries to take the important step of promising to prepare and publish a comprehensive data inventory, so that citizens can find out exactly what data the government is holding — but no other G7 countries have done so. Only three countries so far are taking steps to making the open publication of data mandatory for all government agencies. In the wake of their pathbreaking 2014 commitment to harness open data as a tool against corruption, G20 countries have even further to go before key accountability facts, such as corporate registers, details of government budgets and spending, and public contracts, will be readily available to all online. However, with the exception of Saudi Arabia, all G20 countries have observed some form of political (accountability or efficiency) impact from existing open data efforts.

<div id="g20">
    
</div>

<script>

headers = {"ODB-Scaled":{"short_name":"Score"},"ODB-Rank":{"short_name":"Rank"},"Impact_Economic-Scaled":{"short_name":"Economic"},
            "Impact_Political-Scaled":{"short_name":"Political"},"Impact_Social-Scaled":{"short_name":"Social"},"d1":{"short_name":"Map Data"},"d2":{"short_name":"Land ownership data"},"d4":{"short_name":"Detailed census data"},"d5":{"short_name":"Detailed government budget"},"d6":{"short_name":"Detailed data on government spend"},"d7":{"short_name":"Company register"},"d8":{"short_name":"Legislation"},"d9":{"short_name":"Public transport timetables"},"d10":{"short_name":"International trade data"},"d11":{"short_name":"Health sector performance"},"d12":{"short_name":"Primary or secondary education performance data"},"d13":{"short_name":"Crime statistics"},"d14":{"short_name":"National environment statistics"},"d15":{"short_name":"National election results"},"d16":{"short_name":"Public Contracts"},"Readiness_Government-Scaled":{"short_name":"Government"},"Readiness_Citizens-Scaled":{"short_name":"Citizen"},"Readiness_Entrepreneurs-Scaled":{"short_name":"Entrepreneur"}}

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



$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/assets/data/g20-analysis.csv",
        success: function (data) { 
           fields = ["Country","ODB-Scaled","Readiness_Government-Scaled","Readiness_Citizens-Scaled","Readiness_Entrepreneurs-Scaled","Impact_Economic-Scaled",
                    "Impact_Political-Scaled","Impact_Social-Scaled",
                    "d2","d5","d6","d7","d8","d15","d16"]
           data = $.csv.toObjects(data);
           table = "<table class='table'>\n"
              table += "<thead><tr>\n"
              table += "<th colspan='2'>Overview</th><th colspan='3'>Readiness (scaled)</th><th colspan='3'>Impacts (scaled)</th><th colspan='7'>Accountability datasets availability</th></tr>\n"
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
               
               $("#g20").html(table)
               
               $(function () {
                 $('[data-toggle="tooltip"]').tooltip()
               })
               
               $("#g20 TABLE").dataTable({"order":[[1,"desc"]],
                            "paging":false,"searching":false})
        }
    });
});
</script>




### Footnotes
          
[^g8]: UK Cabinet Office, (June 18th 2013) G8 Open Data Charter and Technical Annex, https://www.gov.uk/government/publications/open-data-charter
[^mt1]: Tisne, M (Nov 17th 2014), New Tool in the Fight Against Corruption: Open Data, http://tisne.org/2014/11/17/new-tool-in-the-fight-against-corruption-open-data/
