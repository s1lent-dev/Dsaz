import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSheetData } from './sheetSlice';
import { getUser } from './userSlice';

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

const useLogin = (url, body) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const login = async () => {
        setLoading(true);
        try {
            const res = await axios.post(url, body);
            const data = res.data;
            dispatch(getUser(data));
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { login, loading, error };
};

export { useFetch, useLogin };
