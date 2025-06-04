import { ThemeProvider } from './components/ThemeContext';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { Game } from './components/game/Game';
import { TodoList } from './components/todoList/todoList';
function App() {
  return (
    <ThemeProvider>
      {/* <div>
        <h1>Theme Test</h1>
        <ThemeToggleButton />
        <Game />
      </div> */}
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
