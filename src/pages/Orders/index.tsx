import { Box, VStack, HStack, Text, Heading, Container, Flex, SimpleGrid, Button, Badge, Input } from "@chakra-ui/react";
import { FiShoppingBag, FiSearch, FiFilter, FiPlus, FiEye, FiEdit, FiDownload, FiCalendar, FiClock, FiMapPin, FiDollarSign, FiCheckCircle, FiAlertCircle, FiRefreshCw } from "react-icons/fi";

function Orders() {
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
                Orders Management
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                fontFamily="SN Pro, sans-serif"
              >
                Manage and track all your tailoring orders
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
                  <Text>New Order</Text>
                </HStack>
              </Button>
            </HStack>
          </Flex>

          {/* Stats Cards */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
            {[
              { 
                icon: FiShoppingBag, 
                label: "Total Orders", 
                value: "1,234", 
                color: "brand"
              },
              { 
                icon: FiClock, 
                label: "Pending", 
                value: "45", 
                color: "amber"
              },
              { 
                icon: FiCheckCircle, 
                label: "Completed", 
                value: "1,156", 
                color: "green"
              },
              { 
                icon: FiDollarSign, 
                label: "Revenue", 
                value: "₨2,45,000", 
                color: "gold"
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
                         stat.color === 'amber' ? 'linear(135deg, amber.400 0%, amber.600 100%)' : 
                         stat.color === 'green' ? 'linear(135deg, green.400 0%, green.600 100%)' :
                         'linear(135deg, gold.400 0%, gold.600 100%)'}
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
                    placeholder="Search orders by customer, service, or ID..."
                    pl={12}
                    fontFamily="SN Pro, sans-serif"
                    _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>
              </HStack>
              
              <HStack gap={3}>
                <Input
                  placeholder="Status"
                  w="150px"
                  defaultValue="All Status"
                  fontFamily="SN Pro, sans-serif"
                  _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                />
                
                <Input
                  placeholder="Date Range"
                  w="150px"
                  defaultValue="This Month"
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

          {/* Orders Table */}
          <Box
            bg="white"
            borderRadius="2xl"
            boxShadow="0 10px 30px rgba(0,0,0,0.1)"
            overflow="hidden"
          >
            <Box p={6} borderBottom="1px solid" borderColor="gray.200">
              <Flex justify="space-between" align="center">
                <Heading
                  fontSize="lg"
                  fontWeight="bold"
                  fontFamily="SN Pro, sans-serif"
                  color="brand.800"
                >
                  Recent Orders
                </Heading>
                <Button
                  variant="outline"
                  borderColor="brand.600"
                  color="brand.600"
                  size="sm"
                  fontFamily="SN Pro, sans-serif"
                  _hover={{ bg: "brand.50" }}
                >
                  <HStack gap={2}>
                    <FiDownload />
                    <Text>Export</Text>
                  </HStack>
                </Button>
              </Flex>
            </Box>
            
            <Box overflowX="auto">
              {/* Table Header */}
              <Flex bg="brand.50" p={4} fontWeight="600" fontSize="sm" fontFamily="SN Pro, sans-serif" color="brand.800">
                <Box flex="1">Order ID</Box>
                <Box flex="2">Customer</Box>
                <Box flex="2">Service</Box>
                <Box flex="1">Status</Box>
                <Box flex="1">Amount</Box>
                <Box flex="1">Date</Box>
                <Box flex="1">Actions</Box>
              </Flex>
              
              {/* Table Rows */}
              {[
                {
                  id: "#ORD-2024-001",
                  customer: "Ahmed Khan",
                  service: "Custom Business Suit",
                  status: "in-progress",
                  amount: "₨15,000",
                  date: "2024-04-28"
                },
                {
                  id: "#ORD-2024-002",
                  customer: "Sara Ali",
                  service: "Wedding Dress",
                  status: "pending",
                  amount: "₨25,000",
                  date: "2024-04-29"
                },
                {
                  id: "#ORD-2024-003",
                  customer: "Muhammad Usman",
                  service: "Traditional Sherwani",
                  status: "completed",
                  amount: "₨18,000",
                  date: "2024-04-27"
                },
                {
                  id: "#ORD-2024-004",
                  customer: "Fatima Sheikh",
                  service: "Alterations",
                  status: "in-progress",
                  amount: "₨3,500",
                  date: "2024-04-29"
                },
                {
                  id: "#ORD-2024-005",
                  customer: "Bilal Ahmed",
                  service: "Casual Wear",
                  status: "cancelled",
                  amount: "₨8,000",
                  date: "2024-04-26"
                }
              ].map((order, index) => (
                <Flex 
                  key={index} 
                  p={4} 
                  borderBottom="1px solid" 
                  borderColor="gray.100"
                  align="center"
                  _hover={{ bg: "brand.50" }}
                  transition="all 0.2s ease"
                >
                  <Box flex="1">
                    <Text fontSize="sm" fontWeight="600" color="brand.800" fontFamily="SN Pro, sans-serif">
                      {order.id}
                    </Text>
                  </Box>
                  
                  <Box flex="2">
                    <VStack align="start" gap={1}>
                      <Text fontSize="sm" fontWeight="600" color="brand.800" fontFamily="SN Pro, sans-serif">
                        {order.customer}
                      </Text>
                      <HStack gap={2}>
                        <FiMapPin size={12} color="gray.400" />
                        <Text fontSize="xs" color="gray.500" fontFamily="SN Pro, sans-serif">
                          Lahore
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                  
                  <Box flex="2">
                    <Text fontSize="sm" color="gray.700" fontFamily="SN Pro, sans-serif">
                      {order.service}
                    </Text>
                  </Box>
                  
                  <Box flex="1">
                    <Badge
                      bg={order.status === 'completed' ? 'green.100' : 
                           order.status === 'in-progress' ? 'blue.100' : 
                           order.status === 'pending' ? 'amber.100' : 'red.100'}
                      color={order.status === 'completed' ? 'green.800' : 
                            order.status === 'in-progress' ? 'blue.800' : 
                            order.status === 'pending' ? 'amber.800' : 'red.800'}
                      fontSize="xs"
                      fontFamily="SN Pro, sans-serif"
                      px={2}
                      py={1}
                      borderRadius="full"
                    >
                      {order.status === 'in-progress' ? 'In Progress' : 
                       order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </Box>
                  
                  <Box flex="1">
                    <Text fontSize="sm" fontWeight="600" color="gold.600" fontFamily="SN Pro, sans-serif">
                      {order.amount}
                    </Text>
                  </Box>
                  
                  <Box flex="1">
                    <VStack align="start" gap={1}>
                      <HStack gap={1}>
                        <FiCalendar size={12} color="gray.400" />
                        <Text fontSize="xs" color="gray.600" fontFamily="SN Pro, sans-serif">
                          {order.date}
                        </Text>
                      </HStack>
                      <Text fontSize="xs" color="gray.500" fontFamily="SN Pro, sans-serif">
                        2:30 PM
                      </Text>
                    </VStack>
                  </Box>
                  
                  <Box flex="1">
                    <HStack gap={2}>
                      <Button
                        variant="ghost"
                        size="sm"
                        color="brand.600"
                        _hover={{ bg: "brand.50" }}
                      >
                        <FiEye />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        color="brand.600"
                        _hover={{ bg: "brand.50" }}
                      >
                        <FiEdit />
                      </Button>
                    </HStack>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>

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
                  <FiAlertCircle size={24} />
                </Box>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="brand.800"
                  >
                    Pending Orders
                  </Heading>
                  <Text fontSize="sm" color="brand.600" fontFamily="SN Pro, sans-serif">
                    Need your attention
                  </Text>
                </VStack>
              </Flex>
              <Text fontSize="3xl" fontWeight="bold" color="brand.800" fontFamily="SN Pro, sans-serif">
                45
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
              bg="linear(135deg, amber.50 0%, amber.100 100%)"
              borderRadius="2xl"
              p={6}
              border="1px solid"
              borderColor="amber.200"
            >
              <Flex align="center" gap={3} mb={4}>
                <Box
                  w="50px"
                  h="50px"
                  bg="linear(135deg, amber.400 0%, amber.600 100%)"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  <FiClock size={24} />
                </Box>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="amber.800"
                  >
                    In Progress
                  </Heading>
                  <Text fontSize="sm" color="amber.600" fontFamily="SN Pro, sans-serif">
                    Currently working on
                  </Text>
                </VStack>
              </Flex>
              <Text fontSize="3xl" fontWeight="bold" color="amber.800" fontFamily="SN Pro, sans-serif">
                23
              </Text>
              <Button
                variant="outline"
                borderColor="amber.600"
                color="amber.600"
                size="sm"
                mt={4}
                fontFamily="SN Pro, sans-serif"
                _hover={{ bg: "amber.50" }}
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
                  <FiCheckCircle size={24} />
                </Box>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="green.800"
                  >
                    Completed Today
                  </Heading>
                  <Text fontSize="sm" color="green.600" fontFamily="SN Pro, sans-serif">
                    Ready for delivery
                  </Text>
                </VStack>
              </Flex>
              <Text fontSize="3xl" fontWeight="bold" color="green.800" fontFamily="SN Pro, sans-serif">
                12
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

export default Orders;
