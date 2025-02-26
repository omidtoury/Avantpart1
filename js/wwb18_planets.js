document.addEventListener('DOMContentLoaded', function(event)
{
   var mouseTrackX = 0;
   var mouseTrackY = 0;
   document.addEventListener('mousemove', function(e)
   {
      if (mouseTrackX == 0) mouseTrackX = e.pageX;
      if (mouseTrackY == 0) mouseTrackY = e.pageY;
      var dx = e.pageX - mouseTrackX;
      var dy = e.pageY - mouseTrackY;
      var elements = document.querySelectorAll('[data-mousetrack]');
      Array.prototype.forEach.call(elements, function(el, i)
      {
         var x = el.dataset.mousetrack * dx * 0.0025;
         var y = el.dataset.mousetrack * dy * 0.0025;
         el.style.transform = "translate(" + x + "px," + y + "px)";
      });
   });
   VanillaTilt.init(document.querySelectorAll('[data-3dtilt]'));
});
