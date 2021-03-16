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
        <ion-card class="cardContainer">
            <ion-card-header>
                <ion-card-title>Login</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-item>
                    <ion-icon slot="start" :ios="personCircleOutline" :md="personCircleOutline"></ion-icon>
                    <ion-label position="floating">E-mail</ion-label>
                    <ion-input class="inputField" formControlName="email" type="text"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-icon slot="start" :ios="lockClosedOutline" :md="lockClosedOutline"></ion-icon>
                    <ion-label position="floating">Wachtwoord</ion-label>
                    <ion-input  class="inputField" formControlName="password" type="password"></ion-input>
                </ion-item>
                <ion-button @click="()=>{
                    presentAlert()
                   
                    }
                    ">
                    Login
                </ion-button><br>
                  <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
            </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { alertController, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonIcon } from '@ionic/vue';
import {personCircleOutline,lockClosedOutline} from 'ionicons/icons';
export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon
  },
  setup(){
      const login = ()=>{
         console.log('test')
      }

      return {
          login,
          personCircleOutline,
          lockClosedOutline,
          isLoading: true
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

ion-icon{
    margin-top: 25px;
    color: rgb(139, 193, 247)
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
.cardContainer{
    box-shadow: 5px 5px 20px 10px rgba(148, 148, 148, 0.265);
}
ion-spinner{
    color: blue;
}
</style>