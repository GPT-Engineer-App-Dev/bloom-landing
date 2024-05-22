import { Container, Box, VStack, HStack, Text, Button, Heading, Image, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaHeart, FaRocket, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header Section */}
      <Box as="header" w="100%" py={4} borderBottom="1px solid #eaeaea">
        <HStack justifyContent="space-between">
          <Heading as="h1" size="lg" color="teal.500">
            Flowerly
          </Heading>
          <Button colorScheme="teal" variant="outline" leftIcon={<FaHeart />}>
            Get Started
          </Button>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box as="section" w="100%" py={16} textAlign="center">
        <VStack spacing={6}>
          <Heading as="h2" size="2xl" color="teal.600">
            Send Love with Beautiful Flowers
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Perfect for Valentine's Day, Anniversaries, and Special Occasions
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Order Now
          </Button>
          <Image src="https://images.unsplash.com/photo-1531120364508-a6b656c3e78d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBib3VxdWV0JTIwb2YlMjBmbG93ZXJzfGVufDB8fHx8MTcxNjM4NjIxMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Beautiful bouquet of flowers" borderRadius="md" boxShadow="lg" />
        </VStack>
      </Box>

      {/* Features Section */}
      <Box as="section" w="100%" py={16} bg="gray.50">
        <VStack spacing={8}>
          <Heading as="h3" size="xl" color="teal.600">
            Why Choose Flowerly?
          </Heading>
          <HStack spacing={8} justifyContent="center">
            <Box textAlign="center" maxW="sm">
              <Image src="https://images.unsplash.com/photo-1615463366922-26e1f34b56ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZsb3dlcnN8ZW58MHx8fHwxNzE2Mzg2MjExfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fresh Flowers" borderRadius="md" boxShadow="md" />
              <Text fontSize="lg" fontWeight="bold" mt={4}>
                Fresh Flowers
              </Text>
              <Text color="gray.600">We source the freshest flowers to ensure your bouquet lasts longer.</Text>
            </Box>
            <Box textAlign="center" maxW="sm">
              <Image src="https://images.unsplash.com/photo-1548695607-9c73430ba065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXN0JTIwZGVsaXZlcnl8ZW58MHx8fHwxNzE2Mzg2MjEyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fast Delivery" borderRadius="md" boxShadow="md" />
              <Text fontSize="lg" fontWeight="bold" mt={4}>
                Fast Delivery
              </Text>
              <Text color="gray.600">Get your flowers delivered on the same day with our express service.</Text>
            </Box>
            <Box textAlign="center" maxW="sm">
              <Image src="https://images.unsplash.com/photo-1529635436167-b1c4784d7168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21pemFibGUlMjBib3VxdWV0c3xlbnwwfHx8fDE3MTYzODYyMTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Customizable Bouquets" borderRadius="md" boxShadow="md" />
              <Text fontSize="lg" fontWeight="bold" mt={4}>
                Customizable Bouquets
              </Text>
              <Text color="gray.600">Personalize your bouquet to make it truly special for your loved one.</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>

      {/* Subscription Section */}
      <Box as="section" w="100%" py={16} textAlign="center">
        <VStack spacing={6}>
          <Heading as="h3" size="xl" color="teal.600">
            Stay Updated
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Subscribe to our newsletter for the latest updates and special offers.
          </Text>
          <InputGroup size="lg" maxW="md">
            <Input placeholder="Enter your email" />
            <InputRightElement>
              <IconButton aria-label="Subscribe" icon={<FaEnvelope />} colorScheme="teal" />
            </InputRightElement>
          </InputGroup>
        </VStack>
      </Box>

      {/* Footer Section */}
      <Box as="footer" w="100%" py={4} borderTop="1px solid #eaeaea" textAlign="center">
        <Text fontSize="sm" color="gray.500">
          &copy; {new Date().getFullYear()} Flowerly. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
