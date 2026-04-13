import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  Button,
  Span,
} from "@chakra-ui/react";
import { logo } from "../../assets/images";
import { useThemeColors,useColorMode } from "../../components/ui/color-mode";
import { useState } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const { textPrimary, textSecondary, cardBg, shadowColor, borderColor } =
    useThemeColors();
  const { colorMode } = useColorMode();
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        alignItems="center"
        gap="20px"
        flexDir="column"
        borderRadius="10px"
        p="20px"
        w={{ base: "100%", md: "500px", lg: "500px" }}
        bg={cardBg}
        boxShadow={`0px 0px 10px ${shadowColor}`}
      >
        <Image src={logo} alt="Logo" height="100px" width="100px" />
        <Text color={textPrimary} fontSize="3xl" fontWeight="bold">
          Sign Up your account
        </Text>
        <Input
          placeholder="Shop Name"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="100px"
          type="text"
          height="45px"
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="100px"
          type="email"
          height="45px"
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          border="1px solid"
          borderColor={borderColor}
          type="password"
          borderRadius="100px"
          height="45px"
        />
        {/* <Text color={textSecondary} fontSize="sm" alignSelf="flex-end">
          <Link to="/forgot-password">
            <Span
              fontWeight="medium"
              _hover={{ color: colorMode === "dark" ? "white" : "black" }}
            >
              Forgot your password?
            </Span>
          </Link>
        </Text> */}
        <Button
          bg="gold.500"
          _hover={{ bg: "gold.600" }}
          color="white"
          w="100%"
          height="45px"
          borderRadius="100px"
        >
          Sign Up
        </Button>
        <Text color={textSecondary} fontSize="sm">
          Don't have an account?{" "}
          <Link to="/login">
            <Span
              fontWeight="medium"
              _hover={{ color: colorMode === "dark" ? "white" : "black" }}
            >
              Sign In
            </Span>
          </Link>
        </Text>
        <Flex gap="10px" w="100%" alignItems="center">
          <Span
            flex="1"
            border="1px solid"
            borderColor={borderColor}
            height="1px"
          ></Span>
          <Text>OR</Text>
          <Span
            flex="1"
            border="1px solid"
            borderColor={borderColor}
            height="1px"
          ></Span>
        </Flex>
        <Button height="45px" w="100%" borderRadius="100px">
          <FcGoogle />
          Sign In with Google
        </Button>
      </Flex>
    </Box>
  );
}

export default SignUp;
