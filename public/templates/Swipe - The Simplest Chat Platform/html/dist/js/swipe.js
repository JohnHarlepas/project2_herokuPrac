/**
* Hover effect on navigation icons
*/			
$('.menu a i').on('click', function(){
	$('.menu a i').removeClass('active');
	$(this).addClass('active');
});
/**
* Removes recipient from Add Friend and Start new chat
*/
$("#contact, #recipient").click(function(){
	$(this).remove();
});
/**
	* Tooltip
*/
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})
/**
* Filter Members
*/
$(document).ready(function(){
	var valueOnLoad = "all";
	$(".filterMembers").not('.'+valueOnLoad).hide('3000');
	$(".filterMembers").not('.'+valueOnLoad).hide('3000');
	$(".filterMembersBtn").click(function(){
		var value = $(this).attr('data-filter');
		$(".filterMembers").not('.'+value).hide('3000')
		$('.filterMembers').filter('.'+value).show('3000')
	});
});
/**
* Filter Discussions
*/
$(document).ready(function(){
	var valueOnLoad = "all";
	$(".filterDiscussions").not('.'+valueOnLoad).hide('3000');
	$(".filterDiscussions").not('.'+valueOnLoad).hide('3000');
	$(".filterDiscussionsBtn").click(function(){
		var value = $(this).attr('data-filter');
		$(".filterDiscussions").not('.'+value).hide('3000')
		$('.filterDiscussions').filter('.'+value).show('3000')
	});
});
/**
* Filter Notifications
*/
$(document).ready(function(){
	var valueOnLoad = "all";
	$(".filterNotifications").not('.'+valueOnLoad).hide('3000');
	$(".filterNotifications").not('.'+valueOnLoad).hide('3000');
	$(".filterNotificationsBtn").click(function(){
		var value = $(this).attr('data-filter');
		$(".filterNotifications").not('.'+value).hide('3000')
		$('.filterNotifications').filter('.'+value).show('3000')
	});
});
/**
* Search for people
*/
$(document).ready(function(){
	$("#people").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#contacts a").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)	
		});
	});
});
/**
* Search for conversations
*/
$(document).ready(function(){
	$("#conversations").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#chats a").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});
/**
* Search for notifications
*/
$(document).ready(function(){
	$("#notice").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#alerts a").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});
/**
* Switch mode
*/
$(document).ready(function() {
	clicked = true;
	$(".mode").click(function() {
		if(clicked){
			// {{!-- this link connects the higher level file main.handblebars to the deeper level file that exits inside the file located in the template--}}
			$('head').append('<link href="/templates/Swipe - The Simplest Chat Platform/html/dist/css/dark.min.css" id="dark" type="text/css" rel="stylesheet">');
			//this link was used to find the my way back to the higher level. it mirrors the above and it is the original 
			// $('head').append('<link href="dist/css/dark.min.css" id="dark" type="text/css" rel="stylesheet">');
			clicked  = false;
		}
		else {
			$('#dark').remove();
			clicked  = true;
		}
	});
});
/**
* Call
*/
$(".back").click(function(){
	$('#call'+$(this).attr('name')).hide();
	$('#chat'+$(this).attr('name')).removeAttr('style');
});
$(".connect").click(function(){
	$('#chat'+$(this).attr('name')).hide();
	$('#call'+$(this).attr('name')).show();
});