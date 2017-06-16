$(document).ready(function() {
  $(".enter span").click(function() {
    $(".text").toggleClass("second");
    $(".screen.one").toggleClass("second");
    $(".screen.two").toggleClass("second");
  });
  $(".goback").click(function() {
    $(".text").toggleClass("second");
    $(".screen.one").toggleClass("second");
    $(".screen.two").toggleClass("second");
  })
  $(".image").click(function() {
    $(".center").hide();
    $(".image").toggleClass("exit");
    $(".descriptions").show();
    $(".description").removeClass("active");
    $(".description." + $(this).attr("id")).addClass("active");
  });
  $(".backbutton").click(function() {
    $(".image").toggleClass("exit");
    $(".descriptions").hide();
    $(".center").show();
  });
});
