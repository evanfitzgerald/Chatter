<template>
  <div class="container">
    <h1 class="card-titles text-center" >Chatter</h1>
    <div class="card login">
      <div class="card-body">
        <h2 class="card-title text-center">Sign in</h2>
        <form @submit.prevent="login" class="text-center" >
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter username" name="name" v-model="name">
            <p v-if="errorText" class="text-danger">{{ errorText }}</p>
          </div>
          <div class="form-group">
            <input :type="passwordFieldType" class="form-control" placeholder="Enter password" password="password" v-model="password">
          </div>
          <div id="login">
            <button class="button b1" >Enter Chat</button>
          </div>
        </form>
        <button type="button" class="button b2" id="eye" @click="switchVisibility">
            <img src="https://cdn0.iconfinder.com/data/icons/feather/96/eye-16.png" alt="eye" />
        </button>
      </div>
    </div>
    <h5 class="card-title text-center" >New to Chatter?</h5>
        <form @submit.prevent="signup" class="text-center">
          <div id="signup">
            <button class="button b2" >Sign up</button>
            <p v-if="errorSignText" class="text-danger">{{ errorSignText }}</p>
          </div>
        </form>
  </div>
</template>
<script>

export default {
  name: 'home',
  data () {
    return {
      name: "",
      errorText: null,
      errorSignText: null,
      password: '',
      passwordFieldType: 'password'
    }
  },
  methods: {
    login() {
      if (this.name) {
        this.$router.push({name: 'Chat', params: {name: this.name}})
      } else {
        this.errorText = "Please enter your username!"
      }
    },
    signup() {
      if (this.name) {
        this.$router.push({name: 'Chat', params: {name: this.name}})
      } else {
        this.errorSignText = "Signup is not ready yet!"
      }
    },
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    }
  }
}
</script>
<style>

.login {
  max-width: 450px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.button {
  border: #934cae;
  color: #934cae;
  background: white;
  border-style: solid;
  padding: 6px 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-width: thin;
  border-radius: 5px;
  font-style: Garamond;
}

.b1 {
  font-size: 15px;
}

.card-titles {
  margin-top: 50px;
}

.b1.button:hover {
  border: #934cae;
  color: white;
  background: #934cae;
  border-style: solid;
  padding: 6px 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-width: thin;
  border-radius: 5px;
  font-style: Garamond;
}

.b2 {
  font-size: 15px;
}

.b2.button:hover {
  border: #934cae;
  color: white;
  background: #934cae;
  border-style: solid;
  padding: 6px 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-width: thin;
  border-radius: 5px;
  font-style: Garamond;
}
</style>

