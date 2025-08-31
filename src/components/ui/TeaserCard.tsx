'use client';

import { Box, Text, VStack, HStack, Badge } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface TeaserCardProps {
  title: string;
  description: string;
  impact: string;
  priority: 'high' | 'medium' | 'low';
  isBlurred?: boolean;
  onUpgrade?: () => void;
}

export const TeaserCard = ({
  title,
  description,
  impact,
  priority,
  isBlurred = false,
  onUpgrade
}: TeaserCardProps) => {
  const priorityConfig = {
    high: { 
      color: '#7ED957', 
      bg: 'rgba(126, 217, 87, 0.1)', 
      border: 'rgba(126, 217, 87, 0.3)',
      label: 'HIGH PRIORITY'
    },
    medium: { 
      color: '#FFA500', 
      bg: 'rgba(255, 165, 0, 0.1)', 
      border: 'rgba(255, 165, 0, 0.3)',
      label: 'MEDIUM PRIORITY'
    },
    low: { 
      color: '#164CFF', 
      bg: 'rgba(22, 76, 255, 0.1)', 
      border: 'rgba(22, 76, 255, 0.3)',
      label: 'LOW PRIORITY'
    }
  };

  const config = priorityConfig[priority];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Box
        bg="rgba(255, 255, 255, 0.95)"
        backdropFilter="blur(10px)"
        borderRadius="xl"
        border="1px solid"
        borderColor="gray.200"
        p={6}
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
        position="relative"
        overflow="hidden"
        cursor={isBlurred ? "pointer" : "default"}
        onClick={isBlurred ? onUpgrade : undefined}
        transition="all 0.3s ease"
        _hover={isBlurred ? {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)"
        } : {}}
      >
        <VStack spacing={4} align="stretch" h="full">
          
          {/* Priority Badge */}
          <HStack justify="space-between" align="start">
            <Badge
              bg={config.bg}
              color={config.color}
              border="1px solid"
              borderColor={config.border}
              fontFamily="mono"
              fontSize="xs"
              fontWeight="bold"
              px={2}
              py={1}
              borderRadius="md"
            >
              {config.label}
            </Badge>
            
            {isBlurred && (
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Text
                  fontSize="xs"
                  fontFamily="mono"
                  color="brand.cosmicOrange"
                  fontWeight="bold"
                >
                  🔓 UNLOCK
                </Text>
              </motion.div>
            )}
          </HStack>

          {/* Content */}
          <Box 
            filter={isBlurred ? "blur(3px)" : "none"}
            opacity={isBlurred ? 0.6 : 1}
            transition="all 0.3s ease"
          >
            <VStack spacing={3} align="stretch">
              <Text
                fontFamily="mono"
                fontWeight="bold"
                fontSize="md"
                color="brand.deepText"
                lineHeight="1.2"
              >
                {title}
              </Text>
              
              <Text
                fontFamily="mono"
                fontSize="sm"
                color="brand.lightGray"
                lineHeight="1.4"
              >
                {description}
              </Text>
              
              <Box
                bg={config.bg}
                borderRadius="lg"
                p={3}
                border="1px solid"
                borderColor={config.border}
              >
                <HStack spacing={2}>
                  <Text
                    fontSize="xs"
                    fontFamily="mono"
                    color={config.color}
                    fontWeight="bold"
                  >
                    POTENTIAL IMPACT:
                  </Text>
                </HStack>
                <Text
                  fontFamily="mono"
                  fontWeight="bold"
                  fontSize="lg"
                  color={config.color}
                  mt={1}
                >
                  {impact}
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Unlock Overlay */}
          {isBlurred && (
            <motion.div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.95) 70%)',
                padding: '20px 24px 24px',
                borderRadius: '0 0 12px 12px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <VStack spacing={2}>
                <HStack spacing={2}>
                  <Box
                    w={3}
                    h={3}
                    bg="brand.cosmicOrange"
                    borderRadius="50%"
                    boxShadow="0 0 8px rgba(255, 165, 0, 0.5)"
                  />
                  <Text
                    fontFamily="mono"
                    fontSize="xs"
                    color="brand.cosmicOrange"
                    fontWeight="bold"
                  >
                    COMMANDER ACCESS REQUIRED
                  </Text>
                </HStack>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    bg="brand.cosmicOrange"
                    color="white"
                    px={4}
                    py={2}
                    borderRadius="md"
                    fontSize="xs"
                    fontFamily="mono"
                    fontWeight="bold"
                    textAlign="center"
                    cursor="pointer"
                    _hover={{
                      bg: "orange.600",
                      boxShadow: "0 4px 12px rgba(255, 165, 0, 0.3)"
                    }}
                    transition="all 0.2s ease"
                  >
                    🚀 UNLOCK DETAILS
                  </Box>
                </motion.div>
              </VStack>
            </motion.div>
          )}

          {/* Tactical indicators for unlocked cards */}
          {!isBlurred && (
            <HStack spacing={2} pt={2}>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Box
                  w={2}
                  h={2}
                  bg={config.color}
                  borderRadius="50%"
                  boxShadow={`0 0 6px ${config.color}`}
                />
              </motion.div>
              <Text
                fontSize="xs"
                fontFamily="mono"
                color={config.color}
                fontWeight="bold"
              >
                TACTICAL ANALYSIS AVAILABLE
              </Text>
            </HStack>
          )}
        </VStack>

        {/* Subtle background patterns */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          pointerEvents="none"
          opacity={0.03}
          backgroundImage={`radial-gradient(circle at 20% 30%, ${config.color} 1px, transparent 1px),
                           radial-gradient(circle at 80% 70%, ${config.color} 1px, transparent 1px)`}
          backgroundSize="40px 40px"
        />

        {/* Corner accent */}
        <Box
          position="absolute"
          top={0}
          right={0}
          w={8}
          h={8}
          background={`linear-gradient(135deg, ${config.color} 0%, transparent 70%)`}
          opacity={0.1}
        />
      </Box>
    </motion.div>
  );
};
