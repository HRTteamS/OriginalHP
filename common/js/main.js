$(document).ready(function(){

	var $section = $('.js-section'); // 各スライド
	var $pager = $('#js-pager'); // ページャー枠

	// ページャーの作成
	function createPager() {
		$section.each(function(i, e){
			// ページ内リンク先の作成
			var sectionName = $(e).attr('data-section-name');
			// 最初のliにはクラスを付与
			var addClass = '';
			if (i === 0) {
			    addClass = 'is-current';
			}
			// liのHTML作成
			var html = '';
			html += '<li class="' + addClass + '">';
			html += '<a href="#' + sectionName + '"></a>';
			html += '</li>';
			$pager.append(html);
		});

		pagerLink();
	}

	// ページャーでaタグをクリックされたらスクロールする
	function pagerLink () {
		$pager.find('a').on('click', function() {
			$.scrollify.move($(this).attr("href"));
		});
	}

	// ページャーに対応する順番にクラス名を付与
	function pagerCurrent(index = 0) {
		var $li = $pager.find('li');
		$li.removeClass('is-current');
		$li.eq(index).addClass('is-current');
	}

	var option = {
		section : '.js-section', // 対象を指定
		easing: "swing", // イージングをしてい(jQueryのanimation)
		scrollSpeed: 600, // スクロール時の速度
		scrollbars: false, // スクロールバーを表示するか
		before:function(index, section) {
			pagerCurrent(index); // ページャーに対応する順番にクラス名を付与
		},
		afterRender:function() {
			createPager(); // ページャーの作成
		}
	};

	$(function() {
		$.scrollify(option); // scrollifyの実行
	});
});