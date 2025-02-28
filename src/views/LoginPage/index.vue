<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeName = ref('register')
//登录和注册表单
const loginForm = ref()
const registerForm = ref()

const loginData = reactive({
  account: null,
  password: ''
})

const registerData = reactive({
  account: null,
  password: '',
  repassword: ''
})

const rules = {
  account: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 10, message: '用户名必须是5-10位的字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位的非空字符',
      trigger: 'blur'
    }
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15的非空字符',
      trigger: 'blur'
    },
    {
      validator: (rule, value, callback) => {
        if (value !== registerData.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

const login = () => {
  loginForm.value.validate(async (valid) => {
    if (valid) {
      try {
        const response = await axios.post('/api/login', loginData);
        console.log('登录成功:', response);
        ElMessage.success(response.message || '登录成功'); // 使用 ElMessage 显示成功提示
        router.push('/menu');
      } catch (error) {
        console.error('登录失败:', error);
        ElMessage.error('登录失败，请检查用户名和密码'); // 使用 ElMessage 显示错误提示
      }
    } else {
      console.log('登录表单验证失败');
      ElMessage.warning('表单验证失败，请检查输入信息'); // 表单验证失败提示
    }
  });
};

const register = () => {
  registerForm.value.validate(async (valid) => {
    if (valid) {
      try {
        const response = await axios.post('/api/register', registerData);
        ElMessage.success(response.message || '注册成功');
        activeName.value = 'login'; // 确保使用 .value 赋值响应式变量
      } catch (error) {
        ElMessage.error('注册失败，请检查输入信息');
      }
    } else {
      ElMessage.warning('表单验证失败，请检查输入信息');
    }
  });
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-wrapped">
        <div class="header-content">
          <h3>后台管理系统</h3>
          <span class="welcome">欢迎登录</span>
        </div>
      </el-header>
      <el-main>
        <div class="login-wrapped">
          <el-card class="box-card">
            <el-tabs v-model="activeName" class="demo-tabs" :stretch="true" name="login">
              <el-tab-pane label="登录" name="login">
                <el-form class="login-form" :model="loginData" :rules="rules" ref="loginForm">
                  <el-form-item label="账号" prop="account">
                    <el-input v-model="loginData.account" placeholder="请输入账号"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password">
                    <el-input v-model="loginData.password" type="password" placeholder="请输入密码" show-password></el-input>
                  </el-form-item>
                  <div class="footer-wrapped">
                    <div class="footer-button">
                      <el-button type="primary" class="login-button" @click="login">登录</el-button>
                    </div>
                    <div class="footer-go-register">
                      还没有账号?<span class="go-register" @click="activeName = 'register'">去注册</span>
                    </div>
                  </div>
                </el-form>
              </el-tab-pane>

              <el-tab-pane label="注册" name="register">
                <el-form class="login-form" :model="registerData" :rules="rules" ref="registerForm">
                  <el-form-item label="账号" prop="account">
                    <el-input v-model="registerData.account" placeholder="账号长度5-10位"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password">
                    <el-input v-model="registerData.password" type="password" placeholder="6-15位非空字符"
                      show-password></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="repassword">
                    <el-input v-model="registerData.repassword" type="password" placeholder="请再次输入密码"
                      show-password></el-input>
                  </el-form-item>
                  <div class="footer-button">
                    <el-button type="primary" class="login-button" @click="register">注册</el-button>
                  </div>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-main>
      <el-footer class="footer-wrapped">
        <div class="footer-content">
          <div class="title">
            <span>成都锦城学院</span> |
            <span>成都锦城学院</span> |
            <span>成都锦城学院</span> |
            <span>成都锦城学院</span>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.header-wrapped {
  .header-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .welcome {
      font-size: 13px;
    }
  }
}

.el-main {
  background-image: url(@/assets/code.png);
  background-size: cover;
  height: 600px;
  padding: 0;

  .login-wrapped {
    width: 1200px;
    height: 600px;
    margin: 0 auto;

    .box-card {
      width: 350px;
      height: 375px;
      float: right;
      position: relative;
      top: 14%;

      .login-form {
        .footer-wrapped {
          display: flex;
          flex-direction: column;

          .footer-go-register {
            font-size: 12px;
            margin: 12px 0;
            display: flex;
            justify-content: center;

            .go-register {
              color: #409eff;
              cursor: pointer;
              margin-left: 5px;
            }
          }
        }

        .footer-button {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}

.footer-wrapped {
  margin-top: 8px;

  .footer-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      color: #666;

      span {
        color: #666;
        font-size: 12px;
        padding: 0 5px;
      }
    }
  }
}

.el-form {
  margin-top: 30px;
}

:deep(.el-tabs__item) {
  color: #333;
  font-size: 14px;
}

:deep(.el-input__inner) {
  height: 40px;
}

:deep(.el-form-item__label) {
  height: 40px;
  line-height: 40px;
}

:deep(.el-button) {
  width: 300px;
  height: 45px;
  font-size: 16px;
}
</style>