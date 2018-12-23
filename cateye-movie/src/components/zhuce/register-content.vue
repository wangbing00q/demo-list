<template>
    <div class="content">
        <div class="J-unitive-signup-form">
            <div class="sheet" style="display:block">
                <form @submit.prevent="singup">
                    <div class="form-field form-field--mobile">
                        <label>手机号</label>
                        <input type="text" class="f-text J-mobile" id="txt" name="phoneNumber" @blur="onBlur1" />
                        <span class="J-unitive-tip unitive-tip" v-show="isLogged">注册成功后，全美团通用</span>
                        <span class="inline-tip" v-show="seem"><i class="tip-status tip-status--opinfo"></i>请输入正确的11位手机号码</span>
                    </div>
                    <div class="form-field form-field--vbtn">
                        <label>图片验证码</label>
                        <div class="J-captcha captcha-wrapper" style="display:none">
                            <input type="text" id="captcha-mobile" class="f-text J-captcha" name="imageSign" />
                            <img id="signup-captcha-mobile-img" height="34px" width="60px" class="signup-captcha-img J-captcha-refresh" />
                            <a class="J-captcha-refresh captcha-refresh inline-link">看不清楚？换一张</a>
                            <span class="J-captcha-tip inline-tip"></span>
                        </div>
                        <div class="verify-wrapper">
                            <input type="button" class="btn-normal btn-mini verify-btn J-verify-btn" value="免费获取短信动态码">
                            <span class="f1 verify-tip" id="J-verify-tip"></span>
                        </div>
                    </div>
                    <div class="form-field form-field--sms">
                        <label>短信动态码</label>
                        <input type="text" class="f-text J-sms" name="msgSign" @blur=onBlur4>
                        <span class="inline-tip" v-show="duanxin"><i class="tip-status tip-status--opinfo"></i>输入错误，请重新输入</span>
                    </div>
                    <div class="form-field form-field--pwd">
                        <div class="pw-strength">
                            <div class="pw-strength__bar" id="J-pw-strength__bar"></div>
                            <div class="pw-strength__letter">
                                <span class="pw-strength__label" v-show="week" style="background: indianred;float: left">弱</span>
                                <span class="pw-strength__label" v-show="middle" style="background: indianred;float: left">中</span>
                                <span class="pw-strength__label pw-strength__label--noborder" v-show="powerful" style="background: indianred;float: left">强</span>
                            </div>
                        </div>
                        <label>创建密码</label>
                        <input type="password" class="f-text J-pwd" name="password" @blur="onBlur2" />
                        <span class="inline-tip" v-show="long"><i class="tip-status tip-status--opinfo"></i>密码太长，最多12个字符</span>
                        <span class="inline-tip" v-show="brief"><i class="tip-status tip-status--opinfo"></i>密码太短，至少6个字符</span>
                        <span class="inline-tip" v-show="dui"><i class="tip-status tip-status--opinfo"></i></span>
                    </div>
                    <div class="form-field form-field--pwd2">
                        <label>确认密码</label>

                        <input type="password" class="f-text J-pwd2" name="repassword" @blur="onBlur3">
                        <span class="inline-tip" v-show="different"><i class="tip-status tip-status--opinfo"></i>两次输入的密码不一致，请重新输入</span>
                    </div>
                    <div class="form-field">
                        <input type="submit" name="commit" class="btn" value="同意以下协议并注册" />
                        <a target="_blank"></a>
                    </div>
                    <input type="hidden" name="fingerprint" class="J-fingerprint" value="0-0-1-">
                </form>
            </div>

        </div>


        <div class="term">
            <a class="f1">《美团网用户协议》</a>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    export default {
        name: 'register-content',
        data() {
            return {
                seem: false,
                isLogged: true,
                long: false,
                brief: false,
                week: false,
                middle: false,
                powerful: false,
                dui: false,
                different: false,
                duanxin: false,
                firstPassword: "",
                telphone: "",
                messages: "",
                repassword: ""
            }
        },
        methods: {
            singup() {
                var that = this
                if (this.firstPassword && this.telphone && this.messages && this.repassword) {
                    axios({
                        url: "http://localhost:8082/zhuce",
                        method: "post",
                        data: {
                            'firstPassword': that.firstPassword,
                            'telphone': that.telphone,
                            'messages': that.messages,
                            'repassword': that.repassword
                        }

                    })
                        .then(function (res) {
                            console.log(res)

                        })
                        .catch(function (err) {
                            console.log(err)
                        })
                }
            },
            onBlur1(ev) {
                var val1 = ev.target.value
                // console.log(this.seem)
                var reg = /^\d{11}$/
                if (!reg.test(val1)) {
                    this.seem = true
                    this.isLogged = false
                    ev.target.value = ''
                    return
                }
                
                this.telphone = val1
            },
            onBlur2(ev) {
                var val2 = ev.target.value
                if (/^\w{1,6}$/.test(val2)) {
                    this.brief = true
                    this.long = false
                    ev.target.value = ''
                    return
                } else if (/^\w{12,}$/.test(val2)) {
                    this.long = true
                    this.brief = false
                    ev.target.value = ''
                    return
                } else if (/^[0-9]{6,16}$|^[a-zA-Z]{6,16}$/.test(val2)) {
                    this.week = true
                    this.firstPassword = val2
                } else if (/^[A-Za-z0-9]{6,16}$/.test(val2)) {
                    this.week = true;
                    this.middle = true;
                    this.firstPassword = val2
                } else if (/^\w{6,16}$/.test(val2)) {
                    this.week = true;
                    this.middle = true;
                    this.powerful = true
                    this.firstPassword = val2
                }
            },

            onBlur3(ev) {
                var val3 = ev.target.value
                if (val3 !== this.firstPassword) {
                    this.different = true
                    ev.target.value = ''
                    return
                }
                this.repassword = val3
            },
            onBlur4(ev) {
                var val4 = ev.target.value
                if (!/^\d{1,6}$/.test(val4)) {
                    this.duanxin = true
                    ev.target.value = ''
                    return
                }
                this.messages = val4

            }
        }
    }  
</script>