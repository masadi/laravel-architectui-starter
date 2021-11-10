<template>
  <div class="app-main__inner">
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-car icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Example Title
            <div class="page-title-subheading">
              This is an example dashboard created using build-in elements and components.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Example Component</div>

      <div class="card-body">I'm an example component.</div>
    </div>
  </div>
</template>

<script>
//import "../../assets/js/scrollbar.js";
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
