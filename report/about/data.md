---
layout: page
weight: 3
title: Download the data
group: about
---

## Data 

<i class="glyphicon glyphicon-download pull-right" style="font-size:6em; color:lightgrey;"></i>

The Open Data Barometer draws on over 14,000 different data points, captured as quantifiable data and backed by qualitative source information.

The data is made available under a [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and we encourage you to explore, re-use and remix the data. 

Please cite any uses of the data as: *World Wide Web Foundation, Open Data Barometer Global Report (Second Edition), 2015* and include a link to [http://www.opendatabarometer.org](http://www.opendatabarometer.org).

### Research handbooks

<i class="glyphicon glyphicon-book pull-right" style="font-size:6em; color:lightgrey;"></i>

Details of the questions addressed by researchers, the scoring thresholds applied during research and review, and information on the research process can be found in the Web Index and Technical Survey research handbooks. 

* [Web Index Handbook (Open Data Barometer sections)](../../assets/survey/WebIndex2014-ODB-Sections-ResearchHandbook.pdf) (PDF)
* [Open Data Barometer Technical Survey Handbook](../../assets/survey/OpenDataBarometer2014-ResearchHandbook.pdf) (PDF)

### Quantitative datasets

<i class="glyphicon glyphicon-stats pull-right" style="font-size:6em; color:lightgrey;"></i>

* [ODB-2014-Rankings.csv](../../assets/data/ODB-2014-Rankings.csv) contains the full Open Data Barometer score, as well as sub-index and sub-component values, country classifications and other contextual information. This is the file used to drive most of the tables and graphs in the report. 
* [ODB-2014-Datasets-Scored.csv](../../assets/data/ODB-2014-Datasets-Scored.csv) contains a row for each dataset assessed during the technical survey, with the overall dataset score, and score values for each data openness checklist item. 
* [ODB-2014-Survey-Ordered.csv](../../assets/data/ODB-2014-Survey-Ordered.csv) contains the raw survey responses given through the expert research and technical survey processes.

For comparison, updated 2013 datasets have also been prepared using the same variable names, and incorporating 2-digit ISO codes, as some country labels have changed between years due to the Web Index production process:

* [ODB-2013-Rankings.csv](../../assets/data/ODB-2013-Rankings.csv) 
* [ODB-2013-Datasets-Scored.csv](../../assets/data/ODB-2013-Datasets-Scored.csv) 

Labels and details of each of the variables in the Rankings and Survey files are provided in:

* [indicators.csv](../../assets/data/indicators.csv)

### Qualitative data

<i class="glyphicon glyphicon-list-alt pull-right" style="font-size:6em; color:lightgrey;"></i>

In addition, for this second edition, we are providing the main qualitative source information provided by researchers. This information was collected in order to justify and validate the quantitative scores given, and is not designed to provide a comprehensive review in response to each question.

* [primary_data_context_impact.csv](../../assets/data/primary_data_context_impact.csv) - contains question responses for each country on context and impact questions. 
* [primary_data_datasets.csv](../../assets/data/primary_data_datasets.csv) - contains the detailed dataset assessments, including links to datasets, file formats and timeliness information. At present this is **uncleaned data** from the survey tool. Please read the notes below.

We are continuing to explore ways to improve the provision of qualitative data alongside the Open Data Barometer, but hope this year's initial release is a useful resource for other researchers.

#### Notes: datasets

<i class="glyphicon glyphicon-exclamation-sign pull-right" style="font-size:6em; color:lightgrey;"></i>

The **datasets** survey employed conditional logic which meant that some justification fields were hidden depending on the state of the related question. However, if a question answer changed, the hidden data was not deleted, and so some data contained in these fields may not represent the final set of judgements made about a dataset. 

The overall data scores are also based on a conditional logic, designed to score countries on the basis of machine-readable data. Researchers were encouraged, however, when machine-readable data was not available, to still complete questions with respect to the best data they could locate. For this reason, simple summation of scores, or simple searching of fields on the assumption that their values represent properties of machine-readable data, is not possible. Instead, fields will need to be filtered on the basis of the values in [ODB-2014-Datasets-Scored.csv](../../assets/data/ODB-2014-Datasets-Scored.csv) if looking to understand the justifications for a given dataset score. 

#### Notes: context and impact questions
Due to the design of the survey platform, and the way it was used by some researchers and reviewers, in some cases additional justification information was captured through comments between researchers and reviewers, rather than in the public justifications field. This is an issue which will be addressed in future versions of the platform, but, due to the resources required to filter and extract these comments into the public justification field in this edition of the survey, we cannot guarantee that the justification texts represent the full data on which scores were assigned in all cases. 


 