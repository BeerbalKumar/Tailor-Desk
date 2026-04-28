import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Container,
  Icon,
  Flex,
  SimpleGrid,
  Button,
  Badge,
} from "@chakra-ui/react";
import {
  FiPackage,
  FiUsers,
  FiDollarSign,
  FiShoppingCart,
  FiArrowUp,
  FiArrowDown,
  FiMoreVertical,
} from "react-icons/fi";
import { useThemeColors,useColorModeValue } from "../../components/ui/color-mode";

function Dashboard() {
  const { bg, cardBg, textPrimary, textSecondary, borderColor, shadowColor } =
    useThemeColors();

  const viewAllButtonHover = useColorModeValue("brand.50", "brand.500");
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
                Dashboard Overview
              </Heading>
              <Text
                fontSize="md"
                color={textSecondary}
                fontFamily="SN Pro, sans-serif"
              >
                Welcome back! Here's what's happening with your tailoring
                business today.
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
                <Text>Export Report</Text>
                <FiMoreVertical />
              </HStack>
            </Button>
          </Flex>

          {/* Stats Cards */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} mb={8}>
            {[
              {
                label: "Total Orders",
                value: "1,234",
                change: "+12.5%",
                icon: FiPackage,
                color: "blue",
              },
              {
                label: "Active Clients",
                value: "847",
                change: "+8.2%",
                icon: FiUsers,
                color: "green",
              },
              {
                label: "Revenue",
                value: "$45,678",
                change: "+23.1%",
                icon: FiDollarSign,
                color: "gold",
              },
              {
                label: "Pending Orders",
                value: "23",
                change: "-5.4%",
                icon: FiShoppingCart,
                color: "orange",
              },
            ].map((stat, index) => (
              <Box
                key={stat.label}
                bg={cardBg}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="xl"
                boxShadow="md"
                p={6}
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "lg",
                }}
              >
                <Flex justify="space-between" align="start" mb={4}>
                  <HStack gap={3}>
                    <Box
                      bg={`${stat.color}.50`}
                      p={3}
                      borderRadius="lg"
                      color={`${stat.color}.600`}
                    >
                      <Icon as={stat.icon} boxSize={6} />
                    </Box>
                    <VStack align="start" gap={1}>
                      <Text
                        fontSize="sm"
                        color={textSecondary}
                        fontFamily="SN Pro, sans-serif"
                        fontWeight="500"
                      >
                        {stat.label}
                      </Text>
                      <HStack gap={2}>
                        {stat.change.includes("+") ? (
                          <Icon as={FiArrowUp} boxSize={4} color="green.500" />
                        ) : (
                          <Icon as={FiArrowDown} boxSize={4} color="red.500" />
                        )}
                        <Text
                          fontSize="xs"
                          fontWeight="600"
                          color={
                            stat.change.includes("+") ? "green.500" : "red.500"
                          }
                        >
                          {stat.change}
                        </Text>
                      </HStack>
                    </VStack>
                  </HStack>
                </Flex>

                <VStack align="end">
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    fontFamily="SN Pro, sans-serif"
                    color={"gold.500"}
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize="sm"
                    color={textSecondary}
                    fontFamily="SN Pro, sans-serif"
                  >
                    vs last month
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Recent Orders */}
          <Box
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="xl"
            boxShadow="md"
            p={6}
          >
            <Flex justify="space-between" align="center" mb={6}>
              <Heading
                fontSize="xl"
                fontWeight="bold"
                fontFamily="SN Pro, sans-serif"
                color="gold.600"
              >
                Recent Orders
              </Heading>
              <Button
                variant="outline"
                size="sm"
                borderColor={borderColor}
                color={textPrimary}
                fontSize="14px"
                fontWeight="600"
                borderRadius="full"
                fontFamily="SN Pro, sans-serif"
                _hover={{
                  bg: viewAllButtonHover,
                }}
              >
                View All
              </Button>
            </Flex>

            {/* Orders List */}
            <VStack gap={0} align="stretch">
              {[
                {
                  id: "ORD-001",
                  customer: "John Doe",
                  status: "completed",
                  amount: "$2,450",
                  date: "2025-01-15",
                },
                {
                  id: "ORD-002",
                  customer: "Jane Smith",
                  status: "in-progress",
                  amount: "$1,800",
                  date: "2025-01-14",
                },
                {
                  id: "ORD-003",
                  customer: "Mike Johnson",
                  status: "pending",
                  amount: "$3,200",
                  date: "2025-01-13",
                },
              ].map((order) => (
                <Flex
                  key={order.id}
                  px={4}
                  py={3}
                  borderBottom="1px solid"
                  borderColor={borderColor}
                  bg={cardBg}
                  _hover={{ bg: viewAllButtonHover }}
                  transition="background 0.2s ease"
                  cursor="pointer"
                >
                  <Box flex={1} fontSize="sm" fontFamily="SN Pro, sans-serif">
                    {order.id}
                  </Box>
                  <Box flex={2} fontSize="sm" fontFamily="SN Pro, sans-serif">
                    {order.customer}
                  </Box>
                  <Box flex={1}>
                    <Badge
                      colorScheme={
                        order.status === "completed"
                          ? "green"
                          : order.status === "in-progress"
                            ? "blue"
                            : "orange"
                      }
                      fontSize="xs"
                      fontFamily="SN Pro, sans-serif"
                    >
                      {order.status === "completed"
                        ? "Completed"
                        : order.status === "in-progress"
                          ? "In Progress"
                          : "Pending"}
                    </Badge>
                  </Box>
                  <Box
                    flex={1}
                    textAlign="right"
                    fontSize="sm"
                    fontFamily="SN Pro, sans-serif"
                    fontWeight="600"
                  >
                    {order.amount}
                  </Box>
                  <Box
                    flex={1}
                    textAlign="right"
                    fontSize="sm"
                    fontFamily="SN Pro, sans-serif"
                    color="gray.500"
                  >
                    {order.date}
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Box>

          {/* Quick Actions */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {[
              {
                title: "New Order",
                icon: FiPackage,
                color: "blue",
                description: "Create a new tailoring order",
              },
              {
                title: "Add Client",
                icon: FiUsers,
                color: "green",
                description: "Register a new client",
              },
              {
                title: "View Analytics",
                icon: FiDollarSign,
                color: "gold",
                description: "Detailed business insights",
              },
            ].map((action) => (
              <Box
                key={action.title}
                bg={cardBg}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="xl"
                boxShadow="md"
                p={6}
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "lg",
                }}
                cursor="pointer"
              >
                <Box
                  bg={`linear-gradient(135deg, ${action.color}.500, ${action.color}.600)`}
                  p={4}
                  borderRadius="xl"
                  color="gold.500"
                  mb={4}
                >
                  <Icon as={action.icon} boxSize={8} />
                </Box>
                <Heading
                  fontSize="lg"
                  fontWeight="bold"
                  fontFamily="SN Pro, sans-serif"
                  color={textPrimary}
                  mb={2}
                >
                  {action.title}
                </Heading>
                <Text
                  fontSize="sm"
                  color={textSecondary}
                  fontFamily="SN Pro, sans-serif"
                >
                  {action.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

export default Dashboard;
