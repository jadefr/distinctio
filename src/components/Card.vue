<template>
  <div class="card-component-container">

    <!-- Card -->
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
<!--          <a href="/galeria/document" ><b-card-img :src="img" class="rounded-0"></b-card-img></a>-->
            <router-link :to="`/galeria/${authorURL}/${titleURL}/${sectionURL}`" ><b-card-img :src="img" class="rounded-0"></b-card-img></router-link>
<!--          <template v-slot:document>-->
<!--            <router-link :to="`/galeria/${authorURL}/${titleURL}/${sectionURL}`"><b-card-img :src="img" class="rounded-0"></b-card-img></router-link>-->
<!--          </template>-->
        </b-col>
        <b-col md="6">
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
  .card-component-container {

    #card-title {
      text-align: center;
    }

    #card-text {
      text-align: center;
    }
  }

</style>
