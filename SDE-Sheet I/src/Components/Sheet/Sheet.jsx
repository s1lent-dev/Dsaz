import React from "react";
import "./styles.scss";
import Topics from "./Topics";
import { useSelector } from "react-redux";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useFetch } from "../../context/ApiCalls";

const Sheet = () => {
  // Use useSelector to access Redux state
  const sheetData = useSelector((state) => state.sheet);
  const isLogin = useSelector((state) => state.user.isLogin);

  // Use the useFetch hook to fetch data and manage loading/error states
  const { loading, error } = useFetch('http://localhost:3000/api/sheets/getAll');

  // Chunk the data
  const chunkedData = [];
  for (let i = 0; i < sheetData.length; i += 3) {
    chunkedData.push(sheetData.slice(i, i + 3));
  }

  return (
    <div className="Sheet">
      <ContentWrapper>
        <div className="container">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            chunkedData.map((chunk, index) => (
              <div className="row" key={index}>
                {chunk.map((data, index) => (
                  <div className="column" key={data.topicId}>
                    {/* Pass data to Topics component */}
                    <Topics data={data} islogin={isLogin} />
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Sheet;
