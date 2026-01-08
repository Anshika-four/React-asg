import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard.js'

function App() {
  return (
    <div className="App">
      <UserCard name='Anshika' email='anshikasharma@gmail.com' role='Engineer'/> 
      <UserCard name='Ram' email='ram@gmail.com' role='Admin'/>
      <UserCard name='Riya' email='riyasingh@gmail.com' role='User'/>
    </div>
  );
}

export default App;
