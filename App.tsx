import './assets/css/tailwind.css';
import { NavigationContainer } from '@react-navigation/native';
import { AppProviders } from './providers/AppProviders';
import { RootTabs } from './navigation/RootTabs';

export default function App() {
  return (
    <AppProviders>
      <NavigationContainer>
        <RootTabs />
      </NavigationContainer>
    </AppProviders>
  );
}
