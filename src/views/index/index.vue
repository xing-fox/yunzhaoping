<style lang="less">
  @ImageUrl: '../../images';
  .wrapper{
    font-size: 0;
    width: 100%;
    margin: 0 auto;
    .wrapper-header {
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
        margin: 0 0 0 16px;
        padding: 26px 0 0 0;
        .search-input {
          display: flex;
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
            letter-spacing: 0;
            text-align: center;
            background: #f1f9ff;
          }
          .search-input-content {
            flex: 1;
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
          .search-button {
            color: #fff;
            font-size: 16px;
            letter-spacing: 2.46px;
            width: 80px;
            height: 38px;
            line-height: 38px;
            text-align: center;
            background-image: linear-gradient(90deg, #23B3FF 0%, #0089F9 100%);
          }
        }
        .search-hot {
          color: #3c3c3c;
          font-size: 14px;
          margin: 9px 0 0 0;
          li {
            display: inline-block;
            height: 19px;
            line-height: 19px;
            margin: 0 0 0 14px;
            &:nth-child(1) {
              color: #9f9f9f;
              margin: 0 0 0 20px;
            }
          }
        }
      }
      .publish {
        display: flex;
        color: #3c3c3c;
        font-size: 16px;
        letter-spacing: 0;
        width: 220px;
        height: 40px;
        line-height: 38px;
        margin: 26px 0 0 24px;
        border-radius: 20px;
        text-align: center;
        border: 1px solid #0089F9;
        box-sizing: border-box;
        box-shadow: 0 2px 12px 0 rgba(0,137,249,0.19);
        position: relative;
        &:before {
          content: '';
          width: 1px;
          height: 20px;
          background: #0089F9;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto auto;
        }
        .publish-item {
          flex: 1;
        }
      }
      .xcc {
        width: 68px;
        margin: 13px 0 0 45px;
        text-align: center;
        img {
          display: inline-block;
          width: 68px;
          height: 68px;
          background: #0089F9;
        }
        p {
          color: #0089F9;
          font-size: 12px;
          margin: 6px 0 0 0;
        }
      }
    }
    .wrapper-nav {
      width: 100%;
      height: 42px;
      background-image: linear-gradient(90deg, #23B3FF 0%, #0089F9 100%);
      .nav-content {
        display: flex;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        width: 1220px;
        line-height: 42px;
        margin: 0 auto;
        .title {
          width: 262px;
          text-align: center;
          letter-spacing: 1px;
          background: #038DF9;
          i {
            display: inline-block;
            width: 42px;
            height: 42px;
            background-image: url('@{ImageUrl}/icon/icon-sort.png');
            background-size: 30% 30%;
            background-repeat: no-repeat;
            background-position: center center;
            vertical-align: top;
          }
          span {
            margin: 0 0 0 -8px;
          }
        }
        ul {
          display: flex;
          margin: 0;
          padding: 0 0 0 15px;
          &.nav-type {
            position: relative;
            &:before {
              content: '';
              width: 1px;
              height: 20px;
              background-color: rgba(255, 255, 255, .5);
              position: absolute;
              top: 0;
              left: -7px;
              bottom: 0;
              margin: auto 0;
            }
            li:nth-last-child(1) {
              margin: 0;
            }
          }
          &.nav-list {
            li {
              i {
                display: inline-block;
                width: 10px;
                height: 5px;
                background-image: url('@{ImageUrl}/icon/icon-arrow-nav.png');
                background-size: 100% 100%;
                background-position: center center;
                vertical-align: middle;
              }
            }
          }
          li {
            margin: 0 28px 0 0;
            cursor: pointer;
          }
        }
      }
    }
    .wrapper-main {
      display: flex;
      width: 1220px;
      margin: 0 auto;
      .main-menu-list {
        width: 262px;
        min-height: 612px;
        box-shadow: 0 3px 20px 0 rgba(3, 55, 127, .1);
        ul {
          li {
            color: #3c3c3c;
            width: 262px;
            padding: 13px 0 14px 21px;
            box-sizing: border-box;
            &.active{
              background: #FFFFFF;
              box-shadow: 0 0 20px 0 rgba(3, 55, 127,.1);
              position: relative;
              &:before {
                content: '';
                width: 4px;
                height: 22px;
                border-radius: 0 4px 4px 0;
                background: #0089F9;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                margin: auto 0;
              }
            }
            .title {
              font-size: 16px;
              font-weight: bold;
              line-height: 21px;
              letter-spacing: 1px;
            }
            .content {
              font-size: 14px;
              line-height: 19px;
              margin: 7px 0 0 0;
              letter-spacing: .88px;
              span {
                margin: 0 18px 0 0;
                &.on {
                  color: #0089F9;
                }
              }
            }
          }
        }
      }
      .main-banner {
        width: 680px;
        height: 435px;
        margin: 18px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .main-login-server {
        width: 244px;
        margin: 18px 0 0 0;
        .login {
          width: 244px;
          height: 164px;
          padding: 16px;
          text-align: center;
          box-sizing: border-box;
          position: relative;
          &:before {
            content: '';
            opacity: .1;
            width: 32px;
            height: 30px;
            background: #23B3FF;
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
          }
          &:after {
            content: '';
            opacity: .1;
            width: 100%;
            height: 55px;
            background-image: linear-gradient(180deg, #fff 0%, #23B3FF 90%, #0089F9 100%);
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
          }
          .login-header {
            display: inline-block;
            width: 72px;
            height: 72px;
            border-radius: 36px;
            background: #038DF9;
          }
          .login-intro {
            color: #9f9f9f;
            font-size: 14px;
            line-height: 19px;
            margin: 7px 0;
          }
          .login-button {
            width: 100%;
            text-align: center;
            li {
              display: inline-block;
              font-size: 16px;
              cursor: pointer;
              width: 62px;
              height: 30px;
              line-height: 30px;
              border-radius: 15px;
              box-sizing: border-box;
              &.login-btn {
                color: #fff;
                margin: 0 13px 0 0;
                background-image: linear-gradient(90deg, #0089F9 7%, #23B3FF 95%);
              }
              &.register-btn {
                color: #0089F9;
                border: 1px solid #0089F9;
              }
            }
          }
        }
        .rules {
          width: 100%;
          background: #FFFFFF;
          box-shadow: 0 2px 20px 0 rgba(62,139,247,0.10);
          .title {
            display: flex;
            color: #00000B;
            font-size: 16px;
            width: 100%;
            height: 40px;
            line-height: 40px;
            li {
              flex: 1;
              text-align: center;
              position: relative;
              &.active:after {
                content: '';
                width: 18px;
                height: 3px;
                border-radius: 1.5px;
                background-image: linear-gradient(90deg, #0089F9 7%, #23B3FF 95%);
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0 auto;
              }
            }
          }
          .list {
            width: 100%;
            li {
              color: #3c3c3c;
              font-size: 14px;
              width: 100%;
              height: 20px;
              line-height: 20px;
              padding: 0 11px 0 21px;
              margin: 14px 0 0 0;
              white-space:nowrap;
              text-overflow:ellipsis;
              overflow:hidden;
              box-sizing: border-box;
              &.active {
                color: #0089F9;
                .label {
                  display: inline-block;
                  color: #0089F9;
                  font-size: 12px;
                  width: 36px;
                  height: 20px;
                  border-radius: 4px;
                  margin: 0 8px 0 0;
                  text-align: center;
                  background: #D8EEFF;
                }
              }
            }
          }
          .more {
            color: #9f9f9f;
            font-size: 14px;
            opacity: .5;
            width: 56px;
            height: 19px;
            line-height: 19px;
            margin: 27px auto 0;
            padding: 0 0 11px 0;
            text-align: center;
          }
        }
        .server {
          width: 100%;
          margin: 6px 0 0 0;
          padding: 11px 20px 0 20px;
          box-sizing: border-box;
          box-shadow: 0 2px 20px 0 rgba(62,139,247,0.10);
          .title {
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            width: 204px;
            height: 50px;
            line-height: 50px;
            border-radius: 6px;
            background-image: linear-gradient(90deg, #0089F9 7%, #23B3FF 95%);
            img {
              display: inline-block;
              width: 40px;
              height: 40px;
              margin: 0 8px 0 10px;
            }
          }
          .input-box {
            width: 204px;
            margin: 8px 0 0 0;
            input {
              border: none;
              width: 100%;
              height: 32px;
              line-height: 32px;
              margin: 0 0 1px 0;
              padding: 0 0 0 9px;
              box-sizing: border-box;
            }
          }
          .server-but {
            color: #fff;
            font-size: 16px;
            width: 108px;
            height: 34px;
            line-height: 34px;
            border-radius: 17px;
            margin: 0 auto;
            text-align: center;
            background-image: linear-gradient(90deg, #0089F9 7%, #23B3FF 95%);
          }
        }
      }
    }
  }
</style>

<template>
<div class="wrapper">
  <div class="wrapper-header">
    <div class="item logo"></div>
    <div class="item search">
      <div class="search-input">
        <div class="search-type">
          <span>软件开发</span>
          <i></i>
        </div>
        <input class="search-input-content" type="text" placeholder="请输入行业类目, 工作者昵称等">
        <div class="search-button">搜索</div>
      </div>
      <ul class="search-hot">
        <li>热门推荐：</li>
        <li>软件开发</li>
        <li>游戏开发</li>
      </ul>
    </div>
    <div class="item publish">
      <div class="publish-item">
        <span>发布招聘</span>
      </div>
      <div class="publish-item">
        <span>发布需求</span>
      </div>
    </div>
    <div class="item xcc">
      <img src="" alt="">
      <p>手机云雇佣</p>
    </div>
  </div>
  <div class="wrapper-nav">
    <div class="nav-content">
      <div class="title">
        <i></i>
        <span>所有远程工作职业分类</span>
      </div>
      <ul class="nav-list">
        <li v-for="(item, index) in courseData" :key="index">
          {{ item }}
          <i v-if="index == 0"/>
        </li>
      </ul>
      <ul class="nav-type">
        <li v-for="(item, index) in navData" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
  <div class="wrapper-main">
    <div class="main-menu-list">
      <ul>
        <li class="active">
          <div class="title">
            <span>设计美工</span>
          </div>
          <div class="content">
            <span class="on">文案撰写</span>
            <span>文案撰写</span>
            <span>文案撰写</span>
          </div>
        </li>
        <li>
          <div class="title">
            <span>设计美工</span>
          </div>
          <div class="content">
            <span>文案撰写</span>
            <span>文案撰写</span>
            <span>文案撰写</span>
          </div>
        </li>
        <li>
          <div class="title">
            <span>设计美工</span>
          </div>
          <div class="content">
            <span>文案撰写</span>
            <span>文案撰写</span>
            <span>文案撰写</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="main-banner">
      <div class="swipper-content">
        <img src="../../images/img/banner.png" alt="">
      </div>
      <ul class="banner-brand">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="main-login-server">
      <div class="login">
        <img src="" alt="" class="login-header">
        <div class="login-intro">
          Hi! 欢迎来到云雇佣
        </div>
        <ul class="login-button">
          <li class="login-btn">登录</li>
          <li class="register-btn">注册</li>
        </ul>
      </div>
      <div class="rules">
        <ul class="title">
          <li class="active">公告</li>
          <li>规则</li>
          <li>资讯</li>
        </ul>
        <ul class="list">
          <li class="active">
            <span class="label">推荐</span>
            <span>关闭工分购买首焦广告专门位置</span>
          </li>
          <li>
            <!-- <span class="label">推荐</span> -->
            <span>关闭工分购买首焦广告专门位置</span>
          </li>
          <li>
            <!-- <span class="label">推荐</span> -->
            <span>关闭工分购买首焦广告专门位置</span>
          </li>
        </ul>
        <div class="more">查看更多</div>
      </div>
      <div class="server">
        <div class="title">
          <img src="../../images/img/server.png" alt="">
          <span>您的专属客服</span>
        </div>
        <div class="input-box">
          <input type="text" placeholder="您的姓名">
          <input type="text" placeholder="您的联系方式">
          <input type="text" placeholder="请输入您要咨询的问题或需求">
        </div>
        <div class="server-but">
          <span>立即提交</span>
        </div>
      </div>
    </div>
  </div>
  <!-- <router-view></router-view> -->
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  private msg = 'index';
  private courseData = ['行业解决方案', '闪电雇佣', '企业定制', '团队直佣', '云雇基地', '云实习'];
  private navData = ['云管家', '云财税', '学习中心', '新人专区'];
}
</script>
