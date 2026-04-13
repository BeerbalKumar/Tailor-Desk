import { Box } from "@chakra-ui/react";
import { Navbar, Header, Footer,ContactUs, About } from "../../components/layout";
import "./index.css";


function Home() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Header />
      <About />
      <ContactUs />
      <Footer />
    </Box>
  );
}

export default Home;
