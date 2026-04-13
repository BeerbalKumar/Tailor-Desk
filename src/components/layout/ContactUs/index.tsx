// import {
//   Box,
//   VStack,
//   Text,
//   Heading,
//   Input,
//   Textarea,
//   Button,
//   Container,
//   SimpleGrid,
//   Icon,
// } from "@chakra-ui/react";
// import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
// import { useState } from "react";

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Handle form submission logic here
//   };

//   return (
//     <Box
//       bg="linear(135deg, #f6f9fc 0%, #e9f4ff 100%)"
//       _dark={{ bg: "linear(135deg, #1a202c 0%, #2d3748 100%)" }}
//       py={20}
//       px={4}
//       position="relative"
//       overflow="hidden"
//     >
//       {/* Background Pattern */}
//       <Box
//         position="absolute"
//         top="0"
//         left="0"
//         right="0"
//         bottom="0"
//         opacity="0.05"
//         bgImage="radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)"
//         pointerEvents="none"
//       />

//       <Container maxW="container.xl" position="relative" zIndex="1">
//         <VStack gap={12} align="center">
//           {/* Section Header */}
//           <VStack gap={4} align="center" textAlign="center" maxW="2xl">
//             <Heading
//               fontSize={{ base: "3xl", md: "4xl" }}
//               fontWeight="bold"
//               bgGradient="linear(to-r, brand.600, gold.500)"
//               bgClip="text"
//               fontFamily="SN Pro, sans-serif"
//             >
//               Get In Touch
//             </Heading>
//             <Text
//               fontSize={{ base: "lg", md: "xl" }}
//               color="gray.700"
//               _dark={{ color: "gray.200" }}
//               lineHeight="1.6"
//             >
//               Have questions about our custom tailoring services? We'd love to
//               hear from you. Reach out to us and let's create something amazing
//               together.
//             </Text>
//           </VStack>

//           {/* Contact Cards */}
//           <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
//             {/* Email Card */}
//             <Box
//               bg="white"
//               _dark={{ bg: "brand.800", border: "1px solid brand.600" }}
//               p={8}
//               borderRadius="2xl"
//               boxShadow="lg"
//               border="1px solid gray.200"
//               transition="all 0.3s ease"
//               _hover={{
//                 transform: "translateY(-8px)",
//                 boxShadow: "xl",
//               }}
//             >
//               <VStack gap={4} align="center">
//                 <Box
//                   bg="gold.100"
//                   _dark={{ bg: "gold.900" }}
//                   p={4}
//                   borderRadius="full"
//                 >
//                   <Icon
//                     as={FiMail}
//                     boxSize="6"
//                     color="gold.600"
//                     _dark={{ color: "gold.400" }}
//                   />
//                 </Box>
//                 <VStack gap={2} align="center">
//                   <Heading
//                     fontSize="lg"
//                     fontWeight="semibold"
//                     color="brand.700"
//                     _dark={{ color: "brand.200" }}
//                   >
//                     Email Us
//                   </Heading>
//                   <Text
//                     color="gray.700"
//                     _dark={{ color: "gray.200" }}
//                     fontSize="md"
//                     textAlign="center"
//                   >
//                     info@tailordesk.com
//                   </Text>
//                   <Text color="brand.500" fontSize="sm" textAlign="center">
//                     support@tailordesk.com
//                   </Text>
//                 </VStack>
//               </VStack>
//             </Box>

//             {/* Phone Card */}
//             <Box
//               bg="white"
//               _dark={{ bg: "brand.800", border: "1px solid brand.600" }}
//               p={8}
//               borderRadius="2xl"
//               boxShadow="lg"
//               border="1px solid gray.200"
//               transition="all 0.3s ease"
//               _hover={{
//                 transform: "translateY(-8px)",
//                 boxShadow: "xl",
//               }}
//             >
//               <VStack gap={4} align="center">
//                 <Box
//                   bg="gold.100"
//                   _dark={{ bg: "gold.900" }}
//                   p={4}
//                   borderRadius="full"
//                 >
//                   <Icon
//                     as={FiPhone}
//                     boxSize="6"
//                     color="gold.600"
//                     _dark={{ color: "gold.400" }}
//                   />
//                 </Box>
//                 <VStack gap={2} align="center">
//                   <Heading
//                     fontSize="lg"
//                     fontWeight="semibold"
//                     color="brand.700"
//                     _dark={{ color: "brand.200" }}
//                   >
//                     Call Us
//                   </Heading>
//                   <Text
//                     color="gray.700"
//                     _dark={{ color: "gray.200" }}
//                     fontSize="md"
//                     textAlign="center"
//                   >
//                     +1 (555) 123-4567
//                   </Text>
//                   <Text color="brand.500" fontSize="sm" textAlign="center">
//                     Mon-Fri: 9AM-6PM EST
//                   </Text>
//                 </VStack>
//               </VStack>
//             </Box>

//             {/* Location Card */}
//             <Box
//               bg="white"
//               _dark={{ bg: "brand.800", border: "1px solid brand.600" }}
//               p={8}
//               borderRadius="2xl"
//               boxShadow="lg"
//               border="1px solid gray.200"
//               transition="all 0.3s ease"
//               _hover={{
//                 transform: "translateY(-8px)",
//                 boxShadow: "xl",
//               }}
//             >
//               <VStack gap={4} align="center">
//                 <Box
//                   bg="gold.100"
//                   _dark={{ bg: "gold.900" }}
//                   p={4}
//                   borderRadius="full"
//                 >
//                   <Icon
//                     as={FiMapPin}
//                     boxSize="6"
//                     color="gold.600"
//                     _dark={{ color: "gold.400" }}
//                   />
//                 </Box>
//                 <VStack gap={2} align="center">
//                   <Heading
//                     fontSize="lg"
//                     fontWeight="semibold"
//                     color="brand.700"
//                     _dark={{ color: "brand.200" }}
//                   >
//                     Visit Us
//                   </Heading>
//                   <Text
//                     color="gray.700"
//                     _dark={{ color: "gray.200" }}
//                     fontSize="md"
//                     textAlign="center"
//                   >
//                     123 Fashion Street
//                     <br />
//                     Style District, NY 10001
//                   </Text>
//                   <Text color="brand.500" fontSize="sm" textAlign="center">
//                     By Appointment Only
//                   </Text>
//                 </VStack>
//               </VStack>
//             </Box>
//           </SimpleGrid>

//           {/* Contact Form */}
//           <Box
//             bg="white"
//             _dark={{ bg: "brand.800", border: "1px solid brand.600" }}
//             p={12}
//             borderRadius="3xl"
//             boxShadow="xl"
//             border="1px solid gray.200"
//             w="full"
//             maxW="4xl"
//           >
//             <VStack gap={8} align="start">
//               <Heading
//                 fontSize="2xl"
//                 fontWeight="bold"
//                 color="brand.700"
//                 _dark={{ color: "brand.200" }}
//               >
//                 Send Us a Message
//               </Heading>

//               <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//                 <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
//                   <VStack gap={2} align="start">
//                     <Text
//                       fontSize="sm"
//                       fontWeight="600"
//                       color="gray.700"
//                       _dark={{ color: "gray.200" }}
//                       mb={1}
//                     >
//                       Your Name *
//                     </Text>
//                     <Input
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="John Doe"
//                       size="lg"
//                       borderRadius="lg"
//                       borderColor="gray.200"
//                       _dark={{ borderColor: "brand.600" }}
//                       _focus={{
//                         borderColor: "brand.500",
//                         boxShadow: "0 0 0 1px brand.500",
//                       }}
//                       required
//                     />
//                   </VStack>

//                   <VStack gap={2} align="start">
//                     <Text
//                       fontSize="sm"
//                       fontWeight="600"
//                       color="gray.700"
//                       _dark={{ color: "gray.200" }}
//                       mb={1}
//                     >
//                       Email Address *
//                     </Text>
//                     <Input
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="john@example.com"
//                       size="lg"
//                       borderRadius="lg"
//                       borderColor="gray.200"
//                       _dark={{ borderColor: "brand.600" }}
//                       _focus={{
//                         borderColor: "brand.500",
//                         boxShadow: "0 0 0 1px brand.500",
//                       }}
//                       required
//                     />
//                   </VStack>

//                   <VStack gap={2} align="start">
//                     <Text
//                       fontSize="sm"
//                       fontWeight="600"
//                       color="gray.700"
//                       _dark={{ color: "gray.200" }}
//                       mb={1}
//                     >
//                       Phone Number
//                     </Text>
//                     <Input
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       placeholder="+1 (555) 123-4567"
//                       size="lg"
//                       borderRadius="lg"
//                       borderColor="gray.200"
//                       _dark={{ borderColor: "brand.600" }}
//                       _focus={{
//                         borderColor: "brand.500",
//                         boxShadow: "0 0 0 1px brand.500",
//                       }}
//                     />
//                   </VStack>

//                   <VStack gap={2} align="start">
//                     <Text
//                       fontSize="sm"
//                       fontWeight="600"
//                       color="gray.700"
//                       _dark={{ color: "gray.200" }}
//                       mb={1}
//                     >
//                       Subject *
//                     </Text>
//                     <Input
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleInputChange}
//                       placeholder="How can we help you?"
//                       size="lg"
//                       borderRadius="lg"
//                       borderColor="gray.200"
//                       _dark={{ borderColor: "brand.600" }}
//                       _focus={{
//                         borderColor: "brand.500",
//                         boxShadow: "0 0 0 1px brand.500",
//                       }}
//                       required
//                     />
//                   </VStack>
//                 </SimpleGrid>

//                 <VStack gap={2} align="start" mt={6}>
//                   <Text
//                     fontSize="sm"
//                     fontWeight="600"
//                     color="gray.700"
//                     _dark={{ color: "gray.200" }}
//                     mb={1}
//                   >
//                     Message *
//                   </Text>
//                   <Textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder="Tell us about your tailoring needs..."
//                     size="lg"
//                     borderRadius="lg"
//                     borderColor="gray.200"
//                     _dark={{ borderColor: "brand.600" }}
//                     _focus={{
//                       borderColor: "brand.500",
//                       boxShadow: "0 0 0 1px brand.500",
//                     }}
//                     rows={6}
//                     required
//                   />
//                 </VStack>

//                 <Button
//                   type="submit"
//                   bgGradient="linear(to-r, brand.500, gold.500)"
//                   color="white"
//                   size="lg"
//                   fontSize="16px"
//                   fontWeight="600"
//                   borderRadius="lg"
//                   px={8}
//                   py={6}
//                   mt={8}
//                   _hover={{
//                     bgGradient: "linear(to-r, brand.600, gold.600)",
//                     transform: "translateY(-2px)",
//                     boxShadow: "lg",
//                   }}
//                   _active={{
//                     transform: "translateY(0)",
//                   }}
//                 >
//                   <VStack gap={2} align="center">
//                     <FiSend />
//                     <Text>Send Message</Text>
//                   </VStack>
//                 </Button>
//               </form>
//             </VStack>
//           </Box>
//         </VStack>
//       </Container>
//     </Box>
//   );
// }

// export default ContactUs;

import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Container,
  SimpleGrid,
  Icon,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiScissors,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { useColorModeValue } from "../../ui/color-mode";

/* ─────────────── keyframes ─────────────── */
const globalStyles = `
  // @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@300;400;600&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-8px); }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes ripple {
    0%   { transform: scale(0.9); opacity: 0.7; }
    100% { transform: scale(1.6); opacity: 0; }
  }

  .cu-fade-1 { animation: fadeUp 0.6s 0.05s ease both; }
  .cu-fade-2 { animation: fadeUp 0.6s 0.18s ease both; }
  .cu-fade-3 { animation: fadeUp 0.6s 0.30s ease both; }
  .cu-fade-4 { animation: fadeUp 0.6s 0.42s ease both; }

  .shimmer-text {
    background: linear-gradient(90deg, #b88912 0%, #ffd54f 40%, #D4A017 60%, #b88912 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3.5s linear infinite;
  }
  .float-icon { animation: floatY 3.5s ease-in-out infinite; }

  .divider-line {
    width: 55px; height: 1.5px;
    background: linear-gradient(90deg, #D4A017, transparent);
    display: inline-block;
  }
  .divider-line-rev {
    width: 55px; height: 1.5px;
    background: linear-gradient(90deg, transparent, #D4A017);
    display: inline-block;
  }

  /* Custom input focus ring */
  .td-input:focus {
    outline: none;
    border-color: #D4A017 !important;
    box-shadow: 0 0 0 3px rgba(212,160,23,0.15) !important;
  }
  .td-input::placeholder { opacity: 0.45; font-style: italic; }

  /* Send button hover */
  .td-btn {
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .td-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(212,160,23,0.35); }
  .td-btn:active { transform: translateY(0); }

  /* Info card hover */
  .info-card {
    transition: transform 0.25s ease, border-color 0.25s ease;
  }
  .info-card:hover {
    transform: translateX(4px);
    border-color: #D4A017 !important;
  }

  /* Social icon hover */
  .social-icon {
    transition: transform 0.2s ease, background 0.2s ease;
  }
  .social-icon:hover { transform: translateY(-3px) scale(1.1); }

  /* Ripple behind scissor ornament */
  .ripple-ring {
    animation: ripple 2.4s ease-out infinite;
  }
`;

/* ─────────────── Info Card ─────────────── */
function InfoCard({
  icon,
  label,
  value,
  sub,
  delay = "0s",
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  delay?: string;
}) {
  const isDark = useColorModeValue(false, true);
  const cardBg = useColorModeValue(
    "rgba(255,255,255,0.75)",
    "rgba(11,17,32,0.75)"
  );
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <HStack
      className="info-card cu-fade-3"
      style={{ animationDelay: delay }}
      gap={5}
      align="center"
      bg={cardBg}
      backdropFilter="blur(12px)"
      border="1px solid"
      borderColor={useColorModeValue("neutral.200", "brand.700")}
      borderRadius="2xl"
      p={5}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "3px",
        bg: "linear-gradient(180deg, #D4A017, #ffd54f, #D4A017)",
        borderRadius: "full",
      }}
    >
      <Box
        bg={useColorModeValue("gold.50", "rgba(212,160,23,0.1)")}
        border="1px solid"
        borderColor={useColorModeValue("gold.200", "gold.700")}
        p={3}
        borderRadius="xl"
        flexShrink={0}
      >
        <Icon
          as={icon}
          boxSize={5}
          color={useColorModeValue("gold.600", "gold.400")}
        />
      </Box>
      <VStack gap={0.5} align="start">
        <Text
          // fontFamily="SN Pro, sans-serif"
          fontSize="2xs"
          letterSpacing="0.2em"
          textTransform="uppercase"
          color={useColorModeValue("gold.600", "gold.500")}
          fontWeight="400"
        >
          {label}
        </Text>
        <Text
          // fontFamily="SN Pro, sans-serif"
          fontSize="lg"
          fontWeight="400"
          color={useColorModeValue("brand.700", "neutral.100")}
          lineHeight="1.3"
        >
          {value}
        </Text>
        {sub && (
          <Text
            // fontFamily="SN Pro, sans-serif"
            fontSize="sm"
            color={textColor}
            fontStyle="italic"
            fontWeight="300"
          >
            {sub}
          </Text>
        )}
      </VStack>
    </HStack>
  );
}

/* ─────────────── Main Component ─────────────── */
function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const pageBg = useColorModeValue(
    "linear-gradient(160deg, #f0f4f8 0%, #fdfaf4 40%, #f8f6f0 100%)",
    "linear-gradient(160deg, #0b1120 0%, #0f172a 50%, #020617 100%)"
  );
  const cardBg = useColorModeValue(
    "rgba(255,255,255,0.92)",
    "rgba(11,17,32,0.92)"
  );
  const inputBg = useColorModeValue("rgba(249,250,251,0.8)", "rgba(15,23,42,0.6)");
  const inputBorder = useColorModeValue("#e5e7eb", "#334155");
  const inputColor = useColorModeValue("#0f172a", "#f1f5f9");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const sectionBorder = useColorModeValue("gold.200", "gold.800");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  const services = [
    "Bespoke Suit",
    "Wedding Sherwani",
    "Formal Wear",
    "Casual Tailoring",
    "Alterations",
    "Other",
  ];

  return (
    <>
      <style>{globalStyles}</style>

      <Box
        bg={pageBg}
        minH="100vh"
        py={{ base: 16, md: 24 }}
        px={4}
        position="relative"
        overflow="hidden"
      >
        {/* ── decorative orbs ── */}
        <Box
          position="absolute"
          top="8%"
          left="-10%"
          w={{ base: "220px", md: "400px" }}
          h={{ base: "220px", md: "400px" }}
          borderRadius="full"
          bg={useColorModeValue(
            "radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(212,160,23,0.05) 0%, transparent 70%)"
          )}
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom="8%"
          right="-8%"
          w={{ base: "200px", md: "380px" }}
          h={{ base: "200px", md: "380px" }}
          borderRadius="full"
          bg={useColorModeValue(
            "radial-gradient(circle, rgba(30,41,59,0.05) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(100,116,139,0.04) 0%, transparent 70%)"
          )}
          pointerEvents="none"
        />

        {/* Vertical center line */}
        <Box
          position="absolute"
          top={0}
          left="50%"
          w="1px"
          h="100%"
          bg={useColorModeValue(
            "linear-gradient(180deg, transparent, rgba(212,160,23,0.12), transparent)",
            "linear-gradient(180deg, transparent, rgba(212,160,23,0.08), transparent)"
          )}
          pointerEvents="none"
        />

        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack gap={{ base: 14, md: 20 }} align="center">

            {/* ══════════ HERO HEADER ══════════ */}
            <VStack gap={6} align="center" textAlign="center" className="cu-fade-1">
              <HStack gap={3} justify="center">
                <Box className="divider-line" />
                <Text
                  // fontFamily="SN Pro, sans-serif"
                  fontSize="xs"
                  letterSpacing="0.25em"
                  textTransform="uppercase"
                  color={useColorModeValue("gold.600", "gold.400")}
                  fontWeight="400"
                >
                  Get In Touch
                </Text>
                <Box className="divider-line-rev" />
              </HStack>

              <Heading
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                // fontFamily="SN Pro, sans-serif"
                fontWeight="300"
                lineHeight="1.1"
                letterSpacing="-0.02em"
                color={useColorModeValue("brand.700", "neutral.50")}
                maxW="4xl"
              >
                Let's Create{" "}
                <Box as="span" fontStyle="italic" className="shimmer-text">
                  Something
                </Box>{" "}
                <Box as="span" display="block">
                  Extraordinary
                </Box>
              </Heading>

              {/* Scissors ornament */}
              <HStack gap={4} align="center" w="full" maxW="xs" justify="center">
                <Box
                  h="1px"
                  flex={1}
                  bg="linear-gradient(90deg, transparent, #D4A017)"
                />
                <Box position="relative">
                  <Box
                    position="absolute"
                    inset="-8px"
                    borderRadius="full"
                    border="1px solid rgba(212,160,23,0.3)"
                    className="ripple-ring"
                  />
                  <Icon
                    as={FiScissors}
                    boxSize={5}
                    color={useColorModeValue("gold.500", "gold.400")}
                    className="float-icon"
                  />
                </Box>
                <Box
                  h="1px"
                  flex={1}
                  bg="linear-gradient(90deg, #D4A017, transparent)"
                />
              </HStack>

              <Text
                // fontFamily="SN Pro, sans-serif"
                fontSize={{ base: "lg", md: "xl" }}
                color={textColor}
                lineHeight="1.9"
                maxW="2xl"
                fontWeight="300"
                fontStyle="italic"
              >
                Whether you need a bespoke masterpiece or a simple alteration,
                our atelier is ready to bring your vision to life.
              </Text>
            </VStack>

            {/* ══════════ MAIN CONTENT GRID ══════════ */}
            <Flex
              direction={{ base: "column", lg: "row" }}
              gap={{ base: 8, md: 10 }}
              w="full"
              maxW="6xl"
              align="stretch"
            >

              {/* ── LEFT: Contact Info Panel ── */}
              <VStack
                gap={6}
                align="stretch"
                flex="0 0 auto"
                w={{ base: "full", lg: "340px" }}
                className="cu-fade-2"
              >
                {/* Dark atelier card */}
                <Box
                  bg={useColorModeValue(
                    "linear-gradient(155deg, #0f172a 0%, #1e293b 100%)",
                    "linear-gradient(155deg, #020617 0%, #0b1120 100%)"
                  )}
                  borderRadius="3xl"
                  p={8}
                  position="relative"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="gold.800"
                >
                  {/* concentric rings */}
                  {[120, 180, 240].map((size, i) => (
                    <Box
                      key={i}
                      position="absolute"
                      bottom="-60px"
                      right="-60px"
                      w={`${size}px`}
                      h={`${size}px`}
                      borderRadius="full"
                      border="1px solid"
                      borderColor={`rgba(212,160,23,${0.12 - i * 0.03})`}
                      pointerEvents="none"
                    />
                  ))}

                  <VStack gap={5} align="start" position="relative" zIndex={1}>
                    <VStack gap={1} align="start">
                      <Text
                        // fontFamily="SN Pro, sans-serif"
                        fontSize="2xs"
                        letterSpacing="0.25em"
                        textTransform="uppercase"
                        color="gold.400"
                      >
                        Our Atelier
                      </Text>
                      <Heading
                        // fontFamily="SN Pro, sans-serif"
                        fontSize="2xl"
                        fontWeight="400"
                        color="neutral.50"
                      >
                        Visit Us in{" "}
                        <Box as="span" fontStyle="italic" color="gold.400">
                          Karachi
                        </Box>
                      </Heading>
                    </VStack>

                    <Box h="1px" w="full" bg="rgba(212,160,23,0.2)" />

                    <VStack gap={4} align="start" w="full">
                      {[
                        { icon: FiMapPin, text: "14-C, Zamzama Blvd, DHA Phase 5, Karachi" },
                        { icon: FiPhone, text: "+92 300 123 4567" },
                        { icon: FiMail, text: "hello@tailordesk.com" },
                      ].map(({ icon, text }) => (
                        <HStack key={text} gap={3} align="start">
                          <Box
                            bg="rgba(212,160,23,0.12)"
                            border="1px solid rgba(212,160,23,0.25)"
                            p={2}
                            borderRadius="lg"
                            flexShrink={0}
                            mt="1px"
                          >
                            <Icon as={icon} boxSize={4} color="gold.400" />
                          </Box>
                          <Text
                            // fontFamily="SN Pro, sans-serif"
                            fontSize="md"
                            color="neutral.200"
                            fontWeight="300"
                            lineHeight="1.6"
                          >
                            {text}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>

                    <Box h="1px" w="full" bg="rgba(212,160,23,0.2)" />

                    {/* Hours */}
                    <VStack gap={2} align="start" w="full">
                      <HStack gap={2}>
                        <Icon as={FiClock} boxSize={4} color="gold.500" />
                        <Text
                          // fontFamily="SN Pro, sans-serif"
                          fontSize="2xs"
                          letterSpacing="0.2em"
                          textTransform="uppercase"
                          color="gold.400"
                        >
                          Working Hours
                        </Text>
                      </HStack>
                      {[
                        ["Mon – Sat", "10:00 AM – 8:00 PM"],
                        ["Sunday", "12:00 PM – 6:00 PM"],
                      ].map(([day, time]) => (
                        <Flex key={day} justify="space-between" w="full">
                          <Text
                            // fontFamily="SN Pro, sans-serif"
                            fontSize="sm"
                            color="neutral.300"
                            fontStyle="italic"
                          >
                            {day}
                          </Text>
                          <Text
                            // fontFamily="SN Pro, sans-serif"
                            fontSize="xs"
                            color="gold.300"
                            fontWeight="400"
                          >
                            {time}
                          </Text>
                        </Flex>
                      ))}
                    </VStack>

                    <Box h="1px" w="full" bg="rgba(212,160,23,0.2)" />

                    {/* Social */}
                    <VStack gap={3} align="start" w="full">
                      <Text
                        // fontFamily="SN Pro, sans-serif"
                        fontSize="2xs"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                        color="gold.400"
                      >
                        Follow Our Craft
                      </Text>
                      <HStack gap={3}>
                        {[
                          { icon: FiInstagram, label: "Instagram" },
                          { icon: FiFacebook, label: "Facebook" },
                          { icon: FiTwitter, label: "Twitter" },
                        ].map(({ icon, label }) => (
                          <Box
                            key={label}
                            className="social-icon"
                            bg="rgba(212,160,23,0.1)"
                            border="1px solid rgba(212,160,23,0.25)"
                            p={2.5}
                            borderRadius="lg"
                            cursor="pointer"
                            title={label}
                            _hover={{
                              bg: "rgba(212,160,23,0.22)",
                              borderColor: "gold.500",
                            }}
                          >
                            <Icon as={icon} boxSize={4} color="gold.400" />
                          </Box>
                        ))}
                      </HStack>
                    </VStack>
                  </VStack>
                </Box>

                {/* Quick info cards */}
                <VStack gap={3} align="stretch">
                  <InfoCard
                    icon={FiPhone}
                    label="Call Us"
                    value="+92 300 123 4567"
                    sub="Available Mon–Sat"
                    delay="0.1s"
                  />
                  <InfoCard
                    icon={FiMail}
                    label="Email Us"
                    value="hello@tailordesk.com"
                    sub="Reply within 24 hours"
                    delay="0.2s"
                  />
                </VStack>
              </VStack>

              {/* ── RIGHT: Contact Form ── */}
              <Box
                flex={1}
                className="cu-fade-4"
                position="relative"
              >
                {/* Gold glow border */}
                <Box
                  position="absolute"
                  inset="-1px"
                  borderRadius="3xl"
                  bg="linear-gradient(135deg, #D4A017 0%, transparent 40%, transparent 60%, #D4A017 100%)"
                  opacity={0.3}
                  zIndex={0}
                />

                <Box
                  position="relative"
                  zIndex={1}
                  bg={cardBg}
                  backdropFilter="blur(16px)"
                  borderRadius="3xl"
                  border="1px solid"
                  borderColor={sectionBorder}
                  overflow="hidden"
                  h="full"
                >
                  {/* Top gold accent bar */}
                  <Box
                    h="4px"
                    bg="linear-gradient(90deg, #D4A017 0%, #ffd54f 50%, #D4A017 100%)"
                  />

                  <Box p={{ base: 8, md: 10 }}>
                    {submitted ? (
                      /* ── Success State ── */
                      <VStack
                        gap={6}
                        align="center"
                        justify="center"
                        minH="420px"
                        textAlign="center"
                      >
                        <Box
                          bg={useColorModeValue("gold.50", "rgba(212,160,23,0.1)")}
                          border="2px solid"
                          borderColor="gold.400"
                          p={8}
                          borderRadius="full"
                          className="float-icon"
                        >
                          <Icon
                            as={FiSend}
                            boxSize={12}
                            color={useColorModeValue("gold.600", "gold.400")}
                          />
                        </Box>
                        <VStack gap={3}>
                          <Heading
                            // fontFamily="SN Pro, sans-serif"
                            fontSize="3xl"
                            fontWeight="400"
                            color={useColorModeValue("brand.700", "neutral.100")}
                          >
                            Message{" "}
                            <Box as="span" fontStyle="italic" color="gold.500">
                              Received
                            </Box>
                          </Heading>
                          <Text
                            // fontFamily="SN Pro, sans-serif"
                            fontSize="lg"
                            color={textColor}
                            fontWeight="300"
                            fontStyle="italic"
                            maxW="sm"
                            lineHeight="1.8"
                          >
                            Thank you,{" "}
                            <Box as="span" color={useColorModeValue("brand.600", "brand.200")} fontStyle="normal">
                              {formState.name}
                            </Box>
                            . Our master tailors will be in touch with you shortly.
                          </Text>
                        </VStack>
                        <Button
                          onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", phone: "", service: "", message: "" }); }}
                          variant="outline"
                          // fontFamily="SN Pro, sans-serif"
                          fontSize="xs"
                          letterSpacing="0.15em"
                          textTransform="uppercase"
                          borderColor="gold.500"
                          color={useColorModeValue("gold.600", "gold.400")}
                          _hover={{ bg: "gold.50", _dark: { bg: "rgba(212,160,23,0.1)" } }}
                          borderRadius="full"
                          px={8}
                        >
                          Send Another
                        </Button>
                      </VStack>
                    ) : (
                      /* ── Form ── */
                      <VStack gap={7} align="start">
                        {/* Form header */}
                        <VStack gap={2} align="start">
                          <HStack gap={3}>
                            <Box className="divider-line" />
                            <Text
                              // fontFamily="SN Pro, sans-serif"
                              fontSize="2xs"
                              letterSpacing="0.22em"
                              textTransform="uppercase"
                              color={useColorModeValue("gold.600", "gold.400")}
                            >
                              Book a Consultation
                            </Text>
                          </HStack>
                          <Heading
                            // fontFamily="SN Pro, sans-serif"
                            fontSize={{ base: "2xl", md: "3xl" }}
                            fontWeight="400"
                            color={useColorModeValue("brand.700", "neutral.100")}
                          >
                            Tell Us About Your{" "}
                            <Box as="span" fontStyle="italic" color="gold.500">
                              Vision
                            </Box>
                          </Heading>
                        </VStack>

                        {/* Row 1: Name + Email */}
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                          <VStack gap={2} align="start">
                            <HStack gap={1.5}>
                              <Icon as={FiUser} boxSize={3} color={useColorModeValue("gold.600", "gold.500")} />
                              <Text
                                // fontFamily="SN Pro, sans-serif"
                                fontSize="2xs"
                                letterSpacing="0.18em"
                                textTransform="uppercase"
                                color={useColorModeValue("brand.500", "neutral.300")}
                              >
                                Full Name *
                              </Text>
                            </HStack>
                            <input
                              className="td-input"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              placeholder="William Anderson"
                              style={{
                                width: "100%",
                                padding: "12px 16px",
                                background: inputBg,
                                border: `1px solid ${inputBorder}`,
                                borderRadius: "12px",
                                color: inputColor,
                                // fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "16px",
                                fontWeight: 300,
                                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                              }}
                            />
                          </VStack>

                          <VStack gap={2} align="start">
                            <HStack gap={1.5}>
                              <Icon as={FiMail} boxSize={3} color={useColorModeValue("gold.600", "gold.500")} />
                              <Text
                                // fontFamily="SN Pro, sans-serif"
                                fontSize="2xs"
                                letterSpacing="0.18em"
                                textTransform="uppercase"
                                color={useColorModeValue("brand.500", "neutral.300")}
                              >
                                Email Address *
                              </Text>
                            </HStack>
                            <input
                              className="td-input"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              placeholder="you@example.com"
                              style={{
                                width: "100%",
                                padding: "12px 16px",
                                background: inputBg,
                                border: `1px solid ${inputBorder}`,
                                borderRadius: "12px",
                                color: inputColor,
                                // fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "16px",
                                fontWeight: 300,
                                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                              }}
                            />
                          </VStack>
                        </SimpleGrid>

                        {/* Row 2: Phone + Service */}
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                          <VStack gap={2} align="start">
                            <HStack gap={1.5}>
                              <Icon as={FiPhone} boxSize={3} color={useColorModeValue("gold.600", "gold.500")} />
                              <Text
                                // fontFamily="SN Pro, sans-serif"
                                fontSize="2xs"
                                letterSpacing="0.18em"
                                textTransform="uppercase"
                                color={useColorModeValue("brand.500", "neutral.300")}
                              >
                                Phone Number
                              </Text>
                            </HStack>
                            <input
                              className="td-input"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="+92 300 000 0000"
                              style={{
                                width: "100%",
                                padding: "12px 16px",
                                background: inputBg,
                                border: `1px solid ${inputBorder}`,
                                borderRadius: "12px",
                                color: inputColor,
                                // fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "16px",
                                fontWeight: 300,
                                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                              }}
                            />
                          </VStack>

                          <VStack gap={2} align="start">
                            <HStack gap={1.5}>
                              <Icon as={FiScissors} boxSize={3} color={useColorModeValue("gold.600", "gold.500")} />
                              <Text
                                // fontFamily="SN Pro, sans-serif"
                                fontSize="2xs"
                                letterSpacing="0.18em"
                                textTransform="uppercase"
                                color={useColorModeValue("brand.500", "neutral.300")}
                              >
                                Service Needed
                              </Text>
                            </HStack>
                            <select
                              className="td-input"
                              name="service"
                              value={formState.service}
                              onChange={handleChange}
                              style={{
                                width: "100%",
                                padding: "12px 16px",
                                background: inputBg,
                                border: `1px solid ${inputBorder}`,
                                borderRadius: "12px",
                                color: formState.service ? inputColor : "rgba(100,116,139,0.7)",
                                // fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "16px",
                                fontWeight: 300,
                                fontStyle: "italic",
                                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                                cursor: "pointer",
                                appearance: "none",
                                WebkitAppearance: "none",
                              }}
                            >
                              <option value="" disabled>Select a service…</option>
                              {services.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </VStack>
                        </SimpleGrid>

                        {/* Message */}
                        <VStack gap={2} align="start" w="full">
                          <HStack gap={1.5}>
                            <Icon as={FiMessageSquare} boxSize={3} color={useColorModeValue("gold.600", "gold.500")} />
                            <Text
                              // fontFamily="SN Pro, sans-serif"
                              fontSize="2xs"
                              letterSpacing="0.18em"
                              textTransform="uppercase"
                              color={useColorModeValue("brand.500", "neutral.300")}
                            >
                              Your Message *
                            </Text>
                          </HStack>
                          <textarea
                            className="td-input"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Tell us about your vision, occasion, preferred fabric, or any special requirements…"
                            rows={5}
                            style={{
                              width: "100%",
                              padding: "12px 16px",
                              background: inputBg,
                              border: `1px solid ${inputBorder}`,
                              borderRadius: "12px",
                              color: inputColor,
                              // fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "16px",
                              fontWeight: 300,
                              lineHeight: "1.7",
                              resize: "vertical",
                              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                            }}
                          />
                        </VStack>

                        {/* Submit */}
                        <Flex justify="space-between" align="center" w="full" flexWrap="wrap" gap={4}>
                          <Text
                            // fontFamily="SN Pro, sans-serif"
                            fontSize="sm"
                            color={textColor}
                            fontStyle="italic"
                            fontWeight="300"
                          >
                            * Required fields
                          </Text>

                          <button
                            className="td-btn"
                            onClick={handleSubmit}
                            disabled={!formState.name || !formState.email || !formState.message}
                            style={{
                              background: (!formState.name || !formState.email || !formState.message)
                                ? "rgba(212,160,23,0.35)"
                                : "linear-gradient(135deg, #D4A017 0%, #ffd54f 50%, #b88912 100%)",
                              backgroundSize: "200% auto",
                              color: "#0f172a",
                              // fontFamily: "'Josefin Sans', sans-serif",
                              fontSize: "12px",
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              fontWeight: "600",
                              padding: "14px 36px",
                              borderRadius: "100px",
                              border: "none",
                              cursor: (!formState.name || !formState.email || !formState.message) ? "not-allowed" : "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              opacity: (!formState.name || !formState.email || !formState.message) ? 0.6 : 1,
                            }}
                          >
                            <FiSend size={14} />
                            Send Message
                          </button>
                        </Flex>
                      </VStack>
                    )}
                  </Box>
                </Box>
              </Box>
            </Flex>

            {/* ══════════ BOTTOM STRIP ══════════ */}
            <Box
              w="full"
              maxW="6xl"
              className="cu-fade-4"
              bg={useColorModeValue(
                "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                "linear-gradient(135deg, #020617 0%, #0b1120 100%)"
              )}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              border="1px solid"
              borderColor="gold.800"
              position="relative"
              overflow="hidden"
            >
              {/* ring ornament */}
              <Box
                position="absolute"
                top="50%"
                right="-40px"
                transform="translateY(-50%)"
                w="160px"
                h="160px"
                borderRadius="full"
                border="1px solid rgba(212,160,23,0.12)"
                pointerEvents="none"
              />
              <Box
                position="absolute"
                top="50%"
                right="-70px"
                transform="translateY(-50%)"
                w="240px"
                h="240px"
                borderRadius="full"
                border="1px solid rgba(212,160,23,0.07)"
                pointerEvents="none"
              />

              <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="center"
                gap={4}
              >
                <VStack gap={1} align={{ base: "center", md: "start" }}>
                  <Text
                    // fontFamily="SN Pro, sans-serif"
                    fontSize="2xs"
                    letterSpacing="0.22em"
                    textTransform="uppercase"
                    color="gold.500"
                  >
                    Prefer to visit?
                  </Text>
                  <Text
                    // fontFamily="SN Pro, sans-serif"
                    fontSize="xl"
                    fontWeight="400"
                    color="neutral.100"
                  >
                    Walk into our atelier — no appointment needed.
                  </Text>
                </VStack>
                <HStack gap={2} flexShrink={0}>
                  <Icon as={FiMapPin} boxSize={4} color="gold.400" />
                  <Text
                    // fontFamily="SN Pro, sans-serif"
                    fontSize="md"
                    color="neutral.300"
                    fontStyle="italic"
                    fontWeight="300"
                  >
                    14-C, Zamzama Blvd, DHA Phase 5, Karachi
                  </Text>
                </HStack>
              </Flex>
            </Box>

          </VStack>
        </Container>
      </Box>
    </>
  );
}

export default Contact;
