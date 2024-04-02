import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSheetData } from './sheetSlice';
import { setSingleSheetData } from './singleSheetSlice';
import { getUser, setIsLogin } from './userSlice';

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                dispatch(setSheetData(data));
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [url, dispatch]);

    return { loading, error };
};

const useFetchSingleSheet = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                dispatch(setSingleSheetData(data));
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url, dispatch]);

    return { loading, error };
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
        console.log(data);
        if(data){
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 10);
            localStorage.setItem("isLogin", true); // Corrected to set isLogin to true
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
      if (expirationDate && new Date(parseInt(expirationDate)) > new Date()) {
        dispatch(setIsLogin(true));
      }
    }, [dispatch]);
  
    return { login, loading, error };
  };
  
  


export { useFetch, useRegister, useLogin, useFetchSingleSheet };
