<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Inloggen</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Login</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-item >
                    <ion-label position="floating">E-mail</ion-label>
                    <ion-input class="inputField" formControlName="email" type="text"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Wachtwoord</ion-label>
                    <ion-input  class="inputField" formControlName="password" type="password"></ion-input>
                </ion-item>
                <ion-button @click="presentAlert()">
                    Login
                </ion-button>
            </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { alertController, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup(){
      const login = ()=>{
         console.log('test')
      }
      return {
          login
      }
  },
    methods: {
    async presentAlert() {
      const alert = await alertController
        .create({
          cssClass: 'alerts',
          header: 'Restaurant name',
          subHeader: 'Aan het inloggen...',
          message: 'Een ogenblik aub.',
          buttons: ['Ai'],
        });
      return alert.present();
    },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*{
font-family: 'Poppins' !important;
}
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

ion-input {
    border-radius: 20px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>