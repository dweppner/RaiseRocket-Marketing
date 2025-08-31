'use client';

import { useState } from 'react';
import { Container, VStack, HStack, Box, Text, Button } from '@chakra-ui/react';

export default function OfferUploadPage() {
  const [offerDetails, setOfferDetails] = useState('');
  const [activeTab, setActiveTab] = useState('manual'); // 'upload' or 'manual'
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeTab === 'manual' && offerDetails.trim().length < 20) {
      alert('Please provide at least 20 characters of offer details');
      return;
    }
    
    if (activeTab === 'upload' && !uploadedFile) {
      alert('Please upload a file first');
      return;
    }
    
    const finalData = activeTab === 'manual' 
      ? { offerDetails, method: 'manual' }
      : { fileName: uploadedFile?.name, method: 'upload' };
      
    localStorage.setItem('missionParameters', JSON.stringify(finalData));
    
    // Redirect to assessment page
    window.location.href = '/offer-assessment';
  };

  const handleSave = () => {
    const currentData = activeTab === 'manual' 
      ? { offerDetails, method: 'manual' }
      : { fileName: uploadedFile?.name, method: 'upload' };
      
    localStorage.setItem('missionParameters', JSON.stringify(currentData));
    alert('Progress saved!');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <Container maxW="1200px" py={{ base: 12, md: 24 }} px={{ base: 4, md: 8 }}>
      <VStack spacing={8} align="stretch">
        
        {/* Header */}
        <VStack spacing={4} textAlign="center">
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            fontFamily="heading"
            color="brand.deepText"
          >
            🚀 Mission Parameters Input
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="brand.lightGray"
            maxW="600px"
            fontFamily="mono"
          >
            Upload your offer document or enter details manually to configure your salary negotiation mission.
          </Text>
        </VStack>

        {/* Tab Navigation */}
        <HStack spacing={2} justify="center">
          <Button
            onClick={() => setActiveTab('upload')}
            variant={activeTab === 'upload' ? 'solid' : 'outline'}
            bg={activeTab === 'upload' ? 'brand.electricBlue' : 'transparent'}
            color={activeTab === 'upload' ? 'white' : 'brand.electricBlue'}
            borderColor="brand.electricBlue"
            fontFamily="mono"
            size="lg"
            _hover={{
              bg: activeTab === 'upload' ? 'blue.600' : 'rgba(22, 76, 255, 0.05)'
            }}
          >
            📄 Upload Document
          </Button>
          <Button
            onClick={() => setActiveTab('manual')}
            variant={activeTab === 'manual' ? 'solid' : 'outline'}
            bg={activeTab === 'manual' ? 'brand.electricBlue' : 'transparent'}
            color={activeTab === 'manual' ? 'white' : 'brand.electricBlue'}
            borderColor="brand.electricBlue"
            fontFamily="mono"
            size="lg"
            _hover={{
              bg: activeTab === 'manual' ? 'blue.600' : 'rgba(22, 76, 255, 0.05)'
            }}
          >
            ✏️ Manual Entry
          </Button>
        </HStack>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            
            {/* Card Container */}
            <Box
              bg="rgba(255, 255, 255, 0.95)"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              p={8}
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
            >
              {activeTab === 'upload' ? (
                // File Upload Tab
                <VStack spacing={6} align="stretch">
                  <HStack spacing={2} mb={2}>
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
                      UPLOAD-001
                    </Text>
                    <Text
                      color="brand.deepText"
                      fontFamily="mono"
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      Mission Brief Upload
                    </Text>
                  </HStack>

                  {!uploadedFile ? (
                    <Box
                      border="2px dashed"
                      borderColor="gray.300"
                      borderRadius="xl"
                      p={12}
                      textAlign="center"
                      bg="rgba(0, 0, 0, 0.02)"
                      _hover={{
                        borderColor: 'brand.electricBlue',
                        bg: 'rgba(22, 76, 255, 0.05)'
                      }}
                      transition="all 0.2s ease"
                      position="relative"
                      cursor="pointer"
                    >
                      <VStack spacing={4}>
                        <Text fontSize="4xl">📄</Text>
                        <VStack spacing={2}>
                          <Text fontFamily="mono" fontWeight="bold" color="brand.deepText">
                            Drop your offer document here
                          </Text>
                          <Text fontFamily="mono" fontSize="sm" color="brand.lightGray">
                            or click to browse files
                          </Text>
                          <HStack spacing={2}>
                            <Text
                              fontFamily="mono"
                              fontSize="xs"
                              px={2}
                              py={1}
                              bg="brand.electricBlue"
                              color="white"
                              borderRadius="md"
                            >
                              PDF
                            </Text>
                            <Text
                              fontFamily="mono"
                              fontSize="xs"
                              px={2}
                              py={1}
                              bg="brand.electricBlue"
                              color="white"
                              borderRadius="md"
                            >
                              DOC
                            </Text>
                            <Text
                              fontFamily="mono"
                              fontSize="xs"
                              px={2}
                              py={1}
                              bg="brand.electricBlue"
                              color="white"
                              borderRadius="md"
                            >
                              DOCX
                            </Text>
                          </HStack>
                        </VStack>
                      </VStack>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: 0,
                          cursor: 'pointer'
                        }}
                      />
                    </Box>
                  ) : (
                    <Box
                      border="2px solid"
                      borderColor="brand.lunarGreen"
                      borderRadius="xl"
                      p={8}
                      textAlign="center"
                      bg="rgba(126, 217, 87, 0.05)"
                    >
                      <VStack spacing={4}>
                        <Text fontSize="4xl">✅</Text>
                        <VStack spacing={2}>
                          <Text fontFamily="mono" fontWeight="bold" color="brand.lunarGreen">
                            FILE UPLOADED SUCCESSFULLY
                          </Text>
                          <Text fontFamily="mono" fontSize="sm" color="brand.deepText">
                            {uploadedFile.name}
                          </Text>
                        </VStack>
                        <Button
                          size="sm"
                          variant="outline"
                          colorScheme="red"
                          onClick={removeFile}
                        >
                          🗑️ Remove File
                        </Button>
                      </VStack>
                    </Box>
                  )}
                </VStack>
              ) : (
                // Manual Entry Tab
                <VStack spacing={6} align="stretch">
                  <HStack spacing={2} mb={2}>
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
                      OFFER-001
                    </Text>
                    <Text
                      color="brand.deepText"
                      fontFamily="mono"
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      Complete Offer Details
                    </Text>
                  </HStack>
                  
                  {/* Textarea - keeping as plain HTML */}
                  <textarea
                    value={offerDetails}
                    onChange={(e) => setOfferDetails(e.target.value)}
                    placeholder="Enter all your offer information here, including:

• Company name and job title
• Base salary (e.g., $120,000 per year)
• Bonus information (e.g., 15% annual bonus)
• Stock/equity details (e.g., $50,000 in RSUs)
• Benefits (health insurance, 401k, PTO, etc.)
• Start date
• Location (remote, hybrid, or office location)
• Any other important details about the offer

Example:
Software Engineer position at TechCorp
Base salary: $120,000
Annual bonus: 15% of base salary
Stock options: $30,000 worth vesting over 4 years
Benefits: Full health/dental, 401k with 4% match, 3 weeks PTO
Start date: March 1st, 2024
Location: San Francisco, CA (hybrid - 3 days in office)
Reports to: Engineering Manager Sarah Johnson"
                    rows={20}
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '14px',
                      fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(0, 0, 0, 0.02)',
                      color: '#2D3748',
                      resize: 'vertical',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      lineHeight: '1.5'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#164CFF';
                      e.target.style.boxShadow = '0 0 0 1px #164CFF';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E2E8F0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />

                  {/* Mission Tip */}
                  <Box 
                    p={4} 
                    bg="rgba(22, 76, 255, 0.05)" 
                    borderRadius="lg" 
                    border="1px solid"
                    borderColor="rgba(22, 76, 255, 0.2)"
                  >
                    <HStack spacing={3}>
                      <Text fontSize="lg">🚀</Text>
                      <VStack spacing={1} align="start">
                        <Text fontFamily="mono" fontSize="sm" fontWeight="bold" color="brand.electricBlue">
                          Mission Tip
                        </Text>
                        <Text fontFamily="mono" fontSize="xs" color="brand.lightGray">
                          Include as much detail as possible. The more information you provide, the better our AI can analyze your offer and create a winning negotiation strategy.
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                </VStack>
              )}
            </Box>

            {/* Action Buttons */}
            <HStack spacing={4} justify="flex-end" pt={6}>
              <Button
                variant="outline"
                onClick={handleSave}
                fontFamily="mono"
                size={{ base: "md", md: "lg" }}
                borderColor="brand.electricBlue"
                color="brand.electricBlue"
                _hover={{
                  bg: 'rgba(22, 76, 255, 0.05)',
                  borderColor: 'brand.electricBlue'
                }}
              >
                💾 Save Progress
              </Button>
              
              <Button
                type="submit"
                bg="brand.electricBlue"
                color="white"
                size={{ base: "md", md: "lg" }}
                fontFamily="mono"
                isDisabled={
                  (activeTab === 'manual' && offerDetails.trim().length < 20) ||
                  (activeTab === 'upload' && !uploadedFile)
                }
                px={{ base: 6, md: 8 }}
                _hover={{
                  bg: 'blue.600'
                }}
                _disabled={{
                  opacity: 0.6,
                  cursor: 'not-allowed'
                }}
              >
                🚀 Proceed to Mission Analysis
              </Button>
            </HStack>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
}