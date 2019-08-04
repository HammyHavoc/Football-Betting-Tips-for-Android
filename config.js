define( function ( require ) {

	"use strict";

	return {
		app_slug : 'football-betting-tips-2',
		wp_ws_url : 'https://www.footballfreetips.com/wp-appkit-api/football-betting-tips-2',
		wp_url : 'https://www.footballfreetips.com',
		theme : 'fbtapp',
		version : '2.7',
		app_type : 'phonegap-build',
		app_title : 'Football Betting Tips',
		app_platform : 'android',
		app_path: '',
		gmt_offset : 0,
		debug_mode : 'off',
		auth_key : '![FMbmjrB}ip,U:J>d=[R+>x/bC{$=i*KRtITDGYUTv/qzH9BZ#nT:(Z6RU]JaTk',
		options : {"refresh_interval":0,"onesignal":{"app_id":"3b1b32fe-2587-402d-bd72-c21f7c3fac18"}},
		theme_settings : [],
		addons : [{"name":"OneSignal for WP AppKit","slug":"wpak-addon-onesignal","url":"https:\/\/www.footballfreetips.com\/wp-content\/plugins\/wpak-addon-onesignal","js_files":[{"file":"js\/wpak-onesignal.js","type":"module","position":"","platforms":["android","ios"]},{"file":"js\/wpak-onesignal-app.js","type":"theme","position":"after","platforms":["android","ios"]}],"css_files":[],"html_files":[],"template_files":[],"app_data":null}]
	};

});
