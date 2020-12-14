<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

<!--    这里swiper越写越长，不好，封装到homeSwiper里-->
<!--    <swiper>-->
<!--      <swiper-item v-for="item in banners">-->
<!--        <a :href="item.link">-->
<!--          <img :src="item.image">-->
<!--        </a>-->
<!--      </swiper-item>-->
<!--    </swiper>-->
    <home-swiper :banners="banners"/>
    <recommend-views :recommends="recommend"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  // swiper的东西放到views/home/childComps
  // import Swiper from "../../components/common/swiper/Swiper";
  // import SwiperItem from "../../components/common/swiper/SwiperItem";
  // import {Swiper, SwiperItem} from "components/common/swiper"
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendViews from "./childComps/RecommendViews";


  import {getHomeMultidata} from "../../network/home";



  export default {
    name: "Home",
    components:{
      NavBar,
      // Swiper,
      // SwiperItem,
      HomeSwiper,
      RecommendViews,
    },
    data(){
      return {
        // result: null
        banners: [],
        recommend: [],

      }
    },
    created(){
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        // this.result = res
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
