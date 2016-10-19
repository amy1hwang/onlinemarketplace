$(document).ready(function() {
  $("form").submit(function(event) {
  var FirstName = $("#FirstName").val();
  var LastName = $("#LastName").val();
  var StreetAddress = $("#StreetAddress").val();
  var City = $("#City").val();
  var State = $("#State").val();
  var ZipCode = $("#ZipCode").val();
  var TeaType = $("#tea").val()

  $("#output1").text(FirstName).append(" " + LastName);
  $("#output2").text(StreetAddress);
  $("#output3").text(City).append(", " + State + " " + ZipCode);
  $("#output4").text(TeaType);

  $(".submitted").show();


  event.preventDefault();
  });
});
