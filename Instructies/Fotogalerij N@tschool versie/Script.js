$(document).ready(function () 
{
	var clicked = false;
	
	$('#strip').on('click', 'img', function()
	{
			var source = $(this).attr('src');
			$('#container img').fadeOut('fast', function()
			{
				$(this).attr('src', source);	
			});
			
			$('#container img').fadeIn('fast');
	});
	
	$('#strip').on('hover', 'img', function()
	{
		$(this).css('border', '1px solid red');
	});
	
	$('#strip').on('mouseout', 'img', function()
	{
		$(this).css('border', '1px solid gray');
	});
	
	$('#strip').on('dblclick', 'img', function()
	{
		if(clicked)
		{
			$(this).css('transform', 'scale(1)');
		}
		else
		{
			$(this).css('transform', 'scale(2)');			
		}
		
		clicked = !clicked;
	});
});