import { Box, VStack, HStack, Text, Heading, Button, Container, Icon } from "@chakra-ui/react";
import { FiSearch, FiRefreshCw, FiHome, FiArrowLeft } from "react-icons/fi";
import { useColorModeValue } from "../../components/ui/color-mode";

function NotFound() {
  const bgGradient = useColorModeValue(
    "linear(135deg, #f6f9fc 0%, #e9f4ff 100%)",
    "linear(135deg, #1a202c 0%, #2d3748 100%)"
  );
  
  const textColor = useColorModeValue("gray.600", "gray.300");

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Box bg={bgGradient} minH="100vh" py={20} px={4} position="relative" overflow="hidden">
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.05"
        bgImage="radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)"
        pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative" zIndex="1">
        <VStack gap={8} align="center" minH="80vh" justify="center">
          {/* 404 Icon */}
          <Box
            bg={useColorModeValue("orange.50", "rgba(251, 146, 60, 0.1)")}
            p={8}
            borderRadius="full"
            border="2px solid"
            borderColor={useColorModeValue("orange.200", "orange.600")}
          >
            <Icon
              as={FiSearch}
              w={16}
              h={16}
              color={useColorModeValue("orange.500", "orange.400")}
            />
          </Box>

          {/* 404 Content */}
          <VStack gap={6} align="center" textAlign="center" maxW="2xl">
            <Heading
              fontSize={{ base: "6xl", md: "8xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, orange.600, gold.500)"
              bgClip="text"
              fontFamily="SN Pro, sans-serif"
              lineHeight="1.2"
              color="red.500"
            >
              404
            </Heading>

            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color={useColorModeValue("brand.700", "brand.300")}
              fontFamily="SN Pro, sans-serif"
              lineHeight="1.2"
            >
              Page Not Found
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={textColor}
              fontFamily="SN Pro, sans-serif"
              lineHeight="1.6"
            >
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </Text>

            <Text
              fontSize="md"
              color={useColorModeValue("gray.500", "gray.400")}
              fontFamily="SN Pro, sans-serif"
              fontStyle="italic"
            >
              Error Code: 404 | Page Not Found
            </Text>
          </VStack>

          {/* Action Buttons */}
          <HStack gap={4} flexWrap="wrap" justify="center">
            <Button
              bgGradient="linear(to-r, brand.600, gold.500)"
              color="white"
              size="lg"
              px={8}
              py={6}
              fontSize="16px"
              fontWeight="600"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
                bgGradient: "linear(to-r, brand.700, gold.600)"
              }}
              _active={{
                transform: "translateY(0)"
              }}
              onClick={handleGoHome}
            >
              <HStack gap={2}>
                <FiHome />
                <Text>Go Home</Text>
              </HStack>
            </Button>

            <Button
              variant="outline"
              borderColor="brand.600"
              color="brand.600"
              _dark={{ color: "brand.400", borderColor: "brand.400" }}
              size="lg"
              px={8}
              py={6}
              fontSize="16px"
              fontWeight="600"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
              _hover={{
                bg: "brand.50",
                _dark: { bg: "rgba(49, 130, 206, 0.1)" },
                transform: "translateY(-2px)"
              }}
              onClick={handleGoBack}
            >
              <HStack gap={2}>
                <FiArrowLeft />
                <Text>Go Back</Text>
              </HStack>
            </Button>

            <Button
              variant="outline"
              borderColor="gray.400"
              color="gray.600"
              _dark={{ color: "gray.400", borderColor: "gray.600" }}
              size="lg"
              px={8}
              py={6}
              fontSize="16px"
              fontWeight="600"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
              _hover={{
                bg: "gray.50",
                _dark: { bg: "rgba(75, 85, 99, 0.1)" },
                transform: "translateY(-2px)"
              }}
              onClick={handleRefresh}
            >
              <HStack gap={2}>
                <FiRefreshCw />
                <Text>Refresh Page</Text>
              </HStack>
            </Button>
          </HStack>

          {/* Additional Info */}
          <VStack gap={4} align="center" maxW="lg">
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.500", "gray.400")}
              fontFamily="SN Pro, sans-serif"
              textAlign="center"
            >
              Looking for something specific? Try searching or browsing our collections:
            </Text>
            <HStack gap={6} justify="center" flexWrap="wrap">
              <Text
                fontSize="sm"
                color={useColorModeValue("brand.600", "brand.400")}
                fontFamily="SN Pro, sans-serif"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                onClick={() => window.location.href = "/about"}
              >
                About Us
              </Text>
              <Text
                fontSize="sm"
                color={useColorModeValue("brand.600", "brand.400")}
                fontFamily="SN Pro, sans-serif"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                onClick={() => window.location.href = "/contact"}
              >
                Contact
              </Text>
              <Text
                fontSize="sm"
                color={useColorModeValue("brand.600", "brand.400")}
                fontFamily="SN Pro, sans-serif"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                onClick={() => window.location.href = "/dashboard"}
              >
                Dashboard
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default NotFound;