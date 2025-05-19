import { useNavigate } from 'react-router-dom';

// Custom hook that combines navigation with scrolling to top
const useNavigateAndScroll = () => {
  const navigate = useNavigate();

  const navigateAndScroll = (to: string, scrollPosition: number = 0) => {
    // First scroll to the specified position with smooth behavior
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
    
    // Then navigate after a small delay to allow for smooth scrolling
    setTimeout(() => {
      navigate(to);
    }, 200);
  };

  return navigateAndScroll;
};

export default useNavigateAndScroll; 