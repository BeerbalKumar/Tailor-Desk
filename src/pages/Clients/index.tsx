import { Box, VStack, HStack, Text, Heading, Container, Flex, SimpleGrid, Button, Badge, Input } from "@chakra-ui/react";
import { FiUsers, FiSearch, FiFilter, FiPlus, FiEye, FiEdit, FiCalendar, FiMapPin, FiPhone, FiMail, FiDollarSign, FiRefreshCw, FiStar, FiTrendingUp } from "react-icons/fi";

function Clients() {
  return (
    <Box bg="linear(135deg, brand.50 0%, amber.50 100%)" minH="100vh" py={8} px={4}>
      <Container maxW="container.xl">
        <VStack gap={8} align="stretch">
          
          {/* Header */}
          <Flex justify="space-between" align="center" mb={6}>
            <VStack align="start" gap={1}>
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                fontFamily="SN Pro, sans-serif"
                color="brand.800"
              >
                Clients Management
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                fontFamily="SN Pro, sans-serif"
              >
                Manage your customer relationships and track client history
              </Text>
            </VStack>
            
            <HStack gap={3}>
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
                  <FiPlus />
                  <Text>Add Client</Text>
                </HStack>
              </Button>
            </HStack>
          </Flex>

          {/* Stats Cards */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
            {[
              { 
                icon: FiUsers, 
                label: "Total Clients", 
                value: "847", 
                color: "brand"
              },
              { 
                icon: FiTrendingUp, 
                label: "New This Month", 
                value: "23", 
                color: "green"
              },
              { 
                icon: FiStar, 
                label: "VIP Clients", 
                value: "45", 
                color: "gold"
              },
              { 
                icon: FiDollarSign, 
                label: "Avg. Order Value", 
                value: "₨12,500", 
                color: "amber"
              }
            ].map((stat, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                boxShadow="0 10px 30px rgba(0,0,0,0.1)"
                p={6}
                transition="all 0.3s ease"
                _hover={{ transform: "translateY(-5px)", boxShadow: "0 15px 40px rgba(0,0,0,0.15)" }}
              >
                <Flex align="center" gap={3} mb={4}>
                  <Box
                    w="50px"
                    h="50px"
                    bg={stat.color === 'brand' ? 'linear(135deg, brand.400 0%, brand.600 100%)' : 
                         stat.color === 'green' ? 'linear(135deg, green.400 0%, green.600 100%)' : 
                         stat.color === 'gold' ? 'linear(135deg, gold.400 0%, gold.600 100%)' :
                         'linear(135deg, amber.400 0%, amber.600 100%)'}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                  >
                    <stat.icon size={24} />
                  </Box>
                  <VStack align="start" gap={0}>
                    <Text fontSize="2xl" fontWeight="bold" color="brand.800" fontFamily="SN Pro, sans-serif">
                      {stat.value}
                    </Text>
                    <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                      {stat.label}
                    </Text>
                  </VStack>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>

          {/* Filters and Search */}
          <Box
            bg="white"
            borderRadius="2xl"
            boxShadow="0 10px 30px rgba(0,0,0,0.1)"
            p={6}
          >
            <Flex direction={{ base: "column", md: "row" }} gap={4} align={{ base: "stretch", md: "center" }}>
              <HStack flex={1}>
                <Box position="relative" flex={1}>
                  <Box
                    position="absolute"
                    left={4}
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={1}
                  >
                    <FiSearch color="gray.400" />
                  </Box>
                  <Input
                    placeholder="Search clients by name, email, or phone..."
                    pl={12}
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
              </HStack>
              
              <HStack gap={3}>
                <Input
                  placeholder="Client Type"
                  w="150px"
                  defaultValue="All Clients"
                  fontFamily="SN Pro, sans-serif"
                  _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                />
                
                <Input
                  placeholder="Status"
                  w="150px"
                  defaultValue="Active"
                  fontFamily="SN Pro, sans-serif"
                  _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                />
                
                <Button
                  variant="outline"
                  borderColor="brand.600"
                  color="brand.600"
                  size="md"
                  fontFamily="SN Pro, sans-serif"
                  _hover={{ bg: "brand.50" }}
                >
                  <HStack gap={2}>
                    <FiFilter />
                    <Text>More Filters</Text>
                  </HStack>
                </Button>
                
                <Button
                  variant="ghost"
                  size="md"
                  color="brand.600"
                  _hover={{ bg: "brand.50" }}
                >
                  <FiRefreshCw />
                </Button>
              </HStack>
            </Flex>
          </Box>

          {/* Clients Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {[
              {
                id: "CLT-001",
                name: "Ahmed Khan",
                email: "ahmed.khan@email.com",
                phone: "+92 300 1234567",
                location: "Lahore",
                totalOrders: 12,
                totalSpent: "₨1,80,000",
                status: "vip",
                lastOrder: "2024-04-28",
                rating: 4.8
              },
              {
                id: "CLT-002",
                name: "Sara Ali",
                email: "sara.ali@email.com",
                phone: "+92 321 9876543",
                location: "Karachi",
                totalOrders: 8,
                totalSpent: "₨95,000",
                status: "regular",
                lastOrder: "2024-04-25",
                rating: 4.6
              },
              {
                id: "CLT-003",
                name: "Muhammad Usman",
                email: "m.usman@email.com",
                phone: "+92 333 4567890",
                location: "Islamabad",
                totalOrders: 15,
                totalSpent: "₨2,25,000",
                status: "vip",
                lastOrder: "2024-04-29",
                rating: 4.9
              },
              {
                id: "CLT-004",
                name: "Fatima Sheikh",
                email: "fatima.s@email.com",
                phone: "+92 311 2345678",
                location: "Lahore",
                totalOrders: 6,
                totalSpent: "₨72,000",
                status: "regular",
                lastOrder: "2024-04-20",
                rating: 4.5
              },
              {
                id: "CLT-005",
                name: "Bilal Ahmed",
                email: "bilal.ahmed@email.com",
                phone: "+92 344 5678901",
                location: "Faisalabad",
                totalOrders: 4,
                totalSpent: "₨48,000",
                status: "new",
                lastOrder: "2024-04-15",
                rating: 4.3
              },
              {
                id: "CLT-006",
                name: "Ayesha Malik",
                email: "ayesha.m@email.com",
                phone: "+92 300 8765432",
                location: "Lahore",
                totalOrders: 10,
                totalSpent: "₨1,35,000",
                status: "regular",
                lastOrder: "2024-04-27",
                rating: 4.7
              }
            ].map((client, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                boxShadow="0 10px 30px rgba(0,0,0,0.1)"
                p={6}
                transition="all 0.3s ease"
                _hover={{ transform: "translateY(-5px)", boxShadow: "0 15px 40px rgba(0,0,0,0.15)" }}
              >
                {/* Client Header */}
                <Flex justify="space-between" align="start" mb={4}>
                  <VStack align="start" gap={2}>
                    <Flex align="center" gap={2}>
                      <Heading
                        fontSize="lg"
                        fontWeight="bold"
                        fontFamily="SN Pro, sans-serif"
                        color="brand.800"
                      >
                        {client.name}
                      </Heading>
                      <Badge
                        bg={client.status === 'vip' ? 'gold.100' : 
                             client.status === 'new' ? 'green.100' : 'brand.100'}
                        color={client.status === 'vip' ? 'gold.800' : 
                             client.status === 'new' ? 'green.800' : 'brand.800'}
                        fontSize="xs"
                        fontFamily="SN Pro, sans-serif"
                        px={2}
                        py={1}
                        borderRadius="full"
                      >
                        {client.status.toUpperCase()}
                      </Badge>
                    </Flex>
                    <Text fontSize="xs" color="gray.500" fontFamily="SN Pro, sans-serif">
                      {client.id}
                    </Text>
                  </VStack>
                  
                  <HStack gap={1}>
                    <FiStar color="gold.500" size={14} />
                    <Text fontSize="sm" fontWeight="600" color="gold.600" fontFamily="SN Pro, sans-serif">
                      {client.rating}
                    </Text>
                  </HStack>
                </Flex>

                {/* Contact Info */}
                <VStack align="start" gap={2} mb={4}>
                  <HStack gap={2}>
                    <FiMail size={14} color="gray.400" />
                    <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                      {client.email}
                    </Text>
                  </HStack>
                  <HStack gap={2}>
                    <FiPhone size={14} color="gray.400" />
                    <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                      {client.phone}
                    </Text>
                  </HStack>
                  <HStack gap={2}>
                    <FiMapPin size={14} color="gray.400" />
                    <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                      {client.location}
                    </Text>
                  </HStack>
                </VStack>

                {/* Stats */}
                <SimpleGrid columns={2} gap={3} mb={4}>
                  <Box bg="brand.50" p={3} borderRadius="lg">
                    <Text fontSize="xs" color="brand.600" fontFamily="SN Pro, sans-serif" fontWeight="600">
                      Total Orders
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color="brand.800" fontFamily="SN Pro, sans-serif">
                      {client.totalOrders}
                    </Text>
                  </Box>
                  <Box bg="gold.50" p={3} borderRadius="lg">
                    <Text fontSize="xs" color="gold.600" fontFamily="SN Pro, sans-serif" fontWeight="600">
                      Total Spent
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color="gold.800" fontFamily="SN Pro, sans-serif">
                      {client.totalSpent}
                    </Text>
                  </Box>
                </SimpleGrid>

                {/* Last Order */}
                <Flex justify="space-between" align="center" mb={4} p={3} bg="gray.50" borderRadius="lg">
                  <VStack align="start" gap={1}>
                    <Text fontSize="xs" color="gray.600" fontFamily="SN Pro, sans-serif">
                      Last Order
                    </Text>
                    <Text fontSize="sm" fontWeight="600" color="brand.800" fontFamily="SN Pro, sans-serif">
                      {client.lastOrder}
                    </Text>
                  </VStack>
                  <FiCalendar color="brand.600" />
                </Flex>

                {/* Actions */}
                <Flex gap={2}>
                  <Button
                    variant="outline"
                    borderColor="brand.600"
                    color="brand.600"
                    size="sm"
                    flex={1}
                    fontFamily="SN Pro, sans-serif"
                    _hover={{ bg: "brand.50" }}
                  >
                    <HStack gap={1} justify="center">
                      <FiEye size={14} />
                      <Text>View</Text>
                    </HStack>
                  </Button>
                  <Button
                    variant="outline"
                    borderColor="brand.600"
                    color="brand.600"
                    size="sm"
                    flex={1}
                    fontFamily="SN Pro, sans-serif"
                    _hover={{ bg: "brand.50" }}
                  >
                    <HStack gap={1} justify="center">
                      <FiEdit size={14} />
                      <Text>Edit</Text>
                    </HStack>
                  </Button>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>

          {/* Quick Actions */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            <Box
              bg="linear(135deg, brand.50 0%, brand.100 100%)"
              borderRadius="2xl"
              p={6}
              border="1px solid"
              borderColor="brand.200"
            >
              <Flex align="center" gap={3} mb={4}>
                <Box
                  w="50px"
                  h="50px"
                  bg="linear(135deg, brand.400 0%, brand.600 100%)"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  FiAlertCircle
                </Box>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="brand.800"
                  >
                    New Clients
                  </Heading>
                  <Text fontSize="sm" color="brand.600" fontFamily="SN Pro, sans-serif">
                    Need attention
                  </Text>
                </VStack>
              </Flex>
              <Text fontSize="3xl" fontWeight="bold" color="brand.800" fontFamily="SN Pro, sans-serif">
                12
              </Text>
              <Button
                variant="outline"
                borderColor="brand.600"
                color="brand.600"
                size="sm"
                mt={4}
                fontFamily="SN Pro, sans-serif"
                _hover={{ bg: "brand.50" }}
              >
                View All
              </Button>
            </Box>

            <Box
              bg="linear(135deg, gold.50 0%, gold.100 100%)"
              borderRadius="2xl"
              p={6}
              border="1px solid"
              borderColor="gold.200"
            >
              <Flex align="center" gap={3} mb={4}>
                <Box
                  w="50px"
                  h="50px"
                  bg="linear(135deg, gold.400 0%, gold.600 100%)"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  FiStar
                </Box>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="gold.800"
                  >
                    VIP Clients
                  </Heading>
                  <Text fontSize="sm" color="gold.600" fontFamily="SN Pro, sans-serif">
                    Premium customers
                  </Text>
                </VStack>
              </Flex>
              <Text fontSize="3xl" fontWeight="bold" color="gold.800" fontFamily="SN Pro, sans-serif">
                45
              </Text>
              <Button
                variant="outline"
                borderColor="gold.600"
                color="gold.600"
                size="sm"
                mt={4}
                fontFamily="SN Pro, sans-serif"
                _hover={{ bg: "gold.50" }}
              >
                View All
              </Button>
            </Box>

            <Box
              bg="linear(135deg, green.50 0%, green.100 100%)"
              borderRadius="2xl"
              p={6}
              border="1px solid"
              borderColor="green.200"
            >
              <Flex align="center" gap={3} mb={4}>
                <Box
                  w="50px"
                  h="50px"
                  bg="linear(135deg, green.400 0%, green.600 100%)"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  FiTrendingUp
                </Box>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="green.800"
                  >
                    Active This Week
                  </Heading>
                  <Text fontSize="sm" color="green.600" fontFamily="SN Pro, sans-serif">
                    Recent activity
                  </Text>
                </VStack>
              </Flex>
              <Text fontSize="3xl" fontWeight="bold" color="green.800" fontFamily="SN Pro, sans-serif">
                28
              </Text>
              <Button
                variant="outline"
                borderColor="green.600"
                color="green.600"
                size="sm"
                mt={4}
                fontFamily="SN Pro, sans-serif"
                _hover={{ bg: "green.50" }}
              >
                View All
              </Button>
            </Box>
          </SimpleGrid>

        </VStack>
      </Container>
    </Box>
  );
}

export default Clients;
