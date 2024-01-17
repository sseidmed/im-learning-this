<template>
  <div class="layout">
    <header class="header border-b">
      <nav class="nav">
        <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
        <g-link to="/">About</g-link>
      </nav>
      <nav class="nav">
        <!-- <g-link class="nav__link" to="/about/">About Me</g-link> -->
        <g-link class="nav__link" to="/blog">I'm Learning This!</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
