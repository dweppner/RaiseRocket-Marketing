'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  HStack,
  Box,
  Text,
  Button,
  SimpleGrid,
  Badge,
  Divider
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { RocketButton } from './RocketButton';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpgradeModal = ({ isOpen, onClose }: UpgradeModalProps) => {
  const features = [
    {
      category: "Intelligence Analysis",
      items: [
        "Complete market positioning data",
        "Detailed salary benchmarking",
        "Industry-specific comparisons",
        "Historical trend analysis"
      ]
    },
    {
      category: "Negotiation Arsenal",
      items: [
        "Customized negotiation scripts",
        "Counter-offer strategies",
        "Email templates & responses",
        "Timing recommendations"
      ]
    },
    {
      category: "Risk Management",
      items: [
        "Company stability analysis",
        "Market risk assessment",
        "Negotiation success probability",
        "Backup strategy planning"
      ]
    },
    {
      category: "Mission Support",
      items: [
        "24/7 AI coaching assistance",
        "Practice negotiation scenarios",
        "Real-time strategy updates",
        "Success tracking & analytics"
      ]
    }
  ];

  const testimonials = [
    {
      result: "+$28,000 salary increase",
      quote: "The detailed market analysis gave me confidence to negotiate. Worth every penny!",
      role: "Software Engineer"
    },
    {
      result: "+$15,000 + equity boost",
      quote: "The negotiation scripts were perfect. I got exactly what I asked for.",
      role: "Product Manager"
    },
    {
      result: "+$22,000 + remote work",
      quote: "Commander access paid for itself 220x over. Incredible ROI.",
      role: "Data Scientist"
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay 
        bg="rgba(0, 0, 0, 0.8)" 
        backdropFilter="blur(4px)"
      />
      <ModalContent
        bg="rgba(255, 255, 255, 0.98)"
        backdropFilter="blur(20px)"
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.200"
        boxShadow="0 20px 60px rgba(0, 0, 0, 0.3)"
        mx={4}
        my={8}
        maxH="90vh"
        overflowY="auto"
      >
        <ModalHeader
          bg="linear-gradient(135deg, rgba(22, 76, 255, 0.05) 0%, rgba(255, 165, 0, 0.05) 100%)"
          borderRadius="2xl 2xl 0 0"
          borderBottom="1px solid"
          borderColor="gray.200"
          pb={6}
        >
          <VStack spacing={3} textAlign="center">
            <HStack spacing={2}>
              <Text
                as="span"
                color="brand.cosmicOrange"
                fontSize="xs"
                px={3}
                py={1}
                bg="rgba(255, 165, 0, 0.1)"
                borderRadius="md"
                border="1px solid"
                borderColor="brand.cosmicOrange"
                fontFamily="mono"
                fontWeight="bold"
              >
                UPGRADE-001
              </Text>
            </HStack>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="heading"
              color="brand.deepText"
            >
              🚀 Ready for Mission Control?
            </Text>
            <Text
              fontSize="md"
              color="brand.lightGray"
              fontFamily="mono"
              maxW="400px"
            >
              Unlock your complete negotiation intelligence and maximize your offer potential
            </Text>
          </VStack>
        </ModalHeader>

        <ModalCloseButton 
          color="brand.lightGray"
          _hover={{ color: "brand.deepText" }}
        />

        <ModalBody px={8} py={6}>
          <VStack spacing={8} align="stretch">
            
            {/* Pricing Cards */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {/* Current Plan */}
              <Box
                bg="rgba(0, 0, 0, 0.02)"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                p={6}
              >
                <VStack spacing={4} align="stretch">
                  <VStack spacing={2} align="start">
                    <Badge
                      bg="rgba(22, 76, 255, 0.1)"
                      color="brand.electricBlue"
                      fontFamily="mono"
                      fontSize="xs"
                      px={2}
                      py={1}
                    >
                      CURRENT PLAN
                    </Badge>
                    <Text fontFamily="heading" fontWeight="bold" fontSize="lg">
                      🌌 Explorer Access
                    </Text>
                    <Text fontFamily="mono" fontSize="2xl" fontWeight="bold" color="brand.electricBlue">
                      FREE
                    </Text>
                  </VStack>
                  
                  <VStack spacing={2} align="start" fontSize="sm" fontFamily="mono">
                    <Text color="brand.lightGray">• Basic market positioning</Text>
                    <Text color="brand.lightGray">• Limited opportunity preview</Text>
                    <Text color="brand.lightGray">• General risk overview</Text>
                    <Text color="brand.lightGray">• Surface-level insights</Text>
                  </VStack>
                </VStack>
              </Box>

              {/* Upgrade Plan */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  bg="linear-gradient(135deg, rgba(255, 165, 0, 0.05) 0%, rgba(255, 165, 0, 0.1) 100%)"
                  borderRadius="xl"
                  border="2px solid"
                  borderColor="brand.cosmicOrange"
                  p={6}
                  position="relative"
                  overflow="hidden"
                >
                  <VStack spacing={4} align="stretch">
                    <VStack spacing={2} align="start">
                      <Badge
                        bg="brand.cosmicOrange"
                        color="white"
                        fontFamily="mono"
                        fontSize="xs"
                        px={2}
                        py={1}
                      >
                        RECOMMENDED
                      </Badge>
                      <Text fontFamily="heading" fontWeight="bold" fontSize="lg">
                        🚀 Commander Access
                      </Text>
                      <HStack spacing={2} align="baseline">
                        <Text fontFamily="mono" fontSize="2xl" fontWeight="bold" color="brand.cosmicOrange">
                          $99
                        </Text>
                        <Text fontFamily="mono" fontSize="sm" color="brand.lightGray">
                          /year
                        </Text>
                      </HStack>
                      <Text fontFamily="mono" fontSize="xs" color="brand.cosmicOrange" fontWeight="bold">
                        PAYS FOR ITSELF WITH FIRST NEGOTIATION
                      </Text>
                    </VStack>
                    
                    <VStack spacing={2} align="start" fontSize="sm" fontFamily="mono">
                      <Text color="brand.deepText">• Complete market analysis</Text>
                      <Text color="brand.deepText">• Detailed negotiation scripts</Text>
                      <Text color="brand.deepText">• Risk mitigation strategies</Text>
                      <Text color="brand.deepText">• Personalized tactics</Text>
                      <Text color="brand.deepText">• 24/7 AI coaching</Text>
                    </VStack>
                  </VStack>

                  {/* Glow effect */}
                  <Box
                    position="absolute"
                    top="-50%"
                    left="-50%"
                    right="-50%"
                    bottom="-50%"
                    background="radial-gradient(circle, rgba(255, 165, 0, 0.1) 0%, transparent 70%)"
                    animation="pulse 3s ease-in-out infinite"
                  />
                </Box>
              </motion.div>
            </SimpleGrid>

            {/* Feature Breakdown */}
            <Box>
              <Text
                fontFamily="heading"
                fontWeight="bold"
                fontSize="lg"
                color="brand.deepText"
                mb={4}
                textAlign="center"
              >
                🎯 What You'll Unlock
              </Text>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {features.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Box
                      bg="rgba(255, 255, 255, 0.8)"
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="gray.200"
                      p={4}
                    >
                      <VStack spacing={3} align="stretch">
                        <Text
                          fontFamily="mono"
                          fontWeight="bold"
                          fontSize="sm"
                          color="brand.electricBlue"
                        >
                          {category.category}
                        </Text>
                        <VStack spacing={1} align="start">
                          {category.items.map((item, itemIndex) => (
                            <HStack key={itemIndex} spacing={2}>
                              <Box
                                w={1.5}
                                h={1.5}
                                bg="brand.cosmicOrange"
                                borderRadius="50%"
                                mt={1.5}
                              />
                              <Text
                                fontFamily="mono"
                                fontSize="xs"
                                color="brand.deepText"
                                lineHeight="1.4"
                              >
                                {item}
                              </Text>
                            </HStack>
                          ))}
                        </VStack>
                      </VStack>
                    </Box>
                  </motion.div>
                ))}
              </SimpleGrid>
            </Box>

            <Divider borderColor="gray.200" />

            {/* Social Proof */}
            <Box>
              <Text
                fontFamily="heading"
                fontWeight="bold"
                fontSize="lg"
                color="brand.deepText"
                mb={4}
                textAlign="center"
              >
                💫 Mission Success Stories
              </Text>
              
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Box
                      bg="rgba(126, 217, 87, 0.05)"
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="rgba(126, 217, 87, 0.2)"
                      p={4}
                      textAlign="center"
                    >
                      <VStack spacing={2}>
                        <Text
                          fontFamily="mono"
                          fontWeight="bold"
                          fontSize="sm"
                          color="brand.lunarGreen"
                        >
                          {testimonial.result}
                        </Text>
                        <Text
                          fontFamily="mono"
                          fontSize="xs"
                          color="brand.deepText"
                          fontStyle="italic"
                        >
                          "{testimonial.quote}"
                        </Text>
                        <Text
                          fontFamily="mono"
                          fontSize="xs"
                          color="brand.lightGray"
                        >
                          — {testimonial.role}
                        </Text>
                      </VStack>
                    </Box>
                  </motion.div>
                ))}
              </SimpleGrid>
            </Box>

            {/* CTA Section */}
            <Box
              bg="linear-gradient(135deg, rgba(255, 165, 0, 0.05) 0%, rgba(255, 165, 0, 0.1) 100%)"
              borderRadius="xl"
              border="1px solid"
              borderColor="rgba(255, 165, 0, 0.2)"
              p={6}
              textAlign="center"
            >
              <VStack spacing={4}>
                <VStack spacing={2}>
                  <Text
                    fontFamily="heading"
                    fontWeight="bold"
                    fontSize="xl"
                    color="brand.deepText"
                  >
                    Launch Your Mission Today
                  </Text>
                  <Text
                    fontFamily="mono"
                    fontSize="sm"
                    color="brand.lightGray"
                    maxW="400px"
                  >
                    Join thousands of professionals who've maximized their offers with Commander Access
                  </Text>
                </VStack>

                <VStack spacing={3}>
                  <RocketButton
                    variant="accent"
                    size="lg"
                    leftIcon={<Text>🚀</Text>}
                    onClick={() => {
                      // Integration with payment system would go here
                      alert('Redirecting to secure checkout...');
                    }}
                  >
                    Upgrade to Commander - $99/year
                  </RocketButton>
                  
                  <HStack spacing={4} fontSize="xs" fontFamily="mono" color="brand.lightGray">
                    <Text>✅ 30-day money back guarantee</Text>
                    <Text>✅ Instant access</Text>
                    <Text>✅ Cancel anytime</Text>
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
