<template>
  <div class="card-component-container">

    <!-- Card -->
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <router-link :to="`/galeria/${authorURL}/${titleURL}/${sectionURL}`">
            <b-card-img :src="img" class="rounded-0"></b-card-img>
          </router-link>
        </b-col>
        <b-col md="6" id="card-col">
          <b-card-body>
            <router-link :to="`/galeria/${authorURL}/${titleURL}`">
              <b-card-title id="card-title">{{ title }}</b-card-title>
            </router-link>
            <hr>
            <b-card-text id="card-text">
              <router-link :to="`/galeria/${authorURL}/${titleURL}/${sectionURL}`">
                <h5>{{ section }}</h5>
              </router-link>
              <router-link :to="`/galeria/${authorURL}`">
                <p>{{ author }}</p>
              </router-link>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>

</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    author: String,
    section: String,
    img: String,
    authorURL: String,
    titleURL: String,
    sectionURL: String
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/libraries/_mixins.scss';
  @import '../assets/sass/libraries/functions';
  @import '../assets/sass/base/variables';

  .card-component-container {

    .card-body {
      a {
        color: color(gallery-font-color);
        &:hover {
          text-decoration: none;
        }
      }
    }
    #card-title {
      color: color(gallery-font-color);
      text-align: center;
    }

    #card-text {
      color: color(gallery-font-color);
      text-align: center;

      @include large-screen {
        h5 {
          font-size: 1.3rem;
        }

        p {
          padding-top: 1rem;
          font-size: 1.15rem;
        }
      }
    }

    @media only screen and (min-width: 768px) and (max-width: 1000px) {
      .card {
        word-wrap: normal;

        #card-title {
          font-size: 0.9rem;
        }
        #card-text {
          h5 {
            font-size: 0.8rem;
          }
          p {
            font-size: 0.7rem;
          }
        }
      }
    }

  }
</style>
