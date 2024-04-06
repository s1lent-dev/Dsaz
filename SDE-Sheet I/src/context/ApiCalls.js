import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSheetData, setIsLoading,  setIsError  } from './sheetSlice';
import { setSingleSheetData, setisLoading,  setisError, setsinglesheetdata} from './singleSheetSlice';
import { getUser, setIsLogin } from './userSlice';
import { setTopicsData } from './TopicSlice';

const useFetchAllTopics = () => {
  const dispatch = useDispatch();
  const fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      dispatch(setTopicsData(data));
      localStorage.setItem("allTopics", JSON.stringify(data));
    } catch (error) { 
      console.log(error);
    }
  };
  return { fetchData };
};

const useFetch = () => {
  const dispatch = useDispatch();
  const fetchData = async (url, token, email) => { // Pass email as a separate parameter
    try {
      const res = await axios.get(url, { headers: { token : `Bearer ${token}` } , params: { email } }); // Pass email as a query parameter
      const data = res.data;
      dispatch(setSheetData(data));
      dispatch(setIsLoading(false));
      localStorage.setItem("sheetData", JSON.stringify(data));
      localStorage.setItem("isLoading", false);
      localStorage.setItem("isError", false);
    } catch (error) {
      dispatch(setIsError(true));
      dispatch(setIsLoading(false));
      console.log(error);
    }
  };

  return { fetchData };
};

export default useFetch;


const useFetchSingleSheet = () => {
    const dispatch = useDispatch();
        const fetchData = async (url, token, email) => {
            try {
                const res = await axios.get(url, { headers: {token : `Bearer ${token}`}, params: { email } });
                const data = res.data;
                dispatch(setSingleSheetData(data));
                dispatch(setisLoading(false));
                localStorage.setItem("singleSheetData", JSON.stringify(data));
                localStorage.setItem("isLoading", false);
                localStorage.setItem("isError", false);
            } catch (error) {
                dispatch(setisError(true));
                dispatch(setisLoading(false));
                console.log(error);
            }
        };

    return { fetchData };
};


const useUpdate = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateStatus = async (url, token, body, email) => {
    setLoading(true);
    try {
      const res = await axios.put(url, body, { headers: { token: `Bearer ${token}`} , params: { email } });
      const data = res.data;
      dispatch(setsinglesheetdata(data)); // Update local state with the updated data
      localStorage.setItem("singlesheetdata", JSON.stringify(data)); // Update local storage with the updated data
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { updateStatus, loading, error };
};

const useUpdateNotes = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateNotes = async (url, token, body, email) => {
    setLoading(true);
    try {
      const res = await axios.put(url, body, { headers: { token: `Bearer ${token}`} , params: { email } });
      const data = res.data;
      dispatch(setsinglesheetdata(data)); // Update local state with the updated data
      localStorage.setItem("singlesheetdata", JSON.stringify(data)); // Update local storage with the updated data
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  return { updateNotes, loading, error };
};




const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signup = async (url, body) => { // Accept URL and body as parameters
        setLoading(true);
        try {
            await axios.post(url, body); // Post data without expecting a response
            // Optionally, you can dispatch an action or perform any other logic after successful posting
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { signup, loading, error };
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const login = async (url, body) => {
    setLoading(true);
    try {
      const res = await axios.post(url, body);
      const data = res.data;
      if (data) {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 10);
        localStorage.setItem("isLogin", true);
        localStorage.setItem("userData", JSON.stringify(data)); // Set userData
        localStorage.setItem("expirationDate", expirationDate.getTime()); // Set expirationDate
        dispatch(getUser(data));
        dispatch(setIsLogin(true));
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const expirationDate = localStorage.getItem("expirationDate");
    const isLoginLocalStorage = JSON.parse(localStorage.getItem("isLogin"));
    if (isLoginLocalStorage && expirationDate && new Date(parseInt(expirationDate)) > new Date()) {
      dispatch(setIsLogin(true));
    }
  }, [dispatch]);

  return { login, loading, error };
};


export { useFetch, useRegister, useLogin, useFetchSingleSheet, useUpdate, useFetchAllTopics, useUpdateNotes };
