import {useNavigate} from 'react-router-dom';

export const useRedirection = () => {
    const navigate = useNavigate();

    return (path: string) => {
        navigate(path);
    };
};