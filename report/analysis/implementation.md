---
layout: page
weight: 3
title: Implementation
group: snapshot
javascript:
 - script: /assets/js/d3.v3.min.js
 - script: /assets/js/nvd3/nv.d3.min.js
 - script: /assets/js/jquery.csv-0.71.min.js 
 - script: /assets/js/jquery.dataTables.min.js
 - script: /assets/js/jquery.databar.js
 - script: /assets/js/odb.js
css:
 - stylesheet: /assets/js/nvd3/nv.d3.min.css
 - stylesheet: /assets/js/jquery.dataTables.min.css
---

# OGD implementation: data availability

<span class="lead">Effective open government data initiatives should provide access to a wide range of data. Although there have been small gains in the availability of open data this year, too often governments are still publishing only selected datasets, with limited data published on public sector performance and expenditure. The lack of timely data is a major barrier to wider open data use.</span>

The implementation component of the Barometer looks at the extent to which accessible, timely and open data is published by each country government. The 15 kinds of data included reflect a wide range of functions of government, and the kinds of uses to which data can be put. Although noting that the categories are not mutually exclusive, we divide datasets into three groups, in order to look at the extent to which open data initiatives are resulting in the datasets required to support a wide range of possible outcomes and benefits.

{:.table}
| Innovation | Social Policy | Accountability  |
|----|----|----|
| *Data commonly used in open data applications by entrepreneurs, or with significant value to enterprise.* | *Data useful in planning, delivering and critiquing social policies & with the potential to support greater inclusion and empowerment.* | *Data central to holding governments and corporations to account. Based on the ‘[Accountability Stack](http://indigotrust.org.uk/2012/11/12/good-governance-the-accountability-stack-and-multi-lateral-fora/)’.* |
| Map Data, Public Transport Timetables, Crime Statistics, International Trade Data, Public contracts | Health Sector Performance, Primary or Secondary Education, Performance Data, National Environment Statistics, Detailed Census Data | Land Ownership Data, Legislation, National Election Results, Detailed Government Budget, Detailed Government Spend, Company Register |

With the exception of trade statistics, all of these data categories are explicitly noted in the [technical annexe of the G8 Open Data Charter](https://www.gov.uk/government/publications/open-data-charter/g8-open-data-charter-and-technical-annex#technical-annex) as categories "of high value, both for improving our democracies and encouraging innovative re-use of data"[^1].

## Degrees of openness

We assess the availability and openness of each category of data in each country on the basis of a 10-point checklist, covering availability, accessibility, machine-readability, provision of bulk downloads, data being free of charge, availability of licenses, timeliness, sustainability, ease of discoverability, and provision of linked-data URIs. Through a [weighted aggregation](../about/method.html), this is used to give each dataset a score of 0 - 100. In this edition we introduce a reduction in score of -5 for outdated datasets, to reflect the limited utility of data that should have been updated over the last year, but which has not been[^d]. The chart below shows the average scores for each category <a href="javascript:toggle_chart_init(0);">across all countries surveyed</a>, as well as allowing a view of the average for <a href="javascript:toggle_chart_init(1);">countries with an emerging or established Open Government Data initiative</a>[^2]. 

<div id='chart1'>
  <svg style='height:600px'> </svg>
</div>

The overall trend is generally a positive one: with slight increases in the openness of most datasets, even taking into account the timeliness score reduction that affects many datasets. The difference between openness of data in countries with an open data initiative and those without, whilst establishing correlation rather than causation, does point towards open data initiatives bringing about greater supply of open data, and the strength and pace at which initiatives translate into increased data supply invites further investigation. However, as the previous edition of the Barometer noted, there remains a big gap between the availability of different categories of data: with a gulf between the high provision of statistical datasets like the census, and limited provision of important infrastructural and accountability datasets. 

Researchers particularly noted the limited scope of education and health performance data in many countries: whilst often enough basic statistical information is available through national statistical agencies to qualify against the category definitions used in our survey, the granularity and detail of performance information was very limited. For an effective data revolution that empowers citizens to hold services to account, increased direct flows of open data data from line ministries to citizens, rather than solely mediated through statistical agencies, may be required. In some countries, independent agencies, or projects run in partnership with the state, mediated access to high quality health or education statistics, acting as a bridge between data producers and users. However, few of these institutions have yet embraced open data practices. 

The year-to-year drop in the average spending data sore can be accounted for, in part, due to a stricter definition of this category in the second edition: asking for transaction-level spending, or at least reasonably disaggregated quarterly reports, where previously yearly data would have been accepted. However, even with this noted, a substantial difference between the publication of budget data and spending data is evident. Governments are much more likely to be making data on plans available than on their implementation. This reflects the gap that Andrews has noted between 'Transparency in Formulation' of policy, and 'Transparency in Execution'[^3] [when analysing the Open Budget Index datasets](http://matthewandrews.typepad.com/the_limits_of_institution/2013/10/how-transparent-oare-open-budgets.html), and highlights the importance of examining both the technical capabilities of governments to publish information on execution of policy, and the incentive structures and strategic choices shaping the data that gets posted online.

<script>

var chart = ""

d3.json('/assets/data/datasets.json', function(data) {
  return nv.addGraph(function() {
    chart = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .margin({top: 30, right: 20, bottom: 50, left: 150})
        .showValues(false)           //Show bar value next to each bar.
        .tooltips(true)             //Show tooltips on hover.
        .transitionDuration(350)
        .showControls(false)   //Allow user to switch between "Grouped" and "Stacked" mode.
        .forceY([0,100]);

    chart.yAxis
        .tickFormat(d3.format(',.2f')).axisLabel('Average score per dataset (out of 100)');

    d3.select('#chart1 svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);
    
    return chart;
  });
});

function toggle_chart_init(init) {
    state = chart.state()
    if(init) {
         state.disabled[0] = true;
         state.disabled[1] = false;
         state.disabled[2] = true;
         state.disabled[3] = false;
    } else {
         state.disabled[0] = false;
         state.disabled[1] = true;
         state.disabled[2] = false;
         state.disabled[3] = true;        
    }
    chart.dispatch.changeState(state);
    chart.update();
    
}
</script>


## Applying the open definition?

Although increasingly governments are providing machine-readable copies of datasets for download, practices of making bulk downloads available (rather than only making sub-sets of data accessible through online query interfaces: a practice particularly common amongst statistical agencies) and of providing a clear, unambiguous license statement that permits unlimited re-use of public data, remain relatively rare. Many datasets are provided with no clear licensing information, leaving users unable to be certain about whether they can use the data to build businesses, and restricting the confidence of technical intermediaries in their rights to redistribute the data. 

Of the 1290 datasets surveyed for this study, just 10% were available in forms that meet the [Open Definition](http://opendefinition.org/od/). Only 31 countries had one or more open datasets, and even amongst the top ranked countries in the ODB, the number of datasets provided open data only just tops 52%[^4].

<div id="isopen"></div>

Transport datasets were the most likely to be provided in machine-readable formats and with open licenses. This indicates a clear recognition of the importance of licensing for data to be reused and to support the emergence of an app economy. By contrast, contracting information, company registries and land ownership data are the least likely to meet the open definition. Although in most cases government do have online systems that hold this data, these systems are frequently designed to limit public access to key information, or to only make information available for a fee. 

<script>
 $(document).ready(function () {
     $.ajax({
         type: "GET",
         url: "/assets/data/dataset_isopen.csv",
         success: function (data) { 
            window.odb_data = $.csv.toObjects(data);
            window.odb_key = [{code:"Dataset",short_name:"Data category"},{code:"Count",short_name:"Number of datasets meeting the open definition"}]
                        generate_odb_table(
                            window.odb_data,
                            window.odb_key,
                            ["Dataset","Count"],
                            "#isopen",
                            ""
                        )
        }
     });
 });
</script>

## The need for more timely data

A major theme identified in this years study, as a we compared dataset assessments from 2013 and 2014, was the prevalence of datasets which have not been updated: either with the copies of data held on open data portals being from previous years, or even the original source data from departments showing no signs of recent update. Our technical survey asks for an assessment of dataset timeliness, based on how often updates would be anticipated for the particular category of data (e.g. Census data might only be updated every 10 years, whilst trade records are often updated monthly, or at least yearly). It also asks researchers to make a judgement on the sustainability of a dataset, based on evidence of whether open data appears to be a one-off publication, or whether there is evidence of regular, sustained and resourced open data publishing in a given category. 

Timeliness and sustainability are particularly important factors for both accountability and entrepreneurship. Without being able to trust that data will be updated, civil society and private firms are less likely to rely upon, and build processes and services on top of datasets. 

<div id='chart2'>
  <svg style='height:500px'> </svg>
</div>

<script>
d3.json('/assets/data/dataset_timeliness.json', function(timely_data) {
  nv.addGraph(function() {
    var timeliness = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .margin({top: 30, right: 20, bottom: 50, left: 175})
        .showValues(false)           //Show bar value next to each bar.
        .tooltips(false)             //Show tooltips on hover.
        .transitionDuration(350)
        .showControls(false)
        .stacked(true)
        .forceY([0,86]);     //Allow user to switch between "Grouped" and "Stacked" mode.

    timeliness.yAxis
        .tickFormat(d3.format(',.2f')).axisLabel('Timeliness of data (all datasets, including non-machine readable copies)');
    d3.select('#chart2 svg')
        .datum(timely_data)
        .call(timeliness);

    nv.utils.windowResize(timeliness.update);

    return timeliness;
  });
});

</script>

The largest problems with sustainability of publishing were seen for Environmental and Crime data, with just 53% and 61% of machine readable datasets in these categories judged to be sustainably published respectively. In the case of environmental data, many countries appeared to lack strong environment data portals, with many websites hosting air pollution data or other related statistics substantially outdated. A number appeared to have been created with previous aid funding, but not sustained after that funding ended. Again this illustrates the challenges ahead for the data revolution: with a need to embed local capacity to keep data updated, and to avoid investing in technical platforms in place of skill-building, leaving tools that cannot be maintained and sustained when outside support ends. 


## Formats & standards

Out of the 1090 distinct download options identified in the technical survey, 385 files were provided in XLS format, 215 in CSV format, and 84 as XML. Just 21 JSON files were identified. In general, with the exception of transportation data, where the [GTFS standard](https://developers.google.com/transit/gtfs/reference) was used in 11 of the cases examined, there was very little evidence of the use of global standards to represent key datasets. In part, this is due to the limited availability of reference standards to use. The absence of clear standards for representing key datasets, such as budgets, has two consequences. Firstly, it provides no standard of measurement by which adequate or good quality publication of certain kinds of data can be assessed. Secondly, it means that users of data seeking to link up data from different countries, or to transfer an application developed in one context for use in another, have to re-learn and re-code their data uses country-by-country.

The [Open Contracting Data Standard](http://standard.open-contracting.org), launched in November 2014 is one experiment with providing both a technical interoperability standard, and a standard for assessing good contracting data publication. Work is needed in the open data field to establish and develop other standards, ensuring these are created in inclusive ways.

## Dataset details
Although the overall picture of open data implementation shows that there is a long way yet to go, some countries continue to move towards 'open by default'. 

The chart below offers a full view of all the datasets assessed for this edition of the Barometer, along with a comparison to 2013. The size of each bubble is relative to the overall weighted dataset score. A thick outline indicates a dataset that meets the Open Definition criteria. It is possible to sort and search by country, or to sort by overall or dataset score by clicking a column heading. 

<div role="tabpanel">

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#2014" aria-controls="home" role="tab" data-toggle="tab">2014</a></li>
    <li role="presentation"><a href="#2013" aria-controls="profile" role="tab" data-toggle="tab">2013</a></li>
    <li role="presentation"><a href="#image" aria-controls="profile" role="tab" data-toggle="tab">Image</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="2014">
        <iframe src="/assets/odb-datasets/2014.html" width="100%" height="1000" id="odb-datasets" seamless='seamless' frameborder="0"> </iframe> </div>
    <div role="tabpanel" class="tab-pane" id="2013">
        <iframe src="/assets/odb-datasets/2013.html" width="100%" height="1000" id="odb-datasets" seamless='seamless' frameborder="0"> </iframe> </div>
    <div role="tabpanel" class="tab-pane" id="image">
        <img src="/assets/images/charts/datasets.png" class="img-responsive"/>
    </div>
  </div>

</div>

## Footnotes

[^1]: G8. (2013). G8 Open Data Charter: Annex https://www.gov.uk/government/publications/open-data-charter/g8-open-data-charter-and-technical-annex#technical-annex

[^2]: Based on a score of 5 or above on the expert survey question "To what extent is there a well-resourced open government data initiative in this country?". To score 5 evidence should be provided at least that: "There is a small-scale open data initiative, or an open data initiative has been announced but is not yet resourced. Senior leadership is making commitments to increased government transparency, and/or some commitments to open data are being expressed by a junior minister / single ministry."

[^3]: Andrews, Matthews (2013), How Transparent Are Open Budgets? http://matthewandrews.typepad.com/the_limits_of_institution/2013/10/how-transparent-are-open-budgets.html

[^4]: Based on the top 11 countries by rank (top 11, rather than top 10 used due to tied 10th place).

[^d]: This means that countries which had an outdated dataset in 2013, and who have made no changes to it where updates would be anticipated, will score 5 points lower this year for that dataset. Countries with an updated dataset gain +10 for the dataset being updated, leading to an overall 15 point difference between those who have timely datasets, and those who do-not. The ODB technical assessment has collected meta-data on last update dates, and data of survey, with a view to, in future, exploring the [Tau of Data metric proposed by Ulrich Atz](http://project.opendatamonitor.eu/wp-content/uploads/dissemination/OpenDataMonitor_Publication_The-Tau-of-Data.pdf)