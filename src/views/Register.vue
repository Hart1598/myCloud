<template>
  <el-container class="container">
        <el-form class="form" label-position="left" label-width="100px" :model="formLabelAlign">
            <div class="text">
                <section class="container-form">
                    <h1 class="title">
                        <span>Регистрация</span>
                        <span>на сайте MyCloud</span>
                    </h1>
                    <h2 class="title">
                        <span>Мы хочем</span>
                        <span>что бы вы</span>
                        <span>Зарегистрировались</span>
                    </h2>
                </section>
            </div>
            <div class="form">
                <el-form-item label="Имя">
                    <el-input placeholder="Введите ваше имя" v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input placeholder="Введите Email" v-model="formLabelAlign.email"></el-input>
                </el-form-item>
                <el-form-item label="Пароль">
                    <el-input placeholder="Введите пароль" v-model="formLabelAlign.password" show-password></el-input>
                </el-form-item>
            </div>
            <el-button type="primary" plain @click.prevent="btnHandler">Регистрация</el-button>
        </el-form>
    </el-container>
</template>

<script>
import { h } from 'vue';
export default {
    data(){
        return{
            formLabelAlign: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods:{
      info(title, message) {
        this.$notify({
          title,
          message: h('i', { style: 'color: teal' }, message)
        });
      },

      async btnHandler(){
        try{
          await this.$store.dispatch('register', this.formLabelAlign)
          this.info('Статус входа', `Вы успешно вошли ${this.formLabelAlign.name}`)
        }
        catch(e){
          this.info('Ошибка', `Вы не вошли ${this.formLabelAlign.name}`)
        }
      }
    }
}
</script>

<style lang="scss" scoped>


.container{
    display: flex;
    align-items: center;
    justify-content: center;
}

.form{
    display: block;
}

.text{
    margin-bottom: 10rem;
}

.text-form{
    font-size: 3em;
    text-transform: uppercase;
}



.container-form{
  width: 400px;
  height: 220px;
  position: relative;
}

h1, h2{
  font-size: 75px;
  text-transform: uppercase;
  
  
  span{
    width: 100%;
    float: left;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    transform: translateY(-50px);
    opacity: 0;
    animation-name: titleAnimation;
    animation-timing-function:ease;
    animation-duration: 10s;
    
  }
}
h1 span{
  animation-delay: 1s;
  -webkit-animation-fill-mode: forwards;

  &:first-child{
    animation-delay: 0.7s;
  }

  &:last-child{
    animation-delay: 0.5s;
  }
}

h2{ 
  top: 0;
  position: absolute;
  
  span{
    animation-delay: 12s;
    -webkit-animation-fill-mode: forwards;

    &:first-child{
      animation-delay: 12s;
    }

    &:last-child{
      animation-delay: 12s;
    }
  }
}


@keyframes titleAnimation {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
       transform: translateY(0);
       opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
       transform: translateY(50px);
       opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    
  }
}


</style>