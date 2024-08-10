<script lang="ts"></script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <div class="circle primary" />
      <div class="circle secondary" />
      <div class="circle tertiary" />
      <div class="circle bg" />
      <div class="circle bg-reverse" />
      <NuxtPage />
      <input type="text" />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@use "./assets/scss/index.scss";

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.page-e .rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.circle.primary {
  background: var(--primary);
}
.circle.secondary {
  background: var(--secondary);
}
.circle.tertiary {
  background: var(--tertiary);
}
.circle.accent {
  background: var(--accent);
}
.circle.bg {
  background: var(--bg);
}
.circle.bg-reverse {
  background: var(--bg-reverse);
}
</style>
