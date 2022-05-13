import { defineStore } from "pinia";

export const useRateStore = defineStore("rates", {
  state: () => {
    return {
      rateValue: [1, 2, 3, 4, 5],
      chosenRate: null,
      isShow: true,
    };    
  },
});
