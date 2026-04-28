import { Box, VStack, HStack, Text, Heading, Container, Flex, SimpleGrid, Button, Input } from "@chakra-ui/react";
import { FiSettings, FiBell, FiShield, FiGlobe, FiDatabase, FiMail, FiLock, FiUser, FiMonitor, FiMoon, FiSun, FiSave, FiDownload, FiUpload } from "react-icons/fi";
import { useThemeColors } from "../../components/ui/color-mode";


function Settings() {
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
                Settings
              </Heading>
              <Text
                fontSize="md"
                color={textSecondary}
                fontFamily="SN Pro, sans-serif"
              >
                Manage your application preferences and configurations
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
                bg: "gold.600"
              }}
            >
              <HStack gap={2}>
                <FiSave />
                <Text>Save All Settings</Text>
              </HStack>
            </Button>
          </Flex>

          {/* General Settings */}
          <Box
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="xl"
            boxShadow="md"
            p={6}
          >
            <Flex align="center" gap={3} mb={6}>
              <Box bg="brand.100" p={2} borderRadius="md">
                <FiGlobe size={5} color="brand.600" />
              </Box>
              <Heading
                fontSize="lg"
                fontWeight="bold"
                fontFamily="SN Pro, sans-serif"
                color="brand.800"
              >
                General Settings
              </Heading>
            </Flex>
            
            <VStack gap={6}>
              {/* Language */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Language
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Choose your preferred language
                  </Text>
                </VStack>
                <Input
                  defaultValue="English"
                  w="200px"
                  fontFamily="SN Pro, sans-serif"
                  _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                />
              </Flex>

              {/* Time Zone */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Time Zone
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Set your local time zone
                  </Text>
                </VStack>
                <Input
                  defaultValue="Pakistan (PKT)"
                  w="200px"
                  fontFamily="SN Pro, sans-serif"
                  _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                />
              </Flex>

              {/* Date Format */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Date Format
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Choose how dates are displayed
                  </Text>
                </VStack>
                <Input
                  defaultValue="DD-MM-YYYY"
                  w="200px"
                  fontFamily="SN Pro, sans-serif"
                  _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                />
              </Flex>
            </VStack>
          </Box>

          {/* Appearance Settings */}
          <Box
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="xl"
            boxShadow="md"
            p={6}
          >
            <Flex align="center" gap={3} mb={6}>
              <Box bg="brand.100" p={2} borderRadius="md">
                <FiMonitor size={5} color="brand.600" />
              </Box>
              <Heading
                fontSize="lg"
                fontWeight="bold"
                fontFamily="SN Pro, sans-serif"
                color="brand.800"
              >
                Appearance
              </Heading>
            </Flex>
            
            <VStack gap={6}>
              {/* Theme */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Theme
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Choose between light and dark mode
                  </Text>
                </VStack>
                <HStack gap={2}>
                  <Button
                    size="sm"
                    variant="outline"
                    borderColor="brand.600"
                    color="brand.600"
                    fontFamily="SN Pro, sans-serif"
                  >
                    <HStack gap={1}>
                      <FiSun />
                      <Text>Light</Text>
                    </HStack>
                  </Button>
                  <Button
                    size="sm"
                    bg="brand.600"
                    color="white"
                    fontFamily="SN Pro, sans-serif"
                  >
                    <HStack gap={1}>
                      <FiMoon />
                      <Text>Dark</Text>
                    </HStack>
                  </Button>
                </HStack>
              </Flex>

              {/* Font Size */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1} flex={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Font Size
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Adjust the text size across the application
                  </Text>
                </VStack>
                <Input
                  defaultValue="16px"
                  w="120px"
                  fontFamily="SN Pro, sans-serif"
                  _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                />
              </Flex>

              {/* Compact Mode */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Compact Mode
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Reduce spacing and padding for more content
                  </Text>
                </VStack>
                <Button
                  size="sm"
                  variant="outline"
                  borderColor="brand.600"
                  color="brand.600"
                  fontFamily="SN Pro, sans-serif"
                >
                  Disabled
                </Button>
              </Flex>
            </VStack>
          </Box>

          {/* Notification Settings */}
          <Box
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="xl"
            boxShadow="md"
            p={6}
          >
            <Flex align="center" gap={3} mb={6}>
              <Box bg="brand.100" p={2} borderRadius="md">
                <FiBell size={5} color="brand.600" />
              </Box>
              <Heading
                fontSize="lg"
                fontWeight="bold"
                fontFamily="SN Pro, sans-serif"
                color="brand.800"
              >
                Notifications
              </Heading>
            </Flex>
            
            <VStack gap={6}>
              {/* Email Notifications */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Email Notifications
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Receive updates via email
                  </Text>
                </VStack>
                <Button
                  size="sm"
                  bg="brand.600"
                  color="white"
                  fontFamily="SN Pro, sans-serif"
                >
                  Enabled
                </Button>
              </Flex>

              {/* Push Notifications */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Push Notifications
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Browser push notifications
                  </Text>
                </VStack>
                <Button
                  size="sm"
                  variant="outline"
                  borderColor="brand.600"
                  color="brand.600"
                  fontFamily="SN Pro, sans-serif"
                >
                  Disabled
                </Button>
              </Flex>

              {/* Order Updates */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Order Updates
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Get notified about order status changes
                  </Text>
                </VStack>
                <Button
                  size="sm"
                  bg="brand.600"
                  color="white"
                  fontFamily="SN Pro, sans-serif"
                >
                  Enabled
                </Button>
              </Flex>

              {/* Marketing Emails */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Marketing Emails
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Receive promotional offers and updates
                  </Text>
                </VStack>
                <Button
                  size="sm"
                  variant="outline"
                  borderColor="brand.600"
                  color="brand.600"
                  fontFamily="SN Pro, sans-serif"
                >
                  Disabled
                </Button>
              </Flex>
            </VStack>
          </Box>

          {/* Security Settings */}
          <Box
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="xl"
            boxShadow="md"
            p={6}
          >
            <Flex align="center" gap={3} mb={6}>
              <Box bg="brand.100" p={2} borderRadius="md">
                <FiShield size={5} color="brand.600" />
              </Box>
              <Heading
                fontSize="lg"
                fontWeight="bold"
                fontFamily="SN Pro, sans-serif"
                color="brand.800"
              >
                Security
              </Heading>
            </Flex>
            
            <VStack gap={6}>
              {/* Two-Factor Authentication */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Two-Factor Authentication
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Add an extra layer of security
                  </Text>
                </VStack>
                <Button
                  size="sm"
                  variant="outline"
                  borderColor="brand.600"
                  color="brand.600"
                  fontFamily="SN Pro, sans-serif"
                >
                  Disabled
                </Button>
              </Flex>

              {/* Session Timeout */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1} flex={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Session Timeout
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Automatically log out after inactivity
                  </Text>
                </VStack>
                <Input
                  defaultValue="30 min"
                  w="120px"
                  fontFamily="SN Pro, sans-serif"
                  _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                />
              </Flex>

              {/* Password Expiry */}
              <Flex justify="space-between" align="center" w="full">
                <VStack align="start" gap={1}>
                  <Text fontSize="md" fontWeight="600" fontFamily="SN Pro, sans-serif" color="brand.800">
                    Password Expiry
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontFamily="SN Pro, sans-serif">
                    Remind to change password regularly
                  </Text>
                </VStack>
                <Button
                  size="sm"
                  bg="brand.600"
                  color="white"
                  fontFamily="SN Pro, sans-serif"
                >
                  Enabled
                </Button>
              </Flex>
            </VStack>
          </Box>

          {/* Data Management */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
            {/* Backup & Restore */}
            <Box
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              borderRadius="xl"
              boxShadow="md"
              p={6}
            >
              <Flex align="center" gap={3} mb={6}>
                <Box bg="brand.100" p={2} borderRadius="md">
                  <FiDatabase size={5} color="brand.600" />
                </Box>
                <Heading
                  fontSize="lg"
                  fontWeight="bold"
                  fontFamily="SN Pro, sans-serif"
                  color="brand.800"
                >
                  Backup & Restore
                </Heading>
              </Flex>
              
              <VStack gap={4}>
                <Box
                  bg="blue.50"
                  border="1px solid"
                  borderColor="blue.200"
                  borderRadius="md"
                  p={3}
                >
                  <Text fontSize="sm" fontFamily="SN Pro, sans-serif" color="blue.800">
                    ℹ️ Last backup: 2 days ago
                  </Text>
                </Box>
                
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
                    <Text>Download Backup</Text>
                  </HStack>
                </Button>
                
                <Button
                  variant="outline"
                  borderColor="green.600"
                  color="green.600"
                  size="sm"
                  fontFamily="SN Pro, sans-serif"
                  _hover={{ bg: "green.50" }}
                >
                  <HStack gap={2}>
                    <FiUpload />
                    <Text>Restore from Backup</Text>
                  </HStack>
                </Button>
              </VStack>
            </Box>

            {/* Account Actions */}
            <Box
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              borderRadius="xl"
              boxShadow="md"
              p={6}
            >
              <Flex align="center" gap={3} mb={6}>
                <Box bg="brand.100" p={2} borderRadius="md">
                  <FiUser size={5} color="brand.600" />
                </Box>
                <Heading
                  fontSize="lg"
                  fontWeight="bold"
                  fontFamily="SN Pro, sans-serif"
                  color="brand.800"
                >
                  Account Actions
                </Heading>
              </Flex>
              
              <VStack gap={4}>
                <Button
                  variant="outline"
                  borderColor="brand.600"
                  color="brand.600"
                  size="sm"
                  fontFamily="SN Pro, sans-serif"
                  _hover={{ bg: "brand.50" }}
                >
                  <HStack gap={2}>
                    <FiLock />
                    <Text>Change Password</Text>
                  </HStack>
                </Button>
                
                <Button
                  variant="outline"
                  borderColor="orange.600"
                  color="orange.600"
                  size="sm"
                  fontFamily="SN Pro, sans-serif"
                  _hover={{ bg: "orange.50" }}
                >
                  <HStack gap={2}>
                    <FiMail />
                    <Text>Update Email</Text>
                  </HStack>
                </Button>
                
                <Button
                  variant="outline"
                  borderColor="red.600"
                  color="red.600"
                  size="sm"
                  fontFamily="SN Pro, sans-serif"
                  _hover={{ bg: "red.50" }}
                >
                  <HStack gap={2}>
                    <FiUser />
                    <Text>Delete Account</Text>
                  </HStack>
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>

        </VStack>
      </Container>
    </Box>
  );
}

export default Settings;