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
            <h2>Dune</h2>
          </a>
        </div>
        <!--     Logo end  -->
        <!--   menu start  -->
        <ul id="menu">
          <li data-menuanchor="page1" class="active">
            <a onclick="closeNav()" href="/Home">主页</a>
          </li>
          <li data-menuanchor="page2">
            <a onclick="closeNav()" href="#/About">ABOUT</a>
          </li>
          <li data-menuanchor="page3">
            <a onclick="closeNav()" href="#/Section1">页面1</a>
          </li>
          <li data-menuanchor="page4">
            <a onclick="closeNav()" href="#/Section2">页面2</a>
          </li>
          <li data-menuanchor="page5">
            <a onclick="closeNav()" href="#/Section3">页面3</a>
          </li>
          <li data-menuanchor="page6">
            <a onclick="closeNav()" href="#/Section4">页面4</a>
          </li>
          <li data-menuanchor="page7">
            <a onclick="closeNav()" href="#/Section5">页面5</a>
          </li>
          <li data-menuanchor="page7">
            <a onclick="closeNav()" href="#/Section6">页面6</a>
          </li>
          <li data-menuanchor="page7">
            <a onclick="closeNav()" href="#/Section7">页面7</a>
          </li>
          <li data-menuanchor="page2">
            <a onclick="closeNav()" href="/about">关于</a>
          </li>
        </ul>
        <!--   menu end  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.sidenav {
  width: 112px;
  display: inline;
}
</style>
