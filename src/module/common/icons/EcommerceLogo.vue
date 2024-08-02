<template>
  <svg
    viewBox="0 0 64 64"
    id="icons"
    xmlns="http://www.w3.org/2000/svg"
    :fill="color ? color : '#787878'"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <defs></defs>
      <title></title>
      <path
        :fill="color ? color : '#787878'"
        d="M55,7H32a2,2,0,0,0-1.41.59l-26,26a2,2,0,0,0,0,2.82l23,23a2,2,0,0,0,2.82,0l26-26A2,2,0,0,0,57,32V9A2,2,0,0,0,55,7ZM53,31.17l-24,24L8.83,35l24-24H53Z"
      ></path>
      <circle cx="45.5" cy="18.5" r="3.5"></circle>
    </g>
  </svg>
</template>

<style scoped></style>

<script lang="ts" setup>
interface Props {
  color?: string;
}

defineProps<Props>();
</script>
