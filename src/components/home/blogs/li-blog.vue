<template>
  <v-row :class="props.index % 2 === 0 ? `blackBG` : `whiteBG`" class="bottomLayer">
    <v-col class="topLayer">
      <img class="chessBg" src="../../../images/blog-icons/chess-bg.png" alt="">
      <v-row class="mainCont">
        <v-col cols="4" class="chessCont d-flex justify-center align-end">
          <img class="chessImage" :src="setUrl(props.index)" alt="" />
        </v-col>
        <v-col class="d-grid justify-center align-center" cols="8">
          <v-row>
            <v-col class="d-flex justify-center topic">
              <li-text size="xxl" fontWeight="fw-6" :color="props.index % 2 === 0 ? `customYellow` : `customBlack`">{{
                props.blog.topic
              }}</li-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center align-center body">
              <li-text size="xs" fontWeight="wf-6" :color="props.index % 2 === 0 ? `customWhite` : `customBlack`">{{
                cutText(props.blog.body)
              }}</li-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center align-center readMore">
              <li-text size="m" fontWeight="fw-6" :color="props.index % 2 === 0 ? `customYellow` : `customBlack`">Read
                more</li-text>
              <img class="readMoreSign" :src="readMoreSign(props.index)" alt="">
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import liText from '@/components/shared/li-text.vue';
  import Blog from '@/types/blog';
  import { PropType } from 'vue';
  
  
  // Props
  const props = defineProps({
    index: {
      type: Number,
      required: true
    },
    blog: {
      type: Object as PropType<Blog>,
      required: true,
    }
  })
  
  // Data
  const textProps = {
    start: 0,
    end: 251,
  }
  
  // Methods
  const setUrl = (index: number) => new URL(`../../../images/blog-icons/chess-fig-${index}.png`, import.meta.url);
  const readMoreSign = (index: number) => {
    if (index % 2 === 0) {
      return new URL('../../../images/blog-icons/read-more-sign-yellow.png', import.meta.url);
    }
    else {
      return new URL('../../../images/blog-icons/read-more-sign-black.png', import.meta.url);
    }
  }
  const cutText = (text: string) => text.substring(textProps.start, textProps.end);
</script>

<style scoped lang="scss">
  .bottomLayer {
    height: 449px;
    width: 639px;
    z-index: 10;

    .topLayer {
      position: relative;
      z-index: 100;

      .chessBg {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all 0.15s ease-out;
      }

      .mainCont {
        height: 100%;

        .chessCont {
          position: relative;

          .chessImage {
            position: absolute;
            bottom: 65px;
            right: 31px;
            transition: all 0.15s ease-out;
          }
        }

        .topic {
          margin-top: 30px;
        }

        .body {
          margin-top: 25px;
          width: 396px;
          height: 252px;

          span {
            line-height: 36px;
          }
        }

        .readMore {
          position: absolute;
          left: 114px;
          margin-top: 35px;
        }

        .readMoreSign {
          max-height: 55%;
          max-width: 55%;
          margin-left: 10px;
          transition: all 0.15s ease-out;
        }
      }
    }
  }

  .bottomLayer:hover {
    height: 449px;
    width: 639px;
    z-index: 10;

    .topLayer {
      position: relative;
      z-index: 100;

      .chessBg {
        opacity: 1;
      }

      .mainCont {
        height: 100%;

        .chessCont {
          position: relative;

          .chessImage {
            transform: scale(1.12);
          }
        }

        .topic {
          margin-top: 30px;
        }

        .body {
          margin-top: 25px;
          width: 396px;
          height: 252px;

          span {
            line-height: 36px;
          }
        }

        .readMore {
          position: absolute;
          left: 114px;
          margin-top: 35px;
        }

        .readMoreSign {
          max-height: 55%;
          max-width: 55%;
          margin-left: 15px;
          margin-right: -5px;
        }
      }
    }
  }



  .blackBG {
    background-color: $customBlack;
    color: $customWhite !important;
    height: 449px;
    width: 639px;
  }

  .whiteBG {
    background-color: $customWhite;
    color: $customBlack !important;
    border: 3px solid $customBlack;
    height: 449px;
    width: 639px;
  }
</style>
