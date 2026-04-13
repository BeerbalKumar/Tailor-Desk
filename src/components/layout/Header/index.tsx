import {
  Box,
  Flex,
  Text,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { FiShoppingBag, FiStar, FiTruck, FiShield } from "react-icons/fi";
import {useThemeColors} from "../../ui/color-mode";
import React from "react";

function Header() {
  const {textPrimary,cardBg} = useThemeColors();
  return (
    <Box
      bg="linear(135deg, #f6f9fc 0%, #e9f4ff 100%)"
      _dark={{ bg: "linear(135deg, #1a202c 0%, #2d3748 100%)" }}
      py={16}
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
        bgGradient="linear(45deg, #667eea 25%, transparent 25%, transparent 75%, #667eea 75%, #667eea), linear(45deg, #667eea 25%, transparent 25%, transparent 75%, #667eea 75%, #667eea)"
        bgSize="20px 20px"
      />

      <Container maxW="container.xl" position="relative" zIndex="1">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={12}
        >
          {/* Left Content */}
          <Flex direction="column" gap={6} flex={1}>
            <Text
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="extrabold"
              bgGradient="linear(to-r, blue.600, purple.600)"
              bgClip="text"
              lineHeight="1.1"
            //   textAlign="center"
              mb={2}
              color="gold.500"
            >
              Tailor Desk
            </Text>
            
            <Text
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              color="gray.700"
              _dark={{ color: "gray.200" }}
              lineHeight="1.2"
            //   textAlign="center"
              mb={4}
            >
              Premium Custom Tailoring for Every Style
            </Text>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              _dark={{ color: "gray.300" }}
              lineHeight="1.6"
              maxW="600px"
            //   textAlign="center"
            //   mx="auto"
            >
              Transform your wardrobe with our bespoke tailoring services. From
              casual wear to formal attire, we craft perfection that fits your
              unique style.
            </Text>

            <Flex gap={4} align="center">
              <Button
                bgGradient="linear(to-r, blue.500, purple.500)"
                color="white"
                size="lg"
                px={8}
                py={6}
                fontSize="16px"
                fontWeight="600"
                borderRadius="full"
                bg="brand.500"

                // _dark={{ color: "gold.500", borderColor: "gold.500" }}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                  bgGradient: "linear(to-r, blue.600, purple.600)",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
              >
                Shop Now
              </Button>

              <Button
                variant="outline"
                borderColor="gold.500"
                color="gold.500"
                // _dark={{ color: "blue.400", borderColor: "blue.400" }}
                size="lg"
                px={8}
                py={6}
                fontSize="16px"
                fontWeight="600"
                borderRadius="full"
                _hover={{
                  bg: "transparent",
                //   _dark: { bg: "rgba(66, 153, 225, 0.1)" },
                  transform: "translateY(-2px)",
                }}
                borderWidth={2}
              >
                View Collection
              </Button>
            </Flex>

            {/* Stats */}
            <Flex gap={8} pt={4}>
              <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                  10K+
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: "gray.400" }}
                >
                  Happy Customers
                </Text>
              </Flex>
              <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="purple.600">
                  500+
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: "gray.400" }}
                >
                  Custom Designs
                </Text>
              </Flex>
              <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="green.600">
                  4.9★
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: "gray.400" }}
                >
                  Customer Rating
                </Text>
              </Flex>
            </Flex>
          </Flex>

          {/* Right Content - Feature Cards */}
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={6}
            maxW={{ lg: "500px" }}
            w="full"
          >
            <Box
              bg="white"
              _dark={{ bg: "gray.800" }}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
            >
              <Flex align="center" gap={4}>
                <Icon as={FiShoppingBag} w={8} h={8} color="blue.500" />
                <Box>
                  <Text fontWeight="600" fontSize="lg" mb={1} color={textPrimary}>
                    Custom Designs
                  </Text>
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    _dark={{ color: "gray.400" }}
                  >
                    Tailored to your measurements
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box
              bg="white"
              _dark={{ bg: "gray.800" }}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
            >
              <Flex align="center" gap={4}>
                <Icon as={FiStar} w={8} h={8} color="yellow.500" />
                <Box>
                  <Text fontWeight="600" fontSize="lg" mb={1} color={textPrimary}>
                    Premium Quality
                  </Text>
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    _dark={{ color: "gray.400" }}
                  >
                    Finest materials guaranteed
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box
              bg="white"
              _dark={{ bg: "gray.800" }}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
            >
              <Flex align="center" gap={4}>
                <Icon as={FiTruck} w={8} h={8} color="green.500" />
                <Box>
                  <Text fontWeight="600" fontSize="lg" mb={1} color={textPrimary}>
                    Fast Delivery
                  </Text>
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    _dark={{ color: "gray.400" }}
                  >
                    Quick turnaround time
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box
              bg={cardBg}
            //   _dark={{ bg: "gray.800" }}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
            >
              <Flex align="center" gap={4}>
                <Icon as={FiShield} w={8} h={8} color="purple.500" />
                <Box>
                  <Text fontWeight="600" fontSize="lg" mb={1} color={textPrimary}>
                    Satisfaction Guaranteed
                  </Text>
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    _dark={{ color: "gray.400" }}
                  >
                    100% satisfaction promise
                  </Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
