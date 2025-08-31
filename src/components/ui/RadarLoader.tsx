'use client';

import { Box, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface RadarLoaderProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const RadarLoader = ({ message = "Scanning trajectory...", size = 'md' }: RadarLoaderProps) => {
  const sizeMap = {
    sm: { container: 60, circle: 40 },
    md: { container: 120, circle: 80 },
    lg: { container: 180, circle: 120 }
  };

  const dimensions = sizeMap[size];

  return (
    <VStack gap={6}>
      <Box
        position="relative"
        width={dimensions.container}
        height={dimensions.container}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: dimensions.circle,
            height: dimensions.circle,
            border: '2px solid rgba(22, 76, 255, 0.3)',
            borderRadius: '50%'
          }}
        />
        
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: dimensions.circle * 0.7,
            height: dimensions.circle * 0.7,
            border: '1px solid rgba(126, 217, 87, 0.4)',
            borderRadius: '50%'
          }}
        />

        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transformOrigin: 'center',
            width: dimensions.circle,
            height: dimensions.circle,
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(22, 76, 255, 0.8) 60deg,
              transparent 120deg
            )`,
            borderRadius: '50%',
            filter: 'blur(1px)'
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 4,
            height: 4,
            background: '#7ED957',
            borderRadius: '50%',
            boxShadow: '0 0 10px #7ED957'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.6, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <motion.div
            key={angle}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${dimensions.circle / 2 - 8}px)`,
              width: 3,
              height: 3,
              background: '#8B5CF6',
              borderRadius: '50%'
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </Box>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Text
          color="brand.deepText"
          fontFamily="mono"
          fontSize="sm"
          textAlign="center"
          opacity={0.8}
        >
          {message}
        </Text>
      </motion.div>
    </VStack>
  );
};