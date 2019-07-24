<style lang="less">
  @ImageUrl: '../../images';
  .wrapper{
    width: 100%;
    margin: 0 auto;
    .header {
      display: flex;
      width: 1220px;
      height: 110px;
      margin: 0 auto;
      .item {
        height: 110px;
        vertical-align: top;
      }
      .logo {
        width: 262px;
        background: #038DF9;
      }
      .search {
        width: 500px;
        padding: 26px 0 0 0;
        .search-input {
          width: 100%;
          height: 40px;
          overflow: hidden;
          border: 1px solid #3E8BF7;
          border-radius: 100px;
          box-sizing: border-box;
          .search-type {
            color: #3C3C3C;
            font-size: 14px;
            width: 110px;
            height: 38px;
            line-height: 38px;
            float: left;
            letter-spacing: 0;
            text-align: center;
            background: #f1f9ff;
          }
          .search-input-content {
            border: none;
            width: 320px;
            height: 38px;
            line-height: 38px;
            padding: 0 0 0 38px;
            box-sizing: border-box;
            position: relative;
            &:before {
              content: '';
              width: 38px;
              height: 38px;
              background: #000;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              z-index: 1;
              background-image: url('@{ImageUrl}/icon/icon-search.png');
              background-size: 50% 50%;
              background-repeat: no-repeat;
              background-position: center center;
            }
          }
        }
      }
    }
  }
</style>

<template>
<div class="wrapper">
  <div class="header">
    <div class="item logo"></div>
    <div class="item search">
      <div class="search-input">
        <div class="search-type">
          <span>软件开发</span>
          <i></i>
        </div>
        <input class="search-input-content" type="text" placeholder="请输入行业类目, 工作者昵称等">
        <div class="search">搜索</div>
      </div>
      <div class="search-hot"></div>
    </div>
    <div class="item publish"></div>
    <div class="item xcc"></div>
  </div>
  <!-- <router-view></router-view> -->
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  private msg = 'index';
}
</script>
