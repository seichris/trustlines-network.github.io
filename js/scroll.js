$(document).ready(function(){



  var master = "div1"; // this is id div
  var slave = "div2"; // this is other id div
  var master_tmp;
  var slave_tmp;
  var timer;

  var sync = function ()
  {
    if($(this).attr('id') == slave)
    {
      master_tmp = master;
      slave_tmp = slave;
      master = slave;
      slave = master_tmp;
    }

    $("#" + slave).unbind("scroll");

    var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);

    var x = percentage * ($("#" + slave).get(0).scrollHeight - $("#" + slave).get(0).offsetHeight);

    $("#" + slave).scrollTop(x);

    if(typeof(timer) !== 'undefind')
      clearTimeout(timer);

    timer = setTimeout(function(){ $("#" + slave).scroll(sync) }, 200)
  }

  $('#' + master + ', #' + slave).scroll(sync);

});
/* http://jsfiddle.net/b75KZ/5/ */
/*  http://jsfiddle.net/ktretyak/5kth4fnx/1/ */
