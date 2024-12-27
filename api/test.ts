import axios from "axios";

export const testRequest = {
  getTest: async (id: string) => {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    return res;
  },
};
