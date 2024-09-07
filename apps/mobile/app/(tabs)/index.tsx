import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WebViewLayout } from "@/layout/webview-layout";

export default function LoginPage() {
  const insets = useSafeAreaInsets();
  return (
    <WebViewLayout
      pathname="/"
      style={{
        paddingTop: insets.top,
      }}
    />
  );
}
