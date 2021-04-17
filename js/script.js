$(document).ready(function(){
 
  $.fn.selectedArticles = function() { 
   var section = $("li.active").prop('id');
   $(".container").find("div"+'.'+section).show().siblings('div').hide();
  }
  
  $.fn.tabSelection = function(that, parentElement) {
	var section = that.prop('id');	
	that.addClass('active').siblings('li').removeClass('active');
	parentElement.find('li#'+section).addClass('active').siblings('li').removeClass('active');
	$(".container").find("div"+'.'+section).show().siblings('div').hide();
  }
  
  $.fn.selectedArticles();
			
  $(".navbar li").click(function(){
	var parent = $('.left-nav'),
		that = $(this);
	
	$.fn.tabSelection(that, parent);
  });
  
  $(".left-nav li").click(function(){
	var parent = $('.navbar'),
		that = $(this);
	$.fn.tabSelection(that, parent);
  });
});
