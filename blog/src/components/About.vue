<template>
  <div>
    <ul class="clearfix course-list">
      <li class="left" v-for="(item,index) in gradeClassfy.primary.grade" :key="index">
        <a href="#">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function () {
    return {
      items: [{ name: "Foo" }, { name: "Bar" }],
    };
  },
  methods: {},
};
</script>

<style>
</style>
