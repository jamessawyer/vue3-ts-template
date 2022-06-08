<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon>
            <i-ep-avatar />
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" tabindex="1" autocomplete="on" type="text" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <i-ep-avatar />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password" tabindex="2" autocomplete="on" type="text" />
      </el-form-item>
      <el-button type="primary" style="width: 100%; margin-bottom: 10px">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
