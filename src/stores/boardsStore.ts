import { defineStore } from "pinia";
import axios from "axios";

interface iBoards {
  name: string;
  category: string;
}

export const useBoardsStore = defineStore("boardsStore", {
  state: () => ({
    boards: [] as iBoards[],
    threads: {},
  }),
  actions: {
    getBoards: async function () {
      const listOfBoards = "https://2ch.hk/api/mobile/v2/boards";

      const res = await axios.get(
        `https://anychan-proxy.vercel.app/?url=${listOfBoards}`
      );
      this.boards = res.data;
    },

    getBoard: async function (boardId) {
      const board = `https://2ch.hk/${boardId}/index.json`;

      const res = await axios.get(
        `https://anychan-proxy.vercel.app/?url=${board}`
      );

      this.threads = res.data.threads;
    },
  },
  getters: {
    filteredBoards: ({ boards }) => {
      const categories = boards.map((boards) => boards.category);
      const uniqCategories = new Set(categories);
      const uniqCategoriesArray = [...uniqCategories];
      const result = {};

      uniqCategoriesArray.forEach((category) => {
        result[category] = boards.filter(
          (board) => board.category === category
        );
      });

      return result;
    },
  },
});
