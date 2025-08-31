'use client';

import { Box, Text, VStack, HStack, Progress } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface RadarScannerProps {
  message?: string;
  progress?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const RadarScanner = ({ 
  message = "Scanning trajectory...", 
  progress = 0,
  size = 'lg' 
}: RadarScannerProps) => {
  const sizeMap = {
    sm: { container: 80, circle: 60 },
    md: { container: 140, circle: 100 },
    lg: { container: 200, circle: 150 }
  };

  const dimensions = sizeMap[size];

  return (
    <VStack spacing={8}>
      <Box
        position="relative"
        width={dimensions.container}
        height={dimensions.container}
      >
        {/* Outer radar ring */}
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
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Middle radar ring */}
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
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Inner radar ring */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: dimensions.circle * 0.4,
            height: dimensions.circle * 0.4,
            border: '1px solid rgba(255, 165, 0, 0.5)',
            borderRadius: '50%'
          }}
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Rotating sweep */}
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
              rgba(22, 76, 255, 0.8) 30deg,
              rgba(22, 76, 255, 0.4) 60deg,
              transparent 90deg
            )`,
            borderRadius: '50%',
            filter: 'blur(2px)'
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Secondary sweep */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transformOrigin: 'center',
            width: dimensions.circle * 0.7,
            height: dimensions.circle * 0.7,
            background: `conic-gradient(
              from 180deg,
              transparent 0deg,
              rgba(126, 217, 87, 0.6) 45deg,
              transparent 90deg
            )`,
            borderRadius: '50%',
            filter: 'blur(1px)'
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Central pulse */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 8,
            height: 8,
            background: '#7ED957',
            borderRadius: '50%',
            boxShadow: '0 0 20px #7ED957'
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [1, 0.3, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Radar blips */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <motion.div
            key={angle}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${dimensions.circle * 0.3}px)`,
              width: 4,
              height: 4,
              background: '#8B5CF6',
              borderRadius: '50%',
              boxShadow: '0 0 8px #8B5CF6'
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Data streams */}
        {[0, 120, 240].map((angle, index) => (
          <motion.div
            key={`stream-${angle}`}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              width: 2,
              height: dimensions.circle * 0.5,
              background: `linear-gradient(180deg, 
                transparent 0%, 
                rgba(255, 165, 0, 0.8) 20%, 
                rgba(255, 165, 0, 0.4) 50%, 
                transparent 100%
              )`,
              transformOrigin: 'bottom center'
            }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.7,
              ease: "easeInOut"
            }}
          />
        ))}
      </Box>

      {/* Status Display */}
      <VStack spacing={4} textAlign="center" maxW="400px">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Text
            color="brand.deepText"
            fontFamily="mono"
            fontSize={{ base: "sm", md: "md" }}
            textAlign="center"
            opacity={0.9}
            mb={2}
          >
            {message}
          </Text>
        </motion.div>

        {/* Progress indicators */}
        <VStack spacing={3} w="full">
          <HStack justify="space-between" w="full" fontSize="xs" fontFamily="mono">
            <Text color="brand.electricBlue" fontWeight="bold">
              SCANNING
            </Text>
            <Text color="brand.cosmicOrange" fontWeight="bold">
              {Math.round(progress)}% COMPLETE
            </Text>
          </HStack>
          
          <Box w="full" position="relative">
            <Progress
              value={progress}
              size="sm"
              borderRadius="full"
              bg="rgba(22, 76, 255, 0.1)"
              sx={{
                '& > div': {
                  background: 'linear-gradient(90deg, #164CFF 0%, #8B5CF6 50%, #FFA500 100%)',
                  boxShadow: '0 0 10px rgba(22, 76, 255, 0.3)',
                  borderRadius: 'full',
                }
              }}
            />
            
            {/* Animated scan line */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                height: '100%',
                width: '4px',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '2px',
                left: `${progress}%`,
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)'
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </Box>
        </VStack>

        {/* System indicators */}
        <HStack spacing={6} fontSize="xs" fontFamily="mono" opacity={0.7}>
          <HStack spacing={1}>
            <motion.div
              style={{
                width: 6,
                height: 6,
                background: '#7ED957',
                borderRadius: '50%'
              }}
              animate={{
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            />
            <Text color="brand.lunarGreen">SYSTEMS ONLINE</Text>
          </HStack>
          
          <HStack spacing={1}>
            <motion.div
              style={{
                width: 6,
                height: 6,
                background: '#164CFF',
                borderRadius: '50%'
              }}
              animate={{
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.5
              }}
            />
            <Text color="brand.electricBlue">DATA FLOW ACTIVE</Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
