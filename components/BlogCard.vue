<script setup lang="ts">
interface BlogCardProps {
  title: string;
  description: string;
  coverImage: string;
  date: string;
  url: string;
  language: "eng" | "geo";
}
const props = defineProps<BlogCardProps>();
</script>

<template>
  <article class="card">
    <img class="card__image" :src="coverImage" :alt="title" />
    <div class="card__content">
      <h1>{{ title }}</h1>
      <p>
        {{ description }}
      </p>
      <div class="card__actions">
        <NuxtLink :to="url"
          ><i class="fa-solid fa-book-open"></i
          >{{ language === "geo" ? "წაიკითხე" : "Read" }}</NuxtLink
        >
        <span>{{ date }}</span>
      </div>
    </div>
  </article>
</template>

<style>
.card {
  background-color: var(--bg-storm);
  max-width: 600px;
  margin: 4rem auto;
  border-radius: 12px;
  overflow: hidden;
}

.card img {
  border-radius: 0;
}

.card__content {
  padding: 0 16px 16px 16px;
}

.card__actions {
  display: flex;
  justify-content: space-between;
}
</style>
