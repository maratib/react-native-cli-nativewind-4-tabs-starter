import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppTopBar } from '../components/AppTopBar';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useThemeStore } from '../store/themeStore';
import { accentOnSurfaceColor } from '../theme/brand';

export type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export function RootTabs() {
  const resolvedScheme = useThemeStore((s) => s.resolvedScheme);
  const isDark = resolvedScheme === 'dark';

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        header: () => <AppTopBar title={route.name} />,
        tabBarActiveTintColor: accentOnSurfaceColor(resolvedScheme),
        tabBarInactiveTintColor: isDark ? '#64748b' : '#94a3b8',
        tabBarStyle: {
          backgroundColor: isDark ? '#020617' : '#ffffff',
          borderTopColor: isDark ? '#1e293b' : '#e2e8f0',
        },
        tabBarButton: (props) => (
          <PlatformPressable {...props} android_ripple={{ color: 'transparent' }} />
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
