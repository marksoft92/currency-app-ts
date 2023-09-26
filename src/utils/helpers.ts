import { useNavigate } from 'react-router-dom';

export const useCustomNavigate = () => {
    const navigate = useNavigate();

    const onPush = (path: string) => {
        navigate(path);
    };

    return onPush;
};



export const convertToHyphenCase = (str: string) => {

    return str.replace(/\s+/g, '-').toLowerCase()
 }

