<template>
  <v-row class="main-container">
    <v-col class="pa-0 ma-0">
      <v-row class="d-flex justify-center">
        <v-col class="main-text">
          <li-text size="xxxl" fontWeight="fw-6" color="customWhite">
            “Strategy without tactics is the slowest route to victory.
            Tactics without strategy is the noise before defeat”
          </li-text>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col class="sun-tsu">
          <li-text size="xxxl" fontWeight="fw-6" color="customYellow">
            Sun Tsu
          </li-text>
        </v-col>
      </v-row>
      <v-row class="btn-cont d-flex justify-center align-center">
        <v-col class="left-btn d-flex justify-end">
          <li-btn type="secondary">services</li-btn>
        </v-col>
        <v-col class="right-btn">
          <li-btn type="primary">blog</li-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import liText from '@/components/shared/li-text.vue';
import liBtn from '@/components/shared/li-btn.vue';
</script>

<style scoped lang="scss">
.main-container {
  background-image: url('@/images/chess-image.png');
  background-size: 100%;
  max-height: 840px;
  min-height: 840px;
  height: 89.36%;
  max-width: 1620px;
  min-width: 1620px;
  width: 94.19%;
  border: 3px solid $customYellow;
  border-radius: 10px;

  .main-text {
    max-width: 1012px;
    max-height: 110px;
    width: 20.5%;
    height: 13.1%;
    text-align: center;
    margin-top: 18%;
  }

  .sun-tsu {
    max-width: 145px;
    max-height: 55px;
    width: 8.95%;
    height: 6.55%;
    text-align: center;
    margin-top: 20px;
  }

  .btn-cont {
    margin-top: 100px !important;

    .left-btn {
      margin-right: 70px;
    }
  }
}
</style>
