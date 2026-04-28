import {
  Box,
  VStack,
  Text,
  Icon,
  Flex,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  LuLayoutDashboard,
  LuSettings,
  LuUser,
  LuChevronLeft,
  LuChevronRight,
  LuPackage,
  LuUsers,
  LuTrendingUp,
} from "react-icons/lu";
import {
  useColorModeValue,
  useThemeColors,
  ColorModeButton,
} from "../../ui/color-mode";
import { logo } from "../../../assets/images";

const navItems = [
  { label: "Dashboard", icon: LuLayoutDashboard, path: "/dashboard" },
  { label: "Orders", icon: LuPackage, path: "/orders" },
  { label: "Clients", icon: LuUsers, path: "/clients" },
  { label: "Analytics", icon: LuTrendingUp, path: "/analytics" },
  { label: "Profile", icon: LuUser, path: "/profile" },
  { label: "Settings", icon: LuSettings, path: "/settings" },
];

export default function Sidebar() {
  const { bg, cardBg, textPrimary, textSecondary, borderColor, shadowColor } =
    useThemeColors();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ── Nav items ───────────────────────────────────────────────────
  const textColor = useColorModeValue("gray.700", "gray.300");
  const inactiveIcon = useColorModeValue("gray.500", "gray.400");

  // ── Toggle button ───────────────────────────────────────────────
  const toggleHover = useColorModeValue("neutral.200", "neutral.800");

  const navItemHoverBgModeValue = useColorModeValue(
    "neutral.200",
    "neutral.800",
  );

  // ── Footer text ─────────────────────────────────────────────────
  const footerColor = useColorModeValue("gray.400", "gray.600");

  return (
    <Box
      h="100vh"
      w={collapsed ? "60px" : "260px"}
      bg={bg}
      color={textColor}
      transition="width 0.3s ease"
      position="relative"
      flexShrink={0}
      boxShadow="lg"
      borderRight="1px solid"
      borderColor={borderColor}
      display="flex"
      flexDirection="column"
    >
      {/* ── Logo ── */}
      <Flex
        h="120px"
        align="center"
        px={collapsed ? 3 : 5}
        borderBottom="1px solid"
        borderColor={borderColor}
        // bg={logoBg}
        // flexShrink={0}
        justifyContent="center"
        alignItems="center"
      >
        <Flex align="center" flexDirection={"column"}>
          <Image src={logo} alt="Tailor Desk Logo" height="60px" width="60px" />
          {!collapsed && (
            <Text
              fontWeight="700"
              fontSize="xl"
              letterSpacing="tight"
              color="gold.500"
              fontFamily="SN Pro, sans-serif"
            >
              Tailor Desk
            </Text>
          )}
        </Flex>
      </Flex>

      {/* ── Nav items ── */}
      <VStack gap={1} align="stretch" flex={1}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Flex
              key={item.path}
              align="center"
              gap={3}
              px={3}
              py={3}
              // borderRadius="lg"
              cursor="pointer"
              bg={isActive ? navItemHoverBgModeValue : "transparent"}
              // bg={"transparent"}
              _hover={{ bg: navItemHoverBgModeValue }}
              onClick={() => navigate(item.path)}
              transition="all 0.2s ease"
              position="relative"
              overflow="hidden"
            >
              {/* Active left bar */}
              {isActive && (
                <Box
                  position="absolute"
                  left={0}
                  top="50%"
                  transform="translateY(-50%)"
                  w="3px"
                  h="100%"
                  bg={"gold.500"} // ← was activeText (white on white = invisible)
                  borderRadius="0 4px 4px 0"
                />
              )}

              <Icon
                as={item.icon}
                boxSize={5}
                flexShrink={0}
                color={isActive ? "gold.500" : inactiveIcon}
                transition="color 0.2s ease"
              />
              {!collapsed && (
                <Text
                  fontSize="sm"
                  fontWeight={isActive ? "600" : "400"}
                  color={isActive ? "gold.500" : textColor}
                  transition="color 0.2s ease"
                >
                  {item.label}
                </Text>
              )}
            </Flex>
          );
        })}
      </VStack>

      {/* ── Footer ── */}
      <Flex justifyContent="center" alignItems="center" py={2} flexDirection="column">
      {!collapsed && (
        <Box px={4} py={4} borderTop="1px solid" borderColor={borderColor} width="100%">
          <Text fontSize="xs" color={textSecondary} textAlign="center">
            © 2025 Tailor Desk
          </Text>
        </Box>
      )}
      <ColorModeButton />
      </Flex>

      {/* ── Collapse toggle ── */}
      <IconButton
        aria-label="Toggle sidebar"
        size="sm"
        borderRadius="full"
        position="absolute"
        top="24px"
        right="-16px"
        bg={navItemHoverBgModeValue}
        color={textColor}
        _hover={{ bg: toggleHover, transform: "scale(1.1)" }}
        _active={{ transform: "scale(0.95)" }}
        onClick={() => setCollapsed(!collapsed)}
        transition="all 0.2s ease"
        boxShadow="md"
        border="2px solid"
        borderColor={borderColor}
        zIndex={10}
      >
        <Icon as={collapsed ? LuChevronRight : LuChevronLeft} boxSize={4} />
      </IconButton>
    </Box>
  );
}
