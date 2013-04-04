(function() {

  $(function() {
    $('pre').addClass('prettyprint');
    return prettyPrint();
  });

  $("#lifestream").lifestream({
    list: [
      {
        service: "github",
        user: "gwenbell"
      }
    ]
  });

}).call(this);
