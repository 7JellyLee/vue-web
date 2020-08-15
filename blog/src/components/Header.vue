<template>
  <div>
    <div class="logo">
      <a href="index.html">
        <img class src="../assets/images/logo.png" alt />
        <h2>Dune</h2>
      </a>
    </div>

    <div class="menu_icon" id="mynav">
      <p onclick="openNav()">&#9776;</p>
    </div>

    <div id="mySidenav" class="sidenav">
      <div class="sidenav_left">
        <!--     Logo start  -->
        <div class="logo_over hidden-xs">
          <a href="index.html">
            <img src="images/logo.png" alt />
            <h2>Dune</h2>
          </a>
        </div>
        <!--     Logo end  -->
        <!--   menu start  -->
        <ul id="menu">
          <li data-menuanchor="page1" class="active">
            <a onclick="closeNav()" href="#page1">HOME</a>
          </li>
          <li data-menuanchor="page2">
            <a onclick="closeNav()" href="#page2">PORTFOLIO</a>
          </li>
          <li data-menuanchor="page3">
            <a onclick="closeNav()" href="#page3">ABOUT</a>
          </li>
          <li data-menuanchor="page4">
            <a onclick="closeNav()" href="#page4">SERVICES</a>
          </li>
          <li data-menuanchor="page5">
            <a onclick="closeNav()" href="#page5">PRICES</a>
          </li>
          <li data-menuanchor="page6">
            <a onclick="closeNav()" href="#page6">BLOG</a>
          </li>
          <li data-menuanchor="page7">
            <a onclick="closeNav()" href="#page7">CONACT</a>
          </li>
        </ul>
        <!--   menu end  -->
        <div class="menu_close">
          <a href="javascript:void(0)" class="closebtn menu_icon" onclick="closeNav()">&times; Close</a>
        </div>
      </div>
      <div class="sidenav_right hidden-xs">
        <div class="slogan_over">
          <h3>Dune Photo Studio</h3>
        </div>
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
</style>
