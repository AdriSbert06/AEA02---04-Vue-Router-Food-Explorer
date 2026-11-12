
<template>
  <header class="navbar-header">

    <h1 class="navbar-title">
      Receptari Vue + TheMealDB
    </h1>

    <nav class="flex items-center gap-4">
      <RouterLink
        to="/"
        class="text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300"
      >
        Home
      </RouterLink>
    </nav>

  </header>
</template>

<style scoped>
.navbar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
}

.navbar-title {
  color: black;
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
  text-align: center;
  flex: 1;
}
</style>
