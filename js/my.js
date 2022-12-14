var totalCount = 0;
var wordCount = 0;
var excelCount = 0;
var accessCount = 0;
var pdfCount = 0;
var zipCount = 0;
var wordArray = [];
var excelArray = [];
var accessArray = [];
var pdfArray = [];
var zipArray = [];

document.getElementById("contactInfo").innerHTML = "If you need help with your data, it wouldn't hurt to ask. Please contact <a href='mailto:myehsha.boone@gsa.gov' target='_blank'>Myehsha Kehoga Boone</a> for more information";

var fun = function() {


  for(var k = 0;k < data.dataset.length; k++) {
    var distribution = data.dataset[k].distribution;
    if (distribution) {
      if (distribution.length == 1) {
        var type = distribution[0].mediaType;
        console.log(type);

        if (type == "application/msword") {
          totalCount= totalCount + 1;
          wordCount = wordCount + 1;
          wordArray.push(
            {
              title: data.dataset[k].title,
              contactName: "<a href='" + data.dataset[k].contactPoint.hasEmail + "' target='_blank'>" + data.dataset[k].contactPoint.fn + "</a>"
            }
          );
        }
        if (type == "application/vnd.ms-excel") {
          totalCount= totalCount + 1;
          excelCount = excelCount + 1;
          excelArray.push(
            {
              title: data.dataset[k].title,
              contactName: "<a href='" + data.dataset[k].contactPoint.hasEmail + "' target='_blank'>" + data.dataset[k].contactPoint.fn + "</a>"
            }
          )
        }
        if (type == "application/mdb") {
          totalCount= totalCount + 1;
          accessCount = accessCount + 1;
          accessArray.push({
            title: data.dataset[k].title,
            contactName: "<a href='" + data.dataset[k].contactPoint.hasEmail + "' target='_blank'>" + data.dataset[k].contactPoint.fn + "</a>"
          }
          )
        }
        if (type == "application/pdf") {
          totalCount= totalCount + 1;
          pdfCount = pdfCount + 1;
          pdfArray.push({
            title: data.dataset[k].title,
            contactName: "<a href='" + data.dataset[k].contactPoint.hasEmail + "' target='_blank'>" + data.dataset[k].contactPoint.fn + "</a>"
          })
        }
        if (type == "application/zip") {
          totalCount= totalCount + 1;
          zipCount = zipCount + 1;
          zipArray.push({
            title: data.dataset[k].title,
            contactName: "<a href='" + data.dataset[k].contactPoint.hasEmail + "' target='_blank'>" + data.dataset[k].contactPoint.fn + "</a>"
          })
        }
        console.log(wordCount);
        console.log(excelCount);
        console.log(accessCount);
        console.log(pdfCount);
        console.log(zipCount);
      }
    }
    else {
      //no distribution
    }

  }
}

fun();



document.getElementById("number").innerHTML = totalCount;



var pieData = [
    {
        value: wordCount,
        color:"#D6DCE8",
        highlight: "#FF5A5E",
        label: "Word"
    },
    {
        value: excelCount,
        color: "#051838",
        highlight: "#152a55",
        label: "Excel"
    },
    {
        value: accessCount,
        color: "#2d4771",
        highlight: "#FFC870",
        label: "Access"
    },
    {
        value: pdfCount,
        color:"#7788aa",
        highlight: "#4e638e",
        label: "PDF"
    },
    {
        value: zipCount,
        color: "#a7b4cb",
        highlight: "#5AD3D1",
        label: "ZIP"
    }
]

var pieOptions = {};

// Get the context of the canvas element we want to select
var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Pie(pieData, pieOptions);



console.log(wordArray);
$("#myChart").click(
    function(evt){
      document.getElementById("contactInfo").innerHTML = "<p>If you're feeling helpful, you can convert this information into a format I can better follow. Please contact <span id='contactName'></span> for more information.</p>"
      document.getElementById("badData").style.visibility = "visible";
      document.getElementById("computer").src = "SadComputer3D.png";
        var activePoints = myNewChart.getSegmentsAtEvent(evt);
        var label = activePoints[0].label;
        console.log(label);
        if(label === "Word") {
          console.log(wordArray[0].title);
          document.getElementById("dataTitle").innerHTML = wordArray[0].title;
          document.getElementById("contactName").innerHTML = wordArray[0].contactName;
          document.getElementById("sadText").innerHTML = "Booo, I can't read Microsoft Word. Its proprietary and I don't understand how to get find the information I'm interested in.";
        }
        if(label == "Excel") {
          document.getElementById("dataTitle").innerHTML = excelArray[0].title;
          document.getElementById("contactName").innerHTML = excelArray[0].contactName;
          document.getElementById("sadText").innerHTML = "Darn, this data is in Excell. Its proprietary and doesn't play well with the way I'm used to finding information.";
        }
        if(label == "ZIP") {
          document.getElementById("dataTitle").innerHTML = zipArray[0].title;
          document.getElementById("contactName").innerHTML = zipArray[0].contactName;
          document.getElementById("sadText").innerHTML = "Zip who??? This data gift is still wrapped, I need to do some work before I even know if I can use this or not.";
        }
        if(label == "Access") {
          document.getElementById("dataTitle").innerHTML = accessArray[0].title;
          document.getElementById("contactName").innerHTML = accessArray[0].contactName;
          document.getElementById("sadText").innerHTML = "Yikes, looks like the good stuff is locked away. If I want to read this I need to go out and find the right tools.";
        }
        if(label == "PDF") {
          document.getElementById("dataTitle").innerHTML = pdfArray[0].title;
          document.getElementById("contactName").innerHTML = pdfArray[0].contactName;
          document.getElementById("sadText").innerHTML = "OH NO, I can't read PDF. Its proprietary and I don't understand how to get find the information I'm interested in.";
        }
    }
);
