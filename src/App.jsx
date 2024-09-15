
import ProfileCard from './components/ProfileCard';
import ActivityCard from './components/ActivityCard';

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary">
      <div className="mt-20 md:mt-0 grid w-64 grid-flow-row grid-rows-2 gap-4 sm:h-96 sm:w-max sm:grid-flow-col">
        <ProfileCard />
        <ActivityCard />

      </div>
    </div>
  );
};

export default App;
