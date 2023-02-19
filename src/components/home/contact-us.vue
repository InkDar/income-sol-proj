<template>
  <v-row>
    <v-col id="contactUs" class="contactText d-flex align-center justify-center">
      <li-text size="xxxl" font-weight="fw-7" color="customBlack">CONTACT US</li-text>
    </v-col>
  </v-row>
  <v-row class="inputWrapper">
    <v-col class="inputs">
      <v-row>
        <v-col class="input">
          <label :class="name ? 'labelHidden' : 'labelVisible'" for="fname">name, surname</label><br>
          <input class="inputLine" type="text" id="fname" name="fname" v-model="name">
        </v-col>
      </v-row>
      <v-row>
        <v-col class="input">
          <label :class="email ? 'labelHidden' : 'labelVisible'" for="fname">email address</label><br>
          <input class="inputLine" type="text" id="fname" name="fname" v-model="email">
        </v-col>
      </v-row>
      <v-row>
        <v-col class="input">
          <label :class="phone ? 'labelHidden' : 'labelVisible'" for="fname">phone number</label><br>
          <input class="inputLine" type="text" id="fname" name="fname" v-model="phone">
        </v-col>
      </v-row>
      <v-row>
        <v-col class="input">
          <label :class="description ? 'textLabelHidden' : 'textLabelVisible'" for="description">description</label>
          <textarea class="inputText" id="description" name="description" rows="10" cols="50"
            v-model="description"></textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <button @click="sendEmail" class="sendRequestBtn">
            <li-text size="l" font-weight="fw-6" color="customBlack">RECEIVE A CONSULTING</li-text>
          </button>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="contactIcon">
      <img src="../../images/contact-us-icon.png" alt="">
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import liText from '@/components/shared/li-text.vue';
  import { ref } from 'vue';
  
  
  // Data
  const name = ref("");
  const email = ref("");
  const phone = ref("");
  const description = ref("");
  
  // Methods
  const sendEmail = () => {
    return console.log("clicked");
  }
</script>

<style scoped lang="scss">
  .contactText {
    margin-top: 150px;
    margin-bottom: 100px !important;

    span {
      text-shadow: -3px -3px 0px $customYellow, -2px -2px 0px $customYellow;
    }
  }

  .inputWrapper {
    margin-bottom: 225px !important;

    .inputs {
      margin-left: 100px;
      width: 810px;

      .input {
        position: relative;

        .labelVisible {
          position: absolute;
          top: 45px;
          left: 30px
        }

        .labelHidden {
          display: none;
        }

        .inputLine {
          width: 100%;
          padding: 20px 30px;
          border: 1.5px solid $customBlack;
          border-radius: 10px;
          margin-bottom: 30px;
        }

        .textLabelVisible {
          position: absolute;
          top: 20px;
          left: 30px
        }

        .textLabelHidden {
          display: none;
        }

        .inputText {
          width: 100%;
          padding: 20px 30px;
          border: 1.5px solid $customBlack;
          border-radius: 10px;
        }
      }
    }

    .sendRequestBtn {
      margin-top: 60px;
      width: 100%;
      background: $customYellow;
      border-radius: 10px;
      padding: 15px 30px;
      gap: 10px;
      transition: all 0.5s ease;
    }

    .sendRequestBtn:hover {
      background: $customBlack;
      transition: all 0.5s ease;

      span {
        color: $customWhite !important;
      }
    }
  }


  .contactIcon {
    margin-top: 95px;
    margin-left: 179px;
  }
</style>
