import { useNavigate } from 'react-router-dom';

const useRedirectToPage = (url: string) => {
  const navigate = useNavigate();
  navigate(url);
};

export default useRedirectToPage;
