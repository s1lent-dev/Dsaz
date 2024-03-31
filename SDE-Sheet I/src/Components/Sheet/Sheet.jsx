import React from "react";
import "./styles.scss";
import Topics from "./Topics";
import { SheetData } from "../DsaSheet";
import { useState, useEffect } from "react";
import axios from "axios";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
const Sheet = ({ islogin }) => {
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/sheets/getAll');
        setSheetData(res.data);
        console.log(res);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchSheetData();
  }, []);

  const chunkedData = [];
  for (let i = 0; i < sheetData.length; i += 3) {
    chunkedData.push(sheetData.slice(i, i + 3));
  }

  return (
    <div className="Sheet">
      <ContentWrapper>
        <div className="container">
          {chunkedData.map((chunk, index) => (
            <div className="row" key={index}>
              {chunk.map((data, index) => (
                <div className="column" key={data.topicId}>
                  <Topics data={data} islogin={islogin} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Sheet;
