import axios from "axios";

const getHistory = async () => {
  const res = await axios.get("http://kaboom.rksv.net/api/historical");
  if (res.statusText === "OK") {
    return (res.data || []).map((item) => {
      const temp = item.split(",");
      let date = new Date(+temp[0]);
      let y = date.getFullYear();
      let m = date.getMonth();
      return {
        x: new Date(+temp[0]),
        y: temp.slice(1, 5).map((i) => +i),
      };
    });
  }
};

export default getHistory;
