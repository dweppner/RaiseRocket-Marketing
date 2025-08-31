'use client';

import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Progress,
  Icon,
  useToast,
  Spinner
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useState, useCallback } from 'react';
import { FileUploadState } from '@/types';

interface MissionFileUploadProps {
  onFileUpload: (file: File) => void;
  onFileRemove: () => void;
  uploadState: FileUploadState;
  acceptedTypes?: string[];
  maxSize?: number; // in bytes
}

export const MissionFileUpload = ({
  onFileUpload,
  onFileRemove,
  uploadState,
  acceptedTypes = ['.pdf', '.doc', '.docx'],
  maxSize = 10 * 1024 * 1024 // 10MB
}: MissionFileUploadProps) => {
  const toast = useToast();
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      toast({
        title: "Mission Brief Upload Failed",
        description: `Invalid file type or size. Please use ${acceptedTypes.join(', ')} files under ${Math.round(maxSize / 1024 / 1024)}MB.`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload, acceptedTypes, maxSize, toast]);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxSize,
    multiple: false,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false)
  });

  const MotionBox = motion(Box);

  const getBorderColor = () => {
    if (uploadState.uploaded) return 'brand.lunarGreen';
    if (uploadState.error) return 'red.400';
    if (isDragAccept) return 'brand.electricBlue';
    if (isDragReject) return 'red.400';
    if (isDragActive) return 'brand.cosmicOrange';
    return 'gray.300';
  };

  const getBackgroundColor = () => {
    if (uploadState.uploaded) return 'rgba(126, 217, 87, 0.05)';
    if (uploadState.error) return 'rgba(239, 68, 68, 0.05)';
    if (isDragAccept) return 'rgba(22, 76, 255, 0.05)';
    if (isDragReject) return 'rgba(239, 68, 68, 0.05)';
    if (isDragActive) return 'rgba(255, 165, 0, 0.05)';
    return 'rgba(255, 255, 255, 0.95)';
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      mb={8}
    >
      <Text
        fontFamily="heading"
        fontWeight="bold"
        fontSize="xl"
        color="brand.deepText"
        mb={4}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <Icon as={FileText} color="brand.electricBlue" />
        Mission Brief Upload Terminal
      </Text>

      <MotionBox
        {...getRootProps()}
        p={8}
        border="2px dashed"
        borderColor={getBorderColor()}
        borderRadius="xl"
        bg={getBackgroundColor()}
        backdropFilter="blur(10px)"
        cursor="pointer"
        transition="all 0.3s ease"
        position="relative"
        overflow="hidden"
        minH="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{
          borderColor: uploadState.uploaded ? 'brand.lunarGreen' : 'brand.electricBlue',
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px rgba(22, 76, 255, 0.15)'
        }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <input {...getInputProps()} />
        
        <AnimatePresence mode="wait">
          {uploadState.uploading ? (
            <motion.div
              key="uploading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <VStack spacing={4}>
                <Spinner size="xl" color="brand.electricBlue" thickness="4px" />
                <Text fontFamily="mono" color="brand.electricBlue" fontWeight="bold">
                  UPLOADING MISSION BRIEF...
                </Text>
                <Box w="200px">
                  <Progress
                    value={uploadState.progress}
                    size="sm"
                    borderRadius="full"
                    bg="gray.200"
                    sx={{
                      '& > div': {
                        background: 'linear-gradient(90deg, #164CFF 0%, #8B5CF6 100%)',
                      }
                    }}
                  />
                </Box>
              </VStack>
            </motion.div>
          ) : uploadState.uploaded && uploadState.file ? (
            <motion.div
              key="uploaded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <VStack spacing={4}>
                <Icon as={CheckCircle} boxSize={12} color="brand.lunarGreen" />
                <VStack spacing={2}>
                  <Text fontFamily="mono" color="brand.lunarGreen" fontWeight="bold">
                    MISSION BRIEF UPLOADED
                  </Text>
                  <Text fontFamily="mono" fontSize="sm" color="brand.lightGray">
                    {uploadState.file.name}
                  </Text>
                </VStack>
                <Button
                  size="sm"
                  variant="outline"
                  colorScheme="red"
                  onClick={(e) => {
                    e.stopPropagation();
                    onFileRemove();
                  }}
                  leftIcon={<XCircle size={16} />}
                >
                  Remove File
                </Button>
              </VStack>
            </motion.div>
          ) : uploadState.error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <VStack spacing={4}>
                <Icon as={AlertCircle} boxSize={12} color="red.400" />
                <VStack spacing={2}>
                  <Text fontFamily="mono" color="red.400" fontWeight="bold">
                    UPLOAD FAILED
                  </Text>
                  <Text fontFamily="mono" fontSize="sm" color="brand.lightGray" textAlign="center">
                    {uploadState.error}
                  </Text>
                </VStack>
                <Button
                  size="sm"
                  variant="outline"
                  colorScheme="blue"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Reset error state would be handled by parent
                  }}
                >
                  Try Again
                </Button>
              </VStack>
            </motion.div>
          ) : (
            <motion.div
              key="upload"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <VStack spacing={4}>
                <motion.div
                  animate={{
                    y: isDragActive ? [-5, 5, -5] : 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isDragActive ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                >
                  <Icon 
                    as={Upload} 
                    boxSize={12} 
                    color={isDragActive ? "brand.electricBlue" : "brand.lightGray"} 
                  />
                </motion.div>
                <VStack spacing={2}>
                  <Text fontFamily="mono" color="brand.deepText" fontWeight="bold">
                    {isDragActive ? "DROP MISSION BRIEF HERE" : "DRAG & DROP MISSION BRIEF"}
                  </Text>
                  <Text fontFamily="mono" fontSize="sm" color="brand.lightGray">
                    or click to browse files
                  </Text>
                  <HStack spacing={2}>
                    {acceptedTypes.map((type) => (
                      <Text
                        key={type}
                        fontFamily="mono"
                        fontSize="xs"
                        px={2}
                        py={1}
                        bg="brand.electricBlue"
                        color="white"
                        borderRadius="md"
                      >
                        {type.toUpperCase()}
                      </Text>
                    ))}
                  </HStack>
                </VStack>
              </VStack>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scanning animation overlay */}
        <AnimatePresence>
          {isDragActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(22, 76, 255, 0.1) 50%, transparent 100%)',
                borderRadius: '12px',
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(22, 76, 255, 0.3) 50%, transparent 100%)',
                }}
                animate={{
                  left: ['100%', '-100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </MotionBox>
    </MotionBox>
  );
};
