<template>
  <div class="container">
    <div class="card login">
      <div class="card-body">
        <h2 class="card-title text-center">Login</h2>
        <form @submit.prevent="login" class="text-center">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Please enter your name ..." name="name" v-model="name">
            <p v-if="errorText" class="text-danger">{{ errorText }}</p>
          </div>
          <div id="login">
            <button class="button b1" >Enter Chat</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template><script>export default {
  name: 'home',
  data () {
    return {
      name: "",
      errorText: null
    }
  },
  methods: {
    login() {
      if (this.name) {
        this.$router.push({name: 'Chat', params: {name: this.name}})
      } else {
        this.errorText = "Please enter a name!"
      }
    }
  }
}
</script>
<style>
.login{
  max-width: 450px;
  margin-top: 50px;
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

.b1{
  font-size: 15px;
}

.b1.button:hover{
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

