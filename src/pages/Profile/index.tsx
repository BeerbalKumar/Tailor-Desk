import { Box, VStack, HStack, Text, Heading, Container, Flex, SimpleGrid, Button, Badge, Input, Textarea, Select } from "@chakra-ui/react";
import { FiSave, FiCamera } from "react-icons/fi";
import { useThemeColors } from "../../components/ui/color-mode";

function Profile() {
    const { bg, cardBg, textPrimary, textSecondary, borderColor, shadowColor } =
    useThemeColors();
  return (
    <Box bg={bg} minH="100vh" py={8} px={4}>
      <Container maxW="container.xl">
        <VStack gap={8} align="stretch">
          
          {/* Header */}
          <Flex justify="space-between" align="center" mb={6}>
            <VStack align="start" gap={1}>
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                fontFamily="SN Pro, sans-serif"
                color={textPrimary}
              >
                My Profile
              </Heading>
              <Text
                fontSize="md"
                color={textSecondary}
                fontFamily="SN Pro, sans-serif"
              >
                Manage your personal information and account settings
              </Text>
            </VStack>
            
            <Button
              bg="gold.500"
              color="white"
              size="md"
              px={6}
              fontSize="14px"
              fontWeight="600"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
                bg: "gold.600",
              }}
            >
              <HStack gap={2}>
                <FiSave />
                <Text>Save Changes</Text>
              </HStack>
            </Button>
          </Flex>

          {/* Profile Overview Card */}
          <Box
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="xl"
            boxShadow="md"
            p={8}
          >
            <Flex direction={{ base: "column", md: "row" }} gap={8} align="center">
              {/* Avatar Section */}
              <VStack align="center" gap={4}>
                <Box position="relative">
                  <Box
                    w="120px"
                    h="120px"
                    bg="brand.600"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontSize="3xl"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                  >
                    JD
                  </Box>
                  <Button
                    aria-label="Change avatar"
                    size="sm"
                    borderRadius="full"
                    position="absolute"
                    bottom="0"
                    right="0"
                    bg="brand.600"
                    color="white"
                    _hover={{ bg: "brand.700" }}
                    p={2}
                  >
                    <FiCamera />
                  </Button>
                </Box>
                <VStack align="center" gap={1}>
                  <Heading
                    fontSize="xl"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="brand.800"
                  >
                    John Doe
                  </Heading>
                  <Text
                    fontSize="md"
                    color={textSecondary}
                    fontFamily="SN Pro, sans-serif"
                  >
                    Master Tailor
                  </Text>
                  <Badge
                    bg="green.100"
                    color="green.800"
                    fontSize="sm"
                    fontFamily="SN Pro, sans-serif"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    Active
                  </Badge>
                </VStack>
              </VStack>

              {/* Quick Stats */}
              <VStack gap={4} flex={1} align="start">
                <Heading
                  fontSize="lg"
                  fontWeight="600"
                  fontFamily="SN Pro, sans-serif"
                  color="brand.800"
                  mb={2}
                >
                  Quick Stats
                </Heading>
                <SimpleGrid columns={{ base: 2, md: 3 }} gap={4} w="full">
                  <Box>
                    <Text fontSize="xs" color="gray.500" fontFamily="SN Pro, sans-serif">
                      Total Orders
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color="brand.800" fontFamily="SN Pro, sans-serif">
                      1,234
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="xs" color="gray.500" fontFamily="SN Pro, sans-serif">
                      Happy Clients
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color="brand.800" fontFamily="SN Pro, sans-serif">
                      847
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="xs" color="gray.500" fontFamily="SN Pro, sans-serif">
                      Years Active
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color="brand.800" fontFamily="SN Pro, sans-serif">
                      5+
                    </Text>
                  </Box>
                </SimpleGrid>
              </VStack>
            </Flex>
          </Box>

          {/* Personal Information */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
            <Box
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              borderRadius="xl"
              boxShadow="md"
              p={6}
            >
              <Heading
                fontSize="lg"
                fontWeight="bold"
                fontFamily="SN Pro, sans-serif"
                // color={textPrimary}
                color={"gold.500"}
                mb={6}
              >
                Personal Information
              </Heading>
              
              <VStack gap={4} p={4}>
                <Box width="100%">
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Full Name
                  </Text>
                  {/* <Input
                    defaultValue="John Doe"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}

                  /> */}
                      <Input
                            placeholder="Full Name"
                            defaultValue="John Doe"
                            border="1px solid"
                            borderColor={borderColor}
                            borderRadius="100px"
                            type="name"
                            height="45px"
                          />
                </Box>
                
                <Box width="100%">
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Email Address
                  </Text>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    defaultValue="john.doe@tailordesk.com"
                    fontFamily="SN Pro, sans-serif"
                    height="45px"
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="100px"
                    // _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box width="100%">
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Phone Number
                  </Text>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    defaultValue="+92 300 1234567"
                    fontFamily="SN Pro, sans-serif"
                    height="45px"
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="100px"
                    // _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box width="100%">
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Date of Birth
                  </Text>
                  <Input
                    type="date"
                    defaultValue="1990-01-15"
                    fontFamily="SN Pro, sans-serif"
                    height="45px"
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="100px"
                    // _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box width="100%">
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Bio
                  </Text>
                  <Textarea
                    defaultValue="Professional master tailor with over 5 years of experience in custom clothing design and alterations."
                    fontFamily="SN Pro, sans-serif"
                    rows={3}
                    // p={10}
                    // _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                    // height="45px"
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="10px"
                  />
                </Box>
              </VStack>
            </Box>

            {/* Professional Information */}
            <Box
              bg={cardBg}
              border={`1px solid ${borderColor}`}
              borderRadius="xl"
              boxShadow="md"
              p={6}
            >
              <Heading
                fontSize="lg"
                fontWeight="bold"
                fontFamily="SN Pro, sans-serif"
                color={"gold.500"}
                mb={6}
              >
                Professional Information
              </Heading>
              
              <VStack gap={4}>
                <Box width="100%">
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Job Title
                  </Text>
                  <Input
                    defaultValue="Master Tailor"
                    fontFamily="SN Pro, sans-serif"
                    height="45px"
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="100px"
                    // _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box width="100%">
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Specialization
                  </Text>
                  {/* <Select
                    defaultValue="custom-suits"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  >
                    <option value="custom-suits">Custom Suits</option>
                    <option value="wedding-wear">Wedding Wear</option>
                    <option value="alterations">Alterations</option>
                    <option value="traditional">Traditional Wear</option>
                  </Select> */}
                </Box>
                
                <Box width="100%">
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Experience (Years)
                  </Text>
                  <Input
                    type="number"
                    defaultValue="5"
                    fontFamily="SN Pro, sans-serif"
                    height="45px"
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="100px"
                    // _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box width="100%">
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Shop Address
                  </Text>
                  <Textarea
                    defaultValue="123 Fashion Street, Gulberg, Lahore, Pakistan"
                    fontFamily="SN Pro, sans-serif"
                    rows={2}
                    height="45px"
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="100px"
                    // _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box width="100%">
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Working Hours
                  </Text>
                  <Input
                    defaultValue="Mon-Sat: 9:00 AM - 7:00 PM"
                    fontFamily="SN Pro, sans-serif"
                    height="45px"
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="100px"
                    // _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>

          {/* Skills & Expertise */}
          <Box
            bg={cardBg}
            border={`1px solid ${borderColor}`}
            borderRadius="xl"
            boxShadow="md"
            p={6}
          >
            <Heading
              fontSize="lg"
              fontWeight="bold"
              fontFamily="SN Pro, sans-serif"
            //   color="brand.800"
              color={"gold.500"}
              mb={6}
            >
              Skills & Expertise
            </Heading>
            
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={3}>
              {[
                "Custom Suits", "Wedding Wear", "Alterations", "Traditional Wear",
                "Embroidery", "Pattern Making", "Fabric Selection", "Fittings"
              ].map((skill) => (
                <Badge
                  key={skill}
                  bg="brand.50"
                  color="brand.700"
                  fontSize="sm"
                  fontFamily="SN Pro, sans-serif"
                  px={3}
                  py={2}
                  borderRadius="full"
                >
                  {skill}
                </Badge>
              ))}
            </SimpleGrid>
          </Box>

        </VStack>
      </Container>
    </Box>
  );
}

export default Profile;