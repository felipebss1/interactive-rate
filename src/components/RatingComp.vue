<template>
  <div class="box-border xxs:w-[13.5rem] xs:w-5/6 mx-auto">
    <div
      class="flex items-center justify-center rounded-full bg-[#252d37] w-10 h-10 my-5"
    >
      <img
        class="w-4 h-4"
        src="../assets/img/icon-star.svg"
        alt="yellow-star"
      />
    </div>
    <div>
      <p class="text-2xl mb-3 font-bold">How did we do?</p>
      <p class="text-sm mb-5 text-[#959eac] font-normal">
        Please let us know we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
    <div>
      <ul class="flex place-content-between">
        <li
          tabindex="0"
          v-for="(rate, index) in storeRate.rateValue"
          :key="index"
          @click="selectedRate(rate)"
          class="flex items-center justify-center rounded-full w-10 h-10 list-none bg-[#252d37] text-[#7c8798] hover:bg-[#fb7413] hover:text-white focus:bg-[#959eac] focus:text-white cursor-pointer"
        >
          {{ rate }}
        </li>
      </ul>
    </div>
    <div
      class="flex justify-center rounded-full bg-[#fb7413] my-7 text-sm hover:bg-white hover:text-[#fb7413] cursor-pointer"
    >
      <button class="px-28 py-3" type="submit" @click="redirect">SUBMIT</button>
    </div>
  </div>
</template>

<script setup>
/* import { ref } from "vue"; */
import { useRateStore } from "../stores/ratevalue";

const storeRate = useRateStore();

function selectedRate(selected) {
  storeRate.chosenRate = selected;
}

function redirect() {
  storeRate.isShow = !storeRate.isShow;
}
</script>
