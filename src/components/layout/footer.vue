<template>
  <v-row class="footerWrapper">
    <v-col class="footerMainCont">
      <v-row class="d-flex justify-space-between">
        <v-col class="footerIcon">
          <img src="../../images/footer-icon.png" alt="">
        </v-col>
        <v-col class="footerContent">
          <v-row class="footerContacts d-flex justify-center">
            <v-col class="contact d-flex align-center justify-center">
              <img src="../../images/footer-icons/address-icon.png" alt="">
              <li-text size="xxs" font-weight="fw-6" color="customWhite">Ghazar Parpetsi 24/17</li-text>
            </v-col>
            <v-col class="contact d-flex align-center justify-center">
              <img src="../../images/footer-icons/email-icon.png" alt="">
              <li-text size="xxs" font-weight="fw-6" color="customWhite">probucks.consulting@gmail.com</li-text>
            </v-col>
            <v-col class="contact d-flex align-center justify-center">
              <img src="../../images/footer-icons/mobile-icon.png" alt="">
              <li-text size="xxs" font-weight="fw-6" color="customWhite">+37491110011</li-text>
            </v-col>
          </v-row>
          <v-row class="footerLinks d-flex align-center justify-center">
            <v-col class="link">
              <li-text size="xxs" font-weight="fw-6" color="customWhite">Privacy policy</li-text>
            </v-col>
            <v-col class="link">
              <li-text size="xxs" font-weight="fw-6" color="customWhite">FAQ</li-text>
            </v-col>
            <v-col class="link">
              <li-text size="xxs" font-weight="fw-6" color="customWhite">Terms & Conditions</li-text>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="footerSocialIcons">
          <v-row class="d-flex justify-center align-center">
            <v-col class="icon d-flex align-center justify-center">
              <img src="../../images/footer-icons/ig-icon.png" alt="">
            </v-col>
            <v-col class="icon d-flex align-center justify-center">
              <img src="../../images/footer-icons/ln-icon.png" alt="">
            </v-col>
            <v-col class="icon d-flex align-center justify-center">
              <img src="../../images/footer-icons/fb-icon.png" alt="">
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
  .footerWrapper {
    height: 150px;
    background-color: $customBlack;

    .footerMainCont {
      margin: 0 5.21%;

      .footerIcon {
        max-width: 300px;
        max-height: 140px;

        img {
          margin: 31px 0;
          max-width: 500px;
        }
      }

      .footerContent {
        max-width: 750px;
        max-height: 140px;

        .footerContacts {
          margin-top: 31px !important;
          align-content: space-between;

          .contact {
            width: min-content !important;

            img {
              margin-right: 13px;
            }
          }
        }

        .footerLinks {
          margin-top: 35px !important;
          align-content: center;
          max-height: 140px;
          padding: 0 150px;

          .link {
            display: flex;
            max-height: 24px;
            justify-content: center;
            align-content: center;
            width: fit-content !important;
          }
        }
      }

      .footerSocialIcons {
        margin-top: 50px;
        max-width: 180px;
        margin-left: 150px;

        .icon {
          max-width: 50px;
        }
      }
    }
  }
</style>
