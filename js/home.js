$(document).ready(function(){
  $("#info1").on("click", function(){
    $("#myModal-body").html("<p><span style='margin-left:15px;'></span>JSON is smaller than XML because it doesn't use end tag.<p>");
    $("#myModal-title").text("Message size");
    $("#myModal").modal("show");
  });

  $("#info2").on("click", function(){
    $("#myModal-body").html("<p><span style='margin-left:15px;'></span>XML can be stricter than JSON because it has schema, namespace and others for support its model.</p>");
    $("#myModal-title").text("Structural");
    $("#myModal").modal("show");
  });

  $("#info3").on("click", function(){
    $("#myModal-body").text("");
    $("#myModal-title").text("Consumed by JavaScript");
    $("#myModal-body").append("<p><span style='margin-left:15px;'></span>For AJAX applications, JSON is faster and easier than XML:</p>");
    $("#myModal-body").append("<p><span style='margin-left:25px;'></span>Using XML</p>");
    $("#myModal-body").append("<ul style='margin-left:45px; padding-left:0px;'><li>Fetch an XML document</li><li>Use the XML DOM to loop through the document</li><li>Extract values and store in variables</li></ul>");
    $("#myModal-body").append("<br>");
    $("#myModal-body").append("<p><span style='margin-left:25px;'></span>Using JSON</p>");
    $("#myModal-body").append("<ul style='margin-left:45px; padding-left:0px;'><li>Fetch a JSON string</li><li>JSON.Parse the JSON string</li></ul>");
    $("#myModal").modal("show");
  });

  $("#info4").on("click", function(){
    $("#myModal-body").html("<p><span style='margin-left:15px;'></span>XML is much more difficult to parse than JSON because JSON is parsed into a ready-to-use JavaScript object.</p>");
    $("#myModal-title").text("Parsing");
    $("#myModal").modal("show");
  });
});