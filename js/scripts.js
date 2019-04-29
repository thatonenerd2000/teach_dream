/*global $*/
/*global ready*/
$(document).ready(function() {
  $("#sec1").paroller();
  $(".scrolla , .tdb").scrolla({
    mobile: true
  });
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}
