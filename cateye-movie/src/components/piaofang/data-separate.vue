<template>
        <div class="body-list">
            <table class="body-tablei">
                <thead>
                    <tr>
                        <th class="body-movie-th">
                            <div><span>影片</span><span class="mn"> (点击 <span class="small-star"><img src="../../assets/images/xing.png"/></span>
                                    优先展示)</span></div>
                        </th>
                        <th>
                            <div class="theader">分账票房</div>
                        </th>
                        <th>
                            <div class="theader">票房占比</div>
                        </th>
                        <th>
                            <div class="theader">排片场次</div>
                        </th>
                        <th>
                            <div class="theader">排片占比</div>
                        </th>
                        <th>
                            <div class="theader">场均人次</div>
                        </th>
                        <th>
                            <div class="theader">上座率</div>
                        </th>
                    </tr>
                </thead>
            </table>
            <div class="body-container">
                <div class="body-movielist">
                    <table class="body-table">
                    <tbody>
                            <data-one v-for="item in 28" :key='item'></data-one>
                            </tr> 
                        </tbody> 
                    </table>
                </div>
            </div>
        </div>
    </template>
<script>
     import dataOne from "./data-one"
   export default{
                  name:"data-separate",
                  components:{
                   dataOne
                  }
              }
   
   </script>