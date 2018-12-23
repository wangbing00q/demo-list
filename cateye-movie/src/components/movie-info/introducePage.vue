<template>
    <div class="tab-content-container">
        <div class="tab-desc tab-content active" data-val="{tabtype:'desc'}">

            <div class="module">
                <div class="mod-title">
                    <h3>剧情简介</h3>
                </div>
                <div class="mod-content">
                    <span class="dra">{{movieInfo._doc.introduction}}</span>

                </div>
            </div>


            <div class="module">
                <div class="mod-title">
                    <h3>演职人员</h3>
                    <a class="more" href="#celebrity" data-act="all-actor-click">全部</a>
                </div>
                <div class="mod-content">
                    <div class="celebrity-container clearfix">

                        <div class="celebrity-group">
                            <div class="celebrity-type">
                                导演
                            </div>
                            <ul class="celebrity-list clearfix">
                                <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:29844}">
                                    <a href="/films/celebrity/29844" target="_blank" class="portrait">
                                        <img class="default-img" alt="" src="https://p1.meituan.net/moviemachine/231e87d37ebd5e191899e2210619b2dd41945.jpg@128w_170h_1e_1c">
                                    </a>
                                    <div class="info">
                                        <a class="name">
                                            {{movieInfo._doc.director}}
                                        </a>
                                    </div>
                                </li>

                            </ul>
                        </div>


                        <div class="celebrity-group">
                            <div class="celebrity-type">
                                演员
                            </div>
                            <ul class="celebrity-list clearfix">
                                <li class="celebrity actor" v-for="item in movieInfo._doc.have">
                                    <a target="_blank" class="portrait">
                                        <img class="default-img" alt="" src="https://p1.meituan.net/movie/2d2d29aed8ee8aa1768cdf268eb41b0d86228.jpg@128w_170h_1e_1c">
                                    </a>
                                    <div class="info">
                                        <a target="_blank" class="name">
                                            {{item}}
                                        </a>
                                        <br><span class="role">饰：</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>



            <div class="module">
                <div class="mod-title">
                    <h3>图集</h3>
                    <a class="more" href="#img" data-act="all-photo-click">全部</a>
                </div>
                <div class="mod-content">
                    <div class="album clearfix" data-act="movie-img-click">
                        <div class="img1"><img class="default-img" alt="" src="https://p0.meituan.net/movie/32ea372abd1eeaf3302399a02919b63552502.jpg@465w_258h_1e_1c"></div>
                        <div class="img2"><img class="default-img" alt="" src="https://p0.meituan.net/movie/20ed45a2486923c816337d47dbc97bba86831.jpg@126w_126h_1e_1c"></div>
                        <div class="img3"><img class="default-img" alt="" src="https://p1.meituan.net/movie/8aeff5077513598bfe186ea411572acc147302.jpg@126w_126h_1e_1c"></div>
                        <div class="img4"><img class="default-img" alt="" src="https://p0.meituan.net/movie/ae6dbb14583e798f9fce6eb44e649b0d64120.jpg@126w_126h_1e_1c"></div>
                        <div class="img5"><img class="default-img" alt="" src="https://p0.meituan.net/movie/55644670973e61258a84c79e3d951df351099.jpg@126w_126h_1e_1c"></div>
                    </div>

                </div>
            </div>


            <div class="module">
                <div class="mod-title">
                    <h3>热门短评</h3>
                </div>
                <div class="mod-content">
                    <div class="comment-list-container" data-hot="9">

                        <ul>
                            <li class="comment-container " data-val="{commentid:1044022199}">
                                <div class="portrait-container">
                                    <div class="portrait">
                                        <img src="https://img.meituan.net/avatar/f11fc3cf2a069cdadca4bd2794d01b7d3437.jpg@100w_100h_1e_1c"
                                            alt="">
                                    </div>
                                    <i class="level-1-icon"></i>
                                </div>
                                <div class="main">
                                    <div class="main-header clearfix">
                                        <div class="user">
                                            <span class="name">Monster6697</span>

                                            <span class="tag">购</span>
                                        </div>
                                        <div class="time" title="2018-11-09 18:57:10">
                                            <span title="2018-11-09 18:57:10">11-09</span>
                                            <ul class="score-star clearfix" data-score="10">
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                            </ul>

                                        </div>
                                        <div class="approve " data-id="1044022199">
                                            <i data-act="comment-approve-click" class="approve-icon"></i><span class="num">14552</span>
                                        </div>
                                    </div>
                                    <div class="comment-content">电影很好看，但是开场验票才告诉我自带3D眼镜？？？搞得我裸眼看3D看了一个多小时，真的是弟弟行为！</div>
                                </div>
                            </li>
                            <li class="comment-container " data-val="{commentid:1044007530}">
                                <div class="portrait-container">
                                    <div class="portrait">
                                        <img src="https://img.meituan.net/avatar/ad09f3d364dfff39ca8a8a2d1d6af37d26180.jpg@100w_100h_1e_1c"
                                            alt="">
                                    </div>
                                    <i class="level-4-icon"></i>
                                </div>
                                <div class="main">
                                    <div class="main-header clearfix">
                                        <div class="user">
                                            <span class="name">A名犬乐园 （定金选狗）款到发货</span>

                                            <span class="tag">购</span>
                                        </div>
                                        <div class="time" title="2018-11-09 01:47:26">
                                            <span title="2018-11-09 01:47:26">11-09</span>
                                            <ul class="score-star clearfix" data-score="10">
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                            </ul>

                                        </div>
                                        <div class="approve " data-id="1044007530">
                                            <i data-act="comment-approve-click" class="approve-icon"></i><span class="num">8182</span>
                                        </div>
                                    </div>
                                    <div class="comment-content">真的太震撼了，漫威从来没有让我失望，虽然好多地方我感觉像是被删减过许多吓人的画面，但是真的还是太好看，好多地方从头到尾一直在笑，最后还有一点小感人。一直都是震撼幽默的画面。真希望可以能有第二部的上映。这个毒液系列希望像蜘蛛侠钢铁侠一样出一个系列有续集，真的没有看过瘾啊。（人生第一次评价话有点多）总之，大家可以去观看，我是电影迷这一部我给11分，强烈大家去观看！</div>
                                </div>
                            </li>
                            <li class="comment-container " data-val="{commentid:1044012395}">
                                <div class="portrait-container">
                                    <div class="portrait">
                                        <img src="https://img.meituan.net/avatar/ee2701dcb99a3bd3502adc796a8c8da8147586.jpg@100w_100h_1e_1c"
                                            alt="">
                                    </div>
                                    <i class="level-5-icon"></i>
                                </div>
                                <div class="main">
                                    <div class="main-header clearfix">
                                        <div class="user">
                                            <span class="name">草木灰011</span>

                                            <span class="tag">购</span>
                                        </div>
                                        <div class="time" title="2018-11-09 19:02:48">
                                            <span title="2018-11-09 19:02:48">11-09</span>
                                            <ul class="score-star clearfix" data-score="9">
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right "></i>
                                                </li>
                                            </ul>

                                        </div>
                                        <div class="approve " data-id="1044012395">
                                            <i data-act="comment-approve-click" class="approve-icon"></i><span class="num">6025</span>
                                        </div>
                                    </div>
                                    <div class="comment-content">毫无疑问，《毒液》是索尼出品年度最炫酷的(漫威）超级英雄电影之一，还是原来搞笑的配方、无敌的撩妹技能，可爱的汤老师，萌萌的毒液，简直绝配！！！</div>
                                </div>
                            </li>
                            <li class="comment-container " data-val="{commentid:1044022636}">
                                <div class="portrait-container">
                                    <div class="portrait">
                                        <img src="https://img.meituan.net/maoyanuser/4aaa4ce90649d16f28c7e68adbc3a5353328.jpg@100w_100h_1e_1c"
                                            alt="">
                                    </div>
                                    <i class="level-3-icon"></i>
                                </div>
                                <div class="main">
                                    <div class="main-header clearfix">
                                        <div class="user">
                                            <span class="name">宝贝</span>

                                            <span class="tag">购</span>
                                        </div>
                                        <div class="time" title="2018-11-09 09:28:19">
                                            <span title="2018-11-09 09:28:19">11-09</span>
                                            <ul class="score-star clearfix" data-score="10">
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                            </ul>

                                        </div>
                                        <div class="approve " data-id="1044022636">
                                            <i data-act="comment-approve-click" class="approve-icon"></i><span class="num">1470</span>
                                        </div>
                                    </div>
                                    <div class="comment-content">很好看，不错，可惜了买了两张票，自己一个人看完😌 </div>
                                </div>
                            </li>
                            <li class="comment-container " data-val="{commentid:1044011385}">
                                <div class="portrait-container">
                                    <div class="portrait">
                                        <img src="https://img.meituan.net/maoyanuser/ca7e6ffa2202868c81b0383080aa91c75075.jpg@100w_100h_1e_1c"
                                            alt="">
                                    </div>
                                    <i class="level-3-icon"></i>
                                </div>
                                <div class="main">
                                    <div class="main-header clearfix">
                                        <div class="user">
                                            <span class="name">洋洋</span>

                                            <span class="tag">购</span>
                                        </div>
                                        <div class="time" title="2018-11-12 02:51:13">
                                            <span title="2018-11-12 02:51:13">11-12</span>
                                            <ul class="score-star clearfix" data-score="10">
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                            </ul>

                                        </div>
                                        <div class="approve " data-id="1044011385">
                                            <i data-act="comment-approve-click" class="approve-icon"></i><span class="num">1357</span>
                                        </div>
                                    </div>
                                    <div class="comment-content">是真的好看 完全看不过瘾啊 我感觉删减了 真的烦 后面结局真的有点看不懂 说再见了
                                        怎么莫名其妙毒液又回来了 完全看不过瘾啊啊啊啊啊 我不知道最后有没有彩蛋 时间比较急 看完就走了 不知道后面有没有彩蛋
                                        求哪位大神告诉一下谢谢
                                        跳吗? 怂包</div>
                                </div>
                            </li>
                            <li class="comment-container " data-val="{commentid:1044016455}">
                                <div class="portrait-container">
                                    <div class="portrait">
                                        <img src="https://img.meituan.net/avatar/ff337afb52ed7c7e6e110ebf348b9eec51767.jpg@100w_100h_1e_1c"
                                            alt="">
                                    </div>
                                    <i class="level-2-icon"></i>
                                </div>
                                <div class="main">
                                    <div class="main-header clearfix">
                                        <div class="user">
                                            <span class="name">这爱有何不可</span>

                                            <span class="tag">购</span>
                                        </div>
                                        <div class="time" title="2018-11-09 01:52:03">
                                            <span title="2018-11-09 01:52:03">11-09</span>
                                            <ul class="score-star clearfix" data-score="10">
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                            </ul>

                                        </div>
                                        <div class="approve " data-id="1044016455">
                                            <i data-act="comment-approve-click" class="approve-icon"></i><span class="num">1484</span>
                                        </div>
                                    </div>
                                    <div class="comment-content">强烈推荐[强]，漫威第一部反派为主的电影，有笑点，有泪点，有刺激，有炫酷，有励志，不愧是“致命守护者”。人家两人看的是情怀，我一人看的是人生。</div>
                                </div>
                            </li>
                            <li class="comment-container " data-val="{commentid:1044390690}">
                                <div class="portrait-container">
                                    <div class="portrait">
                                        <img src="https://img.meituan.net/avatar/9f0a3023e067699fe45b37cd6b6f4b84120396.jpg@100w_100h_1e_1c"
                                            alt="">
                                    </div>
                                    <i class="level-4-icon"></i>
                                </div>
                                <div class="main">
                                    <div class="main-header clearfix">
                                        <div class="user">
                                            <span class="name">JuliaFanl</span>

                                            <i class="icon cert-person-icon"></i>
                                            <span class="tag">购</span>
                                        </div>
                                        <div class="time" title="2018-11-11 07:57:54">
                                            <span title="2018-11-11 07:57:54">11-11</span>
                                            <ul class="score-star clearfix" data-score="8">
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left "></i><i class="half-star right "></i>
                                                </li>
                                            </ul>

                                        </div>
                                        <div class="approve " data-id="1044390690">
                                            <i data-act="comment-approve-click" class="approve-icon"></i><span class="num">620</span>
                                        </div>
                                    </div>
                                    <div class="comment-content">感觉毒液总是微笑的，有个性，很喜欢。埃迪+毒液，两个loser蜕变成一个winner，特别刺激，尤其是肚子饿那会儿。
                                        画面后半部分感官性强，也搞笑，前半部分没有立刻揭秘，节奏有点慢，片尾曲(英文)好听，开始期待第二部了，也期待埃迪与屠杀的打斗。</div>
                                </div>
                            </li>
                            <li class="comment-container " data-val="{commentid:1044014879}">
                                <div class="portrait-container">
                                    <div class="portrait">
                                        <img src="https://vfile.meituan.net/maoyanuser/1018824700975075423@100w_100h_1e_1c"
                                            alt="">
                                    </div>
                                    <i class="level-4-icon"></i>
                                </div>
                                <div class="main">
                                    <div class="main-header clearfix">
                                        <div class="user">
                                            <span class="name">Misterlonely</span>

                                            <span class="tag">购</span>
                                        </div>
                                        <div class="time" title="2018-11-09 01:53:54">
                                            <span title="2018-11-09 01:53:54">11-09</span>
                                            <ul class="score-star clearfix" data-score="10">
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                            </ul>

                                        </div>
                                        <div class="approve " data-id="1044014879">
                                            <i data-act="comment-approve-click" class="approve-icon"></i><span class="num">1578</span>
                                        </div>
                                    </div>
                                    <div class="comment-content">大眼睛的生物都自带萌的属性，奶凶奶凶的😂</div>
                                </div>
                            </li>
                            <li class="comment-container last" data-val="{commentid:1044010219}">
                                <div class="portrait-container">
                                    <div class="portrait">
                                        <img src="https://img.meituan.net/avatar/b06762d7e824d79dc7bfb5b9fd7b43637694.jpg@100w_100h_1e_1c"
                                            alt="">
                                    </div>
                                    <i class="level-3-icon"></i>
                                </div>
                                <div class="main">
                                    <div class="main-header clearfix">
                                        <div class="user">
                                            <span class="name">生活樂趣</span>

                                            <span class="tag">购</span>
                                        </div>
                                        <div class="time" title="2018-11-09 01:52:08">
                                            <span title="2018-11-09 01:52:08">11-09</span>
                                            <ul class="score-star clearfix" data-score="10">
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                                <li>
                                                    <i class="half-star left active"></i><i class="half-star right active"></i>
                                                </li>
                                            </ul>

                                        </div>
                                        <div class="approve " data-id="1044010219">
                                            <i data-act="comment-approve-click" class="approve-icon"></i><span class="num">1088</span>
                                        </div>
                                    </div>
                                    <div class="comment-content">非常奈斯，喜欢毒液突如其来的骚</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <a class="comment-entry" data-act="comment-no-content-click">写短评</a>

                </div>
            </div>
        </div>
        <div class="tab-celebrity tab-content" data-val="{tabtype:'celebrity'}">
            <div class="celebrity-container">
                <div class="celebrity-group">
                    <div class="celebrity-type">
                        导演
                        <span class="num">（1）</span>
                    </div>
                    <ul class="celebrity-list clearfix">
                        <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:29844}">
                            <a href="/films/celebrity/29844" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/moviemachine/231e87d37ebd5e191899e2210619b2dd41945.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/29844" target="_blank" class="name">
                                    鲁本·弗雷斯彻
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>

                <div class="celebrity-group">
                    <div class="celebrity-type">
                        演员
                        <span class="num">（38）</span>
                    </div>
                    <ul class="celebrity-list clearfix">
                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:3717}">
                            <a href="/films/celebrity/3717" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/2d2d29aed8ee8aa1768cdf268eb41b0d86228.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/3717" target="_blank" class="name">
                                    汤姆·哈迪
                                </a>
                                <br><span class="role">饰：埃迪·布洛克/毒液 Eddie Brock / Venom</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:29041}">
                            <a href="/films/celebrity/29041" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/acdb8cef0659b0cd2f054e8a523a386587293.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/29041" target="_blank" class="name">
                                    米歇尔·威廉姆斯
                                </a>
                                <br><span class="role">饰：安妮·韦英 Anne Weying</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:13334}">
                            <a href="/films/celebrity/13334" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/d55df57993c62121729f217ce13e68ee42770.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/13334" target="_blank" class="name">
                                    里兹·阿迈德
                                </a>
                                <br><span class="role">饰：德雷克博士 Dr. Carlton Drake</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:387965}">
                            <a href="/films/celebrity/387965" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/0342f0120087a81c2edfc234ca271e4a44182.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/387965" target="_blank" class="name">
                                    斯科特·黑兹
                                </a>
                                <br><span class="role">饰：Security Chief Roland Treece</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:159142}">
                            <a href="/films/celebrity/159142" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/a59bad1fbb397cdf5d5c0a306d1e7ec127399.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/159142" target="_blank" class="name">
                                    瑞德·斯科特
                                </a>
                                <br><span class="role">饰：Dr. Dan Lewis</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:6532}">
                            <a href="/films/celebrity/6532" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/f23bcdb6baf0c154036f68865dd05bdb46277.jpeg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/6532" target="_blank" class="name">
                                    珍妮·斯蕾特
                                </a>
                                <br><span class="role">饰：Dr. Dora Skirth</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:8325}">
                            <a href="/films/celebrity/8325" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/6034a441026f02da80d7ef3a4b2e4d5370570.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/8325" target="_blank" class="name">
                                    梅罗拉·沃特斯
                                </a>
                                <br><span class="role">饰：Homeless Woman Maria</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:28691}">
                            <a href="/films/celebrity/28691" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/ca59ff6a7ed5a3927ac4e8aa94026a341360651.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/28691" target="_blank" class="name">
                                    伍迪·哈里森
                                </a>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:2844139}">
                            <a href="/films/celebrity/2844139" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/09dbe870b7c633083fb6e2fd05ab21ca23967.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/2844139" target="_blank" class="name">
                                    米歇尔·李
                                </a>
                                <br><span class="role">饰：Donna Diego</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:29509}">
                            <a href="/films/celebrity/29509" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/e8b9a0e5fd716c5e795f059f797498ec48056.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/29509" target="_blank" class="name">
                                    山姆·麦地那
                                </a>
                                <br><span class="role">饰：Parolee</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:34375}">
                            <a href="/films/celebrity/34375" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/d0f6b1ce5e4e51e9646160b680f5fe1414261.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/34375" target="_blank" class="name">
                                    丹尼·皮尔斯
                                </a>
                                <br><span class="role">饰：Merc Driver</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:2861314}">
                            <a href="/films/celebrity/2861314" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/390839e4c97c59d5aa0452611104991e77933.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/2861314" target="_blank" class="name">
                                    卡茜·亨德利
                                </a>
                                <br><span class="role">饰：Street Pedestrian / Business Woman</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:407711}">
                            <a href="/films/celebrity/407711" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/e76600863705756f427f33a8520a9a5610317.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/407711" target="_blank" class="name">
                                    格雷丝·万
                                </a>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:2867847}">
                            <a href="/films/celebrity/2867847" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/mmdb/3a2061d771d98566d3e5fa5c08c5e0b33685.png@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/2867847" target="_blank" class="name">
                                    Daniela Gaskie
                                </a>
                                <br><span class="role">饰：Scientist / Lab Tech</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:7410}">
                            <a href="/films/celebrity/7410" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/mmdb/3a2061d771d98566d3e5fa5c08c5e0b33685.png@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/7410" target="_blank" class="name">
                                    安东尼·B·哈里斯
                                </a>
                                <br><span class="role">饰：Pedestrian / Restaurant Patron</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:2862591}">
                            <a href="/films/celebrity/2862591" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/3c346f335656bafadb16c52b5dcdc3c810001.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/2862591" target="_blank" class="name">
                                    阿里亚当娜·约瑟夫
                                </a>
                                <br><span class="role">饰：Producer</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:356470}">
                            <a href="/films/celebrity/356470" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/584ecd480011c4886c06f06dad7893f617017.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/356470" target="_blank" class="name">
                                    索佩·阿卢科
                                </a>
                                <br><span class="role">饰：Dr. Rosie Collins</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:2847213}">
                            <a href="/films/celebrity/2847213" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/e42461552f0bff65c36e0099f7812c1a105544.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/2847213" target="_blank" class="name">
                                    霍梅洛·洛佩兹
                                </a>
                                <br><span class="role">饰：Street Pedestrian</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:1110880}">
                            <a href="/films/celebrity/1110880" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/8c5d820b1b7f6eb68d3a88ec47532dc429927.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/1110880" target="_blank" class="name">
                                    詹姆斯·富尔特斯
                                </a>
                                <br><span class="role">饰：Waiter #2</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:1011852}">
                            <a href="/films/celebrity/1011852" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/6e7b3047bf853d2f01262432ba791e25117454.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/1011852" target="_blank" class="name">
                                    杰克·汉森
                                </a>
                                <br><span class="role">饰：Strip Club Patron</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:16079}">
                            <a href="/films/celebrity/16079" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/5b1895b3a49c580b65b1d47d49b842ae68799.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/16079" target="_blank" class="name">
                                    詹姆斯·D·韦斯顿二世
                                </a>
                                <br><span class="role">饰：Pedestrian</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:1995833}">
                            <a href="/films/celebrity/1995833" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/79291e932883d9a39c7ecca4a929507f99842.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/1995833" target="_blank" class="name">
                                    威廉·W·巴伯
                                </a>
                                <br><span class="role">饰：Neighborhood Couple</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:2006471}">
                            <a href="/films/celebrity/2006471" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/723afb150e071f39c59021cd558cbcc0114443.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/2006471" target="_blank" class="name">
                                    玛塞拉·布拉吉奥
                                </a>
                                <br><span class="role">饰：Neighborhood Couple</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:12432}">
                            <a href="/films/celebrity/12432" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/bfa9a2b011ddb0b06d3dd593c4c4a0b231121.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/12432" target="_blank" class="name">
                                    艾蒂安·维克
                                </a>
                                <br><span class="role">饰：Window shopper</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:453758}">
                            <a href="/films/celebrity/453758" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/ac85f64a8727536c3717760dd2964fa77938.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/453758" target="_blank" class="name">
                                    布兰顿·莫拉莱斯
                                </a>
                                <br><span class="role">饰：Officer #1</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:387573}">
                            <a href="/films/celebrity/387573" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/fea43099ede2e2778889ca63c3ac5fc774120.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/387573" target="_blank" class="name">
                                    万恩·姆约维奇
                                </a>
                                <br><span class="role">饰：SF Pedestrian</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:2034618}">
                            <a href="/films/celebrity/2034618" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/378c63892f42193c724a1ac3127f41d266905.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/2034618" target="_blank" class="name">
                                    克里斯蒂安·康佛瑞
                                </a>
                                <br><span class="role">饰：Joey-8 Year Old Boy</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:357129}">
                            <a href="/films/celebrity/357129" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/18d4081532752e107335491a01c22bf868525.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/357129" target="_blank" class="name">
                                    卡特·伯奇
                                </a>
                                <br><span class="role">饰：Scientist / Lab Tech</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:3472}">
                            <a href="/films/celebrity/3472" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/28e21067c26978ec66501d886b284a0b36284.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/3472" target="_blank" class="name">
                                    简·麦克尼尔
                                </a>
                                <br><span class="role">饰：Restaurant Patron</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:54204}">
                            <a href="/films/celebrity/54204" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/21c2584d9c466c12f5f9be2b978f352335561.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/54204" target="_blank" class="name">
                                    约瑟夫·阿梅
                                </a>
                                <br><span class="role">饰：Street Pedestrian</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:385164}">
                            <a href="/films/celebrity/385164" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/bc59089d2feaa30d58a8ac12b0297c2973068.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/385164" target="_blank" class="name">
                                    马丁·巴特斯·布拉德福德
                                </a>
                                <br><span class="role">饰：Volunteer 1</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:2871723}">
                            <a href="/films/celebrity/2871723" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/4467156e720bfdeaaffcdeeb85b3cb3a49499.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/2871723" target="_blank" class="name">
                                    米歇尔·方
                                </a>
                                <br><span class="role">饰：Tech Girl</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:2015406}">
                            <a href="/films/celebrity/2015406" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/e9a0450570013f7afb7d495bf304e5c392430.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/2015406" target="_blank" class="name">
                                    盖尔·甘布尔
                                </a>
                                <br><span class="role">饰：Driver / Street Pedestrian</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:14540}">
                            <a href="/films/celebrity/14540" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/ceb831515bab0977cd86c4680f5e4d8929632.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/14540" target="_blank" class="name">
                                    韦恩·佩雷
                                </a>
                                <br><span class="role">饰：Dr. Emerson</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:1446607}">
                            <a href="/films/celebrity/1446607" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/53cbe4b31695d9d44089d72c3bc41e2796249.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/1446607" target="_blank" class="name">
                                    波士顿·拉什·弗里曼
                                </a>
                                <br><span class="role">饰：Trolly Teen #1</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:2874659}">
                            <a href="/films/celebrity/2874659" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/mmdb/3a2061d771d98566d3e5fa5c08c5e0b33685.png@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/2874659" target="_blank" class="name">
                                    Paul Pillsbury
                                </a>
                                <br><span class="role">饰：Hazmat Crew</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:1037410}">
                            <a href="/films/celebrity/1037410" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/mmdb/3a2061d771d98566d3e5fa5c08c5e0b33685.png@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/1037410" target="_blank" class="name">
                                    艾米丽塔·T·冈萨雷斯
                                </a>
                                <br><span class="role">饰：Villager</span>
                            </div>
                        </li>

                        <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:129800}">
                            <a href="/films/celebrity/129800" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/701adc320a504c39522a99da89cae09720006.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/129800" target="_blank" class="name">
                                    麦克·勃兰特
                                </a>
                                <br><span class="role">饰：Jack the Bartender</span>
                            </div>
                        </li>

                    </ul>
                </div>

                <div class="celebrity-group">
                    <div class="celebrity-type">
                        编剧
                        <span class="num">（6）</span>
                    </div>
                    <ul class="celebrity-list clearfix">
                        <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:502032}">
                            <a href="/films/celebrity/502032" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/8d1e371d023f0548b21bff5fa8ad9a6128439.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/502032" target="_blank" class="name">
                                    丹特·哈珀
                                </a>
                            </div>
                        </li>

                        <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:208139}">
                            <a href="/films/celebrity/208139" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/d4cf0181f494bfe079e5b75672d7904d10231.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/208139" target="_blank" class="name">
                                    托德·麦克法兰
                                </a>
                            </div>
                        </li>

                        <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:71088}">
                            <a href="/films/celebrity/71088" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p0.meituan.net/movie/740c86b0fe7601e1a62da148ed21c8ad61360.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/71088" target="_blank" class="name">
                                    斯科特·罗森伯格
                                </a>
                            </div>
                        </li>

                        <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:502094}">
                            <a href="/films/celebrity/502094" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/ce726a22374211a1c776fbd40d73c7b09567.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/502094" target="_blank" class="name">
                                    杰夫·皮克纳
                                </a>
                            </div>
                        </li>

                        <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:221274}">
                            <a href="/films/celebrity/221274" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/movie/f70b9a8e84b14d8cf00aebcd35aea52f13144.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/221274" target="_blank" class="name">
                                    凯莉·马塞尔
                                </a>
                            </div>
                        </li>

                        <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:724256}">
                            <a href="/films/celebrity/724256" target="_blank" class="portrait">
                                <img class="default-img" data-src="https://p1.meituan.net/moviemachine/42c053d8b9396b307b24f5ccf9bcc914176425.jpg@128w_170h_1e_1c"
                                    alt="">
                            </a>
                            <div class="info">
                                <a href="/films/celebrity/724256" target="_blank" class="name">
                                    威尔·比尔
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
        <div class="tab-award tab-content" data-val="{tabtype:'award'}">
        </div>
        <div class="tab-img tab-content" data-val="{tabtype:'img'}">
            <ul class="clearfix">

                <li>
                    <img class="default-img" data-act="movie-img-click" data-src="https://p0.meituan.net/movie/4f4bb907838e8d1ac01c39f83ba28569229997.jpg@106w_106h_1e_1c"
                        alt="">
                </li>
                <li>
                    <img class="default-img" data-act="movie-img-click" data-src="https://p1.meituan.net/movie/b9883e2ee20839beb31797b1cae4ad2e164729.jpg@106w_106h_1e_1c"
                        alt="">
                </li>
                <li>
                    <img class="default-img" data-act="movie-img-click" data-src="https://p0.meituan.net/movie/53d6dd8192754d715defde6fee873dae189745.jpg@106w_106h_1e_1c"
                        alt="">
                </li>
                <li>
                    <img class="default-img" data-act="movie-img-click" data-src="https://p1.meituan.net/movie/9e5db48dabc048b87e6ad44b93b6f8e846441.jpg@106w_106h_1e_1c"
                        alt="">
                </li>
                <li>
                    <img class="default-img" data-act="movie-img-click" data-src="https://p1.meituan.net/movie/1ab428cc226bea4265c1daf30bfafc4d78789.jpg@106w_106h_1e_1c"
                        alt="">
                </li>
                <li>
                    <img class="default-img" data-act="movie-img-click" data-src="https://p1.meituan.net/movie/38980146d29cf0d5dd7aae33a0fab484192741.jpg@106w_106h_1e_1c"
                        alt="">
                </li>
                <li>
                    <img class="default-img" data-act="movie-img-click" data-src="https://p0.meituan.net/movie/1f88a72ddbdf0e693445bda4ff705527442124.jpg@106w_106h_1e_1c"
                        alt="">
                </li>
                <li>
                    <img class="default-img" data-act="movie-img-click" data-src="https://p0.meituan.net/movie/d7374b08d1353f35d3ff60f4d7b60f11308113.jpg@106w_106h_1e_1c"
                        alt="">
                </li>
                <li>
                    <img class="default-img" data-act="movie-img-click" data-src="https://p1.meituan.net/movie/00a68f065d44b8f9a7fb05da5979dbbd187960.jpg@106w_106h_1e_1c"
                        alt="">
                </li>
                <li>
                    <img class="default-img" data-act="movie-img-click" data-src="https://p0.meituan.net/movie/e25291ba242bfd981edd5fc7f10c58f2134966.jpg@106w_106h_1e_1c"
                        alt="">
                </li>
                <li>
                    <img class="default-img" data-act="movie-img-click" data-src="https://p0.meituan.net/mmdb/e2a30311fd9b87a3346a83d50fd7bf8b685214.jpg@106w_106h_1e_1c"
                        alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'introducePage',
        computed:{
            ...mapState(['movieInfo'])
        }
    }
</script>