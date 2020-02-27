<template>
  <div class="card-container">

    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-title>{{ title }}</b-card-title>
            <b-card-text>
              <p>{{ section }}</p>
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
    section: String
  }
}
</script>
