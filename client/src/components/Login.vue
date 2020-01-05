<template>
  <div>
    <div class="login-box">
      <h1>Sign up</h1>
      <div class="textbox">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Username" v-model="user.login"/>
      </div>

      <div class="textbox">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" v-model="user.password"/>
      </div>

      <input type="button" class="btn" value="Sign up" @click.prevent="login"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    login(){
      axios
        .post("http://localhost:9000/api/v1/login", this.user)
        .then(response => {
          this.$store.dispatch('setToken', response.data);
          let token = this.$store.getters.getToken;
          axios.get(token, "http://localhost:9000/api/v1/user")
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-size: cover;
}

.login-box {
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.808);
}
.login-box h1 {
  float: left;
  font-size: 40px;
  border-bottom: 6px solid rgba(0, 0, 0, 0.267);
  margin-bottom: 50px;
  padding: 13px 0;
}
.textbox {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid #4caf50;
}
.textbox i {
  width: 26px;
  float: left;
  text-align: center;
}
.textbox input {
  border: none;
  outline: none;
  background: none;
  color: black;
  font-size: 18px;
  width: 80%;
  float: left;
  margin: 0 10px;
}
.btn {
  width: 100%;
  background: none;
  border: 2px solid #4caf50;
  color: black;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  margin: 12px 0;
}
</style>
