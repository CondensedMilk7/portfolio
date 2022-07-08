<template>
  <div>
    <main>
      <ContentList path="/blog" v-slot="{ list }">
        <blog-card
          v-for="blog in list.slice().reverse()"
          :key="blog._path"
          :title="blog.title"
          :description="blog.description"
          :url="blog._path"
          :date="blog.date"
          :coverImage="blog.coverImage"
          :language="blog.language"
        />
      </ContentList>
    </main>
  </div>
</template>
