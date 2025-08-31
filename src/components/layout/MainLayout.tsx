'use client';

import { Box, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Navigation } from './Navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box 
      position="relative" 
      minH="100vh" 
      bg="brand.lightSpace"
      backgroundImage="linear-gradient(135deg, #F8FAFC 0%, #EDF2F7 50%, #F8FAFC 100%)"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: 'relative', zIndex: 10 }}
      >
        <Navigation />
        
        <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }}>
          <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            {children}
          </motion.main>
        </Container>
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(22, 76, 255, 0.03) 0%, transparent 50%)',
          zIndex: 1
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
    </Box>
  );
};