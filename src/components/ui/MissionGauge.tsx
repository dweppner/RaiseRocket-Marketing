'use client';

import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MissionGaugeProps {
  value: number; // 0-100
  title?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export const MissionGauge = ({ 
  value, 
  title = "Mission Parameter",
  subtitle = "Current status",
  size = 'md',
  showValue = true
}: MissionGaugeProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  const sizeMap = {
    sm: { container: 120, strokeWidth: 8, fontSize: 'lg' },
    md: { container: 160, strokeWidth: 12, fontSize: 'xl' },
    lg: { container: 200, strokeWidth: 16, fontSize: '2xl' }
  };

  const dimensions = sizeMap[size];
  const radius = (dimensions.container - dimensions.strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedValue / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  const getColorByValue = (val: number) => {
    if (val >= 80) return { primary: '#7ED957', secondary: 'rgba(126, 217, 87, 0.2)' };
    if (val >= 60) return { primary: '#FFA500', secondary: 'rgba(255, 165, 0, 0.2)' };
    if (val >= 40) return { primary: '#164CFF', secondary: 'rgba(22, 76, 255, 0.2)' };
    return { primary: '#8B5CF6', secondary: 'rgba(139, 92, 246, 0.2)' };
  };

  const colors = getColorByValue(value);

  const getStatusText = (val: number) => {
    if (val >= 80) return { text: "EXCELLENT", color: "#7ED957" };
    if (val >= 60) return { text: "GOOD", color: "#FFA500" };
    if (val >= 40) return { text: "FAIR", color: "#164CFF" };
    return { text: "BELOW MARKET", color: "#8B5CF6" };
  };

  const status = getStatusText(value);

  return (
    <VStack spacing={4} align="center">
      <Box position="relative" width={dimensions.container} height={dimensions.container}>
        {/* Background circle */}
        <svg
          width={dimensions.container}
          height={dimensions.container}
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <circle
            cx={dimensions.container / 2}
            cy={dimensions.container / 2}
            r={radius}
            fill="none"
            stroke="rgba(0, 0, 0, 0.1)"
            strokeWidth={dimensions.strokeWidth}
            strokeLinecap="round"
          />
        </svg>

        {/* Animated gauge fill */}
        <motion.svg
          width={dimensions.container}
          height={dimensions.container}
          style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.circle
            cx={dimensions.container / 2}
            cy={dimensions.container / 2}
            r={radius}
            fill="none"
            stroke={colors.primary}
            strokeWidth={dimensions.strokeWidth}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              delay: 0.5
            }}
            style={{
              filter: `drop-shadow(0 0 8px ${colors.primary})`,
            }}
          />
        </motion.svg>

        {/* Glow effect */}
        <motion.svg
          width={dimensions.container}
          height={dimensions.container}
          style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.circle
            cx={dimensions.container / 2}
            cy={dimensions.container / 2}
            r={radius + 4}
            fill="none"
            stroke={colors.secondary}
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            animate={{ strokeDashoffset }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              delay: 0.5
            }}
          />
        </motion.svg>

        {/* Center content */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          {showValue && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Text
                fontSize={dimensions.fontSize}
                fontWeight="bold"
                fontFamily="mono"
                color={colors.primary}
                lineHeight="1"
              >
                {Math.round(animatedValue)}
              </Text>
              <Text
                fontSize="xs"
                fontFamily="mono"
                color="brand.lightGray"
                mt={-1}
              >
                PERCENTILE
              </Text>
            </motion.div>
          )}
        </Box>

        {/* Orbital indicators */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, index) => (
          <motion.div
            key={angle}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius + 8}px)`,
              width: 2,
              height: 6,
              background: index % 3 === 0 ? colors.primary : 'rgba(0, 0, 0, 0.2)',
              borderRadius: '1px'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3, 
              delay: 1.2 + (index * 0.05)
            }}
          />
        ))}

        {/* Floating particles */}
        {[0, 72, 144, 216, 288].map((angle, index) => (
          <motion.div
            key={`particle-${angle}`}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius + 20}px)`,
              width: 3,
              height: 3,
              background: colors.primary,
              borderRadius: '50%',
              boxShadow: `0 0 6px ${colors.primary}`
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1.5 + (index * 0.3),
              ease: "easeInOut"
            }}
          />
        ))}
      </Box>

      {/* Status and details */}
      <VStack spacing={2} textAlign="center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Text
            fontFamily="mono"
            fontWeight="bold"
            fontSize="lg"
            color="brand.deepText"
          >
            {title}
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <HStack spacing={2} justify="center">
            <Box
              w={2}
              h={2}
              bg={status.color}
              borderRadius="50%"
              boxShadow={`0 0 4px ${status.color}`}
            />
            <Text
              fontFamily="mono"
              fontSize="sm"
              color={status.color}
              fontWeight="bold"
            >
              {status.text}
            </Text>
          </HStack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        >
          <Text
            fontFamily="mono"
            fontSize="xs"
            color="brand.lightGray"
            textAlign="center"
            maxW="200px"
          >
            {subtitle}
          </Text>
        </motion.div>
      </VStack>
    </VStack>
  );
};
