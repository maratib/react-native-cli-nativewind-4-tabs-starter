import { forwardRef } from 'react';
import type { ComponentRef } from 'react';
import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { brand, headerBackgroundColor } from '../theme/brand';

export type ButtonProps = TouchableOpacityProps & {
  title?: string;
};

export const Button = forwardRef<ComponentRef<typeof TouchableOpacity>, ButtonProps>(
  ({ title, className, style, ...touchableProps }, ref) => {
    const resolvedScheme = useThemeStore((s) => s.resolvedScheme);

    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.8}
        className={['rounded-lg px-6 py-3', className].filter(Boolean).join(' ')}
        style={[{ backgroundColor: headerBackgroundColor(resolvedScheme) }, style]}
        {...touchableProps}
      >
        <Text className="text-center text-base font-bold" style={{ color: brand.onPrimary }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  },
);

Button.displayName = 'Button';
