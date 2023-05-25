<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Grade viewer" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/stats">Statistics</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    position: sticky;
    margin-top: calc(var(--section-gap) / 4);
    margin-left: 0;
    display: flex;
    place-items: center;
    align-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-inline: auto;
  }

  nav {
    text-align: center;
    font-size: 1rem;

    padding: 1rem 0;
  }

  header .wrapper>* {
    margin-inline: auto;
  }
}
</style>
