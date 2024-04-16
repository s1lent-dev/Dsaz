import React, { useEffect, useState } from "react";
import "./styles.scss";
import Topics from "./Topics";
import { useSelector } from "react-redux";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useFetch } from "../../context/ApiCalls";
import Loading from "./Loading";

const Sheet = () => {

  const Topic = useSelector((state) => state.Topics.topic);
  const sheetData = useSelector((state) => state.sheet.sheetData);
  const isLogin = useSelector((state) => state.user.isLogin);
  const userData = useSelector((state) => state.user.userData);
  const isLoading = useSelector((state) => state.sheet.isLoading);
  const isError = useSelector((state) => state.sheet.isError);
  const AuthToken = userData.accessToken;
  const { fetchData } = useFetch();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (isLogin) {
      fetchData(
        "https://dsaz-server.vercel.app/api/sheets/getAll",
        AuthToken,
        userData.email
      ); // Pass email as a parameter
    }
  }, []);

  useEffect(() => {
    if (Topic) {
      const filtered = sheetData.filter((data) =>
        data.topic.toLowerCase().includes(Topic.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(sheetData);
    }
  }, [Topic, sheetData]);

  // Chunk the data
  const chunkedData = [];
  for (let i = 0; i < filteredData.length; i += 3) {
    chunkedData.push(filteredData.slice(i, i + 3));
  }

  return (
    <div className="Sheet">
      <ContentWrapper>
        <div className="container">
          {!isLogin ? (
            <Loading />
          ) : isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error: {isError.message}</div>
          ) : (
            chunkedData.map((chunk, index) => (
              <div className="row" key={index}>
                {chunk.map((data) => (
                  <div className="column" key={data._id}>
                    {/* Pass data to Topics component */}
                    <Topics data={data} isLogin={isLogin} />
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
