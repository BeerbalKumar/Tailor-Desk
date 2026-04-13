import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  Button,
  Span,
  Alert,
  Spinner,
} from "@chakra-ui/react";
import { logo } from "../../assets/images";
import { useThemeColors, useColorMode } from "../../components/ui/color-mode";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const { textPrimary, textSecondary, cardBg, shadowColor, borderColor } =
    useThemeColors();
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async () => {
    // Clear previous states
    setError("");
    setIsSuccess(false);
    
    // Validation
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }

    // Start loading
    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
      
      if (email === "beerbal@gmail.com" && password === "123456") {
        // Successful login
        localStorage.setItem("user", JSON.stringify({ 
          email, 
          password,
          name: "Beerbal Kumar",
          loginTime: new Date().toISOString()
        }));
        
        setIsSuccess(true);
        setIsLoading(false);
        
        // Navigate to home after success message
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        // Failed login
        setError("Invalid email or password");
        setIsLoading(false);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError("");
    setIsSuccess(false);
    
    // Simulate Google OAuth
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock Google login success
      localStorage.setItem("user", JSON.stringify({ 
        email: "user@gmail.com",
        name: "Google User",
        provider: "google",
        loginTime: new Date().toISOString()
      }));
      
      setIsSuccess(true);
      setIsLoading(false);
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError("Google login failed. Please try again.");
      setIsLoading(false);
    }
  };

  // Auto-clear error after 3 seconds
  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

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
        boxShadow={{ base: "none", md: `0px 0px 10px ${shadowColor}` }}
      >
        <Image src={logo} alt="Logo" height="100px" width="100px" />
        <Text color={textPrimary} fontSize="3xl" fontWeight="bold">
          Login your account
        </Text>
        
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="100px"
          type="email"
          height="45px"
          disabled={isLoading}
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
          disabled={isLoading}
        />
        
        {/* Error Alert */}
        {error && (
          <Alert.Root status="error">
            <Alert.Indicator />
            <Alert.Title>{error}</Alert.Title>
          </Alert.Root>
        )}
        
        {/* Success Alert */}
        {isSuccess && (
          <Alert.Root status="success">
            <Alert.Indicator />
            <Alert.Title>Login successful! Redirecting to home...</Alert.Title>
          </Alert.Root>
        )}
        
        <Text color={textSecondary} fontSize="sm" alignSelf="flex-end">
          <Link to="/forgot-password">
            <Span
              fontWeight="medium"
              _hover={{ color: colorMode === "dark" ? "white" : "black" }}
            >
              Forgot your password?
            </Span>
          </Link>
        </Text>
        
        {/* Login Button */}
        <Button
          bg="gold.500"
          _hover={{ bg: "gold.600" }}
          color="white"
          w="100%"
          height="45px"
          borderRadius="100px"
          onClick={handleLogin}
          disabled={isLoading || isSuccess}
        >
          {isLoading ? (
            <>
              <Spinner size="md" />
              <Span ml="2">Signing in...</Span>
            </>
          ) : isSuccess ? (
            <>
              <Span>Success! Redirecting...</Span>
            </>
          ) : (
            "Sign In"
          )}
        </Button>
        
        <Text color={textSecondary} fontSize="sm">
          Don't have an account?{" "}
          <Link to="/signup">
            <Span
              fontWeight="medium"
              _hover={{ color: colorMode === "dark" ? "white" : "black" }}
            >
              Sign Up
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
        
        {/* Google Login Button */}
        <Button 
          height="45px" 
          w="100%" 
          borderRadius="100px"
          // variant="outline"
          // borderColor={borderColor}
          // onClick={handleGoogleLogin}
          // disabled={isLoading || isSuccess}
        >
          {/* {isLoading ? (
            <>
              <Spinner size="md" />
              <Span ml="2">Connecting...</Span>
            </>
          ) : (
            <>
              <FcGoogle />
              <Span ml="2">Sign In with Google</Span>
            </>
          )} */}
                      <>
              <FcGoogle />
              <Span ml="2">Sign In with Google</Span>
            </>
        </Button>
      </Flex>
    </Box>
  );
}

export default Login;
