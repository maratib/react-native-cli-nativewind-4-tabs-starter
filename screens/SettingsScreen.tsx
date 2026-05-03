import { Text, View } from 'react-native';

export function SettingsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6 dark:bg-slate-950">
      <Text className="text-center text-2xl font-bold text-slate-900 dark:text-slate-50">
        Settings
      </Text>
      <Text className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
        App preferences and options
      </Text>
    </View>
  );
}
