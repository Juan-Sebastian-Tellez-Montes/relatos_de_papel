import {useNavigate} from 'react-router-dom';

export const useNavigateToBook = () => {
    const navigate = useNavigate();

    return (id: number) => {
        navigate(`/book/${id}`);
    };
};
