import { useState } from 'react';

import { Button } from './components/button/Button';
import {
  DEFAULT_THEME,
  FIIT_THEME,
  ThemeProvider,
  createTheme,
  useTheme,
  type AppTheme,
} from './ThemeContext';
import './App.css';

const customTheme = createTheme({
  backgroundPrimary: '#F3F3F3',
  backgroundSecondary: '#FFFFFF',
  buttonColorPrimary: '#C25400',
  textPrimary: '#1B1E22',
});

const themes = {
  default: DEFAULT_THEME,
  fiit: FIIT_THEME,
  custom: customTheme,
} as const;

type DemoThemeName = keyof typeof themes;

function App() {
  const [themeName, setThemeName] =
    useState<DemoThemeName>('default');

  return (
    <ThemeProvider theme={themes[themeName]}>
      <ThemeDemo
        selected={themeName}
        onChange={setThemeName}
      />
    </ThemeProvider>
  );
}

const ThemeDemo = ({
  selected,
  onChange,
}: {
  selected: DemoThemeName;
  onChange: (theme: DemoThemeName) => void;
}) => {
  const theme = useTheme();

  return (
    <main
      className="theme-demo"
      style={{
        background: theme.backgroundPrimary,
        color: theme.textPrimary,
      }}
    >
      <section
        className="theme-demo__panel"
        style={{
          background: theme.backgroundSecondary,
        }}
      >
        <div className="theme-demo__header">
          <div>
            <h1>UI Kit Themes</h1>
            <p>
              Wrap your app with ThemeProvider and pass a bundled or custom
              theme.
            </p>
          </div>

          <ThemeSwitcher
            selected={selected}
            onChange={onChange}
          />
        </div>

        <div className="theme-demo__buttons">
          <Button
            color="buttonColorPrimary"
            textColor="buttonColorText"
          >
            Primary
          </Button>

          <Button
            color="buttonColorSecondary"
            textColor="backgroundPrimary"
          >
            Secondary
          </Button>

          <Button
            color="buttonColorDanger"
            textColor="buttonColorText"
          >
            Danger
          </Button>
        </div>

        <ThemeDebugger theme={theme} />
      </section>
    </main>
  );
};

const ThemeSwitcher = ({
  selected,
  onChange,
}: {
  selected: DemoThemeName;
  onChange: (theme: DemoThemeName) => void;
}) => (
  <div className="theme-demo__switcher">
    {Object.keys(themes).map((themeName) => (
      <button
        key={themeName}
        type="button"
        className={
          selected === themeName
            ? 'theme-demo__switcher-button theme-demo__switcher-button--active'
            : 'theme-demo__switcher-button'
        }
        onClick={() => onChange(themeName as DemoThemeName)}
      >
        {themeName}
      </button>
    ))}
  </div>
);

const ThemeDebugger = ({ theme }: { theme: AppTheme }) => {
  const tokens = [
    ['textPrimary', theme.textPrimary],
    ['backgroundPrimary', theme.backgroundPrimary],
    ['buttonColorPrimary', theme.buttonColorPrimary],
    ['buttonColorSecondary', theme.buttonColorSecondary],
    ['buttonColorDanger', theme.buttonColorDanger],
  ];

  return (
    <dl className="theme-demo__tokens">
      {tokens.map(([name, value]) => (
        <div key={name}>
          <dt>{name}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default App;
