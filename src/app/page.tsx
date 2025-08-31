'use client';

import { 
  Box, 
  VStack, 
  HStack, 
  Heading, 
  Text, 
  Container, 
  SimpleGrid, 
  Card, 
  CardBody, 
  Badge,
  useBreakpointValue,
  Icon,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Divider
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  Orbit, 
  Handshake, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap,
  Navigation,
  CheckCircle,
  Mail,
  Check,
  Loader2
} from 'lucide-react';
import { useRef, useState } from 'react';
import { RocketButton } from '@/components/ui/RocketButton';

const MotionVStack = motion(VStack);
const MotionCard = motion(Card);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -8
  }
};

export default function Home() {
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const solutionRef = useRef(null);
  const socialProofRef = useRef(null);
  const pricingRef = useRef(null);
  const waitlistRef = useRef(null);

  // Waitlist form state
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const heroInView = useInView(heroRef, { once: true });
  const problemInView = useInView(problemRef, { once: true, margin: "-100px" });
  const solutionInView = useInView(solutionRef, { once: true, margin: "-100px" });
  const socialProofInView = useInView(socialProofRef, { once: true, margin: "-100px" });
  const pricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const waitlistInView = useInView(waitlistRef, { once: true, margin: "-100px" });

  const heroHeight = useBreakpointValue({ base: '100vh', md: '90vh' }) || '100vh';

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle waitlist form submission
  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <Box 
        position="relative" 
        height={heroHeight} 
        overflow="hidden"
        bg="white"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, #164CFF 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #8B5CF6 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #FFA500 0%, transparent 50%)
          `,
          zIndex: 1
        }}
      >
        <Container
          maxW="7xl"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          zIndex={2}
          px={{ base: 4, md: 6, lg: 8 }}
        >
          <MotionVStack
            ref={heroRef}
            spacing={8}
            textAlign="center"
            maxW="4xl"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <MotionHeading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                fontFamily="heading"
                fontWeight="bold"
                color="brand.deepText"
                lineHeight="shorter"
                mb={4}
              >
                Navigate Your Salary Negotiation Like a{' '}
                <Box as="span" bgGradient="linear(45deg, #164CFF 0%, #8B5CF6 50%, #FFA500 100%)" bgClip="text">
                  Space Commander
                </Box>
              </MotionHeading>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <MotionText
                fontSize={{ base: "lg", md: "xl" }}
                color="brand.lightGray"
                maxW="3xl"
                lineHeight="tall"
                mb={8}
              >
                Mission Control for your career advancement. AI-powered strategies to secure 
                the compensation you deserve with confidence and precision.
              </MotionText>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <RocketButton 
                  variant="primary" 
                  size="lg" 
                  leftIcon={<Rocket />}
                  boxShadow="0 4px 20px rgba(22, 76, 255, 0.25)"
                  _hover={{
                    boxShadow: "0 8px 30px rgba(22, 76, 255, 0.35)",
                    transform: "translateY(-2px)"
                  }}
                  as="a"
                  href="/offer-upload"
                >
                  Take Your Salary to the Moon 🚀
                </RocketButton>
              </HStack>
            </motion.div>

            {/* Static Rocket Illustration */}
            <motion.div variants={fadeInUp}>
              <Box mt={8}>
                <Icon 
                  as={Rocket} 
                  boxSize={16} 
                  color="brand.electricBlue" 
                  transform="rotate(45deg)"
                />
              </Box>
            </motion.div>
          </MotionVStack>
        </Container>
      </Box>

      {/* Problem Section */}
      <Box bg="gray.50" py={{ base: 16, md: 24 }} position="relative">
        <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }}>
          <MotionVStack
            ref={problemRef}
            spacing={8}
            textAlign="center"
            initial="hidden"
            animate={problemInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <MotionHeading
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                fontFamily="heading"
                color="brand.deepText"
                mb={4}
              >
                Don&apos;t Let Your Career Drift in Space Without a Flight Plan
              </MotionHeading>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <MotionText
                fontSize={{ base: "lg", md: "xl" }}
                color="brand.lightGray"
                maxW="3xl"
                lineHeight="tall"
              >
                Most professionals navigate salary negotiations without proper guidance, 
                leaving thousands on the table. Like a spacecraft without navigation, 
                you&apos;re floating aimlessly in compensation discussions.
              </MotionText>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Box textAlign="center" opacity={0.6} mt={8}>
                <Icon as={Navigation} boxSize={20} color="brand.lightGray" />
                <Text fontSize="sm" color="brand.lightGray" mt={4} fontStyle="italic">
                  Lost astronaut drifting without direction
                </Text>
              </Box>
            </motion.div>
          </MotionVStack>
        </Container>
      </Box>

      {/* Solution Section */}
      <Box bg="white" py={{ base: 16, md: 24 }}>
        <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }}>
          <MotionVStack
            ref={solutionRef}
            spacing={12}
            initial="hidden"
            animate={solutionInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <VStack spacing={4} textAlign="center">
                <MotionHeading
                  as="h2"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontFamily="heading"
                  color="brand.deepText"
                >
                  Your Mission Control Center
                </MotionHeading>
                <MotionText
                  fontSize={{ base: "lg", md: "xl" }}
                  color="brand.lightGray"
                  maxW="2xl"
                >
                  Three-stage propulsion system to launch your salary into orbit
                </MotionText>
              </VStack>
            </motion.div>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
              {[
                {
                  icon: Rocket,
                  title: "Upload Mission Data",
                  description: "Share your current role, experience, and target compensation. Our AI analyzes your profile against market data.",
                  delay: 0
                },
                {
                  icon: Orbit,
                  title: "Strategic Analysis", 
                  description: "Get personalized negotiation strategies, market insights, and timing recommendations based on your unique situation.",
                  delay: 0.3
                },
                {
                  icon: Handshake,
                  title: "Execute with Confidence",
                  description: "Follow your custom negotiation playbook with real-time guidance and proven scripts that secure results.",
                  delay: 0.6
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: feature.delay,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <MotionCard
                    height="100%"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    backdropFilter="blur(10px)"
                    initial="rest"
                    whileHover="hover"
                    variants={cardHover}
                    boxShadow="md"
                    borderRadius="xl"
                    _hover={{
                      boxShadow: "xl",
                      borderColor: "brand.electricBlue"
                    }}
                  >
                    <CardBody p={8}>
                      <VStack spacing={6} align="start">
                        <Box
                          p={4}
                          borderRadius="full"
                          bg="brand.electricBlue"
                          color="white"
                        >
                          <Icon as={feature.icon} boxSize={8} />
                        </Box>
                        <VStack spacing={3} align="start">
                          <Heading
                            as="h3"
                            size="lg"
                            fontFamily="heading"
                            color="brand.deepText"
                          >
                            {feature.title}
                          </Heading>
                          <Text color="brand.lightGray" lineHeight="tall">
                            {feature.description}
                          </Text>
                        </VStack>
                      </VStack>
                    </CardBody>
                  </MotionCard>
                </motion.div>
              ))}
            </SimpleGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Social Proof Section */}
      <Box bg="gray.50" py={{ base: 16, md: 24 }}>
        <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }}>
          <MotionVStack
            ref={socialProofRef}
            spacing={12}
            initial="hidden"
            animate={socialProofInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <VStack spacing={4} textAlign="center">
                <MotionHeading
                  as="h2"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontFamily="heading"
                  color="brand.deepText"
                >
                  Mission Reports from the Field
                </MotionHeading>
                <MotionText
                  fontSize={{ base: "lg", md: "xl" }}
                  color="brand.lightGray"
                  maxW="2xl"
                >
                  Real space commanders sharing their successful salary launches
                </MotionText>
              </VStack>
            </motion.div>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
              {[
                {
                  name: "Commander Sarah Chen",
                  role: "Senior Software Engineer",
                  company: "TechCorp",
                  quote: "Mission accomplished! RaiseRocket guided me through a flawless salary negotiation. The AI strategies were precisely what I needed for a successful launch.",
                  increase: "$40K",
                  rating: 5,
                  missionCode: "SCH-001"
                },
                {
                  name: "Captain Marcus Rodriguez",
                  role: "Product Manager", 
                  company: "StartupX",
                  quote: "From ground control to orbit in one negotiation. The market intel and tactical scripts were mission-critical. Best career investment ever.",
                  increase: "$40K",
                  rating: 5,
                  missionCode: "MRO-002"
                },
                {
                  name: "Lieutenant Emily Watson",
                  role: "Data Scientist",
                  company: "BigTech Inc",
                  quote: "Nervous about the mission? RaiseRocket&apos;s flight plan made negotiation feel like a routine space walk. Dream salary achieved!",
                  increase: "$55K",
                  rating: 5,
                  missionCode: "EWA-003"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                >
                  <MotionCard
                    height="100%"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    initial="rest"
                    whileHover="hover"
                    variants={cardHover}
                    borderRadius="xl"
                    boxShadow="md"
                    _hover={{
                      boxShadow: "lg"
                    }}
                  >
                    <CardBody p={6}>
                      <VStack spacing={4} align="start">
                        <HStack justify="space-between" width="100%">
                          <HStack>
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Icon key={i} as={Star} color="brand.cosmicOrange" boxSize={4} fill="currentColor" />
                            ))}
                          </HStack>
                          <Badge colorScheme="blue" variant="subtle" fontSize="xs">
                            {testimonial.missionCode}
                          </Badge>
                        </HStack>
                        <Text color="brand.deepText" lineHeight="tall" fontSize="md" fontStyle="italic">
                          &ldquo;{testimonial.quote}&rdquo;
                        </Text>
                        <Divider />
                        <Box width="100%">
                          <Text fontWeight="bold" color="brand.deepText">
                            {testimonial.name}
                          </Text>
                          <Text fontSize="sm" color="brand.lightGray">
                            {testimonial.role} at {testimonial.company}
                          </Text>
                          <Badge
                            colorScheme="green"
                            variant="solid"
                            mt={2}
                            fontSize="xs"
                          >
                            +{testimonial.increase} salary increase
                          </Badge>
                        </Box>
                      </VStack>
                    </CardBody>
                  </MotionCard>
                </motion.div>
              ))}
            </SimpleGrid>

            {/* Statistics */}
            <motion.div variants={fadeInUp}>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} mt={12}>
                {[
                  { icon: TrendingUp, stat: "94%", label: "Mission Success Rate" },
                  { icon: Target, stat: "$50K+", label: "Average Salary Boost" },
                  { icon: Shield, stat: "10K+", label: "Successful Launches" },
                  { icon: Zap, stat: "48hrs", label: "Average Mission Time" }
                ].map((item, index) => (
                  <VStack key={index} spacing={2}>
                    <Icon as={item.icon} boxSize={8} color="brand.electricBlue" />
                    <Text fontSize="2xl" fontWeight="bold" color="brand.deepText">
                      {item.stat}
                    </Text>
                    <Text fontSize="sm" color="brand.lightGray" textAlign="center">
                      {item.label}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </motion.div>
          </MotionVStack>
        </Container>
      </Box>

      {/* Single Pricing Tier - Commander Access */}
      <Box bg="white" py={{ base: 16, md: 24 }} position="relative">
        <Container maxW="4xl" px={{ base: 4, md: 6, lg: 8 }}>
          <MotionVStack
            ref={pricingRef}
            spacing={12}
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <VStack spacing={4} textAlign="center">
                <MotionHeading
                  as="h2"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontFamily="heading"
                  color="brand.deepText"
                >
                  Commander Access
                </MotionHeading>
                <MotionText
                  fontSize={{ base: "lg", md: "xl" }}
                  color="brand.lightGray"
                  maxW="2xl"
                >
                  Everything you need to master salary negotiations like a space commander
                </MotionText>
              </VStack>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <MotionCard
                maxW="lg"
                mx="auto"
                bg="white"
                border="2px solid"
                borderColor="brand.electricBlue"
                borderRadius="2xl"
                boxShadow="2xl"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  bgGradient: "linear(to-r, brand.electricBlue, brand.auroraPurple, brand.cosmicOrange)"
                }}
              >
                <Badge
                  position="absolute"
                  top={4}
                  right={4}
                  colorScheme="blue"
                  variant="solid"
                  fontSize="sm"
                  px={3}
                  py={1}
                >
                  Premium Access
                </Badge>
                <CardBody p={10}>
                  <VStack spacing={8} align="start">
                    <VStack spacing={4} align="start" width="100%">
                      <Heading as="h3" size="xl" fontFamily="heading" color="brand.deepText">
                        Full Mission Control
                      </Heading>
                      <HStack>
                        <Text fontSize="4xl" fontWeight="bold" color="brand.deepText">
                          $197
                        </Text>
                        <VStack spacing={0} align="start">
                          <Text fontSize="lg" color="brand.lightGray">
                            one-time
                          </Text>
                          <Text fontSize="sm" color="brand.lunarGreen" fontWeight="semibold">
                            Lifetime access
                          </Text>
                        </VStack>
                      </HStack>
                      <Text color="brand.lightGray" fontSize="md">
                        Complete salary negotiation command center with AI-powered strategies
                      </Text>
                    </VStack>

                    <VStack spacing={4} align="start" width="100%">
                      {[
                        { icon: Rocket, text: "AI-powered negotiation strategies" },
                        { icon: Target, text: "Personal market analysis & benchmarks" },
                        { icon: Shield, text: "1-on-1 mission briefings with experts" },
                        { icon: Orbit, text: "Custom negotiation playbooks" },
                        { icon: Zap, text: "Real-time guidance during negotiations" },
                        { icon: CheckCircle, text: "Success guarantee or money back" }
                      ].map((feature, index) => (
                        <HStack key={index} spacing={3} width="100%">
                          <Icon 
                            as={feature.icon} 
                            color="brand.electricBlue" 
                            boxSize={5}
                          />
                          <Text fontSize="md" color="brand.deepText">
                            {feature.text}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>

                    <VStack spacing={4} width="100%">
                      <RocketButton
                        variant="primary"
                        size="lg"
                        width="100%"
                        leftIcon={<Rocket />}
                        fontSize="lg"
                        py={6}
                        boxShadow="0 4px 20px rgba(22, 76, 255, 0.25)"
                        _hover={{
                          boxShadow: "0 8px 30px rgba(22, 76, 255, 0.35)",
                          transform: "translateY(-2px)"
                        }}
                      >
                        Launch Your Salary Mission 🚀
                      </RocketButton>
                      <Text fontSize="xs" color="brand.lightGray" textAlign="center">
                        30-day money-back guarantee • Secure checkout
                      </Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </MotionCard>
            </motion.div>
          </MotionVStack>
        </Container>
      </Box>

      {/* Waitlist CTA Section */}
      <Box bg="gray.50" py={{ base: 16, md: 24 }}>
        <Container maxW="2xl" px={{ base: 4, md: 6, lg: 8 }}>
          <MotionVStack
            ref={waitlistRef}
            spacing={8}
            textAlign="center"
            initial="hidden"
            animate={waitlistInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <VStack spacing={4}>
                <MotionHeading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontFamily="heading"
                  color="brand.deepText"
                >
                  Ready to Take Your Salary to the Moon?
                </MotionHeading>
                <MotionText
                  fontSize={{ base: "lg", md: "xl" }}
                  color="brand.lightGray"
                  maxW="xl"
                >
                  Join the waitlist to be among the first space commanders when we launch
                </MotionText>
              </VStack>
            </motion.div>

            <motion.div variants={fadeInUp}>
              {isSuccess ? (
                <MotionCard
                  bg="white"
                  border="2px solid"
                  borderColor="brand.lunarGreen"
                  borderRadius="xl"
                  p={8}
                  maxW="md"
                  boxShadow="lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <VStack spacing={4}>
                    <Icon as={Check} boxSize={12} color="brand.lunarGreen" />
                    <Heading as="h3" size="lg" color="brand.deepText" fontFamily="heading">
                      Mission Confirmed! 🚀
                    </Heading>
                    <Text color="brand.lightGray" textAlign="center">
                      Welcome to the crew, Commander! You&apos;ll be the first to know when we launch.
                    </Text>
                  </VStack>
                </MotionCard>
              ) : (
                <Card
                  bg="white"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="xl"
                  p={6}
                  maxW="md"
                  boxShadow="lg"
                >
                  <form onSubmit={handleWaitlistSubmit}>
                    <VStack spacing={4}>
                      <FormControl isInvalid={!!error}>
                        <FormLabel color="brand.deepText" fontWeight="semibold">
                          <HStack>
                            <Icon as={Mail} boxSize={4} />
                            <Text>Mission Control Email</Text>
                          </HStack>
                        </FormLabel>
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="commander@example.com"
                          size="lg"
                          bg="gray.50"
                          border="1px solid"
                          borderColor="gray.300"
                          _hover={{ borderColor: "brand.electricBlue" }}
                          _focus={{ 
                            borderColor: "brand.electricBlue",
                            boxShadow: "0 0 0 1px #164CFF"
                          }}
                        />
                        <FormErrorMessage>{error}</FormErrorMessage>
                      </FormControl>
                      
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        width="100%"
                        isLoading={isLoading}
                        loadingText="Preparing Launch..."
                        leftIcon={isLoading ? <Loader2 /> : <Rocket />}
                        fontFamily="heading"
                        fontSize="lg"
                        py={6}
                        bg="brand.electricBlue"
                        color="white"
                        _hover={{
                          bg: "brand.auroraPurple",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(22, 76, 255, 0.3)"
                        }}
                        _active={{
                          transform: "translateY(0px)"
                        }}
                        boxShadow="0 4px 15px rgba(22, 76, 255, 0.2)"
                      >
                        Join the Crew 🚀
                      </Button>
                      
                      <Text fontSize="xs" color="brand.lightGray">
                        No spam, only mission updates. Unsubscribe anytime.
                      </Text>
                    </VStack>
                  </form>
                </Card>
              )}
            </motion.div>
          </MotionVStack>
        </Container>
      </Box>
    </>
  );
}
