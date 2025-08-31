'use client';

import { Box, Text, Progress, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Rocket, Zap } from 'lucide-react';

interface MissionProgressProps {
  progress: number;
  title?: string;
  subtitle?: string;
}

export const MissionProgress = ({ 
  progress, 
  title = "Mission Preparation", 
  subtitle = "Configuring trajectory parameters..." 
}: MissionProgressProps) => {
  const MotionBox = motion(Box);

  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      mb={8}
      p={6}
      bg="rgba(255, 255, 255, 0.95)"
      backdropFilter="blur(10px)"
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
    >
      <HStack mb={4} spacing={3}>
        <Box
          p={2}
          bg="brand.electricBlue"
          borderRadius="lg"
          color="white"
        >
          <Rocket size={20} />
        </Box>
        <Box flex={1}>
          <Text
            fontFamily="heading"
            fontWeight="bold"
            fontSize="lg"
            color="brand.deepText"
          >
            {title}
          </Text>
          <Text
            fontFamily="mono"
            fontSize="sm"
            color="brand.lightGray"
          >
            {subtitle}
          </Text>
        </Box>
        <HStack spacing={2}>
          <Zap size={16} color="#164CFF" />
          <Text
            fontFamily="mono"
            fontWeight="bold"
            fontSize="sm"
            color="brand.electricBlue"
          >
            {progress}% Complete
          </Text>
        </HStack>
      </HStack>

      <Box position="relative">
        <Progress
          value={progress}
          size="lg"
          borderRadius="full"
          bg="gray.100"
          transition="all 0.3s ease"
          sx={{
            '& > div': {
              background: 'linear-gradient(90deg, #164CFF 0%, #8B5CF6 50%, #FFA500 100%)',
              boxShadow: '0 0 20px rgba(22, 76, 255, 0.4)',
              borderRadius: 'full',
            }
          }}
        />
        
        {/* Animated glow effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent 0%, rgba(22, 76, 255, 0.3) 50%, transparent 100%)',
            borderRadius: '9999px',
            transform: `translateX(${progress - 50}%)`,
            opacity: 0.7,
          }}
          animate={{
            x: [`${progress - 60}%`, `${progress - 40}%`, `${progress - 60}%`],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </Box>
    </MotionBox>
  );
};
