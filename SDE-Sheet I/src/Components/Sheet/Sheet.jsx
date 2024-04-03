import React, { useEffect } from "react";
import "./styles.scss";
import Topics from "./Topics";
import { useSelector, useDispatch } from "react-redux";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useFetch } from "../../context/ApiCalls";
import { setSheetData } from "../../context/sheetSlice";

const Sheet = () => {
  const dispatch = useDispatch();
  const sheetData = useSelector((state) => state.sheet.sheetData);
  const isLogin = useSelector((state) => state.user.isLogin);
  const userData = useSelector((state) => state.user.userData);
  const isLoading = useSelector((state) => state.sheet.isLoading);
  const isError = useSelector((state) => state.sheet.isError);
  const AuthToken = userData.accessToken;

  // Use the useFetch hook to fetch data and manage loading/error states
  const { fetchData } = useFetch();

  useEffect(() => {
    if (isLogin && AuthToken) {
      fetchData('http://localhost:3000/api/sheets/getAll', AuthToken);
    }
  }, []);

  // Chunk the data
  const chunkedData = [];
  for (let i = 0; i < sheetData.length; i += 3) {
    chunkedData.push(sheetData.slice(i, i + 3));
  }

  return (
    <div className="Sheet">
      <ContentWrapper>
        <div className="container">
          {!isLogin ? (
            <p>Please log in to view sheet data.</p>
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
