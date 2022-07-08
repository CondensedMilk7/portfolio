<template>
  <div>
    <hero-block />
    <nav-bar :is-home="true" />
    <main>
      <about-info />
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>
