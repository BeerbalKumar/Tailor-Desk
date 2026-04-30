import { Box, VStack, HStack, Text, Heading, Container, Flex, SimpleGrid, Button, Badge, Input, Textarea, Select } from "@chakra-ui/react";
import { FiSave, FiCamera } from "react-icons/fi";
import { useThemeColors,useColorModeValue } from "../../components/ui/color-mode";
import { bg } from "zod/locales";

function Profile() {
    const { bg, cardBg, textPrimary, textSecondary, borderColor, shadowColor } =
    useThemeColors();

     const navItemHoverBgModeValue = useColorModeValue(
        "brand.100",
        "brand.500",
      );

           const profilePicBg = useColorModeValue(
        "gray.200",
        "gray.700",
      );
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
            borderRadius="2xl"
            boxShadow="0 10px 30px rgba(0,0,0,0.1)"
            overflow="hidden"
            position="relative"
          >
            {/* Cover Banner */}
            <Box
              h="100px"
              bgGradient="linear(to-r, brand.600, gold.500)"
              position="relative"
            >
              <Box
                position="absolute"
                top={4}
                right={4}
                bg={profilePicBg}
                backdropFilter="blur(10px)"
                px={3}
                py={1}
                borderRadius="full"
              >
                <Text fontSize="xs" color={textPrimary} fontFamily="SN Pro, sans-serif" fontWeight="600">
                  PREMIUM TAILOR
                </Text>
              </Box>
            </Box>
            
            <Box p={8}>
              <Flex direction={{ base: "column", md: "row" }} gap={8} align="flex-start">
                {/* Avatar Section */}
                <VStack align="center" gap={4}>
                  <Box position="relative" mt="-16">
                    <Box
                      w="140px"
                      h="140px"
                      bg={profilePicBg}
                      borderRadius="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color={textPrimary}
                      fontSize="4xl"
                      fontWeight="bold"
                      fontFamily="SN Pro, sans-serif"
                      // boxShadow="0 15px 35px rgba(0,0,0,0.2)"
                      border="1px solid"
                      borderColor={borderColor}
                      position="relative"
                      overflow="hidden"
                    >
                      {/* <Text
                        position="absolute"
                        top={5}
                        right={5}
                        bg="green.500"
                        w="4"
                        h="4"
                        borderRadius="full"
                        border="2px solid white"
                      /> */}
                      JD
                    </Box>
                    <Button
                      aria-label="Change avatar"
                      size="sm"
                      borderRadius="full"
                      position="absolute"
                      bottom={2}
                      right={2}
                      bg={"gold.500"}
                      boxShadow="lg"
                      _hover={{ bg: "gold.600", transform: "scale(1.1)" }}
                      p={2}
                      color="white"
                    >
                      <FiCamera />
                    </Button>
                  </Box>
                  <VStack align="center" gap={2}>
                    <Heading
                      fontSize="2xl"
                      fontWeight="bold"
                      fontFamily="SN Pro, sans-serif"
                      color={textPrimary}
                    >
                      John Doe
                    </Heading>
                    <Text
                      fontSize="md"
                      color="gold.600"
                      fontFamily="SN Pro, sans-serif"
                      fontWeight="600"
                    >
                      Master Tailor & Fashion Designer
                    </Text>
                    <HStack gap={2}>
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
                      <Badge
                        bg="gold.100"
                        color="gold.600"
                        fontSize="sm"
                        fontFamily="SN Pro, sans-serif"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        Verified
                      </Badge>
                    </HStack>
                  </VStack>
                </VStack>

                {/* Stats and Info */}
                <VStack gap={6} flex={1} align="start">
                  {/* Bio */}
                  <Box>
                    <Text
                      fontSize="md"
                      color={textSecondary}
                      fontFamily="SN Pro, sans-serif"
                      lineHeight="1.6"
                      mb={4}
                    >
                      Award-winning master tailor with 5+ years of expertise in bespoke suits, traditional wear, and modern fashion design. Committed to delivering exceptional craftsmanship and client satisfaction.
                    </Text>
                    
                    <HStack gap={6} flexWrap="wrap">
                      <HStack gap={2}>
                        <Box w="4" h="4" bg="brand.500" borderRadius="full" />
                        <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif">
                          Lahore, Pakistan
                        </Text>
                      </HStack>
                      <HStack gap={2}>
                        <Box w="4" h="4" bg="gold.500" borderRadius="full" />
                        <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif">
                          Since 2019
                        </Text>
                      </HStack>
                      <HStack gap={2}>
                        <Box w="4" h="4" bg="green.500" borderRadius="full" />
                        <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif">
                          12 Awards
                        </Text>
                      </HStack>
                    </HStack>
                  </Box>

                  {/* Quick Stats */}
                  <Box w="full">
                    <Heading
                      fontSize="lg"
                      fontWeight="600"
                      fontFamily="SN Pro, sans-serif"
                      color={"gold.500"}
                      mb={4}
                    >
                      Performance Metrics
                    </Heading>
                    <SimpleGrid columns={{ base: 3, md: 3 }} gap={4} w="full">
                      <Box
                        bg="linear(135deg, brand.50 0%, brand.100 100%)"
                        p={4}
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="brand.200"
                        transition="all 0.3s ease"
                        _hover={{ transform: "translateY(-3px)", boxShadow: "md" }}
                      >
                        <Text fontSize="xs" color={textSecondary} fontFamily="SN Pro, sans-serif" fontWeight="600">
                          TOTAL ORDERS
                        </Text>
                        <Text fontSize="2xl"  fontWeight="bold" color={textPrimary} fontFamily="SN Pro, sans-serif">
                          1,234
                        </Text>
                        <Text fontSize="xs" color={textSecondary} fontFamily="SN Pro, sans-serif">
                          +12% this month
                        </Text>
                      </Box>
                      <Box
                        bg="linear(135deg, gold.50 0%, gold.100 100%)"
                        p={4}
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gold.200"
                        transition="all 0.3s ease"
                        _hover={{ transform: "translateY(-3px)", boxShadow: "md" }}
                      >
                        <Text fontSize="xs" color="gold.500" fontFamily="SN Pro, sans-serif" fontWeight="600">
                          HAPPY CLIENTS
                        </Text>
                        <Text fontSize="2xl" fontWeight="bold" color="gold.800" fontFamily="SN Pro, sans-serif">
                          847
                        </Text>
                        <Text fontSize="xs" color="gold.500" fontFamily="SN Pro, sans-serif">
                          4.9/5.0 rating
                        </Text>
                      </Box>
                      <Box
                        bg="linear(135deg, green.50 0%, green.100 100%)"
                        p={4}
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="green.200"
                        transition="all 0.3s ease"
                        _hover={{ transform: "translateY(-3px)", boxShadow: "md" }}
                      >
                        <Text fontSize="xs" color="green.600" fontFamily="SN Pro, sans-serif" fontWeight="600">
                          EXPERIENCE
                        </Text>
                        <Text fontSize="2xl" fontWeight="bold" color={textPrimary} fontFamily="SN Pro, sans-serif">
                          5+
                        </Text>
                        <Text fontSize="xs" color="green.600" fontFamily="SN Pro, sans-serif">
                          Years Active
                        </Text>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </VStack>
              </Flex>
            </Box>
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
                  <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif" mb={2}>
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
                  <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif" mb={2}>
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
                  <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif" mb={2}>
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
                  <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif" mb={2}>
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
                  <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif" mb={2}>
                    Bio
                  </Text>
                  <Textarea
                    defaultValue="Professional master tailor with over 5 years of experience in custom clothing design and alterations."
                    fontFamily="SN Pro, sans-serif"
                    rows={3}
                    p={5}
                    // _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                    // height="45px"
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="20px"
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
                  <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif" mb={2}>
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
                  <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif" mb={2}>
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
                  <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif" mb={2}>
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
                  <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif" mb={2}>
                    Shop Address
                  </Text>
                  <Textarea
                    defaultValue="123 Fashion Street, Gulberg, Lahore, Pakistan"
                    fontFamily="SN Pro, sans-serif"
                    rows={2}
                    p={5}
                    // height="45px"
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="20px"
                    // _focus={{ borderColor: "brand.600", boxShadow: "0 0 0 1px brand.600" }}
                  />
                </Box>

                <Box width="100%">
                  <Text fontSize="sm" color={textSecondary} fontFamily="SN Pro, sans-serif" mb={2}>
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
                  bg={navItemHoverBgModeValue}
                  color={textPrimary}
                  fontSize="sm"
                  fontFamily="SN Pro, sans-serif"
                  px={3}
                  py={3}
                  borderRadius="full"
                  justifyContent="center"
                  alignItems="center"
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

// import {
//   Box,
//   VStack,
//   HStack,
//   Text,
//   Heading,
//   Container,
//   Flex,
//   SimpleGrid,
//   Button,
//   Badge,
//   Input,
//   Textarea,
//   Avatar,
//   Progress,
//   Switch,
//   Tabs,
// } from "@chakra-ui/react";
// import { FiSave, FiCamera } from "react-icons/fi";
// import { useThemeColors, useColorModeValue } from "../../components/ui/color-mode";

// const Card = ({ children }) => {
//   const { cardBg, borderColor } = useThemeColors();

//   return (
//     <Box
//       bg={cardBg}
//       p={6}
//       borderRadius="2xl"
//       border="1px solid"
//       borderColor={borderColor}
//       boxShadow="sm"
//       transition="all 0.25s ease"
//       _hover={{
//         transform: "translateY(-6px)",
//         boxShadow: "xl",
//       }}
//     >
//       {children}
//     </Box>
//   );
// };

// function Profile() {
//   const { bg, textPrimary, textSecondary, borderColor,cardBg } = useThemeColors();
//   const hoverBg = useColorModeValue("gold.100", "gold.600");

//   return (
//     <Box bg={bg} minH="100vh" pb="90px" position="relative">
//       <Container maxW="7xl" py={6}>
//         <VStack gap={6} align="stretch">

//           {/* 🔥 COVER */}
//           <Box
//             h="220px"
//             borderRadius="2xl"
//             bgGradient="linear(to-r, gold.400, yellow.500)"
//             position="relative"
//             overflow="hidden"
//           >
//             <Flex
//               position="absolute"
//               // bottom="-50px" 
//               left="40px"
//               align="center"
//               gap={4}
//             >
//               <Box position="relative">
//                 <Avatar.Root size="2xl">
//                   <Avatar.Fallback name="John Doe" />
//                 </Avatar.Root>

//                 <Button
//                   size="xs"
//                   borderRadius="full"
//                   position="absolute"
//                   bottom="0"
//                   right="0"
//                   bg="gold.500"
//                   color="white"
//                 >
//                   <FiCamera />
//                 </Button>
//               </Box>

//               <VStack align="start" gap={0}>
//                 <Heading color="white">John Doe</Heading>
//                 <Text color="whiteAlpha.800">Master Tailor</Text>
//               </VStack>
//             </Flex>
//           </Box>

//           <Box h="40px" />

//           {/* 📊 PROFILE COMPLETION */}
//           <Card>
//             <HStack justify="space-between">
//               <Box>
//                 <Text fontSize="sm" color={textSecondary}>
//                   Profile Completion
//                 </Text>
//                 <Heading size="md">72%</Heading>
//               </Box>

//               <Box flex="1" ml={4}>
//                 <Progress.Root value={72}>
//                   <Progress.Track borderRadius="full">
//                     <Progress.Range bg="yellow.400" />
//                   </Progress.Track>
//                 </Progress.Root>
//               </Box>
//             </HStack>
//           </Card>

//           {/* 📈 STATS */}
//           <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
//             {[
//               { label: "Orders", value: "1,234" },
//               { label: "Clients", value: "847" },
//               { label: "Experience", value: "5+ Years" },
//             ].map((item) => (
//               <Card key={item.label}>
//                 <Text color={textSecondary}>{item.label}</Text>
//                 <Heading size="lg">{item.value}</Heading>
//               </Card>
//             ))}
//           </SimpleGrid>

//           {/* 🧭 TABS (v3 style) */}
//           <Tabs.Root defaultValue="profile" variant="subtle">
//             <Tabs.List>
//               <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
//               <Tabs.Trigger value="professional">Professional</Tabs.Trigger>
//               <Tabs.Trigger value="skills">Skills</Tabs.Trigger>
//               <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
//             </Tabs.List>

//             {/* PROFILE */}
//             <Tabs.Content value="profile">
//               <Card>
//                 <Heading size="md" mb={4}>
//                   Personal Info
//                 </Heading>
//                 <VStack gap={4}>
//                   <Input placeholder="Full Name" defaultValue="John Doe" />
//                   <Input placeholder="Email" />
//                   <Input placeholder="Phone" />
//                   <Textarea placeholder="Bio" />
//                 </VStack>
//               </Card>
//             </Tabs.Content>

//             {/* PROFESSIONAL */}
//             <Tabs.Content value="professional">
//               <Card>
//                 <Heading size="md" mb={4}>
//                   Professional Info
//                 </Heading>
//                 <VStack gap={4}>
//                   <Input placeholder="Job Title" defaultValue="Master Tailor" />
//                   <Input placeholder="Experience" />
//                   <Textarea placeholder="Address" />
//                 </VStack>
//               </Card>
//             </Tabs.Content>

//             {/* SKILLS */}
//             <Tabs.Content value="skills">
//               <Card>
//                 <Heading size="md" mb={4}>
//                   Skills
//                 </Heading>

//                 <SimpleGrid columns={3} gap={3}>
//                   {["Custom Suits", "Embroidery", "Alterations"].map((skill) => (
//                     <Badge
//                       key={skill}
//                       bg={hoverBg}
//                       p={3}
//                       borderRadius="full"
//                       textAlign="center"
//                       cursor="pointer"
//                       transition="0.2s"
//                       _hover={{ transform: "scale(1.08)" }}
//                     >
//                       {skill}
//                     </Badge>
//                   ))}
//                 </SimpleGrid>
//               </Card>
//             </Tabs.Content>

//             {/* SETTINGS */}
//             <Tabs.Content value="settings">
//               <Card>
//                 <Heading size="md" mb={4}>
//                   Availability
//                 </Heading>

//                 <HStack justify="space-between">
//                   <Text>Available for new orders</Text>
//                   <Switch.Root defaultChecked>
//                     <Switch.HiddenInput />
//                     <Switch.Control />
//                   </Switch.Root>
//                 </HStack>
//               </Card>
//             </Tabs.Content>
//           </Tabs.Root>
//         </VStack>
//       </Container>

//       {/* 💾 STICKY SAVE */}
//       <Flex
//         position="fixed"
//         bottom="0"
//         left="0"
//         right="0"
//         bg={cardBg}
//         borderTop="1px solid"
//         borderColor={borderColor}
//         p={4}
//         justify="space-between"
//         align="center"
//       >
//         <Text fontSize="sm">Unsaved changes</Text>

//         <Button
//           bg="gold.500"
//           color="white"
//           px={6}
//           _hover={{ bg: "gold.600", transform: "scale(1.05)" }}
//         >
//           <HStack>
//             <FiSave />
//             <Text>Save</Text>
//           </HStack>
//         </Button>
//       </Flex>
//     </Box>
//   );
// }

// export default Profile;
