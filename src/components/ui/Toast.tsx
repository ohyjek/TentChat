/**
 * Toast.tsx - App-level Toast wrapper
 *
 * Connects the @tentchat/ui ToastContainer to the app's toast store.
 * Re-exports everything from the UI library for convenience.
 */

import { dismissToast, toasts } from "@stores/toast";
import { ToastContainer as UIToastContainer } from "@tentchat/ui";

// Re-export the type from the UI library
export type { ToastData, ToastType } from "@tentchat/ui";

/**
 * App-specific ToastContainer that connects to the toast store.
 */
export function ToastContainer() {
  return <UIToastContainer toasts={toasts()} onDismiss={dismissToast} />;
}
