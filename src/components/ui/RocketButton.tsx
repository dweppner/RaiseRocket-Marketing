'use client';

import { Button, ButtonProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface RocketButtonProps extends Omit<ButtonProps, 'leftIcon'> {
  variant?: 'primary' | 'secondary' | 'accent';
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const RocketButton = forwardRef<HTMLButtonElement, RocketButtonProps>(
  ({ variant = 'primary', leftIcon, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
      >
        <Button
          ref={ref}
          variant={variant}
          fontFamily="heading"
          fontWeight="bold"
          borderRadius="md"
          px={6}
          py={3}
          position="relative"
          overflow="hidden"
          transition="all 0.2s ease-in-out"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: 'left 0.5s ease'
          }}
          _hover={{
            _before: {
              left: '100%'
            }
          }}
          leftIcon={leftIcon as React.ReactElement}
          {...props}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.span>
        </Button>
      </motion.div>
    );
  }
);

RocketButton.displayName = 'RocketButton';