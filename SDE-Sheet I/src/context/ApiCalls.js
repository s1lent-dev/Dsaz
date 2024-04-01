import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSheetData } from './sheetSlice';
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
            dispatch(getUser(data)); // Dispatch action to update user data
            dispatch(setIsLogin(true)); // Dispatch action to set isLogin to true
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    return { login, loading, error };
}


export { useFetch, useRegister, useLogin };
