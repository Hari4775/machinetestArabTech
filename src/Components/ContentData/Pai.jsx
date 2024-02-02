// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { TEChart } from "tw-elements-react";

// const Pai = () => {
//   const [categoryData,setCategoryData] = useState([]);
//   console.log(categoryData,"category data")
//   const fetchdata= async()=> {
//    try{
//          const response=await axios.get("http://localhost:3001/api/pie-chart")
//           if(response){
//             setCategoryData(response?.data)
//           }
//    }
//    catch(err){
//     console.log(err,"errror fetching data")
//    }
//   };

//   useEffect(()=>{
//     fetchdata()
//   },[])
//   return (
//     <div className='bg-white ml-8 rounded-l-md rounded-r-md w-2/5 '>

// <TEChart
//         type="pie"
//         data={{
//           labels: categoryData?.map(item => item.label),
//           datasets: [
//             {
//               label: "Traffic",
//               data: categoryData?.map(item => item?.value),
//               backgroundColor: [
//                 "rgba(34,139,34)",
//                 "rgba(60,179,113)",
//                 "rgba(183, 244, 216)",
//                 "rgba(173,223,173)",
//                 "rgba(46,139,87)",
//               ],
//             },
//           ],
//         }}
//         options={{
//           legend: {
//             position: "left",
//             align: "start",
//             labels: {
//               padding: 20,
//               padding:30,

//               // Adjust the padding if needed
//             },
//           },
//         }}
//       />    </div>
//   )
// }

// export default Pai

import axios from "axios";
import React, { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";

const Pai = () => {
  const [categoryData, setCategoryData] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/pie-chart");
      if (response) {
        setCategoryData(response?.data);
      }
    } catch (err) {
      console.log(err, "error fetching data");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="bg-white  rounded-l-md rounded-r-md  shadow-lg  w-1/6">
      <TEChart
        height={"100%"}
        width={"100%"}
        type="pie"
        data={{
          labels: categoryData?.map((item) => item.label),
          datasets: [
            {
              label: "Traffic",
              data: categoryData?.map((item) => item?.value),
              backgroundColor: [
                "rgba(34,139,34)",
                "rgba(60,179,113)",
                "rgba(183, 244, 216)",
                "rgba(173,223,173)",
                "rgba(46,139,87)",
              ],
            },
          ],
        }}
        options={{
          legend: {
            position: "left",
            align: "start",
            labels: {},
          },
          height: 300,
        }}
      />
    </div>
  );
};

export default Pai;
