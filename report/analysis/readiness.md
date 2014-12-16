---
layout: page
weight: 2
title: Readiness
group: snapshot
javascript:
 - script: http://d3js.org/d3.v3.min.js
 - script: http://d3js.org/topojson.v1.min.js
 - script: /assets/js/datamaps.world.min.js 
 - script: /assets/js/jquery.csv-0.71.min.js 
 - script: /assets/js/jquery.dataTables.min.js
 - script: /assets/js/dataTables.fixedHeader.js
 - script: /assets/js/jquery.databar.js 
 - script: /assets/js/odb.js
css:
  - stylesheet: /assets/js/jquery.dataTables.min.css
---

## Context and readiness

<span class="lead">The readiness of states, citizens and entrepreneurs to secure the benefits of open data has progressed little over the last year, and the data divide between countries with strong open data initiatives, and those without, has grown.</span>

Effective open data policies require a degree of collaboration between the state, the private sector and civil society. A balance is needed between governments with the capacity to create, manage and publish data, and third-parties with the technical skills, and the freedoms and resources to use data as a tool for change. Governments that focus on increasing the supply of open data alone, without exploring ways to extend access to data literacy and skills, approaches to stimulate innovation, and without putting in place foundations for data to be trusted, are likely to miss out on many of the benefits of open data.

The interactive map below illustrates a number of the key readiness variables in the Barometer. It can show the existence and strength of support for open data initiatives, engagement with open data from outside government, legislative frameworks that support open data, such as Right to Information and Data Protection laws, and the existence of training and support for data use and innovation. Hover over each country to see the expert assessment score given on a 0 - 10 scale.

<a name="map"></a>
<label>Chose the variable to display: <select id="map_var">
    <option value="ODB.2013.C.INIT" data-label="To what extent is there a well-resourced open government data initiative in this country?">Open Data Initiative</option>
    <option value="ODB.2013.C.RTI" data-label="To what extent does the country have a functioning right-to-information law?">Right to Information Legislation</option>
    <option value="ODB.2013.C.DPL" data-label="To what extent is there a robust legal or regulatory framework for protection of personal data in this country?">Data Protection Legislation</option>
    <option value="ODB.2013.C.CITY" data-label="To what extent are city or regional governments running their own open data initiatives?">City Open Data Initiative</option>
    <option value="ODB.2013.C.CSOC" data-label="To what extent are civil society and information technology professionals engaging with the government regarding open data?">Civil Society Engagement</option>
    <option value="ODB.2013.C.TRAIN" data-label="To what extent is training available for individuals or businesses wishing to increase their skills or build businesses to use open data?">Training on Open Data</option>
    <option value="ODB.2013.C.SUPIN" data-label="To what extent is government directly supporting a culture of innovation with open data through competitions, grants or other support?">Support for Innovation</option>
</select></label>

<div id="mapshot">
<div id="map_container" style="position: relative; width: 90%px; height: 600px;">
    
</div>
<div id="map-caption" class="caption"></div>
</div>

### Sustaining leadership & strengthening foundations

In comparing expert assessments of the strength of open data initiatives in countries covered by both the 2013 and 2014 ODB it is striking that, amongst the weakest clusters of countries, early leadership and progress towards open data has not been sustained. Countries such as Kenya and Ghana have failed thus far to institutionalise their open data initiatives, with progress stalling or moving backwards when key leaders or instigators move on. There is growing recognition of the need for open data to rest both on reforms to the wider data infrastructures of the state, and upon strong legal foundations. Writing about the Kenya Open Data Initiative that he instigated before moving on from government, Dr Bitange NDemo argues that to revive the initiative, Kenya must "...digitise all of our registries and enact two critical bills that are in Parliament, the Freedom of Information (FOI) and the Data Protection Bills."[^3]

{:.table}
| High capacity | Emerging and advancing | One sided initiative | Capacity constrained |
|:---:|:---:|:---:|:---:|
| 0.810  | 0.043  | -0.600 | -0.786  |

<div class="caption">Mean score change between 2013 and 2014 on question: "To what extent is there a well-resourced open government data initiative in this country?" (n=77) separated by cluster.</div>



In the cluster of high capacity countries there has been a continued trend to support innovation with data, with funding programmes, challenge funds, round-tables and innovation incubators becoming part of business-as-usual for government: creating spaces for collaboration around datasets, and stimulating data re-use. However, amongst countries with emerging and advancing open data practice, support for innovation with data remains ad-hoc. In a number of countries where we found evidence of hackathons or other events to stimulate data use in 2013 our researchers could not locate follow up activities in 2014. 

As evidence from the iHub evaluation of the Code for Kenya initiative suggests[^cfk], open data hackathons or incubators do not automatically result in scaleable products or services, but they can provide a space for re-imagining how government services could be delivered. Governments need capacity to absorb the innovative ideas that are prototyped with open data, and to create an enabling environment where social and economic innovations can scale. 

In the countries of the one-sided initiative cluster, limited political freedoms and the low capacity of civil society are joined with low publication rates of the datasets relevant to transparency and accountability, leaving very limited space for the transformative potential of open data. Countries here may have the form of an open data initiative, with portals and some datasets, but little of the functionality of open data as a tool to unlock innovation and create space for civic dialogue. 

### Taking it local

Many of the day-to-day decisions and actions that could enhance citizens quality of life take place at the local level. In our expert survey was ask about the existence of sub-national open data initiatives. As <a href="#map" onClick='javascript:$("#map_var").val("ODB.2013.C.CITY"); $("#map_var").trigger("change");'>the map above shows</a>, local initiatives are much more evident in Europe, North America and Australia than elsewhere in the world. 

A linear regression analysis of expert survey readiness variables against the social and political impact sub-components of the Open Data Barometer indicates that the existence of city level initiatives is significantly correlated with perceptions of impact[^4]. This highlights an important area for future research and action, identifying the extent to which government can and should create enabling environments for open data activities at the sub-national level. For example, in the United Kingdom, the [local open data incentive schema](http://incentive.opendata.esd.org.uk/) provides cash payments to local authorities for publishing key datasets including planning applications, premises licences, and details of public toilets. 


## Readiness sub-components

The table below presents the three readiness sub-components of the Open Data Barometer. The table can be grouped by region or income level.

There is a strong correlation (0.75) between GDP Per Capita and overall readiness as ranked by the Open Data Barometer. The correlation is strongest in terms of Entrepreneurial readiness, and weakest for Citizen/Civil Society readiness.

Drawing on data from the 2013 Open Data Barometer, Meng has suggested that 'political capital', as distinct from associational social capital, plays an import role in the readiness of countries to gain social impacts from open data. Political capital is defined as "attitudes supportive of democratic norms and behavior that engage citizens with the state and each other in channeled ways, conveying interests, preferences, and demands to the regime"[^2]. The first two editions of the Open Data Barometer do not provide a measure of political capital, but this may be an important dimension to consider in future work, and in assessing the potential to secure social change through open data initiatives. Similarly, the open data literature frequently points to the importance of intermediaries in translating data availability into social change activity. Whilst the existence of civil society engaging with open data, and the presence of technical capacity in firms within a country, can act as proxies for the likelihood of intermediaries emerging, further work is needed to track and understand the different kinds of intermediaries and the roles they play in readiness to secure different impacts from open data.

<div id="rankings"></div>


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
                        generate_odb_table(
                            window.odb_data,
                            window.odb_key,
                            ["Country","Region","Cluster","Income","Readiness_Government-Scaled","Readiness_Citizens-Scaled","Readiness_Entrepreneurs-Scaled","Readiness-Scaled"],
                            "#rankings",
                            ["Region","Income","Cluster"],
                            ["Region","Income","Cluster"],
                            "Readiness-Scaled"
                        )
                     }      
             });
        }
     });
 });
</script>





<script>
    var scores = {}
    var mapData = {}
    var map
        
    function generate_map_data(scores,variable) {
       var mapData = {}
       for(i=0;i<scores.length;i++) {
           mapData[scores[i]['ISO3']] = {fillKey:parseInt(scores[i][variable]),score:scores[i][variable]}
        } 
       $("#map-caption").html("Map showing responses on a 0 - 10 scale for the expert survey question: "+$("#map_var option:SELECTED").data("label"))
       map.updateChoropleth(mapData);

    }
    
    function setupMap(initialData) {
        var map = new Datamap({element: document.getElementById('map_container'),
          fills: {            
                      0: "#efedf5",
                      1: "#dadaeb",
                      2: "#bcbddc",
                      3: "#9e9ac8",
                      4: "#807dba",
                      5: "#6a51a3",
                      6: "#54278f",
                      7: "#3f007d",
                      8: "#320064",
                      9: "#391958",
                      10: "#2E1446",
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
                            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong><br/> Score:' +  data.score + '</div>';
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
            url: "/assets/data/ODB-2014-Survey-Ordered.csv",
            success: function (data) { 
               scores = $.csv.toObjects(data);
               map = setupMap({})
               generate_map_data(scores,"ODB.2013.C.INIT")
               
               $("#map_var").change(function() {
                   generate_map_data(scores,$(this).val())
               })
            }
        });
    });

</script>


### Footnotes 

[^1]: Based on "[2014 - 2016 NEW OGP Commitments - BETA](https://docs.google.com/spreadsheets/d/1ua7HcCbd69HDKqiz7FW2QKr5ExH4cTNmupuVROdBEeU/edit#gid=0)" containing individual commitments extracted from OGP National Action Plans with an implementation start date of January 2014 or later, and then tagged by the OGP Support Unit.
[^2]: Meng, A. (2014). Investigating the Roots of Open Data’s Social Impact. Journal of eDemocracy and Open Government, 6(1), 1–13. http://www.jedem.org/article/view/288
[^3]: Ndemo, B. (2014). Open contracting format can clean up government procurement. Daily Nation 24th November 2014. http://www.nation.co.ke/oped/blogs/dot9/ndemo/-/2274486/2532264/-/1wpu9kz/-/

[^4]: n = 86. Based on "fit<-lm(Impact_Political ~ WB.NetUsers + FH + WEF.GCI.9.02 + WEF.GITR.8.01 + ODB.2013.C.INIT + ODB.2013.C.CITY + ODB.2013.C.RTI + ODB.2013.C.CSOC + ODB.2013.C.SUPIN + ODB.2013.C.DPL + ODB.2013.C.TRAIN,data=scaled_scores)" which indicates a loading of 0.331785  on ODB.2013.C.CITY at a significance level of 0.01, and and "fit<-lm(Impact_Social ~ FH + WEF.GCI.9.02 + WEF.GITR.8.01 + ODB.2013.C.INIT + ODB.2013.C.CITY + ODB.2013.C.RTI + ODB.2013.C.CSOC + ODB.2013.C.SUPIN + ODB.2013.C.DPL + ODB.2013.C.TRAIN,data=scaled_scores)" which indicates a loading of 0.29795 on ODB.2013.C.CITY at a significance level of 0.01, and a loading of 0.46919 on ODB.2013.C.SUPIN with a significance level of 0.001. See the methods section for further details. (Note - the variable name indicates that a question is drawn from the 2013 study, although the data comes from 2014.)


[^cfk]: Mutuku, Leonida, and Christine Mahihu (2014) Understanding the Impacts of Kenya Open Data Applications and Services. iHub Research. http://opendataresearch.org/sites/default/files/publications/ODDC%20Report%20iHub.pdf.
