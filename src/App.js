import './App.css';
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SavedCardSection from './components/SavedCardSection'
import SlickCardSection from './components/SlickCardSection'
import Timeline from './components/Timeline';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <SavedCardSection />
      <SlickCardSection />
      <Timeline />
    </div>
  );
}

export default App;
