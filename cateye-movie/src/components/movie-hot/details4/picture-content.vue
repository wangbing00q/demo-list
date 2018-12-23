<template>
    <div class="container" id="app">
        <div class="gallery-container clearfix" data-val="{ imagesid:50216 }">
            <div class="main">
                <div class="gallery-header">
                    <span class="gallery-title" title="刘昊然全新《智族GQ》封面大片，时尚成绩亮眼迈向成熟">
                        刘昊然全新《智族GQ》封面大片，时尚成绩亮眼迈向成熟
                    </span>
                    <span class="gallery-counter-container" style="display: inline;">(<span class="gallery-counter">
                            <div id="lg-counter"><span id="lg-counter-current">1</span> / <span id="lg-counter-all">10</span></div>
                        </span>)</span>
                    <div class="approve " data-id="50216" data-act="images-approve-click">
                        <i class="approve-icon"></i><span class="num">6</span>
                    </div>

                    <div class="share-container">
                        <div style="display: inline-block; position: relative;"><a class="share-btn"></a>
                            <div style="position: absolute; top: 0px; left: 0px; z-index: 10; display: none;">
                                <div class="share-board">
                                    <div class="share-qrcode">
                                        <div class="share-qrcode-desc">QQ / 微信扫码</div>
                                        <div class="share-qrcode-img" title="http://m.maoyan.com/information/50216?_v_=yes"><canvas
                                                width="90" height="90" style="display: none;"></canvas><img alt="Scan me!"
                                                src="data:image/png;base64,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"
                                                style="display: block;"></div>
                                    </div>
                                    <div class="share-list">
                                        <a target="_blank" class="share-icon share-icon-douban" data-act="news-share-douban"
                                            data-val="" href="https://www.douban.com/share/service/?href=http%3A%2F%2Fmaoyan.com%2Fnews%2F50216&amp;name=%E5%88%98%E6%98%8A%E7%84%B6%E5%85%A8%E6%96%B0%E3%80%8A%E6%99%BA%E6%97%8FGQ%E3%80%8B%E5%B0%81%E9%9D%A2%E5%A4%A7%E7%89%87%EF%BC%8C%E6%97%B6%E5%B0%9A%E6%88%90%E7%BB%A9%E4%BA%AE%E7%9C%BC%E8%BF%88%E5%90%91%E6%88%90%E7%86%9F%20-%20%E7%8C%AB%E7%9C%BC%E7%94%B5%E5%BD%B1%20-%20%E4%B8%80%E7%BD%91%E6%89%93%E5%B0%BD%E5%A5%BD%E7%94%B5%E5%BD%B1"
                                            title="分享到豆瓣">豆瓣</a>
                                        <a target="_blank" class="share-icon share-icon-qzone" data-act="news-share-qqzone"
                                            data-val="" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fmaoyan.com%2Fnews%2F50216&amp;summary=%E5%88%98%E6%98%8A%E7%84%B6%E5%85%A8%E6%96%B0%E3%80%8A%E6%99%BA%E6%97%8FGQ%E3%80%8B%E5%B0%81%E9%9D%A2%E5%A4%A7%E7%89%87%EF%BC%8C%E6%97%B6%E5%B0%9A%E6%88%90%E7%BB%A9%E4%BA%AE%E7%9C%BC%E8%BF%88%E5%90%91%E6%88%90%E7%86%9F%20-%20%E7%8C%AB%E7%9C%BC%E7%94%B5%E5%BD%B1%20-%20%E4%B8%80%E7%BD%91%E6%89%93%E5%B0%BD%E5%A5%BD%E7%94%B5%E5%BD%B1&amp;pics=http%3A%2F%2Fp1.meituan.net%2Fmovie%2F4172f2069689720d897263cbe63e133c868198.jpg%401500w_1l"
                                            title="分享到QQ空间">QQ空间</a>
                                        <a target="_blank" class="share-icon share-icon-renren" data-act="news-share-renren"
                                            data-val="" href="http://widget.renren.com/dialog/share?resourceUrl=http%3A%2F%2Fmaoyan.com%2Fnews%2F50216&amp;srcUrl=http%3A%2F%2Fmaoyan.com%2Fnews%2F50216&amp;description=%E5%88%98%E6%98%8A%E7%84%B6%E5%85%A8%E6%96%B0%E3%80%8A%E6%99%BA%E6%97%8FGQ%E3%80%8B%E5%B0%81%E9%9D%A2%E5%A4%A7%E7%89%87%EF%BC%8C%E6%97%B6%E5%B0%9A%E6%88%90%E7%BB%A9%E4%BA%AE%E7%9C%BC%E8%BF%88%E5%90%91%E6%88%90%E7%86%9F%20-%20%E7%8C%AB%E7%9C%BC%E7%94%B5%E5%BD%B1%20-%20%E4%B8%80%E7%BD%91%E6%89%93%E5%B0%BD%E5%A5%BD%E7%94%B5%E5%BD%B1&amp;pic=http%3A%2F%2Fp1.meituan.net%2Fmovie%2F4172f2069689720d897263cbe63e133c868198.jpg%401500w_1l"
                                            title="分享到人人网">人人网</a>
                                        <a target="_blank" class="share-icon share-icon-weibo" data-act="news-share-weibo"
                                            data-val="" href="http://v.t.sina.com.cn/share/share.php?appkey=375875218&amp;url=http%3A%2F%2Fmaoyan.com%2Fnews%2F50216&amp;title=%E5%88%98%E6%98%8A%E7%84%B6%E5%85%A8%E6%96%B0%E3%80%8A%E6%99%BA%E6%97%8FGQ%E3%80%8B%E5%B0%81%E9%9D%A2%E5%A4%A7%E7%89%87%EF%BC%8C%E6%97%B6%E5%B0%9A%E6%88%90%E7%BB%A9%E4%BA%AE%E7%9C%BC%E8%BF%88%E5%90%91%E6%88%90%E7%86%9F%20-%20%E7%8C%AB%E7%9C%BC%E7%94%B5%E5%BD%B1%20-%20%E4%B8%80%E7%BD%91%E6%89%93%E5%B0%BD%E5%A5%BD%E7%94%B5%E5%BD%B1&amp;pic=http%3A%2F%2Fp1.meituan.net%2Fmovie%2F4172f2069689720d897263cbe63e133c868198.jpg%401500w_1l"
                                            title="分享到新浪微博">新浪微博</a>
                                        <a target="_blank" class="share-icon share-icon-tweibo" data-act="news-share-tweibo"
                                            data-val="" href="http://v.t.qq.com/share/share.php?appkey=51d04b4824744e71bd1e55baceb42562&amp;url=http%3A%2F%2Fmaoyan.com%2Fnews%2F50216&amp;title=%E5%88%98%E6%98%8A%E7%84%B6%E5%85%A8%E6%96%B0%E3%80%8A%E6%99%BA%E6%97%8FGQ%E3%80%8B%E5%B0%81%E9%9D%A2%E5%A4%A7%E7%89%87%EF%BC%8C%E6%97%B6%E5%B0%9A%E6%88%90%E7%BB%A9%E4%BA%AE%E7%9C%BC%E8%BF%88%E5%90%91%E6%88%90%E7%86%9F%20-%20%E7%8C%AB%E7%9C%BC%E7%94%B5%E5%BD%B1%20-%20%E4%B8%80%E7%BD%91%E6%89%93%E5%B0%BD%E5%A5%BD%E7%94%B5%E5%BD%B1&amp;pic=http%3A%2F%2Fp1.meituan.net%2Fmovie%2F4172f2069689720d897263cbe63e133c868198.jpg%401500w_1l"
                                            title="分享到腾讯微博">腾讯微博</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg-container lg-on">
                    <div class="lg-backdrop in" style="transition-duration: 150ms;"></div>
                    <div class="lg-outer  lg-start-zoom lg-use-css3 lg-css3 lg-slide lg-grab lg-show-after-load lg-pull-caption-up lg-has-thumb lg-can-toggle lg-visible lg-thumb-open lg-hide-items">
                        <div class="lg" style="width:100%; height:100%">
                            <div class="lg-inner" style="transition-timing-function: ease; transition-duration: 600ms;">
                                <div class="lg-item lg-loaded lg-current lg-complete">
                                    <div class="lg-img-wrap"><img class="lg-object lg-image" src="https://p1.meituan.net/movie/4172f2069689720d897263cbe63e133c868198.jpg"></div>
                                </div>
                                <div class="lg-item lg-loaded lg-complete">
                                    <div class="lg-img-wrap"><img class="lg-object lg-image" src="https://p1.meituan.net/movie/429cde3d499f6158a4af61151cddc546437711.jpg"></div>
                                </div>
                                <div class="lg-item"></div>
                                <div class="lg-item"></div>
                                <div class="lg-item"></div>
                                <div class="lg-item"></div>
                                <div class="lg-item"></div>
                                <div class="lg-item"></div>
                                <div class="lg-item"></div>
                                <div class="lg-item"></div>
                            </div>
                            <div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>
                            <div class="lg-actions">
                                <div class="lg-prev lg-icon disabled" disabled="disabled"></div>
                                <div class="lg-next lg-icon"></div>
                            </div>
                            <div class="lg-sub-html">
                                <div>近日，刘昊然最新一组《智族GQ》单人封面大片曝光。镜头下的刘昊然身穿驼色毛衣，发型自在随意十分温柔。在倾撒的阳光里，露出一抹暖人的笑容，瞬间舒适感遍布全身，好想被裹挟进这样的温柔。今年刘昊然的时尚成绩也十分亮眼，大刊封面斩获不少。</div>
                            </div>
                            <div class="lg-thumb-outer lg-grab" style="height: 88px;">
                                <div class="lg-thumb group" style="width: 800px; position: relative; transform: translate3d(0px, 0px, 0px); transition-duration: 600ms;">
                                    <div data-vimeo-id="" class="lg-thumb-item active" style="width:80px; margin-right: 0px"><img
                                            src="https://p1.meituan.net/movie/4172f2069689720d897263cbe63e133c868198.jpg@160w_160h_1e_1c"></div>
                                    <div data-vimeo-id="" class="lg-thumb-item" style="width:80px; margin-right: 0px"><img
                                            src="https://p1.meituan.net/movie/429cde3d499f6158a4af61151cddc546437711.jpg@160w_160h_1e_1c"></div>
                                    <div data-vimeo-id="" class="lg-thumb-item" style="width:80px; margin-right: 0px"><img
                                            src="https://p0.meituan.net/movie/e4b6908b5c270f7b76552aacafa5dc951011158.jpg@160w_160h_1e_1c"></div>
                                    <div data-vimeo-id="" class="lg-thumb-item" style="width:80px; margin-right: 0px"><img
                                            src="https://p0.meituan.net/movie/e54d7404e1d7789b2eed7a35cd78ee4e1003312.jpg@160w_160h_1e_1c"></div>
                                    <div data-vimeo-id="" class="lg-thumb-item" style="width:80px; margin-right: 0px"><img
                                            src="https://p1.meituan.net/movie/2ca62dc5db6d606cf5345ed160d7bfdb898655.jpg@160w_160h_1e_1c"></div>
                                    <div data-vimeo-id="" class="lg-thumb-item" style="width:80px; margin-right: 0px"><img
                                            src="https://p1.meituan.net/movie/071ddf0ac85f963922feed5b087861ec929580.jpg@160w_160h_1e_1c"></div>
                                    <div data-vimeo-id="" class="lg-thumb-item" style="width:80px; margin-right: 0px"><img
                                            src="https://p0.meituan.net/movie/157807efc8852cdb92207f0b4b2b1f4f863324.jpg@160w_160h_1e_1c"></div>
                                    <div data-vimeo-id="" class="lg-thumb-item" style="width:80px; margin-right: 0px"><img
                                            src="https://p1.meituan.net/movie/a9bfb1ff5de48eb62ef154efd05f8155590264.jpg@160w_160h_1e_1c"></div>
                                    <div data-vimeo-id="" class="lg-thumb-item" style="width:80px; margin-right: 0px"><img
                                            src="https://p1.meituan.net/movie/50b5ce49270a40ff694783d00a04c4af854442.jpg@160w_160h_1e_1c"></div>
                                    <div data-vimeo-id="" class="lg-thumb-item" style="width:80px; margin-right: 0px"><img
                                            src="https://p1.meituan.net/movie/a82034569dde05aa93c10ac326c6207f974373.jpg@160w_160h_1e_1c"></div>
                                </div><span class="lg-toogle-thumb lg-icon"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide-right">
                <div class="comment-title">评论（1）</div>
                <ul class="comment-list comment-condensed">
                    <li class="comment-container" data-val="{commentid:1296652}">
                        <div class="portrait-container">
                            <div class="portrait">
                                <img src="https://img.meituan.net/avatar/7f0b13d1f551ed171cde86ba753a634b44072.jpg@100w_100h_1e_1c"
                                    alt="">
                            </div>
                            <i class="level--icon"></i>
                        </div>
                        <div class="comment-main">
                            <div class="main-header clearfix">
                                <div class="user">
                                    <span class="name">LOVEOVERFLY</span>
                                </div>
                                <div class="time" title="1541508290000">
                                    <span title="1541508290000">11-06</span>

                                </div>
                                <div class="approve " data-id="1296652" data-act="comment-approve-click">
                                    <i class="approve-icon"></i><span class="num">1</span>
                                </div>

                            </div>
                            <div class="comment-content">很青春很帅</div>
                        </div>
                    </li>

                </ul>
                <div>
                    <div class="loading-banner">
                        <span class="content ">
                            无更多内容
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"picture-content"
    }
</script>