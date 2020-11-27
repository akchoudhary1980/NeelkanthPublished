function ConvertToDDMMYYYY1(stingdate) {
    //alert(stingdate);
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(stingdate);
    var mydate = new Date(parseFloat(results[1]));    
    year = mydate.getFullYear();
    month = mydate.getMonth() + 1;
    day = mydate.getDate();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    var outdate = day + '-' + month + '-' + year;
    return outdate;
}
function ConvertToHHMMSS1(stringtime) {
    //alert(stringtime);
    //PT9H21M26.298S
    var results = stringtime.replace("PT", ""); 
    //results = results.split("PT").join(""); //results.replace(/PT/, ''); 
    //alert(results);
    //results = results.replace(/H/, ':'); 
    //results = results.replace(/M/, ':');
    return results;
}
function ConvertToIndian(num) {
    result = new Number(num).toLocaleString("hi-IN", { maximumFractionDigits: 2, style: 'currency', currency: 'INR' });
    return result;
}



$(document).ready(function () {
    $("#cbtn-selectors1").dataTable({
        //
        "pageLength": 10,
        dom: 'Bfrtip',
        buttons: [{
            extend: 'copyHtml5',
            exportOptions: {
                columns: [0, ':visible']
            }
        }, {
            extend: 'excelHtml5',
            exportOptions: {
                columns: ':visible'
            }
        }, {
            extend: 'pdfHtml5',
            exportOptions: {
                columns: [0, 1, 2, 5]
            }
        }, 'colvis'],
        //
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Visiter/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "VisiterID", "name": "VisiterID", "autoWidth": true },  
            
            {
                "data": "VisitDate", "name": "VisitDate", "autoWidth": true,

                "render": function (data, type, full, meta) {
                    return ConvertToDDMMYYYY1(full.VisitDate);
                }               
            },
            {
                "data": "StartTime", "name": "StartTime", "autoWidth": true,

                "render": function (data, type, full, meta) {
                    return moment.duration(full.StartTime);
                }               
            },
            {
                "data": "EndTime", "name": "EndTime", "autoWidth": true,

                "render": function (data, type, full, meta) {
                    return moment.duration(full.EndTime);
                }
            },
            {
                "data": "Duration", "name": "Duration", "autoWidth": true,

                "render": function (data, type, full, meta) {
                    return moment.duration(full.Duration);
                }
            },

            { "data": "DeviceName", "name": "DeviceName", "autoWidth": true }, 
            { "data": "ComputerName", "name": "ComputerName", "autoWidth": true }, 
            { "data": "ComputerIP", "name": "ComputerIP", "autoWidth": true },             
           
            {
                "render": function (data, type, full) {
                    return "<a href='Visiter/Delete/" + full.VisiterID + "' class='btn btn-danger btn-mini btn-outline-primary'><i class='icofont icofont-ui-close'></i></a>";        
                }
            },
           
        ]
    });
});  

