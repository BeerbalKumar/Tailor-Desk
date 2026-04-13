  import {
    Box,
    VStack,
    HStack,
    Text,
    Link,
    Icon,
    Container,
    SimpleGrid,
  } from "@chakra-ui/react";
  import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiFacebook,
    FiTwitter,
    FiInstagram,
    FiLinkedin,
  } from "react-icons/fi";
  import { useThemeColors } from "../../ui/color-mode";

  function Footer() {
    const { bg, textPrimary, textSecondary } = useThemeColors();
    return (
      <Box
        bg={bg}
        // _dark={{ bg: "brand.900" }}
        color={textPrimary}
        py={16}
        px={4}
        position="relative"
        overflow="hidden"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity="0.05"
          bgImage="radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
          pointerEvents="none"
        />

        <Container maxW="container.xl" position="relative" zIndex="1">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} mb={12}>
            {/* Company Info */}
            <VStack align="start" gap={4}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                bgGradient="linear(to-r, gold.400, gold.500)"
                bgClip="text"
                fontFamily="SN Pro, sans-serif"
                color={textPrimary}
              >
                Tailor Desk
              </Text>
              <Text color={textSecondary} fontSize="md" lineHeight="1.6" maxW="280px">
                Premium custom tailoring services that bring your style vision to
                life with precision and craftsmanship.
              </Text>
              <HStack gap={3}>
                <Link
                  href="#"
                  p={2}
                  borderRadius="md"
                  bg="gold.500"
                  _hover={{
                    bg: "gold.900",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  <FiFacebook size={18} color="white" />
                </Link>
                <Link
                  href="#"
                  p={2}
                  borderRadius="md"
                  bg="gold.500"
                  _hover={{
                    bg: "gold.900",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  <FiTwitter size={18} color="white" />
                </Link>
                <Link
                  href="#"
                  p={2}
                  borderRadius="md"
                  bg="gold.500"
                  _hover={{
                    bg: "gold.900",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  <FiInstagram size={18} color="white" />
                </Link>
                <Link
                  href="#"
                  p={2}
                  borderRadius="md"
                  bg="gold.500"
                  _hover={{
                    bg: "gold.900",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  <FiLinkedin size={18} color="white" />
                </Link>
              </HStack>
            </VStack>

            {/* Quick Links */}
            <VStack align="start" gap={4}>
              <Text fontSize="lg" fontWeight="semibold" color={textPrimary} mb={2}>
                Quick Links
              </Text>
              <VStack align="start" gap={3}>
                <Link
                  href="#"
                  // color="brand.200"
                  _hover={{
                    color: "gold.400",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.3s ease"
                  color={textSecondary}
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  // color="brand.200"
                  _hover={{
                    color: "gold.400",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.3s ease"
                  color={textSecondary}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  // color="brand.200"
                  _hover={{
                    color: "gold.400",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.3s ease"
                  color={textSecondary}
                >
                  Portfolio
                </Link>
                <Link
                  href="#"
                  // color="brand.200"
                  _hover={{
                    color: "gold.400",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.3s ease"
                  color={textSecondary}
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  // color="brand.200"
                  _hover={{
                    color: "gold.400",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.3s ease"
                  color={textSecondary}
                >
                  Contact
                </Link>
              </VStack>
            </VStack>

            {/* Services */}
            <VStack align="start" gap={4}>
              <Text fontSize="lg" fontWeight="semibold" color={textPrimary} mb={2}>
                Services
              </Text>
              <VStack align="start" gap={3}>
                <Link
                  href="#"
                  // color="brand.200"
                  _hover={{
                    color: "gold.400",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.3s ease"
                  color={textSecondary}
                >
                  Custom Suits
                </Link>
                <Link
                  href="#"
                  // color="brand.200"
                  _hover={{
                    color: "gold.400",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.3s ease"
                  color={textSecondary}
                >
                  Business Attire
                </Link>
                <Link
                  href="#"
                  // color="brand.200"
                  _hover={{
                    color: "gold.400",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.3s ease"
                  color={textSecondary}
                >
                  Casual Wear
                </Link>
                <Link
                  href="#"
                  // color="brand.200"
                  _hover={{
                    color: "gold.400",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.3s ease"
                  color={textSecondary}
                >
                  Alterations
                </Link>
                <Link
                  href="#"
                  // color="brand.200"
                  _hover={{
                    color: "gold.400",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.3s ease"
                  color={textSecondary}
                >
                  Wedding Attire
                </Link>
              </VStack>
            </VStack>

            {/* Contact Info */}
            <VStack align="start" gap={4}>
              <Text fontSize="lg" fontWeight="semibold" mb={2} color={textPrimary}>
                Get In Touch
              </Text>
              <VStack align="start" gap={4}>
                <HStack gap={3} align="start">
                  <Icon as={FiMapPin} color="gold.400" size="sm" mt={1} />
                  <Text fontSize="sm" lineHeight="1.6" color={textSecondary}>
                    123 Fashion Street
                    <br />
                    Style District, NY 10001
                  </Text>
                </HStack>
                <HStack gap={3} align="center">
                  <Icon as={FiPhone} color="gold.400" size="sm" />
                  <Text fontSize="sm" color={textSecondary}>
                    +1 (555) 123-4567
                  </Text>
                </HStack>
                <HStack gap={3} align="center">
                  <Icon as={FiMail} color="gold.400" size="sm" />
                  <Text fontSize="sm" color={textSecondary}>
                    info@tailordesk.com
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </SimpleGrid>

          {/* Bottom Bar */}
          <Box
            borderTop="1px solid"
            borderColor="rgba(255, 255, 255, 0.1)"
            pt={8}
            mt={8}
          >
            <HStack
              justify="space-between"
              align="center"
              direction={{ base: "column", md: "row" }}
              gap={4}
            >
              <Text
                color={textSecondary}
                fontSize="sm"
                textAlign={{ base: "center", md: "left" }}
              >
                © 2024 Tailor Desk. All rights reserved.
              </Text>
              <HStack
                gap={6}
                align="center"
                direction={{ base: "column", md: "row" }}
              >
                <Link
                  href="#"
                  color={textSecondary}
                  fontSize="sm"
                  _hover={{
                    color: "gold.400",
                  }}
                  transition="all 0.3s ease"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  color={textSecondary}
                  fontSize="sm"
                  _hover={{
                    color: "gold.400",
                  }}
                  transition="all 0.3s ease"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  color={textSecondary}
                  fontSize="sm"
                  _hover={{
                    color: "gold.400",
                  }}
                  transition="all 0.3s ease"
                >
                  Cookie Policy
                </Link>
              </HStack>
            </HStack>
          </Box>
        </Container>
      </Box>
    );
  }

  export default Footer;
