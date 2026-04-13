import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { createSystem, defaultConfig } from "@chakra-ui/react";


export const tailorDeskSystem = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        /* =========================
           BRAND (Primary Navy)
           Use for: Sidebar, headers, primary surfaces
        ========================== */
        brand: {
          50: { value: "#f1f5f9" },
          100: { value: "#e2e8f0" },
          200: { value: "#cbd5e1" },
          300: { value: "#94a3b8" },
          400: { value: "#64748b" },
          500: { value: "#334155" }, // Main brand color
          600: { value: "#1e293b" },
          700: { value: "#0f172a" }, // Sidebar (light mode)
          800: { value: "#0b1120" }, // Dark background
          900: { value: "#020617" }, // Deep dark mode bg
        },

        /* =========================
           GOLD (Accent)
           Use for: Buttons, highlights, active states
        ========================== */
        gold: {
          50: { value: "#fff8e1" },
          100: { value: "#ffecb3" },
          200: { value: "#ffe082" },
          300: { value: "#ffd54f" },
          400: { value: "#ffca28" },
          500: { value: "#D4A017" }, // Main accent
          600: { value: "#b88912" }, // Hover state
          700: { value: "#9e7410" },
        },

        /* =========================
           SUCCESS
           Use for: Completed orders, paid status
        ========================== */
        success: {
          500: { value: "#16a34a" },
          600: { value: "#15803d" },
        },

        /* =========================
           WARNING
           Use for: Pending, trial stage
        ========================== */
        warning: {
          500: { value: "#f59e0b" },
          600: { value: "#d97706" },
        },

        /* =========================
           ERROR
           Use for: Cancelled, failed payments
        ========================== */
        danger: {
          500: { value: "#dc2626" },
          600: { value: "#b91c1c" },
        },

        /* =========================
           NEUTRAL
           Use for: Borders, subtle backgrounds
        ========================== */
        neutral: {
          50: { value: "#f9fafb" }, // Light bg
          100: { value: "#f3f4f6" }, // Card bg (light mode)
          200: { value: "#e5e7eb" }, // Borders
          300: { value: "#d1d5db" },
          400: { value: "#9ca3af" }, // Muted text
          500: { value: "#6b7280" },
          600: { value: "#4b5563" },
          700: { value: "#374151" }, // Card bg (dark mode)
          800: { value: "#1f2937" },
          900: { value: "#111827" },
        },
      },
    },
  },
});


export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={tailorDeskSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
