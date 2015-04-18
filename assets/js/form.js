
$('#ajax-form').submit(function(){
  $.ajax({
    dataType: 'jsonp',
    url: "http://getsimpleform.com/messages/ajax?form_api_token=ba5c57d3772a4edb14b3716766e947ae",
    data: $('#ajax-form').serialize() 
  }).done(function() {
    //callback which can be used to show a thank you message
    //and reset the form
    alert("Thank you, for contacting us");
  });
  return false; //to stop the form from submitting
});
