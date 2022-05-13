<template>
  <div class="box-border xxs:w-[13.5rem] xs:w-5/6 mx-auto">
    <div class="flex justify-center mt-9 mb-6">
      <img src="../assets/img/illustration-thank-you.svg" alt="thanks-image" />
    </div>
    <div
      class="flex justify-center text-[#fb7413] bg-[#252d37] rounded-full w-48 py-1 mb-7 mx-auto"
    >
      <p>You selected {{ storeRate.chosenRate }} out of 5</p>
    </div>
    <div class="flex flex-col items-center mb-4">
      <p class="text-2xl mb-4 font-bold">Thank you!</p>
      <p class="text-sm text-center mb-5 text-[#959eac] font-normal">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  </div>
</template>

<script setup>
/* import { ref } from "vue"; */
import { useRateStore } from "../stores/ratevalue";

const storeRate = useRateStore();
</script>
