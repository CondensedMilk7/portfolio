<script setup lang="ts">
const { isHome = true } = defineProps<{ isHome?: boolean }>();
</script>

<template>
  <header>
    <span v-if="isHome === false">
      <NuxtLink to="/" class="home-link">&lt;P/T&gt;</NuxtLink>
    </span>
    <span class="spacer" v-if="isHome === false"></span>
    <nav>
      <ul>
        <li class="nav__list-item" v-if="isHome">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="nav__list-item">
          <NuxtLink to="/projects">Projects</NuxtLink>
        </li>
        <li class="nav__list-item">
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  padding: 20px;
  background-color: #1a1b26e6;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.home-link {
  font-weight: bold;
  text-decoration: none;
  color: var(--highlight-blue);
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  font-size: 1.1rem;
  margin: 0;
}

.nav__list-item {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 100ms linear;
}

a:hover {
  color: var(--orange);
  cursor: pointer;
}

.spacer {
  flex-grow: 1;
}
</style>
