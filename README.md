# reactWind — React Native + NativeWind starter

This repo is a **ready-to-run app skeleton**, not an empty `react-native init` template. Navigation, theming, safe areas, and Tailwind-style styling are already wired so you can **rename the app, adjust branding, add screens**, and ship features instead of redoing boilerplate.

| Piece            | Version  |
| ---------------- | -------- |
| React            | 19.2.3   |
| React Native     | 0.85.2   |
| NativeWind       | 4.2.3    |
| React Navigation | Bottom tabs |
| State (theme)    | Zustand  |

---

## What you get out of the box

- **Bottom tabs** — Home and Settings with icons (`navigation/RootTabs.tsx`).
- **Stack-style header** — Custom top bar with safe area (`components/AppTopBar.tsx`).
- **Light / dark / system theme** — Preference stored in Zustand; syncs with the OS when set to system (`store/themeStore.ts`, `hooks/useAppearanceThemeSync.ts`).
- **NativeWind 4** — Use `className` on React Native views; global styles from `assets/css/tailwind.css`.
- **Patches** — `patch-package` runs on install; a small patch ships with the repo for NativeWind-related tooling compatibility.

---

## Prerequisites

- **Node.js** ≥ 22.11 (see `package.json` `engines`).
- **Bun** (this project uses Bun for installs and scripts; you can adapt to npm/yarn if you prefer).
- **iOS**: Xcode and CocoaPods (`pod`).
- **Android**: Android SDK, an emulator or device, and `ANDROID_HOME` configured.

---

## Quick start (run the sample app)

From the project root:

```bash
bun install
```

**iOS** — install native dependencies, then run:

```bash
npx pod-install
# If pod resolution fails:
# cd ios && pod install --repo-update && cd ..

bun start
# In another terminal:
bun ios
```

**Android**:

```bash
bun start
# In another terminal:
bun android
```

**Android — generate an APK** (release build; JS bundle is included in the APK):

```bash
bun run android:apk
```

When the build finishes, install or share this file:

`android/app/build/outputs/apk/release/app-release.apk`

For a debug APK (faster, not optimized for distribution): `bun run android:apk:debug` → `android/app/build/outputs/apk/debug/app-debug.apk`.

This starter signs **release** with the **debug** keystore (see `android/app/build.gradle`). That is fine for local installs and testing. For Play Store distribution, create a release keystore and configure `signingConfigs.release` as described in the [React Native signed APK guide](https://reactnative.dev/docs/signed-apk-android).

Other useful scripts: `bun run lint`, `bun run test`, `bun run clean` (Metro + Android clean).

---

## Turn this into *your* app

1. **Rename the project** — Follow the official React Native rename flow (app display name, bundle id, `ios` / `android` project names). This starter uses the package name `reactWind` until you change it.
2. **Brand colors** — Edit `theme/brand.ts` (header, status bar, tab accent). The top bar and tab bar read from these helpers.
3. **Tabs and routes** — Add or change screens in `navigation/RootTabs.tsx` and create screen files under `screens/`. Extend `RootTabParamList` when you add typed routes.
4. **Global providers** — Wrap new context or data providers in `providers/AppProviders.tsx` (already includes safe area and theme-driven status bar).
5. **Reusable UI** — Put shared components in `components/` (see `Button.tsx`).

---

## Project layout

| Path | Role |
| ---- | ---- |
| `App.tsx` | Root: imports Tailwind CSS, `NavigationContainer`, `AppProviders`, `RootTabs`. |
| `assets/css/tailwind.css` | Tailwind entry; keep `@tailwind` directives here for NativeWind. |
| `navigation/` | Tab navigator and route types. |
| `screens/` | Tab screens and future stack screens. |
| `components/` | Shared UI (top bar, buttons). |
| `store/` | Zustand stores (theme preference + resolved scheme). |
| `theme/` | Brand tokens and color helpers. |
| `hooks/` | e.g. appearance sync for theme. |
| `tailwind.config.js` | Content globs for class scanning; uses `nativewind/preset`. |
| `babel.config.js` | Includes `nativewind/babel` preset. |
| `metro.config.js` | Metro config for the bundler. |
| `patches/` | Patches applied automatically after `bun install` via `patch-package`. |

If you add **new folders** that contain `className` usage, add their glob to `tailwind.config.js` under `content` so those classes are included in the build.

---

## NativeWind and dependencies

Core styling packages are already in `package.json` (`nativewind`, `tailwindcss`, `react-native-reanimated`, `react-native-safe-area-context`, `react-native-worklets`, etc.). You normally **do not** need to repeat the original NativeWind install steps unless you are upgrading or fixing a broken install.

---

## Troubleshooting

- **Metro cache issues** — `bun start` already uses `--reset-cache`; you can also run `bun run clean` if native/Android builds act stale.
- **iOS pods** — Prefer `npx pod-install` from the repo root; use `pod install --repo-update` inside `ios/` if dependency resolution fails.

For general React Native setup (simulators, JDK, Ruby/CocoaPods), use the [React Native environment docs](https://reactnative.dev/docs/set-up-your-environment).
