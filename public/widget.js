(function(){
	var W = window;
	if (W.__vcompass_widget_loaded) return; W.__vcompass_widget_loaded = true;

	var btn = document.createElement('button');
	btn.setAttribute('aria-label', 'Open V-Compass chatbot');
	btn.style.position = 'fixed';
	btn.style.right = '20px';
	btn.style.bottom = '20px';
	btn.style.zIndex = '2147483647';
	btn.style.width = '56px';
	btn.style.height = '56px';
	btn.style.borderRadius = '50%';
	btn.style.border = '1px solid #eadfda';
	btn.style.background = '#b08968 url("'+(W.VCOMPASS_ICON_URL||'/favicon.svg')+'") no-repeat center/28px 28px';
	btn.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
	btn.style.cursor = 'pointer';

	var frameWrap = document.createElement('div');
	frameWrap.style.position = 'fixed';
	frameWrap.style.right = '20px';
	frameWrap.style.bottom = '86px';
	frameWrap.style.width = '360px';
	frameWrap.style.height = '520px';
	frameWrap.style.maxWidth = 'calc(100vw - 32px)';
	frameWrap.style.maxHeight = 'calc(100vh - 120px)';
	frameWrap.style.zIndex = '2147483646';
	frameWrap.style.border = '1px solid #eadfda';
	frameWrap.style.borderRadius = '12px';
	frameWrap.style.overflow = 'hidden';
	frameWrap.style.background = '#fff';
	frameWrap.style.display = 'none';

	var iframe = document.createElement('iframe');
	iframe.title = 'V-Compass Chat';
	iframe.src = (W.VCOMPASS_ORIGIN || (location.origin)) + '/embed.html';
	iframe.style.width = '100%';
	iframe.style.height = '100%';
	iframe.style.border = '0';

	frameWrap.appendChild(iframe);
	document.body.appendChild(frameWrap);
	document.body.appendChild(btn);

	btn.addEventListener('click', function(){
		frameWrap.style.display = (frameWrap.style.display === 'none') ? 'block' : 'none';
	});
})();


