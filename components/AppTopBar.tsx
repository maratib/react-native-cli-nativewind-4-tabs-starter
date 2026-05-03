import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useThemeStore } from '../store/themeStore';
import { brand, headerBackgroundColor } from '../theme/brand';

type AppTopBarProps = {
  title: string;
};

export function AppTopBar({ title }: AppTopBarProps) {
  const insets = useSafeAreaInsets();
  const resolvedScheme = useThemeStore((s) => s.resolvedScheme);
  const barBg = headerBackgroundColor(resolvedScheme);

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: barBg,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.12)',
      }}
    >
      <View className="min-h-[48px] flex-row items-center justify-between px-4">
        <Text
          className="mr-3 flex-1 text-xl font-semibold"
          style={{ color: brand.onPrimary }}
          numberOfLines={1}
        >
          {title}
        </Text>
        <View className="flex-row items-center gap-1">
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Search"
            hitSlop={10}
            className="p-2"
          >
            <Ionicons name="search" size={24} color={brand.onPrimary} />
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Open menu"
            hitSlop={10}
            className="p-2"
          >
            <Ionicons name="ellipsis-vertical" size={22} color={brand.onPrimary} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
