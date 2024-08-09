import { defineStore } from "pinia";
import axios from "axios";

export const useThreadStore = defineStore("ThreadStore", {
  state: () => ({
    thread: [],
  }),
  actions: {
    getThread: async function (boardId: string, numOfThread: string) {
      const thread = `https://2ch.hk/${boardId}/res/${numOfThread}.json`;

      const res = await axios.get(
        `https://anychan-proxy.vercel.app/?url=${thread}`
      );
      this.thread = res.data;
    },
  },
});
