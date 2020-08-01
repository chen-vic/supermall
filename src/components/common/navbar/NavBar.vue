<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
</script>

<style>
  .nav-bar {
    display: flex;
    line-height: 2.75rem;
    height: 2.75rem;
    text-align: center;
    box-shadow: 0 0.0625rem 0.0625rem rgba(100,100,100,0.1);
  }

 .left ,.right {
    width: 3.75rem;

  }


  .center {
    flex: 1;

  }

</style>
