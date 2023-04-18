import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d30a490484b1418a97e12b4c58b3dac3",
  },
});
