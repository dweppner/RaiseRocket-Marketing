'use client';

import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  IconButton,
  useDisclosure,
  VStack,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Menu, Rocket } from 'lucide-react';
import { RocketButton } from '@/components/ui/RocketButton';

const navItems = [
  { name: 'Launch', href: '#launch' },
  { name: 'Mission Control', href: '#features' },
  { name: 'Trajectory', href: '#pricing' },
  { name: 'Offer Upload', href: '/offer-upload' },
  { name: 'Assessment', href: '/offer-assessment' },
  { name: 'Contact Base', href: '#contact' }
];

export const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={100}
      backdropFilter="blur(20px)"
      bg="rgba(248, 250, 252, 0.8)"
      borderBottom="1px solid"
      borderColor="rgba(113, 128, 150, 0.2)"
    >
      <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Flex alignItems="center" gap={3}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Rocket size={24} color="#164CFF" />
              </motion.div>
              <Text
                fontSize="xl"
                fontWeight="bold"
                fontFamily="heading"
                bgGradient="linear(to-r, brand.electricBlue, brand.auroraPurple)"
                bgClip="text"
              >
                RaiseRocket
              </Text>
            </Flex>
          </motion.div>

          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  color="brand.deepText"
                  _hover={{
                    color: 'brand.electricBlue',
                    textDecoration: 'none'
                  }}
                  transition="color 0.2s ease"
                  fontWeight="medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </HStack>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <HStack gap={4}>
              <RocketButton
                variant="secondary"
                size="sm"
                display={{ base: 'none', md: 'flex' }}
                as="a"
                href="/offer-upload"
              >
                Begin Mission
              </RocketButton>
              
              <IconButton
                aria-label="Open menu"
                icon={<Menu />}
                variant="ghost"
                color="brand.deepText"
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
              />
            </HStack>
          </motion.div>
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay backdropFilter="blur(10px)" />
        <DrawerContent bg="brand.lightSpace" borderLeft="1px solid" borderColor="rgba(113, 128, 150, 0.2)">
          <DrawerCloseButton color="brand.deepText" />
          <DrawerHeader color="brand.deepText" fontFamily="heading">
            Mission Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack gap={6} align="stretch">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    color="brand.deepText"
                    fontSize="lg"
                    fontWeight="medium"
                    _hover={{
                      color: 'brand.electricBlue',
                      textDecoration: 'none'
                    }}
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <RocketButton 
                variant="primary" 
                width="full" 
                mt={4}
                as="a"
                href="/offer-upload"
              >
                Begin Mission
              </RocketButton>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};