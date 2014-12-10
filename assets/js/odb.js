/** 
# Given a set of columns, generate a table which
# - Contains the specified columns
# - Has appropriate classes to allow colors of columns to be set
# - Keeps elements groups together appropriately

# We may need to use http://blog.pengoworks.com/index.cfm/2008/3/28/Finished-jQuery-Tablesorter-mod-for-Collapsible-Table-Rows
# And then in the table generation make the 2013 rows into child rows that can be expanded or removed.

**/

function generate_headers(key) {
    odb_key_data = {}
    for(i=0;i<key.length;i++) {
       odb_key_data[key[i]['code']] = {short_name:key[i]['short_name'],full_name:key[i]['full_name'],        
            source:key[i]['Source']}
    }
    return odb_key_data     
 }
 
 function generate_odb_table(data,key,fields,target,groupby,ignore,order) {
     var table = ""
     
     orderCol = fields.indexOf(order)
     if(order.indexOf("Rank") > 0) {
         orderDir = "asc"
     } else {
         orderDir = "desc"
     }

     headers = generate_headers(key)

     group_html = ""
     if(groupby.length > 0) {
         group_html += "<label>Group by: <select id='groupby'>"
            group_html += "<option value='none'>--No grouping--</option>"
         for(group = 0;group<groupby.length;group++) {
            group_html += "<option value="+fields.indexOf(groupby[group])+">"+groupby[group]+"</option>"
         }
         group_html += "</select></label>"
     }
     
     table += "<table>\n"
     table += "<thead><tr>\n"
     coldefs = []

     for(col = 0;col<fields.length;col++) {
         try {
            colname = headers[fields[col]]['short_name']
         } catch (err) {
             colname = fields[col]
         }
         if(ignore.indexOf(fields[col]) > -1) {
             coldefs.push({ targets: [ col ], "visible":false, "searchable": true})
         }
         if(fields[col].indexOf("Country") > -1) {
             coldefs.push({ targets: [ col ], "width":"120px"})
          }
         
         table += "<th>"+colname+"</th>\n"
     }
     table += "</tr></thead>\n"
     table += "<tbody>\n"
     for(i=0;i<data.length;i++) {
            table += "<tr>\n"
            for(field = 0;field<fields.length;field++) {
                if(fields[field].indexOf("Rank") > 0 || fields[field].indexOf("Change") > 0) {
                    cellClass = " class='databar-ignore'"
                } else {
                    cellClass = ""
                }
                table += "<td"+cellClass+">"+ data[i][fields[field]] + "</td>\n"
            }
            table += "</tr>\n"
     }
     table += "</tbody>\n"
     table += "</table>"
     
     $(target).html(table)
     $(target).find("TABLE").dataTable( {
             "paging":   false,
             "order": [[ orderCol, orderDir ]],
             "columnDefs":coldefs,
              "drawCallback": function ( settings ) {
                         var api = this.api();
                         var rows = api.rows( {page:'current'} ).nodes();
                         var last=null;
                         
                         groupCol = $("#groupby").val()
                         if(groupCol && !(groupCol=='none')) { 
                             api.column(groupCol, {page:'current'} ).data().each( function ( group, i ) {
                                 if ( last !== group ) {
                                     if(group == "") { group_text = "Others" } else { group_text = group }
                                     $(rows).eq( i ).before(
                                         '<tr class="group"><td colspan="'+(fields.length)+'">'+group_text+'</td></tr>'
                                     );

                                     last = group;
                                 }
                             } );
                         }
                }
         });
         
     new $.fn.dataTable.FixedHeader($(target).find("TABLE").DataTable(),{"offsetTop": 50})
     
     $(".dataTables_filter").prepend(group_html)
         
     $('#groupby').change(function() {
         groupCol = $("#groupby").val()
         if(!(groupCol=='none')) {
             table = $(target).find("TABLE").DataTable().order([groupCol, 'desc']).draw()
         } else {
             table = $(target).find("TABLE").DataTable().order([0, 'asc']).draw()             
         }
     })
            
     $(target).find("TABLE").databar()         
          
     return table
 }