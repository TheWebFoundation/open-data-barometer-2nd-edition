---
layout: page
weight: 6
title: Rankings
group: snapshot
javascript:
 - script: /assets/js/jquery.dataTables.min.js
 - script: /assets/js/jquery.databar.js
 - script: /assets/js/dataTables.fixedHeader.js
 - script: /assets/js/jquery.csv-0.71.min.js 
 - script: /assets/js/jquery.databar.js
 - script: /assets/js/odb.js
 - script: /assets/js/d3.v3.min.js
 - script: /assets/js/radarChart.js
css:
 - stylesheet: /assets/js/jquery.dataTables.min.css
---

# Global rankings

<span class="lead">By aggregating together the sub-indexes of the Open Data Barometer we can generate a global ranking. Comparing scores and ranks in the second edition with those in the first can be used to identify countries making progress, and those where progress has stalled.</span>

Because the Barometer has expanded in this edition from 77 to 86 countries, a change in rank position may result both from new countries entering above or below the score an existing country, as well as from substantial changes to that countries score. 

The table below presents the global rankings of the Open Data Barometer, including the overall Barometer score, and comparisons between the first and second editions of the Barometer. You can sort and filter this table, and group by various facets, including country clusters, region and income level.

<div role="tabpanel">

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#interactive" aria-controls="home" role="tab" data-toggle="tab">Interactive</a></li>
    <li role="presentation"><a href="#image" aria-controls="profile" role="tab" data-toggle="tab">Image</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="interactive">
        <div id="rankings"></div>   
    </div>
    <div role="tabpanel" class="tab-pane" id="image" style="z-index:105; position:relative; background-color:white;">
        <img src="/assets/images/charts/rankings.png" class="img-responsive" alt="Image of ODB Ranking Tables">
    </div>
  </div>

</div>



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
                            window.odb_key,                 ["Country","Cluster","Region","G20","G7","Income","ODB-Rank","ODB-Scaled","Readiness-Scaled","Implementation-Scaled","Impact-Scaled","2013-ODB-Scaled","ODB Change","2013-Rank","Rank Change"],
                            "#rankings",
                            ["Region","Income","Cluster","G20","G7"],
                            ["Region","Income","Cluster","G20","G7"],
                            "ODB-Rank"
                        )
                     }      
             });
        }
     });
 });
</script>

## Analysis

In this section we analyse the changes between the first and second editions of the Open Data Barometer. The purpose here is not to provide an exhaustive account of all changes, but is to identify notable trends, and to explore how far the Open Data Barometer ranking can act as a useful heuristic for understanding the changing landscape of open data around the world. 

Just 16 of the 77 countries (20%) included in the 2013 Open Data Barometer see a reduction in their scaled ODB score in this edition. In general, the trend is towards steady, but not outstanding, growth in open data readiness and implementation. However, the picture varies substantially across the different country clusters.

### Capacity constrained 
<div class="radarchart" id="capacity" data-countries="ID,NG"></div>
In the capacity constrained cluster, Indonesia and Nigeria see the strongest growth in ODB score and rank. Kenya experiences the largest fall in rank, and in countries with civil society-led activities such as Nepal and Uganda, the continued limits on government engagement with their open data initiatives cause minor score reductions.

The role of Indonesia as lead chair of the Open Government Partnership in 2013/14 focussed both domestic and international attention on the development of open data policy and practice. There has been gradually growing civil society engagement around open data, particularly in Urban centres such as Jakarta, and some increase in the availability of capacity building training and support for innovation. 

In Nigeria, the Minister of Communication Technology launched an OGD initiative in January 2014, with a series of engagement activities designed to engage stakeholders in shaping the countries policies and to provide training and capacity building for potential data users[^ng1]. This Federal level initiative, supported by the World Bank and the Department for International Development, followed on from the first state-level initiative in Africa launched in EDO state in September 2013[^ng2]. A number of civil society organisations in Nigeria have sought to develop information and advocacy based work with open data, including [BudgIT](http://www.yourbudgit.com/) who work to simplify and communicate the Nigerian budget, and [Follow The Money](http://followthemoneyng.org/) who have developed a series of campaigns tracking aid and government finance, including a successful and ongoing campaign to secure the distribution of pledged funds to clean up lead-poisoned land in Zamfara state[^ng3]. The University of Ilorin in Nigeria has also been exploring ways to build student capacity to engage with open data, with the Computer Science department hosting hackathons, and, following participation in the Web Foundation's Open Data in Developing Countries project, establishing an Open Data Research Group.

At the other end of the table, Keyna has fallen 27 places in the overall rankings, and seen a reducation in scaled ODB score from 43 to 26. Whilst many hoped in 2011 that the high-profile launch of an open data portal would be followed by ongoing commitment and a policy framework for open data, no such framework has come into force, and few updates have been made to the data on the portal over recent years. The stagnation of Kenya's open data activities have been much discussed, including by some of its lead architects, who argue for a renewed commitment which builds on legislative foundations in Right to Information and Data Protection Laws[^ke1]. Kenya has also gone through a process of constitutional reform, devolving power to localities. Whilst this presents an important opportunity to design new infrastructures of administrative data management which apply 'open by default' principles, there is little evidence that this is happening. The failure of Kenya to sustain the supply of timely and relevant open data, and the limited sustainability and scalability of applications built be local developer communities using government data[^ke2], should raise significant questions about the best design of open data initiatives in capacity constrained countries. 

There are considerable similarities in the readiness levels of Nigeria, Indonesia and Kenya. Whether or not initiatives in Nigeria and Indonesia can be sustained beyond initial donor investments and interest may depend on whether the models of open data initiative adopted can shift from transplanting practice from higher capacity countries, to developing open data practices which respond to the local availability of technical intermediaries, the capacities of different parts of government, and the local social dynamics of information access and trust[^ke3]. Ghana also provides a useful point of comparison: where supply has increased, but impacts are not yet seen. In Ghana, the Barometer records a minor drop in readiness in this edition, as the country's 2012 launch of an open data initiative appears not to have been followed up with substantial policy attention. However the last year has seen steady growth in open data availability from [data.gov.gh](http://data.gov.gh/). The portal has replicated the idea of hosting thematic communities, an idea initially developed in the USA, but there is little evidence of community engagement at present, and the Barometer records no evidence of impacts from open data use in Ghana. 

<div class="radarchart" id="capacity2" data-countries="NP,UG,BF,BW,SL"></div>Two countries which have been exploring alternative models for open data are Nepal and Uganda, where civil society networks have been created, establishing [Open Nepal](http://opennepal.net/), and [Open Development Uganda](http://www.opendev.ug/), as well as creating their own data portals independently of government[^ne1]. The current focus of the Open Data Barometer on data government activities does not fully capture these efforts in the quantitative scoring, but in each country there have been efforts to engage with government - including through technical agencies and through specific ministries. These initiatives points towards one possible future for an inclusive data revolution, in which open data initiatives are developed as equal multi-stakeholder partnerships between civil society, government, donors and social entrepreneurs, cooperatively working to increase the quantity and quality of data available to improve decision making by all parties. However, the extent to which current models of support and financing for open data activities are set-up to enable growth of models like this is unclear. 

Countries to watch in the coming year in this cluster include Botswana, where an open data readiness assessment was recently undertaken[^bw1], and Burkina Faso, which launched an open data initiative led by the Ministry for Digital Economy, and funded by a World Bank loan, in April 2014[^bf1]. Both countries currently lack Right to Information laws. Sierra Leone, with a newly passed RTI law, also has potential to develop open data activities over the coming year, exploring ways to integrate open data into the roll out of the new right to information processes, and to make data accessible both digitally and in non-digital forms[^sl1]. 


### Emerging and advancing
Amongst emerging and advancing countries, the last year has seen a considerable growth in the availability of data, as well as minor growth in impacts, and gains in readiness. All the countries in this cluster should have the domestic resources to institutionalise OGD practices, but need to continue to build broad based political and civil society support in order to effectively embed open data. 

In this cluster Chile, Uruguay, China, Peru, Brazil, Czech Republic, Ecuador, Greece, Hungary, Spain, South Africa, and Mexico all see growth in terms of readiness and implementation. Progress is more moderate amongst Colombia, Ireland, Italy, Philippines, Portugal, Russia and Tunisia, and changes in Argentina, Costa Rica and India are within the margin of error of the study. Poland, which is included in the ODB for the first time in this edition ranks roughly at the centre of this group, in 35th overall position, with reasonable levels of readiness and impact, but low perceived impact from open data. 

China experiences one of the highest ODB score changes in this cluster compared to 2013 scores. The survey records an increase in the readiness of entrepreneurs in China to engage with open data, as well as a continued growth city-level initiatives, such as in Beijing, Shanghai, Qindao City, Wuhan City and Guangzhou Municipality. These initiatives often link the concepts of open data and big data, looking to draw on the technical capacity of the state, and entrepreneurs outside the state, to drive greater efficiency of governing through data. This is reflected in the strongest open data impact score for China relating to increasing government effectiveness and efficiency. The survey also identifies cases of companies who previously bought government data now being able to access it for free as a result of open data policies, contributing to greater economic surplus. China has also seen a growth in the availability of environmental information over the last year, at least in part due to citizen action, with infzm.com reporting that citizen-science projects to measure water quality resulted in pressure for official sources of water quality to be disclosed[^cn1]. However, although the increase in social policy dataset availability is notable, accountability datasets remain almost completely absent, highlighting the extent to which countries may seek to selectively pursue open data policy, without releasing a full spectrum of data.

The strong growth in ODB position amongst Latin American countries within this cluster reflects a growing momentum around open data on the continent, where substantial developments are also being seen at the city level[^la1]. In Uruguay for example, researchers cite the strong push for open data from the government of the city of Montevideo which serves almost half the population of the country[^ur1]. The region also has relatively strong engagement between government and civic technology communities, with regional events such as [Condatos](http://condatos.org/) attracting participants from all sectors, and a number of countries running regular hackathons, ideation events and other technical oriented engagement activities. The strength of open source communities and cultures plays a role in supporting engagement with the concept of open data. A focus on data journalism is also a notable feature of the landscape in a number of Latin American countries, with traditional and emerging media exploring how data can be used to uncover stories on government activities. In a break from the common pattern where it tends to be new technology-centric civil society networks and organisations focussing on open data, in Argentina, mainstream civil society organisations such as the Centro de Implementacion de Politicas Publicas para la Equidad y el Crecimiento (CIPPEC) have developed open data activities and focussed attention in new areas - in particular looking to extend the application of open data from the executive to the judicial branch of government[^ar1].

Brazil is one of a number of governments thinking in terms of the creation of a 'National Infrastructure for Open Data', setting out clear processes for the institutionalisation of open data policy. Much like the open approach of [Project Open Data in the USA](https://project-open-data.cio.gov/), the Brazilian INDA project has established an [open collaboration space](http://wiki.gtinda.ibge.gov.br/), oriented towards the involvement of technical communities in setting meta-data standards, building out open data technologies and modelling data. 

In reviewing Open Data Barometer scores across Latin America, it is notable that limited use of open licenses acts as a downward pressure on the implementation scores achieved for countries in the region. Qualitative research into the supply and use of budget data in Brazil has noted the low levels of awareness of licensing issues amongst data publishers and users, raising questions as to how important license issues are to open data within the Brazilian, or wider regional, context [^br1]. 

Tunisia, Morocco and South Africa are the only African countries to feature in this cluster. In spite of the potential resources to support an OGD initiative in South Africa, both in terms of government capacity, and civil society and private sector capacity, the country has not yet established a national project, nor does it include commitments to open data in its Open Government Partnership National Action Plan [^za1]. However, the City of Cape Town has recently started developing an Open Data Policy, potentially providing foundations for future national efforts. Tunisia established an open data portal in 2012, and has continued to maintain the site. However, research suggests there is limited engagement with civil society users, and that the open data user community has not expanded substantially over the last year, leading to only moderate growth in Tunisia's overall score. Perceived political impacts of the Tunisian OGD initiative have also fallen in this year's ODB, suggesting a widening gap between the hope for the portal as part of building a transparent democratic state, and the current reality. Morocco's ODB score has also fallen in this edition of the Barometer. Although the first country in Africa to establish a data portal, the quality, timeliness and relevance of the datasets currently being made available is limited. There is some evidence of community engagement between government and groups such as the local Open Knowledge Foundation, but an evaluation of the initiative noted that *"despite its innovative nature, the Moroccan open data initiative did not enjoy the interest it deserved; the released datasets are/have remained very limited. This situation is certainly related to the fact that the initiative has been led by a governmental entity ... in a very isolated fashion, without being inscribed in any true governmental strategy and [promoted] through a very insufficient communication"*[^ma1]

The European countries featuring in this cluster include, in rank order: Spain, Czech Republic, Italy, Russia, Portugal, Greece, Ireland, Hungary and Poland. Common across all these countries, with the exception of Russia, is a greater level of civil society readiness vis-a-vis the readiness of government or entrepreneurs, and a lower level of perceived social impact from open data. This low level of government readiness may reflect the absence of a substantive OGD initiative, as in Poland, or may identify contexts where initiatives are established, but are progressing relatively slowly when compared to the rest of Europe, such as in Spain. In this group, the Czech Republic has seen the strongest growth in its overall ODB score, with efforts underway to embed open data in government: including a draft amendment proposed to the FOI Bill to embed open data concerns, and plans for cross-governmental policy on open data. 

The picture in Russia is shaped by the increased availability of a number of datasets, boosting its implementation scores, whilst government and civil society readiness to benefit from open data has seen a marginal decrease, matched by decreases in social and political impact. 

Amongst countries in Asia in this cluster, both India and the Philippines see only small changes in their ODB scores. This result is somewhat surprising given the launch of an OGD initiative in the Philippines in January 2014, and India's ongoing OGD initiative. However, the ODB survey suggests the increase in readiness in the Philippines has been offset by slow progress translating that into core dataset availability, and into impacts over the last year. This highlights the potential lag time between initiatives and their effects. In India, the 2012 National Data Sharing and Accessibility Policy[^in1] and early engagement efforts around the data portal do not appear to have been extended, and open data remains a niche subject, that has not yet reached the awareness of most of the potential users.

### High capacity 

Each of the countries in the high capacity cluster have observed some impacts of open data over the last year, and the general trend is towards increased readiness and implementation of open data. However, examining the rankings, an number of countries stand out from the general trend, with either ranking gains or falls.

France enters the top five, with a rank position of 4, rising six rank places on last year. In May 2014, France announced it would be the first European Country to appoint a Chief Data Officer[^fr1], responsible for:

* Better organising the flow of data within the economy and within the administration - while also respecting privacy and legal restrictions on data sharing;
* Ensuring the production or acquisition of key data;
* Launching experiments to inform public decision making;
* Disseminating the tools, methods and culture of data within government departments and in support of their respective goals[^fr1].

Subsequently, in the same year that the UK Government sold off the vitally important Postal Address File as part of the privatisation of the national mail service[^gb1], and whilst Canada continues to resist requests to make post code data available, La Poste in France have made post codes available as open data[^fr2], suggesting a willingness to focus on the availability of high value datasets. Considerable outreach activities, and a growth of well resourced municipal open data initiatives also contribute to France's rise in the Barometer tables. However, with its first Open Government Partnership National Action Plan to deliver in early 2015, and with relatively low impact scores on the social and environmental benefits of open data, the challenge ahead for France is to further broaden open data out beyond administrative and technical communities, and to translate open data availability into diverse uses and impacts.

Austria, Belgium and the Netherlands have each moved three or more places up the Barometer rankings. In Austria, after the federal election in late 2013, the new government included open data in its coalition agreement[^at1], but researchers reported that, as of August 2014 no member of the cabinet was identifiable as in charge of the subject. In general, the Austrian open data agenda appears to by driven several major cities and regions, and in centers such as Vienna start-up activity around open data is generating both social, economic and environmental returns. The application [Solarize](http://solarize.at/en/), for example, available for Upper Austria based on open datasets, is designed to help people understand the benefits of having their own solar or photovoltaic generation[^at2]. In both Belgium and the Netherlands, open data policy is supported by a strong push from organised civil society groups, as well as support from those groups to stimulate the use of open data through hackathons and other activities. Researchers identified a much greater rate of open data publication in the Netherlands, where just under 50% of datasets surveyed qualified as open under the open definition. However, there was greater optimism about the potential impacts of open data in Belgium, albeit a decrease in perceived impacts of open data on accountability.

Finland has also experienced substantial growth in its overall Barometer score. As the host of the 2012 Open Knowledge Festival, strong links appear to have been built in Finland between civil society, government and businesses, establishing broad awareness of open data in the media, amongst civil society actors, and amongst certain sections of the business community. This second edition of the Barometer also indicates increased impact of open data in the country, although as yet there has not been an in-depth evaluation of the open data policies impacts. 

Israel, Japan, Korea, Norway, Germany and Australia all see more modest changes in their overall scores, although in a number of cases as other countries move ahead faster, this leads to falls in their overall ranking. Denmark and Iceland both see modest reductions in their scores and rankings, mostly as a result of weaker implementation, which appear to be in part correct for some over-scoring of dataset openness in these countries in 2013. As the rankings table above shows, countries towards the top of the Open Data Barometer have very similar readiness, implementation and even impact scores, making the highest rankings open to just about any country in the high capacity cluster. In future editions of the Barometer, new variables may be required to better discriminate between high capacity countries, and to identify the key areas for further attention and progress.

The UK, USA and Sweden remain at the top of this cluster, and the top of the Barometer overall. Each country has placed an emphasis on the economic growth potential of open data, and over the last year has continued to develop mechanisms for engaging with private sector data users, ranging from the [Open Data User Group](https://www.gov.uk/government/groups/open-data-user-group) in the UK, to the [Open Data Forum](http://www.opendataforum.info/) convened by the Ministry and Enterprise in Sweden, and the [Open Data Roundtables](http://www.opendata500.com/us/roundtables/) series convened by the NYU GovLab in partnership with US Federal departments. They have also focussed on gathering stories of business re-use of open data, contributing to strong economic impact scores. Some fears have been raised that this emphasis is at the cost of a focus on the social and environmental impacts of data. Whilst analysis across Barometer data suggests support for innovation in general is correlated with social and political impacts, these can also be more explicitly designed for, with specific attention paid to including diverse actors in shaping data supply, and benefiting from capacity building. Open data licensing in Sweden also remains inconsistently applied, and in the UK flagship datasets such as transactional level spending for government departments is often, according to the governments own dashboard, out of date, limiting the utility of this for scrutiny of government[^gb2]. Over the last year the US Data.gov has also been re-launched with a stronger slant towards developer communities, suggesting early efforts at broad community engagement not have taken root, and highlighting a need for sustained activity to take open data beyond the technical and developer community to reach out to the full community of potential users. 

### One-sided initiatives

The small number of countries clustered under 'one sided initiatives' all have high levels of Internet penetration, high or upper-middle income status, and strong government capacity. All lack Right to Information laws. In most cases there is also a reasonable level of government capacity. However, civil society freedoms and capacity are very limited in this cluster, as is the breadth of data published governments. The outlier may be Malaysia, which is the highest ranked in this cluster (and perhaps the weakest fit in the cluster, as the Freedom House measure of civil society freedoms used in the Barometer scores Malaysia almost 100% higher than others in the cluster). The Malaysian open data initiative currently provides over 100 datasets from 11 different ministries. However, researchers note that there has been very little outreach to engage users with the data, or to prioritise the datasets most in demand. The lack of a Right to Information law further undermines space for the initiative to be demand-driven, rather than implemented top-down by government. 

The UAE scores highest on readiness in this cluster, in part because of policy commitments that have been made to open data within the framework of well funded e-government reforms. This equation of open data with an e-government, rather than an open government paradigm, is characteristic of engagement with open data within the gulf states, and is reflected in the fact that even though this cluster of countries have reasonable levels of entrepreneur readiness to engage with data, few economic impacts have yet been identified, and social impact is very weak. A broader framing of open data as associated with "[supporting] the ... National Development Strategy 2011-2016’s call for Transparency, Efficiency and Participation of its people" was present in a March 2014 consultation on open data policy in Qatar[^qa1], through the translation of this into the availability of key transparency, accountability and social policy datasets remains to be seen. 



## Conclusions

In this report we have only been able to explore a small fraction of the data captured by the Open Data Barometer survey. Whilst high-income, high-capacity countries are continuing to embed open data policies, albeit with increasing focus on economic rather than civic aspects, across the rest of the world the picture is of a widening gap between those able to establish and sustain open data programmes, and those countries where open data activities have not yet got started, have stalled, or have even moved backwards. As data becomes ever more important in shaping policy debates, the importance of citizens having effective access to data grows: yet without dedicated effort the unfolding 'data revolution' risks leaving many behind. 

Yet, our findings also suggest that the answers do not lie in taking models and 'best practices' from high-capacity countries alone: there are many lessons to be learned from countries with emerging and advancing open data initiatives, and critical lessons to learn from successes and failures in capacity constrained countries. If we trust that the idea of 'open by default' is becoming widely established, then the challenge ahead now is to innovate, and to invest time and energy in putting openness on firm foundations. This requires not only developments in open data practice, but also developments in how it is measured and monitored. 

Through this two-year pilot of the Open Data Barometer we have established a corpus of data that can support further in depth research to understand the dynamics of open data. By going beyond counting datasets, and by recognising that openness has many dimensions, our hope is that this work contributes to dialogue about the kinds of openness citizens want, and to critical activity that builds towards better and more inclusive open data initiatives.


## Footnotes and references

[^ng1]: Punch NG, (Jan 31st 2014), Govt commences open data initiative http://www.punchng.com/business/business-economy/govt-commences-open-data-initiative/ ; Government of Nigeria, (Jan 29th 2014), FG Kicks Off Open Data Initiative http://commtech.gov.ng/index.php/videos/news-and-event/128-fg-kicksoff-opendata-initiative

[^ng2]: Channels Television (Sept 13th 2013), Edo Launches First Open Data Portal In Nigeria, http://www.channelstv.com/2013/09/13/edo-launches-first-open-data-portal-in-nigeria/ 

[^ng3]: The #SaveBagega campaign addressed delays in allocating pledged funds to the clean-up of lead poisoning in Northern Nigeria. Through budget data visualisation and mobilising popular attention, the campaign sought to pressure the government to disburse pledged funds, and has maintained ongoing tracking of spending on the clean-up operation. http://followthemoneyng.org/savebagega.html

[^ke1]: NDemo, Bitange (Nov 24th 2014), Open contracting format can clean up government procurement http://www.nation.co.ke/oped/blogs/dot9/ndemo/-/2274486/2532264/-/1wpu9kz/-/

[^ke2]: Mutuku, Leonida, and Christine Mahihu. (2014) Understanding the Impacts of Kenya Open Data Applications and Services. http://opendataresearch.org/sites/default/files/publications/ODDC%20Report%20iHub.pdf.

[^ke3]: See for example Chiliswa, Zacharia. (2014) Open Government Data for Effective Public Participation: Findings of a Case Study Research Investigating The Kenya's Open Data Initiative in Urban Slums and Rural Settlements,  http://opendataresearch.org/sites/default/files/publications/JHC%20Publication%20April%202014%20-%20ODDC%20research.pdf. which explores patterns of information access and use in rural and urban slums in Kenya, and which raises important considerations for 

[^ne1]: E.g. http://data.opennepal.net/datasets and http://catalog.data.ug/dataset

[^la1]: For an account of open data in four Latin American cities, and the different top-down and bottom-up models being adopted, see the collection of 'Opening the Cities' case studies from the Open Data in Developing Countries project: http://www.opendataresearch.org/project/2013/cities 

[^cn1]: 汪韬，家乡水，清几许？，南方周末，(Feb 13th 2014) http://www.infzm.com/content/98057 Accessed June 18 2014.

[^ur1]: Based on http://www.wolframalpha.com/input/?i=population+of+uruguay%2C+population+of+montevideo

[^br1]: Beghin, Nathalie, and Carmela Zigoni (2014). Measuring Open Data’s Impact of Brazilian National and Sub-National Budget Transparency Websites and Its Impacts on People’s Rights, http://opendataresearch.org/sites/default/files/publications/Inesc_ODDC_English.pdf.

[^ar1]: Elena, Sandra, Natalia Aquilino and Ana Riviére (2014) Emerging Impacts in Open Data in the Judiciary Branches in Argentina, Chile and Uruguay, http://www.opendataresearch.org/sites/default/files/publications/Case%20study%20-%20CIPPEC.pdf.

[^za1]: South Africa OGP National Action Plan (2013) http://www.opengovpartnership.org/sites/default/files/OPG%20booklet%20final%20single%20pages.pdf

[^ma1]: Maghreb Digital (2013) Rapport Open Data : a libération des données publiques au service de la croissance et de la connaissance http://www.maghreb-digital.com/projet/wp-content/uploads/2013/07/Open-Data-Maroc.pdf

[^fr1]: EtaLab (May 21st 2014) Ouverture des données publiques : création de la fonction d’administrateur général des données (chief data officer)  https://www.etalab.gouv.fr/ouverture_des_donnees_publiques_creation_de_la_fonction_dadministrateur_general_des_donnees_chief_data_officer

[^fr2]: EtaLab (Nov 14th 2014) La base officielle des codes postaux est disponible sur data.gouv.fr https://www.etalab.gouv.fr/la-base-officielle-des-codes-postaux-est-disponible-sur-data-gouv-fr

[^gb1]: Arther, Charles (March 17th 2014) MPs and open-data advocates slam postcode selloff http://www.theguardian.com/technology/2014/mar/17/mps-and-open-data-advocates-slam-postcode-selloff

[^gb2]: http://data.gov.uk/data/openspending-report/index 

[^ca1]: Suggested Dataset - Postal Code Database http://open.canada.ca/en/suggested-datasets/postal-code-database

[^at1]: Austrian Federal Chancellery (Dec 2013) Work programme of the Austrian Federal Government 2013–2018 https://www.bka.gv.at/DocView.axd?CobId=53588

[^at2]: https://www.data.gv.at/anwendungen/solarize/ / http://solarize.at/en/

[^in1]: Chattapadhyay, S. (2013). Towards an Expanded and Integrated Open Government Data Agenda for India. In ICEGOV2013. Seoul, Republic of Korea: ACM Press. doi:10.1145/2591888.2591923 http://dl.acm.org/citation.cfm?doid=2591888.2591923

[^qa1]: ICT Qatar (2014) Public Consultation on draft Open Data Policy [http://www.ictqatar.qa/en/documents/document/public-consultation-draft-open-data-policy](http://www.ictqatar.qa/en/documents/document/public-consultation-draft-open-data-policy)

[^bw1]: Botswana Innovation Hub (June 10th 2014) The Open Data Readiness Assessment - http://www.bih.co.bw/detail.php?id=220

[^bf1]: The ODI (June 5th 2014) Burkina Faso launches open data initiative with mentoring from the ODI and funding from the World Bank  http://theodi.org/news/burkina-faso-launches-open-data-initiative-with-mentoring-from-the-odi-and-funding-from-the-world-bank
 
[^sl1]: Abdulai, E (May 26th 2014) Connecting Open Data and the Right to Information in Sierra Leone http://www.opendataresearch.org/content/2014/642/connecting-open-data-and-right-information-sierra-leone
 
 
 
<script>

function radar_select_country(data, countries) {
     filtered = []
     for(i in data) {
         if(countries.indexOf(data[i]['isocode']) > -1) {
             filtered.push(data[i])
         }
     }
     return filtered
}

function country_names(data,countries) {
   country_names = []
   for(i in data) {
       if(countries.indexOf(data[i]['isocode']) > -1) {
           country_names.push(data[i]['className'])
       }
   }
   return country_names
}

  $(document).ready(function () {
      $.ajax({
          type: "GET",
          url: "/assets/data/countries.json",
          success: function (data) { 
            $(".radarchart").each(function(chart){
                countries = $(this).data("countries").split(",")
                filtered = radar_select_country(data,countries)
                RadarChart.draw("#"+$(this).attr("id"), filtered);
                $(this).append("<div class='radar-legend'><span class='item'>"+country_names(data,countries).join(", </span><span class='item'>")+"</span></div>")
            })

         }
      });
  });
</script>