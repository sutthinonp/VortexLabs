import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,       // ✅ ซ่อน Header ของ Stack
        gestureEnabled: true,     // ✅ เปิด Swipe Back
        animation: 'slide_from_right', // ✅ ให้ความรู้สึกเหมือน push ธรรมดา
      }}
    />
  );
}