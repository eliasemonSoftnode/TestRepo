import type { NextPage } from 'next';
import useWindowSize, { WindowSize } from '../../hooks/useWindowSize';

// interface HomePageProps {}

const HomePage: NextPage = () => {
  const windowSize: WindowSize = useWindowSize({
    initialWidth: 800,
    initialHeight: 600,
  });

  return (
    <div>
      <h1>Hello softnode</h1>
      <p>try to fix the window width: {windowSize.initialWidth}px</p>
      <p>try to fix the window height: {windowSize.initialHeight}px</p>
      <p>Current window width: {windowSize.width}px</p>
      <p>Current window height: {windowSize.height}px</p>
    </div>
  );
};

export default HomePage;
