import React, { useState } from "react";
import { Box, Container, VStack, Heading, Text, Input, Button, Select, Image, useToast } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaSearch } from "react-icons/fa";

const Index = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const toast = useToast();

  const handleSearch = () => {
    if (!destination || !checkIn || !checkOut) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "Search initiated",
      description: `Searching for ${guests} guest(s) in ${destination} from ${checkIn} to ${checkOut}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box bgGradient="linear(to-r, blue.400, purple.500)" minHeight="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" color="white">
            <Heading as="h1" size="2xl" mb={2}>
              Dream Vacations
            </Heading>
            <Text fontSize="xl">Discover your perfect getaway</Text>
          </Box>

          <Box bg="white" p={8} borderRadius="lg" boxShadow="xl">
            <VStack spacing={4}>
              <Input
                placeholder="Where do you want to go?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                size="lg"
                leftIcon={<FaPlane />}
              />
              <Input
                type="date"
                placeholder="Check-in"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                size="lg"
              />
              <Input
                type="date"
                placeholder="Check-out"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                size="lg"
              />
              <Select
                placeholder="Guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                size="lg"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </Select>
              <Button
                leftIcon={<FaSearch />}
                colorScheme="blue"
                size="lg"
                width="full"
                onClick={handleSearch}
              >
                Search
              </Button>
            </VStack>
          </Box>

          <Box bg="white" p={8} borderRadius="lg" boxShadow="xl">
            <Heading as="h2" size="xl" mb={4} textAlign="center">
              Popular Destinations
            </Heading>
            <VStack spacing={4}>
              {["Paris", "Tokyo", "New York", "Bali"].map((city) => (
                <Box key={city} p={4} borderWidth={1} borderRadius="md" width="full">
                  <Text fontSize="lg" fontWeight="bold">
                    {city}
                  </Text>
                  <Text>Experience the magic of {city}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;