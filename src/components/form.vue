<template>
    <form id="form">
        <slot></slot>
        <div class="form-group">
            <label for="account">{{message.form_label_account}}:</label>
            <input id="account" type="text" v-model="formData.user_account" required/>
        </div>
        <div class="form-group" v-show="message.showMore">
            <label for="email">{{message.form_label_email}}:</label>
            <input id="email" type="email" v-model="formData.email" required/>
        </div>
        <div class="form-group">
            <label for="password">{{message.form_label_pwd}}:</label>
            <input id="password" type="password" required v-model="formData.user_password" />
        </div>
        <div class="form-group" v-show="message.showMore">
            <label for="re_password">{{message.form_label_repwd}}:</label>
            <input id="re_password" type="password" v-model="formData.re_password" />
        </div>
        <div class="form-btn">
            <input id="log_btn" type="button" :value="message.title" @click="submit" />
            <router-link id="to_register" to="/register" v-show="message.showRegBtn">注册</router-link>
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                user_account: "",
                user_password: "",
                email:"",
                re_password:""
            }
        }
    },
    props:[ "message" ],
    methods: {
        submit(){
            this.$emit('fun', this.formData)
        }
    }
}
</script>
<style scoped>
form {
    width: 100%;
}

.form-group {
    padding: 20px 0px;
    display: flex;
}

.form-group:after {
    content: "*";
    color: red;
}

label {
    flex: 1;
    padding-top: 10px;
}

input {
    flex: 4;
    padding: 10px;
    border-radius: 25px;
    color: black;
}
.form-btn {
    display: flex;
    margin-top: 20px;
    align-items: center;
}
#log_btn{
    flex: 2;
    padding: 10px;
    border-radius: 25px;
    color: white;    
    background: linear-gradient(to left, hsla(333, 75%, 70%, 0.7), hsla(242, 87%, 71%, 0.7));
}

#log_btn:hover {
    background: linear-gradient(to left, hsla(242, 87%, 71%, 0.7), hsla(333, 75%, 70%, 0.7));
}

#to_register {
    flex: 1;
    margin-left: 80px;
    color: white;    
}
</style>
