<template>
  <div class="form-signin">
    <el-button keep-alive icon="el-icon-back" circle @click="routerBack"></el-button>
    <div class="text-center mb-4">
      <img
        class="mb-4"
        src="https://getbootstrap.net/example/assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">咋哇咋哇,欢迎注册</h1>
      <p>
        Build form controls with floating labels via the
        <code>:placeholder-shown</code> pseudo-element.
        <a href="https://caniuse.com/#feat=css-placeholder-shown"
          >Works in latest Chrome, Safari, and Firefox.</a
        >
      </p>
    </div>

    <div class="form-label-group">
      <input
        autocomplete="off"
        type="text"
        id="inputEmail"
        class="form-control"
        placeholder="手机号码"
        required=""
        autofocus=""
        v-model="input.mobile"
      />
    </div>

    <div class="form-label-group">
      <div style="margin-top: 15px">
        <el-input
          placeholder="请输入验证码"
          class="input-with-select"
          v-model="input.smsCode"
          @input="smsCodeChangeHandle"
        >
          <el-button
            v-if="isSend == false"
            type="number"
            slot="append"
            icon="el-icon-mobile-phone"
            :disabled="isSend"
            @click="smsSendHandle"
            >发送短信验证码</el-button
          ><el-button v-else slot="append" icon="el-icon-mobile-phone" :disabled="isSend"
            >验证码已发送({{ this.timer }})</el-button
          >
        </el-input>
      </div>
    </div>
    <div class="checkbox mb-3">
      <label>
        <input
          type="checkbox"
          @click="agreementClickHandle"
          :checked="this.isAgreeUserAgreement"
        />
        我已同意
      </label>
      <label
        ><p style="cursor: pointer" class="text-primary" v-b-modal.modal-1>
          用户协议
        </p></label
      >
    </div>
    <button
      v-bind:class="this.registerButtonStyle"
      :disabled="!isAgreeUserAgreement"
      @click="registerHandle"
    >
      注册
    </button>
    <div>
      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
    <button class="btn btn-lg btn-primary btn-block mt-2">返回首页</button>
    <p class="mt-5 mb-3 text-muted text-center">© 2017-2020</p>
    <!-- 注册成功modal -->
    <div>
      <b-modal id="registerSuccessModal" hide-footer>
        <template #modal-title> 信息提示 </template>
        <div class="d-block text-center">
          <h3>恭喜你!注册成功了 ^_^</h3>
        </div>
        <b-button class="mt-3" block @click="routerToIndex"
          >回到首页</b-button
        >
      </b-modal>
    </div>
  </div>
</template>
<script>
import { routerBack, routerToIndex } from "~/utils/common.js";
export default {
  layout: "register",
  data() {
    return {
      isSend: false, //是否已经发送验证码
      isAgreeUserAgreement: false, //是否已经同意用户协议
      timer: 60, //验证码计时器,
      registerButtonStyle: "btn btn-lg btn-secondary btn-block", //注册按钮样式
      input: {
        mobile: "13502127317",
        smsCode: "222333",
      }, //注册信息对象
    };
  },
  methods: {
    //发送短信验证码
    smsSendHandle() {
      if (!this.mobileValidator()) {
        this.$message({
          showClose: true,
          message: "请填写正确的手机号码",
          type: "error",
        });
        return false;
      }
      this.isSend = true;
      this.timerStartHandle();
      this.$message({
        showClose: true,
        message: "这是一条消息提示",
        type: "success",
      });
    },
    //验证码计时器倒计时
    timerStartHandle() {
      this.timerHandle = setInterval(() => {
        this.timer--;
        if (this.timer === 0) {
          this.isSend = false;
          this.timer = 60;
          clearInterval(this.timerHandle);
        }
      }, 1000);
    },
    //同意用户协议
    agreementClickHandle() {
      this.isAgreeUserAgreement = !this.isAgreeUserAgreement;
      this.checkRegister();
    },
    //检查输入的注册信息
    checkRegister() {
      let isOk = false;
      if (this.input.mobile && this.input.smsCode && this.isAgreeUserAgreement == true) {
        isOk = true;
      }
      if (isOk == true) {
        this.isAgreeUserAgreement = true;
        this.registerButtonStyle = "btn btn-lg btn-primary btn-block";
      } else {
        this.isAgreeUserAgreement = false;
        this.registerButtonStyle = "btn btn-lg btn-secondary btn-block";
      }
    },
    //手机号码验证
    mobileValidator() {
      if (!/^1[3456789]\d{9}$/.test(this.input.mobile)) {
        return false;
      }
      return true;
    },
    //验证码改变事件
    smsCodeChangeHandle() {
      console.log(11111);
    },
    //打开用户协议模态框
    openUserAgreement() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
    //回退
    routerBack() {
      routerBack(this);
    },
    //注册按钮点击事件
    registerHandle() {
      this.$axios.$post("/api/v1/user/register").then((res) => {
        this.$bvModal.show("registerSuccessModal");
        //TODO: 跳转到首页
        // console.log(this.$router.push("/"));
      });
    },
    //回到首页
    routerToIndex() {
      routerToIndex(this)
    }
  },
};
</script>
