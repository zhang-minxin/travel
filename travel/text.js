$('.pages').hover(function () {
	$('.pages ul').stop().show('fast');
},function () {
	$('.pages ul').stop().hide('fast');
});

$('.search').hover(function () {
	$('.search .ipt-txt').stop().animate({width:110});
},function () {
	if ($('.search .ipt-txt:focus').length==0) {
		$('.search .ipt-txt').stop().animate({width:1});
	}
});
$('.search .ipt-txt').blur(function () {
	$('.search .ipt-txt').stop().animate({width:1});
});
		var i=2;
	var max_pages= 7;
	if (max_pages) {
		$('#load-more').click(function () {
			if ((max_pages/i) < 1) {
				this.className = 'nopages';
				this.innerHTML='The End';
				$(this).unbind('click');
				return false;
			}
			var _this = this;

			_this.className = 'loading';

			var url = '?action=ajax_post&pag='+i;
			$.get(url, function(data) {
				i++;
				$('#main').append(data);
				_this.className = 'icon load-more';

				if ((pmax_pages/i) >= 1) {
					_this.className = 'nopages';
					_this.innerHTML='The End';
					$(_this).unbind('click');
				}
			}); 
		})
	}
