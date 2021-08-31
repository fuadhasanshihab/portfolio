/**
* Fuad Hasan Shihab
* New feed Layout
* 2021-08-31 11:32:35
*/
(function () {
    // Loader
    var loader = new function(){this.rC=-1;this.r=[];this.add=function(src){this.r.push(src);};this.addTag=function(src,callback){var head=document.getElementsByTagName('head')[0],tag=src.indexOf('.js')>0?'script':'link',s=document.createElement(tag);head.appendChild(s);s.onload=callback;if(tag==='script'){s.type='text/javascript';s.src=src;}else if(tag==='link'){s.rel='stylesheet';s.href=src;}};this.loadNext=function(){this.rC++;if(this.rC>=this.r.length){this.done();}else{var r=this.r[this.rC];this.addTag(r,this.loadNext.bind(this));}};this.done=function(){this.onResourcesLoaded(window.Curator);};this.load=function(cb){this.onResourcesLoaded=cb;this.loadNext();};};

    // Config
    var config = {"post":{"template":"post-grid","matchHeights":false,"minWidth":200,"imageHeight":"100%","showTitles":true,"showShare":true,"showComments":true,"showLikes":true,"autoPlayVideos":false,"clickAction":"open-popup","clickReadMoreAction":"open-popup","maxLines":0},"widget":{"template":"widget-grid-carousel","autoPlay":true,"autoLoad":true,"infinite":true,"rows":2,"controlsOver":true,"controlsShowOnHover":false,"speed":5000,"duration":700,"panesVisible":-1,"useCss":true,"moveAmount":0,"easing":null,"verticalSpacing":0,"horizontalSpacing":0,"autoLoadNew":false},"lang":"en","container":"#curator-feed-new-feed-layout","debug":0,"hidePoweredBy":false,"forceHttps":false,"feed":{"id":"fa5bb6a7-4e28-4c1b-9951-563191e0d080","apiEndpoint":"https:\/\/api.curator.io","postsPerPage":12,"params":{},"limit":25},"popup":{"template":"popup","templateWrapper":"popup-wrapper","autoPlayVideos":false,"deepLink":false},"filter":{"template":"filter","showNetworks":false,"showSources":false,"showAll":false,"default":"all","limitPosts":false,"limitPostNumber":0,"period":""},"type":"GridCarousel","theme":"sydney"};
    var colours = {"widgetBgColor":"transparent","bgColor":"#ffffff","borderColor":"#cccccc","iconColor":"#222222","textColor":"#222222","linkColor":"#999999","dateColor":"#000000","footerColor":"#ffffff","tabIndexColor":"#cccccc"};
    var styles = {};

    // Bootstrap
    function loaderCallback () {
        window.Curator.loadWidget(config, colours, styles);
    }

    // Run Loader
    loader.add('https://cdn.curator.io/5.0/curator.embed.css');
    loader.add('https://cdn.curator.io/published-css/fa5bb6a7-4e28-4c1b-9951-563191e0d080.css');

    loader.add('https://cdn.curator.io/5.0/curator.embed.js');

    

    loader.load(loaderCallback);
})();
