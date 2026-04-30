import { Box, VStack, HStack, Text, Heading, Container, Flex, SimpleGrid, Button, Input, Textarea } from "@chakra-ui/react";
import { FiUser, FiArrowLeft, FiSave, FiMapPin, FiBriefcase, FiStar, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router";

function AddClient() {
  const navigate = useNavigate();

  return (
    <Box bg="linear(135deg, brand.50 0%, amber.50 100%)" minH="100vh" py={8} px={4}>
      <Container maxW="container.xl">
        <VStack gap={8} align="stretch">
          
          {/* Header */}
          <Flex justify="space-between" align="center" mb={6}>
            <HStack gap={4}>
              <Button
                variant="outline"
                borderColor="brand.600"
                color="brand.600"
                size="md"
                borderRadius="full"
                fontFamily="SN Pro, sans-serif"
                _hover={{ bg: "brand.50" }}
                onClick={() => navigate("/clients")}
              >
                <HStack gap={2}>
                  <FiArrowLeft />
                  <Text>Back to Clients</Text>
                </HStack>
              </Button>
              
              <VStack align="start" gap={1}>
                <Heading
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  fontFamily="SN Pro, sans-serif"
                  color="brand.800"
                >
                  Add New Client
                </Heading>
                <Text
                  fontSize="md"
                  color="gray.600"
                  fontFamily="SN Pro, sans-serif"
                >
                  Register a new client to your tailoring business
                </Text>
              </VStack>
            </HStack>
            
            <Button
              bgGradient="linear(to-r, brand.600, gold.500)"
              color="white"
              size="md"
              px={6}
              fontSize="14px"
              fontWeight="600"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
            >
              <HStack gap={2}>
                <FiSave />
                <Text>Save Client</Text>
              </HStack>
            </Button>
          </Flex>

          {/* Form Sections */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
            
            {/* Personal Information */}
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="0 10px 30px rgba(0,0,0,0.1)"
              p={6}
            >
              <Flex align="center" gap={3} mb={6}>
                <Box
                  w="50px"
                  h="50px"
                  bgGradient="linear(to-r, brand.600, gold.500)"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  <FiUser size={24} />
                </Box>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="brand.800"
                  >
                    Personal Information
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Basic client details
                  </Text>
                </VStack>
              </Flex>
              
              <VStack gap={4}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                  <Box>
                    <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                      First Name *
                    </Text>
                    <Input
                      placeholder="Enter first name"
                      fontFamily="SN Pro, sans-serif"
                      _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                    />
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                      Last Name *
                    </Text>
                    <Input
                      placeholder="Enter last name"
                      fontFamily="SN Pro, sans-serif"
                      _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                    />
                  </Box>
                </SimpleGrid>
                
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Email Address *
                  </Text>
                  <Input
                    type="email"
                    placeholder="client@example.com"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Phone Number *
                  </Text>
                  <Input
                    type="tel"
                    placeholder="+92 300 1234567"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Date of Birth
                  </Text>
                  <Input
                    type="date"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Gender
                  </Text>
                  <Input
                    placeholder="Select Gender"
                    defaultValue="Not Specified"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
              </VStack>
            </Box>

            {/* Address Information */}
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="0 10px 30px rgba(0,0,0,0.1)"
              p={6}
            >
              <Flex align="center" gap={3} mb={6}>
                <Box
                  w="50px"
                  h="50px"
                  bgGradient="linear(to-r, brand.600, gold.500)"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  <FiMapPin size={24} />
                </Box>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="brand.800"
                  >
                    Address Information
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Client location details
                  </Text>
                </VStack>
              </Flex>
              
              <VStack gap={4}>
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Street Address
                  </Text>
                  <Input
                    placeholder="123 Fashion Street"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                  <Box>
                    <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                      City *
                    </Text>
                    <Input
                      placeholder="Lahore"
                      fontFamily="SN Pro, sans-serif"
                      _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                    />
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                      Postal Code
                    </Text>
                    <Input
                      placeholder="54000"
                      fontFamily="SN Pro, sans-serif"
                      _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                    />
                  </Box>
                </SimpleGrid>
                
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Country
                  </Text>
                  <Input
                    placeholder="Pakistan"
                    defaultValue="Pakistan"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
              </VStack>
            </Box>

            {/* Business Information */}
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="0 10px 30px rgba(0,0,0,0.1)"
              p={6}
            >
              <Flex align="center" gap={3} mb={6}>
                <Box
                  w="50px"
                  h="50px"
                  bgGradient="linear(to-r, brand.600, gold.500)"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  <FiBriefcase size={24} />
                </Box>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="brand.800"
                  >
                    Business Information
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Professional details
                  </Text>
                </VStack>
              </Flex>
              
              <VStack gap={4}>
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Client Type
                  </Text>
                  <Input
                    placeholder="Select client type"
                    defaultValue="Regular"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Occupation
                  </Text>
                  <Input
                    placeholder="Enter occupation"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Preferred Services
                  </Text>
                  <Textarea
                    placeholder="e.g., Custom Suits, Wedding Wear, Alterations"
                    fontFamily="SN Pro, sans-serif"
                    rows={3}
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                  <Box>
                    <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                      Budget Range
                    </Text>
                    <Input
                      placeholder="e.g., 10,000 - 50,000"
                      fontFamily="SN Pro, sans-serif"
                      _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                    />
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                      Preferred Contact Method
                    </Text>
                    <Input
                      placeholder="Phone"
                      defaultValue="Phone"
                      fontFamily="SN Pro, sans-serif"
                      _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                    />
                  </Box>
                </SimpleGrid>
              </VStack>
            </Box>

            {/* Additional Information */}
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="0 10px 30px rgba(0,0,0,0.1)"
              p={6}
            >
              <Flex align="center" gap={3} mb={6}>
                <Box
                  w="50px"
                  h="50px"
                  bgGradient="linear(to-r, brand.600, gold.500)"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  <FiStar size={24} />
                </Box>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="brand.800"
                  >
                    Additional Information
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Extra details and notes
                  </Text>
                </VStack>
              </Flex>
              
              <VStack gap={4}>
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Referral Source
                  </Text>
                  <Input
                    placeholder="How did they find you?"
                    defaultValue="Direct"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Special Requirements
                  </Text>
                  <Textarea
                    placeholder="Any special requirements or preferences"
                    fontFamily="SN Pro, sans-serif"
                    rows={3}
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Notes
                  </Text>
                  <Textarea
                    placeholder="Additional notes about the client"
                    fontFamily="SN Pro, sans-serif"
                    rows={4}
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
                
                <Box>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif" mb={2}>
                    Tags
                  </Text>
                  <Input
                    placeholder="e.g., VIP, Corporate, Regular"
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
              </VStack>
            </Box>

          </SimpleGrid>

          {/* Form Actions */}
          <Flex justify="center" gap={4} mt={8}>
            <Button
              variant="outline"
              borderColor="brand.600"
              color="brand.600"
              size="md"
              px={8}
              fontSize="14px"
              fontWeight="600"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
              _hover={{ bg: "brand.50" }}
              onClick={() => navigate("/clients")}
            >
              Cancel
            </Button>
            
            <Button
              bgGradient="linear(to-r, brand.600, gold.500)"
              color="white"
              size="md"
              px={8}
              fontSize="14px"
              fontWeight="600"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
            >
              <HStack gap={2}>
                <FiCheckCircle />
                <Text>Save Client</Text>
              </HStack>
            </Button>
          </Flex>

        </VStack>
      </Container>
    </Box>
  );
}

export default AddClient;
