<template>
  <div id="app">
    <router-view name="header" class="col-md-1 col-sm-1 col-xs-12 header nopadding text-center" />
    <router-view name="main" class="col-md-11 col-sm-11 col-xs-12 content nopadding" />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  color: #333;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.025em;
  line-height: 2.1428;
}
</style>
