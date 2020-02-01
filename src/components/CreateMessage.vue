<template>
    <div class="container" style="margin-bottom: 30px">
        <form @submit.prevent="createMessage">
            <div class="form-group">
                <input type="text" name="message" class="form-control" placeholder="Enter message ..." v-model="newMessage">
                <p class="text-danger" v-if="errorText">{{ errorText }}</p>
            </div>

            <button class="button b1" type="submit" name="action">Submit</button>
        </form>
    </div>
</template>

<script>
    import fb from '@/firebase/init';

    export default {
        name: 'CreateMessage',
        props: ['name'],
        data(){
            return {
                newMessage: null,
                errorText: null
            }
        },
        methods: {
            createMessage () {
                if (this.newMessage) {
                    fb.collection('messages').add({
                        message: this.newMessage,
                        name: this.name,
                        timestamp: Date.now()
                    }).catch(err => {
                        console.log(err);
                    });
                    this.newMessage = null;
                    this.errorText = null;
                } else {
                    this.errorText = "A message must be entered!"
                }
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