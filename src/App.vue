<template>
  <RatingComp v-if="storeRate.isShow" />
  <ThanksComp v-else />
</template>

<script setup>
import RatingComp from "./components/RatingComp.vue";
import ThanksComp from "./components/ThanksComp.vue";

import { useRateStore } from "./stores/ratevalue";
const storeRate = useRateStore();
</script>
