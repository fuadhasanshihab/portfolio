/**
* Fuad Hasan Shihab
* Default feed Layout
* 2021-08-27 01:34:11
*/
(function () {
    // Loader
    var loader = new function(){this.rC=-1;this.r=[];this.add=function(src){this.r.push(src);};this.addTag=function(src,callback){var head=document.getElementsByTagName('head')[0],tag=src.indexOf('.js')>0?'script':'link',s=document.createElement(tag);head.appendChild(s);s.onload=callback;if(tag==='script'){s.type='text/javascript';s.src=src;}else if(tag==='link'){s.rel='stylesheet';s.href=src;}};this.loadNext=function(){this.rC++;if(this.rC>=this.r.length){this.done();}else{var r=this.r[this.rC];this.addTag(r,this.loadNext.bind(this));}};this.done=function(){this.onResourcesLoaded(window.Curator);};this.load=function(cb){this.onResourcesLoaded=cb;this.loadNext();};};

    // Config
    var config = {"post":{"template":"post-mosaic","imageHeight":"100%","minWidth":150,"showTitles":true,"showShare":true,"showComments":false,"showLikes":false,"autoPlayVideos":false,"clickAction":"open-popup","clickReadMoreAction":"open-popup","maxLines":0},"widget":{"showLoadMore":true,"switchPosts":true,"autoLoadNew":false},"lang":"en","container":"#curator-feed-default-feed-layout","debug":0,"hidePoweredBy":true,"forceHttps":false,"feed":{"id":"7299343c-1103-4f88-9df2-bf968009a7c5","apiEndpoint":"https:\/\/api.curator.io","postsPerPage":12,"params":{},"limit":25},"popup":{"template":"popup","templateWrapper":"popup-wrapper","autoPlayVideos":false,"deepLink":false},"filter":{"template":"filter","showNetworks":false,"showSources":false,"showAll":false,"default":"all","limitPosts":false,"limitPostNumber":0,"period":""},"type":"Mosaic","theme":"sydney"};
    var colours = {"widgetBgColor":"transparent","bgColor":"transparent","borderColor":"transparent","iconColor":"#222222","textColor":"#222222","linkColor":"#999999","dateColor":"#000000","footerColor":"#ffffff","tabIndexColor":"#cccccc"};
    var styles = {};

    // Bootstrap
    function loaderCallback () {
        window.Curator.loadWidget(config, colours, styles);
    }

    // Run Loader
    loader.add('https://cdn.curator.io/5.0/curator.embed.css');
    loader.add('https://cdn.curator.io/published-css/7299343c-1103-4f88-9df2-bf968009a7c5.css');

    loader.add('https://cdn.curator.io/5.0/curator.embed.js');

    

    loader.load(loaderCallback);
})();
