import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpendableList from "../components/ExpendableList";
import SideBar from "../components/SideBar";

import data from "../../data/C367.json";

interface Item2 {
  name: string;
  done: boolean;
}

interface Item {
  name: string;
  items: Item2[];
}

interface Category {
  title: string;
  items: Item[];
}

interface GetJsonResponse {
  data: Category[];
  // data: any;
}

const C367: React.FC = () => {
  const [jsonData, setJsonData] = useState<GetJsonResponse>({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: GetJsonResponse = await axios.get<GetJsonResponse>(
          "../../data/C367.json"
        );
        // const data: GetJsonResponse = response.data;
        setJsonData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, []);

  return (
    <>
      <div style={{ flex: 1 }}>
        <SideBar data={jsonData.data} />
      </div>
    </>
  );
};

export default C367;
