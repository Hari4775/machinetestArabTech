import axios from "axios";
import React, { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";

const Graph = () => {
  const [data, setData] = useState([]);
  console.log(data, "dtaa");

  const tableData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/graph");
      setData(response.data);
    } catch (error) {
      console.log(error, "data fetching error");
    }
  };

  useEffect(() => {
    tableData();
  }, []);

  return (
    <div className=" mx-10 rounded-l-lg rounded-r-lg  shadow-lg w-3/5 bg-white ">
      <TEChart
        className="TEChart"
        height={"92%"}
        type="line"
        data={{
          labels: data?.map((item) => item?.x),
          datasets: [
            {
              label: "Traffic",

              data: data?.map((item) => item?.y),
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;
