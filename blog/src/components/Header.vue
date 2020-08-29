<template>
  <div>
    <div class="menu_icon" id="mynav">
      <p onclick="openNav()">&#9776;</p>
    </div>

    <div id="mySidenav" class="sidenav">
      <div class="sidenav_left">
        <!--     Logo start  -->
        <div class="logo_over hidden-xs">
          <a href="index.html">
            <img src="../assets/images/logo.png" alt />
            <h2>Jelly Lee</h2>
          </a>
        </div>
        <!--     Logo end  -->
        <!--   menu start  -->
        <ul id="menu">
          <!-- <li class="menu-item active" v-for="(item, index) in list" :key="item.title">
            <router-link
              :class="{'menu-item-select' :itemCheck==index}"
              :to="item.path"
              @click.native="tabClass(index)"
            >{{item.title}}</router-link>
          </li>-->
          <li data-menuanchor="page1" class="active">
            <a onclick="closeNav()" href="/Home">主页</a>
          </li>
          <li data-menuanchor="page3">
            <a onclick="closeNav()" href="#/Section1">技术博客</a>
          </li>
          <li data-menuanchor="page4">
            <a onclick="closeNav()" href="#/Section2">论文进度</a>
          </li>
          <li data-menuanchor="page5">
            <a onclick="closeNav()" href="#/Section3">生活方式</a>
          </li>
          <li data-menuanchor="page6">
            <a onclick="closeNav()" href="#/Section4">摄影集</a>
          </li>
          <li data-menuanchor="page7">
            <a onclick="closeNav()" href="#/Section5">关于我</a>
          </li>
          <li data-menuanchor="page7">
            <a onclick="closeNav()" href="#/Section6">页面6</a>
          </li>
          <li data-menuanchor="page7">
            <a onclick="closeNav()" href="#/Section7">页面7</a>
          </li>
          <li data-menuanchor="page2">
            <a onclick="closeNav()" href="#/About">ABOUT</a>
          </li>
        </ul>
        <!--   menu end  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    list: [
      {
        title: "hhh",
        path: "#/Section1",
      },
    ];
  },
};
</script>

<style>
.sidenav {
  width: 112px;
  display: inline;
}
</style>
