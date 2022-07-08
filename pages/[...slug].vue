<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>
