import { useState, useEffect } from "react";
import {
  Box,
  Link,
  Image,
  IconButton,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import {
  ColorModeButton,
  useColorModeValue,
  useThemeColors,
} from "../../ui/color-mode";
import { logo } from "../../../assets/images";
import { useWindowSize } from "../../../hooks";
import { RiMenu3Line } from "react-icons/ri";

function Navbar() {
  const { bg, textPrimary, shadowColor } = useThemeColors();
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Check for user in localStorage on component mount and when localStorage changes
  useEffect(() => {
    const checkUser = () => {
      const userData = localStorage.getItem("user");
      setUser(userData ? JSON.parse(userData) : null);
    };
    
    checkUser();
    
    // Listen for storage changes (for multi-tab support)
    const handleStorageChange = () => {
      checkUser();
    };
    
    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // const isMobile = width < 768;
  // const isTablet = width >= 768 && width < 1024;
  // const isDesktop = width >= 1024;
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navItemHoverColorModeValue = useColorModeValue(
    "brand.900",
    "brand.100",
  );
  const navItemHoverBgModeValue = useColorModeValue(
    "neutral.200",
    "neutral.800",
  );

  // Dynamic navigation items based on authentication
  const getNavItems = () => {
    const baseItems = [
      {
        name: "Home",
        href: "/",
        isLogout: false,
      },
      {
        name: "About",
        href: "/about",
        isLogout: false,
      },
      {
        name: "Contact",
        href: "/contact",
        isLogout: false,
      },
    ];

    if (user) {
      // User is logged in - show Dashboard and Logout
      return [
        ...baseItems,
        {
          name: "Dashboard",
          href: "/dashboard",
          isLogout: false,
        },
        {
          name: "Logout",
          href: "/logout",
          isLogout: true,
        },
      ];
    } else {
      // User is not logged in - show Login
      return [
        ...baseItems,
        {
          name: "Login",
          href: "/login",
          isLogout: false,
        },
      ];
    }
  };

  const navItems = getNavItems();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  };

  // console.log(isMobile, isTablet, isDesktop,width,height);

  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingX={isMobile ? 5 : 20}
      boxShadow={`0 4px 6px ${shadowColor}`}
      bg={bg}
    >
      <Image src={logo} alt="Tailor Desk Logo" height="100px" width="100px" />
      {!isMobile && (
        <Box display="flex" alignItems="center" gap="10px">
          {navItems.map((item, itemIndex) => {
            if (item.isLogout) {
              return (
                <IconButton
                  variant="ghost"
                  paddingX={5}
                  key={itemIndex}
                  borderRadius={30}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    bg: navItemHoverBgModeValue,
                  }}
                  fontSize="16px"
                  fontWeight="medium"
                  onClick={handleLogout}
                >
                  {item.name}
                </IconButton>
              );
            }
            
            return (
              <Link
                href={item.href}
                _hover={{
                  color: navItemHoverColorModeValue,
                  textDecoration: "none",
                }}
              >
                <IconButton
                  variant="ghost"
                  paddingX={5}
                  key={itemIndex}
                  borderRadius={30}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    bg: navItemHoverBgModeValue,
                  }}
                  fontSize="16px"
                  fontWeight="medium"
                >
                  {item.name}
                </IconButton>
              </Link>
            );
          })}
          <ColorModeButton />
        </Box>
      )}
      {isMobile && (
        <Box>
          <IconButton
            variant="ghost"
            size="2xl"
            borderRadius={100}
            _hover={{
              bg: navItemHoverBgModeValue,
            }}
            color={textPrimary}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RiMenu3Line />
          </IconButton>
        </Box>
      )}
      {isMobile && isMenuOpen && (
        <Box
          position="absolute"
          top="100px"
          left="0"
          width="100%"
          bg={bg}
          boxShadow={`0 4px 6px ${shadowColor}`}
          display="flex"
          flexDirection="column"
          // alignItems="center"
          padding={5}
          gap={4}
          zIndex={1000}
          maxH={isMenuOpen ? "300px" : "0px"}
          overflow="hidden"
          transition="all 0.3s ease"
        >
          {navItems.map((item, index) => {
            if (item.isLogout) {
              return (
                <IconButton
                  variant="ghost"
                  paddingX={5}
                  key={index}
                  borderRadius={30}
                  _hover={{
                    bg: navItemHoverBgModeValue,
                  }}
                  justifyContent="flex-start"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  <Text
                    color={textPrimary}
                    fontSize="16px"
                    fontWeight="medium"
                  >
                    {item.name}
                  </Text>
                </IconButton>
              );
            }
            
            return (
              <IconButton
                variant="ghost"
                paddingX={5}
                key={index}
                borderRadius={30}
                _hover={{
                  bg: navItemHoverBgModeValue,
                }}
                justifyContent="flex-start"
              >
                <Link
                  href={item.href}
                  color={textPrimary}
                  _hover={{
                    color: navItemHoverColorModeValue,
                    textDecoration: "none",
                  }}
                  fontSize="16px"
                  fontWeight="medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </IconButton>
            );
          })}

          <ColorModeButton />
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
