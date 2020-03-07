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
            <b-card-title id="card-title">{{ title }}</b-card-title>
            <hr>
            <b-card-text id="card-text">
              <h5>{{ section }}</h5>
              <p>{{ author }}</p>
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

  .card-component-container {

    #card-title {
      text-align: center;
    }

    #card-text {
      text-align: center;
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
