<template>
  <v-row>
    <v-col class="aboutWrapper">
      <v-row class="about-text d-flex justify-center align-center">
        <li-text size="xxxl" font-weight="fw-7" color="customBlack">ABOUT US</li-text>
      </v-row>
      <v-row class="aboutMainCont">
        <v-col cols="6" class="chessImage">
          <img src="../../images/about-chess-image.png" alt="">
        </v-col>
        <v-col cols="6" class="aboutUsContent">
          <v-row>
            <v-col class="about1">
              <li-text size="m" font-weight="fw-6" color="customBlack">Lorem ipsum dolor sit amet consectetur. Adipiscing
                lacus urna sagittis morbi nunc habitasse turpis. Est augue ullamcorper bibendum nunc vivamus arcu enim
                purus.</li-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="about2">
              <div class="about2Child">
                <div class="about2Text">
                  <li-text size="m" font-weight="fw-6" color="customBlack">Ut iaculis tempus bibendum amet amet odio a.
                    Neque
                    sit in senectus faucibus netus luctus at. Augue turpis vulputate euismod et amet. Ullamcorper semper
                    arcu
                    eu adipiscing metus. Et faucibus pretium condimentum sodales neque nibh. </li-text>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="about3">
              <ul>
                <li>
                  <li-text size="m" font-weight="fw-6" color="customBlack">Sit sit elementum cursus nisl luctus curabitur
                    at. Turpis non pulvinar ac tempor. Gravida nulla pellentesque in nibh morbi mauris tortor donec
                    ipsum.</li-text>
                </li>
                <li>
                  <li-text size="m" font-weight="fw-6" color="customBlack">Dui neque est nisi quis neque malesuada
                    maecenas sed. Rhoncus vitae quam eget in egestas lacus ultricies eget ac.</li-text>
                </li>
                <li>
                  <li-text size="m" font-weight="fw-6" color="customBlack">Sit ornare urna non amet orci. Enim sed aenean
                    velit magna sed diam. In praesent accumsan magna cursus ac eget volutpat eget morbi. Leo ut volutpat
                    eu cursus eget eget varius.</li-text>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import liText from '@/components/shared/li-text.vue';
  
</script>

<style scoped lang="scss">
  .aboutWrapper {
    margin-top: 150px !important;

    .about-text {
      margin-bottom: 100px !important;

      span {
        text-shadow: -3px -3px 0px $customYellow, -2px -2px 0px $customYellow;
      }
    }

    .chessImage {
      background-image: url('../../images/about-chess-bg.png');
      size: 100%;
      margin-left: 100px;

      img {
        margin: 1.23%;
      }
    }

    .aboutUsContent {
      max-width: 800px;

      .about1 {
        margin-bottom: 40px;
      }

      .about2 {
        position: relative;
        margin-bottom: 40px;
        overflow: visible;
        z-index: -1;

        .about2Child {
          position: absolute;
          right: -1000px;
          left: -1500px;
          background-color: $customYellow50;
          overflow-x: visible;

          .about2Text {
            padding: 22px 0px;
            margin-left: 45.35%;
            min-height: 188px;
            max-width: 775px;
          }
        }
      }

      .about3 {
        margin-top: 200px;
        padding-left: 25px;
        max-width: 775px !important;

        li::marker {
          content: counter(list-item) ". ";
          font-size: $fontSizeM;
          font-weight: 600;

        }
      }
    }
  }
</style>
