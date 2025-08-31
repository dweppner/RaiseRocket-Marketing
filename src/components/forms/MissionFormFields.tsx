'use client';

import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  CheckboxGroup,
  Stack,
  Text,
  Box,
  HStack,
  VStack,
  InputGroup,
  InputLeftElement,
  Textarea,
  SimpleGrid
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { DollarSign, Calendar, MapPin, Briefcase, Building } from 'lucide-react';
import { MissionInput } from '@/components/ui/MissionInput';

interface MissionFieldProps {
  label: string;
  error?: string;
  missionCode?: string;
  isRequired?: boolean;
}

// Currency Input Component
interface MissionCurrencyInputProps extends MissionFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const MissionCurrencyInput = forwardRef<HTMLInputElement, MissionCurrencyInputProps>(
  ({ label, error, missionCode, value, onChange, placeholder, isRequired, ...props }, ref) => {
    const formatCurrency = (val: string) => {
      const num = val.replace(/[^\d]/g, '');
      return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatCurrency(e.target.value);
      onChange(formatted);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <FormControl isInvalid={!!error} isRequired={isRequired}>
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
          
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <DollarSign size={16} color="#718096" />
            </InputLeftElement>
            <Input
              ref={ref}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              variant="mission"
              fontFamily="mono"
              fontSize="sm"
              h={14}
              borderRadius="md"
              pl={10}
              transition="all 0.2s ease"
              _focus={{
                borderColor: 'brand.electricBlue',
                boxShadow: '0 0 0 1px #164CFF, 0 0 20px rgba(22, 76, 255, 0.3)',
                bg: 'rgba(22, 76, 255, 0.02)',
                transform: 'scale(1.01)'
              }}
              {...props}
            />
          </InputGroup>
          
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
      </motion.div>
    );
  }
);

MissionCurrencyInput.displayName = 'MissionCurrencyInput';

// Date Input Component
interface MissionDateInputProps extends MissionFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export const MissionDateInput = forwardRef<HTMLInputElement, MissionDateInputProps>(
  ({ label, error, missionCode, value, onChange, isRequired, ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <FormControl isInvalid={!!error} isRequired={isRequired}>
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
          
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Calendar size={16} color="#718096" />
            </InputLeftElement>
            <Input
              ref={ref}
              type="date"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              variant="mission"
              fontFamily="mono"
              fontSize="sm"
              h={14}
              borderRadius="md"
              pl={10}
              transition="all 0.2s ease"
              _focus={{
                borderColor: 'brand.electricBlue',
                boxShadow: '0 0 0 1px #164CFF, 0 0 20px rgba(22, 76, 255, 0.3)',
                bg: 'rgba(22, 76, 255, 0.02)',
                transform: 'scale(1.01)'
              }}
              {...props}
            />
          </InputGroup>
          
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
      </motion.div>
    );
  }
);

MissionDateInput.displayName = 'MissionDateInput';

// Select Component
interface MissionSelectProps extends MissionFieldProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const MissionSelect = ({
  label,
  error,
  missionCode,
  value,
  onChange,
  options,
  placeholder,
  isRequired
}: MissionSelectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <FormControl isInvalid={!!error} isRequired={isRequired}>
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
        
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          variant="mission"
          fontFamily="mono"
          fontSize="sm"
          h={14}
          borderRadius="md"
          transition="all 0.2s ease"
          _focus={{
            borderColor: 'brand.electricBlue',
            boxShadow: '0 0 0 1px #164CFF, 0 0 20px rgba(22, 76, 255, 0.3)',
            bg: 'rgba(22, 76, 255, 0.02)',
            transform: 'scale(1.01)'
          }}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        
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
    </motion.div>
  );
};

// Checkbox Group Component
interface MissionCheckboxGroupProps extends MissionFieldProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: { value: string; label: string; description?: string }[];
}

export const MissionCheckboxGroup = ({
  label,
  error,
  missionCode,
  value,
  onChange,
  options,
  isRequired
}: MissionCheckboxGroupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <FormControl isInvalid={!!error} isRequired={isRequired}>
        <FormLabel
          color="brand.deepText"
          fontFamily="mono"
          fontSize="sm"
          fontWeight="bold"
          mb={4}
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
        
        <CheckboxGroup value={value} onChange={onChange}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
            {options.map((option) => (
              <Box
                key={option.value}
                p={3}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                transition="all 0.2s ease"
                _hover={{
                  borderColor: 'brand.electricBlue',
                  bg: 'rgba(22, 76, 255, 0.02)'
                }}
              >
                <Checkbox
                  value={option.value}
                  colorScheme="blue"
                  fontFamily="mono"
                  fontSize="sm"
                  spacing={3}
                >
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold" color="brand.deepText">
                      {option.label}
                    </Text>
                    {option.description && (
                      <Text fontSize="xs" color="brand.lightGray">
                        {option.description}
                      </Text>
                    )}
                  </VStack>
                </Checkbox>
              </Box>
            ))}
          </SimpleGrid>
        </CheckboxGroup>
        
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.2 }}
          >
            <Text
              color="red.400"
              fontSize="xs"
              mt={2}
              fontFamily="mono"
            >
              ERROR: {error}
            </Text>
          </motion.div>
        )}
      </FormControl>
    </motion.div>
  );
};

// Text Area Component
interface MissionTextAreaProps extends MissionFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

export const MissionTextArea = ({
  label,
  error,
  missionCode,
  value,
  onChange,
  placeholder,
  rows = 4,
  isRequired
}: MissionTextAreaProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <FormControl isInvalid={!!error} isRequired={isRequired}>
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
        
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          variant="mission"
          fontFamily="mono"
          fontSize="sm"
          borderRadius="md"
          transition="all 0.2s ease"
          _focus={{
            borderColor: 'brand.electricBlue',
            boxShadow: '0 0 0 1px #164CFF, 0 0 20px rgba(22, 76, 255, 0.3)',
            bg: 'rgba(22, 76, 255, 0.02)',
            transform: 'scale(1.01)'
          }}
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
    </motion.div>
  );
};
