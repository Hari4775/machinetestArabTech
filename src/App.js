import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';

function App() {
  return (
    <>
    {/* <div className="App bg-yellow-300 flex">
      <Sidebar/>
      sede
      
      <div className='flex flex-col bg-green-500 w-full'>
        head
      <Header/>
      </div>
      <div className='flex flex-row bg-blue-600  w-full h-full'>
        content
        <Content/>
      </div>
      </div>   */}

      <div className='main bg-slate-200 flex'>
      <Sidebar/>
      <Content/>

      </div>
    </>
    
    
  );
}

export default App;
