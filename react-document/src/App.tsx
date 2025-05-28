import { ThemeProvider } from './components/ThemeContext';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { Game } from './components/game/Game';
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Test</h1>
        <ThemeToggleButton />
        <Game />
      </div>
    </ThemeProvider>
  );
}

export default App;
