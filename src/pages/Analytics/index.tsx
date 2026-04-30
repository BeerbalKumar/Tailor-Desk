import { Box, VStack, HStack, Text, Heading, Container, Flex, SimpleGrid, Button, Badge } from "@chakra-ui/react";
import { FiTrendingUp, FiUsers, FiShoppingBag, FiDollarSign, FiCalendar, FiDownload, FiFilter, FiRefreshCw, FiActivity, FiClock, FiMapPin, FiAward } from "react-icons/fi";

function Analytics() {
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
                Analytics Dashboard
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                fontFamily="SN Pro, sans-serif"
              >
                Track your business performance and growth metrics
              </Text>
            </VStack>
            
            <HStack gap={3}>
              <Button
                variant="outline"
                borderColor="brand.600"
                color="brand.600"
                size="md"
                px={6}
                fontSize="14px"
                fontWeight="600"
                borderRadius="full"
                fontFamily="SN Pro, sans-serif"
                _hover={{ bg: "brand.50" }}
              >
                <HStack gap={2}>
                  <FiFilter />
                  <Text>Filter</Text>
                </HStack>
              </Button>
              
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
                  <FiDownload />
                  <Text>Export Report</Text>
                </HStack>
              </Button>
            </HStack>
          </Flex>

          {/* Date Range Selector */}
          <Flex justify="center" gap={4} mb={6}>
            <Button
              variant="outline"
              size="sm"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="sm"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
            >
              This Week
            </Button>
            <Button
              bg="brand.600"
              color="white"
              size="sm"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
            >
              This Month
            </Button>
            <Button
              variant="outline"
              size="sm"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
            >
              This Year
            </Button>
            <Button
              variant="outline"
              size="sm"
              borderRadius="full"
              fontFamily="SN Pro, sans-serif"
            >
              Custom
            </Button>
          </Flex>

          {/* Key Metrics Cards */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
            {[
              { 
                icon: FiDollarSign, 
                label: "Total Revenue", 
                value: "₨2,45,000", 
                change: "+15.3%", 
                positive: true,
                color: "brand"
              },
              { 
                icon: FiShoppingBag, 
                label: "Total Orders", 
                value: "1,234", 
                change: "+8.2%", 
                positive: true,
                color: "gold"
              },
              { 
                icon: FiUsers, 
                label: "New Customers", 
                value: "89", 
                change: "-2.1%", 
                positive: false,
                color: "amber"
              },
              { 
                icon: FiTrendingUp, 
                label: "Conversion Rate", 
                value: "4.8%", 
                change: "+0.5%", 
                positive: true,
                color: "green"
              }
            ].map((metric, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                boxShadow="0 10px 30px rgba(0,0,0,0.1)"
                p={6}
                transition="all 0.3s ease"
                _hover={{ transform: "translateY(-5px)", boxShadow: "0 15px 40px rgba(0,0,0,0.15)" }}
              >
                <Flex justify="space-between" align="start" mb={4}>
                  <Box
                    w="50px"
                    h="50px"
                    bg={metric.color === 'brand' ? 'linear(135deg, brand.400 0%, brand.600 100%)' : 
                         metric.color === 'gold' ? 'linear(135deg, gold.400 0%, gold.600 100%)' : 
                         metric.color === 'amber' ? 'linear(135deg, amber.400 0%, amber.600 100%)' :
                         'linear(135deg, green.400 0%, green.600 100%)'}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                  >
                    <metric.icon size={24} />
                  </Box>
                  <Badge
                    bg={metric.positive ? "green.100" : "red.100"}
                    color={metric.positive ? "green.800" : "red.800"}
                    fontSize="xs"
                    fontFamily="SN Pro, sans-serif"
                    px={2}
                    py={1}
                    borderRadius="full"
                  >
                    {metric.change}
                  </Badge>
                </Flex>
                <Text fontSize="2xl" fontWeight="bold" color="brand.800" fontFamily="SN Pro, sans-serif">
                  {metric.value}
                </Text>
                <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                  {metric.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* Charts Section */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
            {/* Revenue Chart */}
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="0 10px 30px rgba(0,0,0,0.1)"
              p={6}
            >
              <Flex justify="space-between" align="center" mb={6}>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="brand.800"
                  >
                    Revenue Overview
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Monthly revenue trends
                  </Text>
                </VStack>
                <Button
                  variant="ghost"
                  size="sm"
                  color="brand.600"
                  _hover={{ bg: "brand.50" }}
                >
                  <FiRefreshCw />
                </Button>
              </Flex>
              
              {/* Chart Placeholder */}
              <Box
                h="300px"
                bg="linear(135deg, brand.50 0%, brand.100 100%)"
                borderRadius="xl"
                border="1px solid"
                borderColor="brand.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap={4}
              >
                <FiTrendingUp size={48} color="brand.600" />
                <Text fontSize="md" color="brand.600" fontFamily="SN Pro, sans-serif" fontWeight="600">
                  Revenue Chart
                </Text>
                <Text fontSize="sm" color="brand.500" fontFamily="SN Pro, sans-serif">
                  Interactive chart visualization
                </Text>
              </Box>
            </Box>

            {/* Orders Chart */}
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="0 10px 30px rgba(0,0,0,0.1)"
              p={6}
            >
              <Flex justify="space-between" align="center" mb={6}>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="brand.800"
                  >
                    Order Analytics
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Order volume and status
                  </Text>
                </VStack>
                <Button
                  variant="ghost"
                  size="sm"
                  color="brand.600"
                  _hover={{ bg: "brand.50" }}
                >
                  <FiRefreshCw />
                </Button>
              </Flex>
              
              {/* Chart Placeholder */}
              <Box
                h="300px"
                bg="linear(135deg, gold.50 0%, gold.100 100%)"
                borderRadius="xl"
                border="1px solid"
                borderColor="gold.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap={4}
              >
                <FiShoppingBag size={48} color="gold.600" />
                <Text fontSize="md" color="gold.600" fontFamily="SN Pro, sans-serif" fontWeight="600">
                  Orders Chart
                </Text>
                <Text fontSize="sm" color="gold.500" fontFamily="SN Pro, sans-serif">
                  Order trends and patterns
                </Text>
              </Box>
            </Box>
          </SimpleGrid>

          {/* Top Products */}
          <Box
            bg="white"
            borderRadius="2xl"
            boxShadow="0 10px 30px rgba(0,0,0,0.1)"
            p={6}
          >
            <Flex justify="space-between" align="center" mb={6}>
              <VStack align="start" gap={1}>
                <Heading
                  fontSize="lg"
                  fontWeight="bold"
                  fontFamily="SN Pro, sans-serif"
                  color="brand.800"
                >
                  Top Performing Services
                </Heading>
                <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                  Most popular tailoring services
                </Text>
              </VStack>
              <Button
                variant="ghost"
                size="sm"
                color="brand.600"
                _hover={{ bg: "brand.50" }}
              >
                View All
              </Button>
            </Flex>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
              {[
                { name: "Custom Suits", orders: 342, revenue: "₨85,500", growth: "+12%" },
                { name: "Wedding Wear", orders: 289, revenue: "₨72,250", growth: "+8%" },
                { name: "Alterations", orders: 198, revenue: "₨19,800", growth: "+15%" },
                { name: "Traditional Wear", orders: 156, revenue: "₨39,000", growth: "+5%" },
                { name: "Business Suits", orders: 134, revenue: "₨33,500", growth: "+18%" },
                { name: "Casual Wear", orders: 115, revenue: "₨17,250", growth: "+3%" }
              ].map((service, index) => (
                <Box
                  key={index}
                  bg="linear(135deg, brand.50 0%, amber.50 100%)"
                  borderRadius="xl"
                  p={4}
                  border="1px solid"
                  borderColor="brand.200"
                  transition="all 0.3s ease"
                  _hover={{ transform: "translateY(-3px)", boxShadow: "md" }}
                >
                  <Flex justify="space-between" align="start" mb={3}>
                    <VStack align="start" gap={1}>
                      <Text fontSize="md" fontWeight="600" color="brand.800" fontFamily="SN Pro, sans-serif">
                        {service.name}
                      </Text>
                      <Text fontSize="xs" color="gray.600" fontFamily="SN Pro, sans-serif">
                        {service.orders} orders
                      </Text>
                    </VStack>
                    <Badge
                      bg="green.100"
                      color="green.800"
                      fontSize="xs"
                      fontFamily="SN Pro, sans-serif"
                      px={2}
                      py={1}
                      borderRadius="full"
                    >
                      {service.growth}
                    </Badge>
                  </Flex>
                  <Text fontSize="lg" fontWeight="bold" color="gold.600" fontFamily="SN Pro, sans-serif">
                    {service.revenue}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Customer Analytics */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
            {/* Customer Demographics */}
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="0 10px 30px rgba(0,0,0,0.1)"
              p={6}
            >
              <Flex justify="space-between" align="center" mb={6}>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="brand.800"
                  >
                    Customer Demographics
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Customer location distribution
                  </Text>
                </VStack>
                <Button
                  variant="ghost"
                  size="sm"
                  color="brand.600"
                  _hover={{ bg: "brand.50" }}
                >
                  <FiRefreshCw />
                </Button>
              </Flex>
              
              <VStack gap={4}>
                {[
                  { location: "Lahore", customers: 423, percentage: 50 },
                  { location: "Karachi", customers: 218, percentage: 26 },
                  { location: "Islamabad", customers: 134, percentage: 16 },
                  { location: "Others", customers: 72, percentage: 8 }
                ].map((location, index) => (
                  <Box key={index}>
                    <Flex justify="space-between" align="center" mb={2}>
                      <HStack gap={2}>
                        <FiMapPin color="brand.600" size={16} />
                        <Text fontSize="sm" fontWeight="600" color="gray.700" fontFamily="SN Pro, sans-serif">
                          {location.location}
                        </Text>
                      </HStack>
                      <HStack gap={2}>
                        <Text fontSize="sm" color="brand.600" fontFamily="SN Pro, sans-serif">
                          {location.customers}
                        </Text>
                        <Text fontSize="sm" color="gray.500" fontFamily="SN Pro, sans-serif">
                          ({location.percentage}%)
                        </Text>
                      </HStack>
                    </Flex>
                    <Box
                      h="8px"
                      bg="gray.200"
                      borderRadius="full"
                      overflow="hidden"
                    >
                      <Box
                        h="full"
                        bgGradient="linear(90deg, brand.600 0%, gold.500 100%)"
                        borderRadius="full"
                        width={`${location.percentage}%`}
                        transition="width 1s ease"
                      />
                    </Box>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* Recent Activity */}
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="0 10px 30px rgba(0,0,0,0.1)"
              p={6}
            >
              <Flex justify="space-between" align="center" mb={6}>
                <VStack align="start" gap={1}>
                  <Heading
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color="brand.800"
                  >
                    Recent Activity
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Latest customer interactions
                  </Text>
                </VStack>
                <Button
                  variant="ghost"
                  size="sm"
                  color="brand.600"
                  _hover={{ bg: "brand.50" }}
                >
                  <FiRefreshCw />
                </Button>
              </Flex>
              
              <VStack gap={4}>
                {[
                  { action: "New Order", customer: "Ahmed Khan", service: "Custom Suit", time: "2 mins ago", icon: FiShoppingBag },
                  { action: "Payment Received", customer: "Sara Ali", service: "Wedding Dress", time: "15 mins ago", icon: FiDollarSign },
                  { action: "Review Posted", customer: "Muhammad Usman", service: "Business Suit", time: "1 hour ago", icon: FiAward },
                  { action: "Appointment Booked", customer: "Fatima Sheikh", service: "Alterations", time: "2 hours ago", icon: FiCalendar },
                  { action: "Order Completed", customer: "Bilal Ahmed", service: "Traditional Wear", time: "3 hours ago", icon: FiActivity }
                ].map((activity, index) => (
                  <Flex key={index} align="center" gap={3} p={3} borderRadius="lg" _hover={{ bg: "brand.50" }}>
                    <Box
                      w="40px"
                      h="40px"
                      bg="linear(135deg, brand.100 0%, gold.100 100%)"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="brand.600"
                    >
                      <activity.icon size={18} />
                    </Box>
                    <VStack align="start" gap={1} flex={1}>
                      <Text fontSize="sm" fontWeight="600" color="brand.800" fontFamily="SN Pro, sans-serif">
                        {activity.action}
                      </Text>
                      <HStack gap={2}>
                        <Text fontSize="xs" color="gray.600" fontFamily="SN Pro, sans-serif">
                          {activity.customer}
                        </Text>
                        <Text fontSize="xs" color="gray.400" fontFamily="SN Pro, sans-serif">
                          •
                        </Text>
                        <Text fontSize="xs" color="gray.600" fontFamily="SN Pro, sans-serif">
                          {activity.service}
                        </Text>
                      </HStack>
                    </VStack>
                    <HStack gap={1}>
                      <FiClock size={12} color="gray.400" />
                      <Text fontSize="xs" color="gray.400" fontFamily="SN Pro, sans-serif">
                        {activity.time}
                      </Text>
                    </HStack>
                  </Flex>
                ))}
              </VStack>
            </Box>
          </SimpleGrid>

        </VStack>
      </Container>
    </Box>
  );
}

export default Analytics;
