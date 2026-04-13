import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Container,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiHeart,
  FiClock,
  FiStar,
  FiCheckCircle,
  FiTarget,
  FiScissors,
} from "react-icons/fi";
import { useColorModeValue } from "../../ui/color-mode";

/* ─────────────── tiny inline keyframes injected once ─────────────── */
const globalStyles = `

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes rotateSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50%       { opacity: 1;   transform: scale(1.06); }
  }
  .fade-up   { animation: fadeUp 0.7s ease both; }
  .fade-up-2 { animation: fadeUp 0.7s 0.15s ease both; }
  .fade-up-3 { animation: fadeUp 0.7s 0.3s  ease both; }
  .fade-up-4 { animation: fadeUp 0.7s 0.45s ease both; }
  .shimmer-text {
    background: linear-gradient(90deg, #b88912 0%, #ffd54f 40%, #D4A017 60%, #b88912 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3.5s linear infinite;
  }
  .card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover:hover {
    transform: translateY(-6px);
  }
  .icon-pulse { animation: pulse 2.8s ease-in-out infinite; }
  .divider-line {
    width: 60px; height: 2px;
    background: linear-gradient(90deg, #D4A017, transparent);
    display: inline-block;
  }
`;

/* ────────────────────────── sub-components ───────────────────────── */

function StatCard({
  icon,
  number,
  label,
  delay = "0s",
}: {
  icon: React.ElementType;
  number: string;
  label: string;
  delay?: string;
}) {
  const cardBg = useColorModeValue(
    "rgba(255,255,255,0.85)",
    "rgba(11,17,32,0.85)"
  );
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      className="card-hover fade-up"
      style={{ animationDelay: delay }}
      bg={cardBg}
      backdropFilter="blur(12px)"
      border="1px solid"
      borderColor={useColorModeValue("gold.200", "gold.700")}
      borderRadius="2xl"
      p={8}
      textAlign="center"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        bg: "linear-gradient(90deg, #D4A017, #ffd54f, #D4A017)",
      }}
    >
      {/* Subtle corner ornament */}
      <Box
        position="absolute"
        bottom="-10px"
        right="-10px"
        w="70px"
        h="70px"
        borderRadius="full"
        bg={useColorModeValue("gold.50", "gold.900")}
        opacity={0.4}
      />

      <VStack gap={3}>
        <Box
          bg={useColorModeValue("gold.50", "rgba(212,160,23,0.12)")}
          p={4}
          borderRadius="xl"
          border="1px solid"
          borderColor={useColorModeValue("gold.200", "gold.700")}
          className="icon-pulse"
        >
          <Icon
            as={icon}
            boxSize={7}
            color={useColorModeValue("gold.600", "gold.400")}
          />
        </Box>
        <Heading
          fontSize="3xl"
          fontFamily="SN Pro, sans-serif"
          fontWeight="600"
          color={useColorModeValue("brand.700", "gold.300")}
        >
          {number}
        </Heading>
        <Text
          fontSize="xs"
          fontFamily="SN Pro, sans-serif"
          letterSpacing="0.18em"
          textTransform="uppercase"
          color={textColor}
          fontWeight="400"
        >
          {label}
        </Text>
      </VStack>
    </Box>
  );
}

function ValueCard({
  icon,
  title,
  description,
  delay = "0s",
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: string;
}) {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      className="card-hover fade-up"
      style={{ animationDelay: delay }}
      position="relative"
      p={8}
      borderRadius="2xl"
      border="1px solid"
      borderColor={useColorModeValue("neutral.200", "brand.600")}
      bg={useColorModeValue(
        "rgba(255,255,255,0.7)",
        "rgba(15,23,42,0.7)"
      )}
      backdropFilter="blur(8px)"
      overflow="hidden"
      _hover={{
        borderColor: "gold.400",
        _before: { opacity: 1 },
      }}
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "2xl",
        bg: useColorModeValue(
          "linear-gradient(135deg, rgba(212,160,23,0.04) 0%, transparent 60%)",
          "linear-gradient(135deg, rgba(212,160,23,0.07) 0%, transparent 60%)"
        ),
        opacity: 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* Top-left gold accent line */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="40px"
        h="3px"
        bg="gold.500"
        borderRadius="full"
      />

      <VStack gap={5} align="start">
        <Box
          bg={useColorModeValue("gold.50", "rgba(212,160,23,0.1)")}
          p={3}
          borderRadius="lg"
          border="1px solid"
          borderColor={useColorModeValue("gold.200", "gold.700")}
        >
          <Icon
            as={icon}
            boxSize={6}
            color={useColorModeValue("gold.600", "gold.400")}
          />
        </Box>

        <VStack gap={2} align="start">
          <Heading
            fontSize="lg"
            // fontFamily="SN Pro, sans-serif"
            fontWeight="600"
            letterSpacing="0.05em"
            color={useColorModeValue("brand.700", "brand.100")}
          >
            {title}
          </Heading>
          <Text
            color={textColor}
            fontSize="sm"
            lineHeight="1.8"
            // fontFamily="SN Pro, sans-serif"
          >
            {description}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}

/* ──────────────────────────── main component ─────────────────────── */

function About() {
  const pageBg = useColorModeValue(
    "linear-gradient(160deg, #f8f6f0 0%, #fdfaf4 40%, #f0f4f8 100%)",
    "linear-gradient(160deg, #020617 0%, #0b1120 50%, #0f172a 100%)"
  );
  const textColor = useColorModeValue("gray.600", "gray.300");
  const cardBg = useColorModeValue(
    "rgba(255,255,255,0.9)",
    "rgba(11,17,32,0.9)"
  );
  const sectionBorder = useColorModeValue("gold.200", "gold.800");

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
        {/* ── decorative background ornaments ── */}
        <Box
          position="absolute"
          top="5%"
          right="-8%"
          w={{ base: "260px", md: "420px" }}
          h={{ base: "260px", md: "420px" }}
          borderRadius="full"
          bg={useColorModeValue(
            "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 70%)"
          )}
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom="10%"
          left="-6%"
          w={{ base: "200px", md: "360px" }}
          h={{ base: "200px", md: "360px" }}
          borderRadius="full"
          bg={useColorModeValue(
            "radial-gradient(circle, rgba(30,41,59,0.05) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(148,163,184,0.04) 0%, transparent 70%)"
          )}
          pointerEvents="none"
        />

        {/* Thin gold diagonal stripe */}
        <Box
          position="absolute"
          top={0}
          left="50%"
          w="1px"
          h="100%"
          bg={useColorModeValue(
            "linear-gradient(180deg, transparent, rgba(212,160,23,0.15), transparent)",
            "linear-gradient(180deg, transparent, rgba(212,160,23,0.10), transparent)"
          )}
          pointerEvents="none"
        />

        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack gap={{ base: 16, md: 24 }} align="center">

            {/* ═══════════════ HERO ═══════════════ */}
            <VStack gap={6} align="center" textAlign="center" className="fade-up">

              {/* eyebrow label */}
              <HStack gap={3} align="center">
                <Box className="divider-line" />
                <Text
                  fontFamily="SN Pro, sans-serif"
                  fontSize="xs"
                  letterSpacing="0.25em"
                  textTransform="uppercase"
                  color={useColorModeValue("gold.600", "gold.400")}
                  fontWeight="400"
                >
                  Est. 1985
                </Text>
                <Box
                  className="divider-line"
                  style={{ background: "linear-gradient(90deg, transparent, #D4A017)" }}
                />
              </HStack>

              <Heading
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                bgGradient="linear(to-r, brand.600, gold.500)"
                bgClip="text"
                fontFamily="SN Pro, sans-serif"
                lineHeight="1.2"
                letterSpacing="-0.02em"
                color={useColorModeValue("brand.700", "neutral.50")}
                maxW="4xl"
              >
                The Art of{" "}
                <Box as="span" fontStyle="italic" className="shimmer-text">
                  Bespoke
                </Box>{" "}
                <Box as="span" display="block">
                  Tailoring
                </Box>
              </Heading>

              {/* decorative scissors divider */}
              <HStack gap={4} align="center" w="full" maxW="sm" justify="center">
                <Box
                  h="1px"
                  flex={1}
                  bg={useColorModeValue(
                    "linear-gradient(90deg, transparent, #D4A017)",
                    "linear-gradient(90deg, transparent, #b88912)"
                  )}
                />
                <Icon
                  as={FiScissors}
                  boxSize={5}
                  color={useColorModeValue("gold.500", "gold.400")}
                />
                <Box
                  h="1px"
                  flex={1}
                  bg={useColorModeValue(
                    "linear-gradient(90deg, #D4A017, transparent)",
                    "linear-gradient(90deg, #b88912, transparent)"
                  )}
                />
              </HStack>

              <Text
                fontFamily="SN Pro, sans-serif"
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color={textColor}
                lineHeight="1.9"
                maxW="3xl"
                fontWeight="300"
                fontStyle="italic"
              >
                We don't just create clothes — we craft legacies. With over{" "}
                <Box
                  as="span"
                  color={useColorModeValue("gold.600", "gold.400")}
                  fontStyle="normal"
                  fontWeight="400"
                >
                  35 years of heritage
                </Box>{" "}
                in bespoke tailoring, every stitch is a promise of perfection.
              </Text>
            </VStack>

            {/* ═══════════════ STATS ═══════════════ */}
            <SimpleGrid
              columns={{ base: 2, md: 4 }}
              gap={{ base: 4, md: 6 }}
              w="full"
              maxW="5xl"
            >
              <StatCard icon={FiAward}      number="35+"  label="Years of Excellence" delay="0s"    />
              <StatCard icon={FiUsers}      number="10K+" label="Satisfied Clients"   delay="0.1s"  />
              <StatCard icon={FiTrendingUp} number="500+" label="Custom Designs"      delay="0.2s"  />
              <StatCard icon={FiStar}       number="4.9★" label="Customer Rating"     delay="0.3s"  />
            </SimpleGrid>

            {/* ═══════════════ OUR STORY ═══════════════ */}
            <Box
              w="full"
              maxW="6xl"
              className="fade-up-2"
              bg={cardBg}
              backdropFilter="blur(16px)"
              borderRadius="3xl"
              border="1px solid"
              borderColor={sectionBorder}
              overflow="hidden"
              position="relative"
            >
              {/* Top gold bar */}
              <Box
                h="4px"
                bg="linear-gradient(90deg, #D4A017 0%, #ffd54f 50%, #D4A017 100%)"
              />

              <Flex
                direction={{ base: "column", lg: "row" }}
                gap={0}
              >
                {/* Text side */}
                <VStack
                  gap={6}
                  align="start"
                  flex={1}
                  p={{ base: 8, md: 12 }}
                >
                  <HStack gap={3}>
                    <Box className="divider-line" />
                    <Text
                      fontFamily="SN Pro, sans-serif"
                      fontSize="xs"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color={useColorModeValue("gold.600", "gold.400")}
                    >
                      Our Heritage
                    </Text>
                  </HStack>

                  <Heading
                    fontFamily="SN Pro, sans-serif"
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="400"
                    lineHeight="1.2"
                    color={useColorModeValue("brand.700", "neutral.100")}
                  >
                    A Story Woven in{" "}
                    <Box as="span" fontStyle="italic" color="gold.500">
                      Passion
                    </Box>
                  </Heading>

                  <Text
                    color={textColor}
                    fontSize="md"
                    lineHeight="1.9"
                    // fontFamily="SN Pro, sans-serif"
                    fontWeight="300"
                  >
                    Founded in{" "}
                    <Box
                      as="span"
                      fontWeight="500"
                      color={useColorModeValue("brand.600", "brand.200")}
                    >
                      1985 by master tailor William Anderson
                    </Box>
                    , Tailor Desk began as a small workshop with a singular
                    mission: garments that fit not just the body, but the soul.
                  </Text>

                  <Text
                    color={textColor}
                    fontSize="lg"
                    lineHeight="1.9"
                    fontFamily="SN Pro, sans-serif"
                    fontWeight="300"
                  >
                    Today we serve clients worldwide — yet every piece leaving
                    our atelier carries the same quiet devotion that defined
                    our very first creation.
                  </Text>

                  {/* Signature-style quote */}
                  <Box
                    borderLeft="3px solid"
                    borderColor="gold.400"
                    pl={5}
                    py={1}
                    mt={2}
                  >
                    <Text
                      fontFamily="SN Pro, sans-serif"
                      fontSize="xl"
                      fontStyle="italic"
                      color={useColorModeValue("brand.500", "brand.200")}
                      fontWeight="300"
                    >
                      "Wear the confidence we put in every stitch."
                    </Text>
                    <Text
                      fontFamily="SN Pro, sans-serif"
                      fontSize="xs"
                      letterSpacing="0.15em"
                      textTransform="uppercase"
                      color={useColorModeValue("gold.600", "gold.400")}
                      mt={2}
                    >
                      — William Anderson, Founder
                    </Text>
                  </Box>
                </VStack>

                {/* Visual panel */}
                <Box
                  flex={{ base: "unset", lg: "0 0 340px" }}
                  minH={{ base: "280px", lg: "auto" }}
                  bg={useColorModeValue(
                    "linear-gradient(145deg, #0f172a 0%, #1e293b 100%)",
                    "linear-gradient(145deg, #020617 0%, #0b1120 100%)"
                  )}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                  overflow="hidden"
                >
                  {/* concentric ring ornament */}
                  {[160, 220, 280].map((size, i) => (
                    <Box
                      key={i}
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      w={`${size}px`}
                      h={`${size}px`}
                      borderRadius="full"
                      border="1px solid"
                      borderColor={`rgba(212,160,23,${0.15 - i * 0.04})`}
                    />
                  ))}

                  <VStack gap={4} align="center" position="relative" zIndex={1}>
                    <Box
                      bg="rgba(212,160,23,0.12)"
                      border="1px solid"
                      borderColor="gold.600"
                      p={6}
                      borderRadius="full"
                      className="icon-pulse"
                    >
                      <Icon as={FiHeart} boxSize={10} color="gold.400" />
                    </Box>
                    <Text
                      fontFamily="SN Pro, sans-serif"
                      fontSize="2xl"
                      fontStyle="italic"
                      color="gold.300"
                      textAlign="center"
                      px={6}
                      fontWeight="300"
                    >
                      Made with Love &amp; Passion
                    </Text>
                    <HStack gap={2}>
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} as={FiStar} boxSize={3} color="gold.500" />
                      ))}
                    </HStack>
                  </VStack>
                </Box>
              </Flex>
            </Box>

            {/* ═══════════════ CORE VALUES ═══════════════ */}
            <VStack gap={10} align="center" w="full" maxW="6xl">
              <VStack gap={3} align="center" className="fade-up-3">
                <HStack gap={3} justify="center">
                  <Box className="divider-line" />
                  <Text
                    fontFamily="SN Pro, sans-serif"
                    fontSize="xs"
                    letterSpacing="0.2em"
                    textTransform="uppercase"
                    color={useColorModeValue("gold.600", "gold.400")}
                  >
                    What Drives Us
                  </Text>
                  <Box
                    className="divider-line"
                    style={{
                      background: "linear-gradient(90deg, transparent, #D4A017)",
                    }}
                  />
                </HStack>
                <Heading
                  fontFamily="SN Pro, sans-serif"
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="400"
                  color={useColorModeValue("brand.700", "neutral.100")}
                  textAlign="center"
                >
                  Our Core Values
                </Heading>
              </VStack>

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                gap={6}
                w="full"
              >
                <ValueCard
                  icon={FiTarget}
                  title="Precision & Quality"
                  description="Every stitch is placed with purpose, every measurement taken with care. We believe true perfection lives in the smallest details."
                  delay="0s"
                />
                <ValueCard
                  icon={FiUsers}
                  title="Customer First"
                  description="Your vision becomes our mission. We listen deeply, understand fully, and create garments that exceed your every expectation."
                  delay="0.1s"
                />
                <ValueCard
                  icon={FiClock}
                  title="Timeless Craftsmanship"
                  description="We honor traditional tailoring techniques while embracing innovation — creating garments that transcend trends and stand the test of time."
                  delay="0.2s"
                />
              </SimpleGrid>
            </VStack>

            {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
            <Box
              w="full"
              maxW="6xl"
              className="fade-up-4"
              position="relative"
            >
              {/* outer glow frame */}
              <Box
                position="absolute"
                inset="-1px"
                borderRadius="3xl"
                bg="linear-gradient(135deg, #D4A017 0%, transparent 40%, transparent 60%, #D4A017 100%)"
                opacity={0.35}
                zIndex={0}
              />

              <Box
                position="relative"
                zIndex={1}
                bg={cardBg}
                backdropFilter="blur(16px)"
                borderRadius="3xl"
                p={{ base: 8, md: 12 }}
                border="1px solid"
                borderColor={sectionBorder}
                overflow="hidden"
              >
                {/* watermark text */}
                <Text
                  position="absolute"
                  bottom={4}
                  right={6}
                  fontFamily="SN Pro, sans-serif"
                  fontSize="7xl"
                  fontWeight="700"
                  color={useColorModeValue(
                    "rgba(212,160,23,0.06)",
                    "rgba(212,160,23,0.05)"
                  )}
                  lineHeight={1}
                  userSelect="none"
                  pointerEvents="none"
                >
                  TD
                </Text>

                <VStack gap={10} align="center">
                  <VStack gap={3} align="center">
                    <HStack gap={3} justify="center">
                      <Box className="divider-line" />
                      <Text
                        fontFamily="SN Pro, sans-serif"
                        fontSize="xs"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                        color={useColorModeValue("gold.600", "gold.400")}
                      >
                        Our Promise
                      </Text>
                      <Box
                        className="divider-line"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, #D4A017)",
                        }}
                      />
                    </HStack>
                    <Heading
                      fontFamily="SN Pro, sans-serif"
                      fontSize={{ base: "3xl", md: "4xl" }}
                      fontWeight="400"
                      color={useColorModeValue("brand.700", "neutral.100")}
                      textAlign="center"
                    >
                      Why Choose{" "}
                      <Box as="span" fontStyle="italic" color="gold.500">
                        Tailor Desk
                      </Box>
                      ?
                    </Heading>
                  </VStack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    gap={{ base: 5, md: 6 }}
                    w="full"
                  >
                    {[
                      {
                        title: "Expert Master Tailors",
                        desc: "Our team brings over 100 years of combined experience in bespoke tailoring.",
                      },
                      {
                        title: "Premium Materials",
                        desc: "We source only the finest fabrics from renowned mills around the world.",
                      },
                      {
                        title: "Perfect Fit Guarantee",
                        desc: "Multiple fittings ensure your garment drapes like a second skin.",
                      },
                      {
                        title: "Lifetime Support",
                        desc: "We stand behind our craft with ongoing care and maintenance services.",
                      },
                    ].map(({ title, desc }) => (
                      <HStack
                        key={title}
                        gap={4}
                        align="start"
                        p={5}
                        borderRadius="xl"
                        border="1px solid"
                        borderColor={useColorModeValue(
                          "neutral.100",
                          "brand.700"
                        )}
                        bg={useColorModeValue(
                          "rgba(255,248,225,0.5)",
                          "rgba(15,23,42,0.5)"
                        )}
                        _hover={{
                          borderColor: "gold.400",
                          bg: useColorModeValue(
                            "rgba(255,248,225,0.9)",
                            "rgba(15,23,42,0.9)"
                          ),
                        }}
                        transition="all 0.25s ease"
                      >
                        <Box
                          mt="2px"
                          flexShrink={0}
                          bg={useColorModeValue(
                            "gold.50",
                            "rgba(212,160,23,0.12)"
                          )}
                          p={2}
                          borderRadius="md"
                          border="1px solid"
                          borderColor={useColorModeValue("gold.200", "gold.700")}
                        >
                          <Icon
                            as={FiCheckCircle}
                            boxSize={5}
                            color={useColorModeValue("gold.600", "gold.400")}
                          />
                        </Box>
                        <VStack gap={1} align="start">
                          <Text
                            fontFamily="SN Pro, sans-serif"
                            fontWeight="600"
                            fontSize="sm"
                            letterSpacing="0.04em"
                            color={useColorModeValue("brand.700", "brand.100")}
                          >
                            {title}
                          </Text>
                          <Text
                            fontFamily="SN Pro, sans-serif"
                            color={textColor}
                            fontSize="md"
                            lineHeight="1.7"
                            fontWeight="300"
                          >
                            {desc}
                          </Text>
                        </VStack>
                      </HStack>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Box>
            </Box>

          </VStack>
        </Container>
      </Box>
    </>
  );
}

export default About;