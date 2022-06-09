<template>
  <div class="login-container">
    <el-form class="login-form" :model="loginForm" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <!-- <el-icon>
            <i-ep-avatar />
          </el-icon> -->

          <!-- <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon> -->
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="username"
          name="username"
          tabindex="1"
          autocomplete="on"
          type="text"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="lock"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.password"
          placeholder="password"
          name="password"
          :type="passwordType"
          tabindex="2"
          autocomplete="on"
        />
        <span class="show-pwd" @click="onChangePwdType">
          <svg-icon :icon="passwordType === 'password' ? 'eye-close' : 'eye-open'"></svg-icon>
        </span>
      </el-form-item>

      <el-button type="primary" style="width: 100%; margin-bottom: 10px">登录</el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import type { FormRules } from 'element-plus'
import { validatePassword } from '@/utils/rules'

const loginForm = ref({
  username: 'super-admin',
  password: '123456',
})

// 验证规则
const loginRules = ref<FormRules>({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空',
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword(),
    },
  ],
})

// 显示和隐藏密码
const passwordType = ref('password')
const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #899aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    padding: 160px 25px 0;
    margin: 0 auto;
    overflow: hidden;

    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    :deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 85%;

      .el-input__wrapper {
        width: 100%;
        height: 100%;
        background: transparent;
        // 🚨 element 使用的 box-shadow 生成的border样式
        box-shadow: none;
      }

      input {
        border: none;
        background: transparent;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        caret-color: $cursor;
        width: 100%;
      }
    }
  }

  .svg-container {
    padding: 10px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
