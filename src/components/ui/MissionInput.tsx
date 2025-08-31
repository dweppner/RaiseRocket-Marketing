'use client';

import {
  FormControl,
  FormLabel,
  Input,
  InputProps,
  Text,
  Box
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface MissionInputProps extends InputProps {
  label?: string;
  error?: string;
  missionCode?: string;
}

export const MissionInput = forwardRef<HTMLInputElement, MissionInputProps>(
  ({ label, error, missionCode, ...props }, ref) => {
    const MotionBox = motion(Box);

    return (
      <MotionBox
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <FormControl isInvalid={!!error}>
          {label && (
            <FormLabel
              color="brand.deepText"
              fontFamily="mono"
              fontSize="sm"
              fontWeight="bold"
              mb={2}
              display="flex"
              alignItems="center"
              gap={2}
            >
              {missionCode && (
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
                >
                  {missionCode}
                </Text>
              )}
              {label}
            </FormLabel>
          )}
          
          <Input
            ref={ref}
            variant="mission"
            fontFamily="mono"
            fontSize="sm"
            h={12}
            borderRadius="md"
            transition="all 0.2s ease"
            _focus={{
              borderColor: 'brand.electricBlue',
              boxShadow: '0 0 0 1px #164CFF, 0 0 20px rgba(22, 76, 255, 0.3)',
              bg: 'rgba(22, 76, 255, 0.02)',
              transform: 'scale(1.01)'
            }}
            _hover={{
              borderColor: 'brand.electricBlue',
              bg: 'rgba(255, 255, 255, 0.08)'
            }}
            {...props}
          />
          
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.2 }}
            >
              <Text
                color="red.400"
                fontSize="xs"
                mt={1}
                fontFamily="mono"
              >
                ERROR: {error}
              </Text>
            </motion.div>
          )}
        </FormControl>
      </MotionBox>
    );
  }
);

MissionInput.displayName = 'MissionInput';