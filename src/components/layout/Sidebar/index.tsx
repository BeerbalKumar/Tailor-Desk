import { Box, VStack, Text, Icon, Flex, IconButton } from "@chakra-ui/react";
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
import { useColorModeValue } from "../../ui/color-mode";

const navItems = [
  { label: "Dashboard", icon: LuLayoutDashboard, path: "/dashboard" },
  { label: "Orders", icon: LuPackage, path: "/orders" },
  { label: "Clients", icon: LuUsers, path: "/clients" },
  { label: "Analytics", icon: LuTrendingUp, path: "/analytics" },
  { label: "Profile", icon: LuUser, path: "/profile" },
  { label: "Settings", icon: LuSettings, path: "/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ── Sidebar shell ───────────────────────────────────────────────
  const sidebarBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  // ── Logo bar ────────────────────────────────────────────────────
  const logoBg = useColorModeValue("gray.900", "gray.950");
  const logoText = useColorModeValue("white", "gray.100");

  // ── Nav items ───────────────────────────────────────────────────
  const textColor = useColorModeValue("gray.700", "gray.300");
  const hoverBg = useColorModeValue("gray.100", "gray.800");
  const inactiveIcon = useColorModeValue("gray.500", "gray.400");
  // ── Nav items ───────────────────────────────────────────────────
  const activeBg = useColorModeValue("gray.900", "amber.500"); // dark bg in light mode
  const activeText = useColorModeValue("white", "white");
  const activeIcon = useColorModeValue("white", "white");
  const activeBar = useColorModeValue("amber.500", "white"); // gold bar in light mode

  // ── Toggle button ───────────────────────────────────────────────
  const toggleBg = useColorModeValue("gray.900", "amber.500");
  const toggleColor = useColorModeValue("white", "gray.900");
  const toggleHover = useColorModeValue("gray.700", "amber.400");
  const toggleBorder = useColorModeValue("gray.700", "amber.600");

  // ── Footer text ─────────────────────────────────────────────────
  const footerColor = useColorModeValue("gray.400", "gray.600");

  return (
    <Box
      h="100vh"
      w={collapsed ? "70px" : "260px"}
      bg={sidebarBg}
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
        h="72px"
        align="center"
        px={collapsed ? 3 : 5}
        borderBottom="1px solid"
        borderColor={borderColor}
        bg={logoBg}
        flexShrink={0}
      >
        <Flex align="center" gap={3}>
          <Box
            bg="amber.500"
            p={1.5}
            borderRadius="md"
            flexShrink={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={LuLayoutDashboard} boxSize={5} color="white" />
          </Box>
          {!collapsed && (
            <Text
              fontWeight="700"
              fontSize="lg"
              letterSpacing="tight"
              color={logoText}
              fontFamily="SN Pro, sans-serif"
            >
              Tailor Desk
            </Text>
          )}
        </Flex>
      </Flex>

      {/* ── Nav items ── */}
      <VStack gap={1} align="stretch" p={3} mt={2} flex={1}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Flex
              key={item.path}
              align="center"
              gap={3}
              px={3}
              py={2.5}
              borderRadius="lg"
              cursor="pointer"
              bg={isActive ? activeBg : "transparent"}
              _hover={{ bg: isActive ? activeBg : hoverBg }}
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
                  h="20px"
                  bg={activeBar} // ← was activeText (white on white = invisible)
                  borderRadius="0 4px 4px 0"
                />
              )}

              <Icon
                as={item.icon}
                boxSize={5}
                flexShrink={0}
                color={isActive ? activeIcon : inactiveIcon}
                transition="color 0.2s ease"
              />
              {!collapsed && (
                <Text
                  fontSize="sm"
                  fontWeight={isActive ? "600" : "400"}
                  color={isActive ? activeText : textColor}
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
      {!collapsed && (
        <Box px={4} py={4} borderTop="1px solid" borderColor={borderColor}>
          <Text fontSize="xs" color={footerColor} textAlign="center">
            © 2025 Tailor Desk
          </Text>
        </Box>
      )}

      {/* ── Collapse toggle ── */}
      <IconButton
        aria-label="Toggle sidebar"
        size="sm"
        borderRadius="full"
        position="absolute"
        top="24px"
        right="-16px"
        bg={toggleBg}
        color={toggleColor}
        _hover={{ bg: toggleHover, transform: "scale(1.1)" }}
        _active={{ transform: "scale(0.95)" }}
        onClick={() => setCollapsed(!collapsed)}
        transition="all 0.2s ease"
        boxShadow="md"
        border="2px solid"
        borderColor={toggleBorder}
        zIndex={10}
      >
        <Icon as={collapsed ? LuChevronRight : LuChevronLeft} boxSize={4} />
      </IconButton>
    </Box>
  );
}
