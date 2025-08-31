'use client';

import { useState, useEffect } from 'react';
import { 
  Container, 
  VStack, 
  HStack, 
  Box, 
  Text, 
  Button,
  SimpleGrid,
  Progress,
  useDisclosure
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { RadarScanner } from '@/components/ui/RadarScanner';
import { MissionGauge } from '@/components/ui/MissionGauge';
import { TeaserCard } from '@/components/ui/TeaserCard';
import { UpgradeModal } from '@/components/ui/UpgradeModal';
import { RocketButton } from '@/components/ui/RocketButton';

interface AssessmentData {
  marketPercentile: number;
  salaryComparison: {
    current: number;
    market25: number;
    market50: number;
    market75: number;
    market90: number;
  };
  negotiationOpportunities: {
    title: string;
    description: string;
    impact: string;
    priority: 'high' | 'medium' | 'low';
  }[];
  riskAssessment: {
    score: number;
    factors: string[];
  };
}

export default function OfferAssessmentPage() {
  const [isScanning, setIsScanning] = useState(true);
  const [scanningStage, setScanningStage] = useState(0);
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scanningStages = [
    "Scanning offer against galactic databases...",
    "Analyzing market data across the universe...",
    "Calculating optimal trajectories...",
    "Compiling mission intelligence report..."
  ];

  useEffect(() => {
    // Retrieve mission parameters from localStorage
    const missionParams = localStorage.getItem('missionParameters');
    
    if (!missionParams) {
      // Redirect back to offer upload if no data
      window.location.href = '/offer-upload';
      return;
    }

    // Simulate scanning sequence
    const scanInterval = setInterval(() => {
      setScanningStage(prev => {
        if (prev < scanningStages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(scanInterval);
          setTimeout(() => {
            setIsScanning(false);
            // Generate mock assessment data
            setAssessmentData(generateMockAssessment());
          }, 1000);
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(scanInterval);
  }, []);

  const generateMockAssessment = (): AssessmentData => {
    return {
      marketPercentile: 65,
      salaryComparison: {
        current: 120000,
        market25: 110000,
        market50: 125000,
        market75: 140000,
        market90: 160000
      },
      negotiationOpportunities: [
        {
          title: "Base Salary Optimization",
          description: "Market analysis suggests 12-18% upward potential based on skill trajectory",
          impact: "+$15,000 - $22,000",
          priority: 'high'
        },
        {
          title: "Equity Package Enhancement",
          description: "Stock options below industry standard for this orbital class",
          impact: "+$8,000 - $12,000 annually",
          priority: 'high'
        },
        {
          title: "Performance Bonus Structure",
          description: "Opportunity to negotiate variable compensation alignment",
          impact: "+$5,000 - $8,000",
          priority: 'medium'
        }
      ],
      riskAssessment: {
        score: 7.5,
        factors: [
          "Strong market position",
          "Company trajectory stable",
          "Minimal negotiation resistance expected"
        ]
      }
    };
  };

  if (isScanning) {
    return (
      <Container maxW="1200px" py={{ base: 12, md: 24 }} px={{ base: 4, md: 8 }}>
        <VStack spacing={12} align="center" justify="center" minH="70vh">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={8} textAlign="center">
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="bold"
                fontFamily="heading"
                color="brand.deepText"
              >
                🚀 Mission Viability Analysis
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="brand.lightGray"
                maxW="600px"
                fontFamily="mono"
              >
                Analyzing your offer against galactic market intelligence
              </Text>
            </VStack>
          </motion.div>

          <RadarScanner 
            message={scanningStages[scanningStage]}
            progress={(scanningStage + 1) / scanningStages.length * 100}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Progress
              value={(scanningStage + 1) / scanningStages.length * 100}
              size="lg"
              borderRadius="full"
              bg="gray.100"
              w="400px"
              maxW="90vw"
              sx={{
                '& > div': {
                  background: 'linear-gradient(90deg, #164CFF 0%, #8B5CF6 50%, #FFA500 100%)',
                  boxShadow: '0 0 20px rgba(22, 76, 255, 0.4)',
                  borderRadius: 'full',
                }
              }}
            />
          </motion.div>
        </VStack>
      </Container>
    );
  }

  return (
    <Container maxW="1200px" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack spacing={8} align="stretch">
            
            {/* Header */}
            <VStack spacing={4} textAlign="center">
              <HStack spacing={2} justify="center">
                <Text
                  as="span"
                  color="brand.lunarGreen"
                  fontSize="xs"
                  px={3}
                  py={1}
                  bg="rgba(126, 217, 87, 0.1)"
                  borderRadius="md"
                  border="1px solid"
                  borderColor="brand.lunarGreen"
                  fontFamily="mono"
                  fontWeight="bold"
                >
                  MISSION-COMPLETE
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="bold"
                fontFamily="heading"
                color="brand.deepText"
              >
                📊 Mission Intelligence Report
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="brand.lightGray"
                maxW="600px"
                fontFamily="mono"
              >
                Analysis complete. Your offer has been evaluated against galactic market standards.
              </Text>
            </VStack>

            {/* Mission Briefing Dashboard */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
              
              {/* Market Percentile Gauge */}
              <Box
                bg="rgba(255, 255, 255, 0.95)"
                backdropFilter="blur(10px)"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                p={6}
                boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
              >
                <VStack spacing={4} align="stretch">
                  <HStack spacing={2}>
                    <Text
                      as="span"
                      color="brand.electricBlue"
                      fontSize="xs"
                      px={2}
                      py={1}
                      bg="rgba(22, 76, 255, 0.1)"
                      borderRadius="md"
                      border="1px solid"
                      borderColor="brand.electricBlue"
                      fontFamily="mono"
                      fontWeight="bold"
                    >
                      MARKET-001
                    </Text>
                    <Text
                      color="brand.deepText"
                      fontFamily="mono"
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      Market Position Analysis
                    </Text>
                  </HStack>
                  
                  <MissionGauge
                    value={assessmentData?.marketPercentile || 0}
                    title="Market Percentile"
                    subtitle="Your offer vs. galactic standards"
                  />
                </VStack>
              </Box>

              {/* Salary Comparison Chart */}
              <Box
                bg="rgba(255, 255, 255, 0.95)"
                backdropFilter="blur(10px)"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                p={6}
                boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
                position="relative"
              >
                <VStack spacing={4} align="stretch">
                  <HStack spacing={2}>
                    <Text
                      as="span"
                      color="brand.cosmicOrange"
                      fontSize="xs"
                      px={2}
                      py={1}
                      bg="rgba(255, 165, 0, 0.1)"
                      borderRadius="md"
                      border="1px solid"
                      borderColor="brand.cosmicOrange"
                      fontFamily="mono"
                      fontWeight="bold"
                    >
                      COMP-001
                    </Text>
                    <Text
                      color="brand.deepText"
                      fontFamily="mono"
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      Salary Trajectory Map
                    </Text>
                  </HStack>
                  
                  <VStack spacing={3} align="stretch">
                    <Text fontFamily="mono" fontSize="2xl" fontWeight="bold" color="brand.electricBlue">
                      ${assessmentData?.salaryComparison.current.toLocaleString()}
                    </Text>
                    <Text fontFamily="mono" fontSize="sm" color="brand.lightGray">
                      Current Offer Position
                    </Text>
                    
                    {/* Limited market data preview */}
                    <Box position="relative" filter="blur(2px)" opacity={0.6}>
                      <VStack spacing={2} align="stretch" fontSize="xs" fontFamily="mono">
                        <HStack justify="space-between">
                          <Text>90th Percentile:</Text>
                          <Text>${assessmentData?.salaryComparison.market90.toLocaleString()}</Text>
                        </HStack>
                        <HStack justify="space-between">
                          <Text>75th Percentile:</Text>
                          <Text>${assessmentData?.salaryComparison.market75.toLocaleString()}</Text>
                        </HStack>
                        <HStack justify="space-between">
                          <Text>50th Percentile:</Text>
                          <Text>${assessmentData?.salaryComparison.market50.toLocaleString()}</Text>
                        </HStack>
                      </VStack>
                    </Box>
                  </VStack>
                </VStack>
                
                {/* Unlock overlay */}
                <Box
                  position="absolute"
                  bottom={4}
                  right={4}
                  bg="brand.cosmicOrange"
                  color="white"
                  px={3}
                  py={1}
                  borderRadius="md"
                  fontSize="xs"
                  fontFamily="mono"
                  fontWeight="bold"
                  cursor="pointer"
                  onClick={onOpen}
                  _hover={{ bg: "orange.600" }}
                >
                  🔓 Unlock Full Data
                </Box>
              </Box>
            </SimpleGrid>

            {/* Negotiation Opportunities */}
            <Box>
              <VStack spacing={4} align="stretch">
                <HStack spacing={2}>
                  <Text
                    as="span"
                    color="brand.auroraPurple"
                    fontSize="xs"
                    px={2}
                    py={1}
                    bg="rgba(139, 92, 246, 0.1)"
                    borderRadius="md"
                    border="1px solid"
                    borderColor="brand.auroraPurple"
                    fontFamily="mono"
                    fontWeight="bold"
                  >
                    NEGO-001
                  </Text>
                  <Text
                    color="brand.deepText"
                    fontFamily="mono"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    Strategic Negotiation Opportunities
                  </Text>
                </HStack>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                  {assessmentData?.negotiationOpportunities.map((opportunity, index) => (
                    <TeaserCard
                      key={index}
                      title={opportunity.title}
                      description={opportunity.description}
                      impact={opportunity.impact}
                      priority={opportunity.priority}
                      isBlurred={index > 0}
                      onUpgrade={onOpen}
                    />
                  ))}
                </SimpleGrid>
              </VStack>
            </Box>

            {/* Risk Assessment Panel */}
            <Box
              bg="rgba(255, 255, 255, 0.95)"
              backdropFilter="blur(10px)"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              p={6}
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
              position="relative"
            >
              <VStack spacing={4} align="stretch">
                <HStack spacing={2}>
                  <Text
                    as="span"
                    color="brand.lunarGreen"
                    fontSize="xs"
                    px={2}
                    py={1}
                    bg="rgba(126, 217, 87, 0.1)"
                    borderRadius="md"
                    border="1px solid"
                    borderColor="brand.lunarGreen"
                    fontFamily="mono"
                    fontWeight="bold"
                  >
                    RISK-001
                  </Text>
                  <Text
                    color="brand.deepText"
                    fontFamily="mono"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    Mission Risk Assessment
                  </Text>
                </HStack>
                
                <HStack spacing={4}>
                  <VStack align="start">
                    <Text fontFamily="mono" fontSize="3xl" fontWeight="bold" color="brand.lunarGreen">
                      {assessmentData?.riskAssessment.score}/10
                    </Text>
                    <Text fontFamily="mono" fontSize="sm" color="brand.lightGray">
                      Success Probability
                    </Text>
                  </VStack>
                  
                  <Box flex={1} filter="blur(1px)" opacity={0.7}>
                    <VStack align="start" spacing={1}>
                      {assessmentData?.riskAssessment.factors.slice(0, 2).map((factor, index) => (
                        <Text key={index} fontFamily="mono" fontSize="sm" color="brand.deepText">
                          • {factor}
                        </Text>
                      ))}
                      <Text fontFamily="mono" fontSize="sm" color="brand.lightGray">
                        • And 3 more factors...
                      </Text>
                    </VStack>
                  </Box>
                </HStack>
              </VStack>
              
              {/* Mission Control Access overlay */}
              <Box
                position="absolute"
                top={4}
                right={4}
                bg="rgba(22, 76, 255, 0.1)"
                borderRadius="md"
                p={3}
                border="1px solid"
                borderColor="brand.electricBlue"
              >
                <Text fontFamily="mono" fontSize="xs" color="brand.electricBlue" fontWeight="bold">
                  🔒 Mission Control Access Required
                </Text>
              </Box>
            </Box>

            {/* Value Proposition Section */}
            <Box
              bg="linear-gradient(135deg, rgba(22, 76, 255, 0.05) 0%, rgba(255, 165, 0, 0.05) 100%)"
              borderRadius="xl"
              border="1px solid"
              borderColor="rgba(22, 76, 255, 0.2)"
              p={8}
              textAlign="center"
            >
              <VStack spacing={6}>
                <VStack spacing={2}>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    fontFamily="heading"
                    color="brand.deepText"
                  >
                    🚀 Ready for Mission Control?
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="brand.lightGray"
                    maxW="600px"
                    fontFamily="mono"
                  >
                    Unlock your complete negotiation intelligence and tactical recommendations
                  </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full" maxW="800px">
                  <Box
                    bg="rgba(255, 255, 255, 0.8)"
                    borderRadius="lg"
                    p={4}
                    border="1px solid"
                    borderColor="gray.200"
                  >
                    <VStack spacing={3}>
                      <Text fontFamily="mono" fontWeight="bold" color="brand.deepText">
                        🆓 Explorer Access
                      </Text>
                      <VStack spacing={1} fontSize="sm" fontFamily="mono" color="brand.lightGray">
                        <Text>• Basic market positioning</Text>
                        <Text>• Limited opportunity preview</Text>
                        <Text>• General risk overview</Text>
                      </VStack>
                    </VStack>
                  </Box>

                  <Box
                    bg="rgba(255, 165, 0, 0.1)"
                    borderRadius="lg"
                    p={4}
                    border="2px solid"
                    borderColor="brand.cosmicOrange"
                  >
                    <VStack spacing={3}>
                      <Text fontFamily="mono" fontWeight="bold" color="brand.cosmicOrange">
                        🚀 Commander Access
                      </Text>
                      <VStack spacing={1} fontSize="sm" fontFamily="mono" color="brand.deepText">
                        <Text>• Complete market analysis</Text>
                        <Text>• Detailed negotiation scripts</Text>
                        <Text>• Risk mitigation strategies</Text>
                        <Text>• Personalized tactics</Text>
                      </VStack>
                    </VStack>
                  </Box>
                </SimpleGrid>

                <RocketButton
                  variant="accent"
                  size="lg"
                  onClick={onOpen}
                  leftIcon={<Text>🚀</Text>}
                >
                  Unlock Full Intelligence - $99/year
                </RocketButton>
              </VStack>
            </Box>
          </VStack>
        </motion.div>
      </AnimatePresence>

      <UpgradeModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
}
