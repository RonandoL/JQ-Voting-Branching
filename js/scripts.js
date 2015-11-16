$(function() {
  var whatAmI = confirm("Do you love Jesus, red meat, guns and hate government?");

// Are you a Republican?
    if (whatAmI) {
      $("#top").hide();
      $("#republican").show();
    } else {
      $("#top").hide();
      $("#not-republican").show();
    }

// Are you a Democrat?
  $(".notgopbtn").click(function() {
    var button = confirm("Is global warming man-made? Do you love recycling and Social Security? Does foreign policy confuse you and do you hate guns?");

    if (button) {
      $(this).hide();
      $("#top").hide();
      $("#not-republican").hide();
      $("#democrat").show();
    } else {
      $(this).hide();
      $("#top").hide();
      $("#not-republican").hide();
      $("#democrat").hide();
      $("#not-democrat").show()
    }
  });

// Are you a Libertarian?
  $(".notdemsbtn").click(function() {
    var button = confirm("Do you hate taxes, laws, government, regulations, democrats and republicans, polluters should be shot and hanged, but love guns?");

    if (button) {
      $(this).hide();
      $("#libertarian").show();
    } else {
      $("#not-democrat").hide();
      $("#libertarian").hide();
      $("#not-libertarian").show();
    }
  });

  $(".notlibsbtn").click(function() {
    var button = confirm("Do you hate Nancy Pelosi crying but love it when John Boehner cries? Is climate change witchcraft? Is Obama a Muslim socialist with a Photoshopped birth certificate?");

    if (button) {
      $(this).hide();
      $("#not-libertarian").hide();
      $("#teabagger").show();
    } else {
      $("#teabagger").hide();
      $("#not-libertarian").hide();
      $("#not-teabagger").show();
    }
  });

  $(".notteabtn").click(function() {
    var button = confirm("Do you want universal healthcare and income equality?");

    if (button) {
      $(this).hide();
      $("#not-teabagger").hide();
      $("#socialist").show();
    }
  });



});






//
