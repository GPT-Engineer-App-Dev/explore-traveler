import React, { useState } from "react";
import { Box, Container, VStack, Heading, Text, Input, Button, Select, useToast } from "@chakra-ui/react";
import { FaPlane, FaPlaneArrival, FaCalendarAlt, FaSearch } from "react-icons/fa";

const Index = () => {
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const toast = useToast();

  const handleSearch = () => {
    if (!departureLocation || !arrivalLocation || !departureDate || !returnDate) {
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
      description: `Searching for ${passengers} passenger(s) from ${departureLocation} to ${arrivalLocation} departing on ${departureDate} and returning on ${returnDate}`,
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
              Flight Finder
            </Heading>
            <Text fontSize="xl">Discover your perfect flight</Text>
          </Box>

          <Box bg="white" p={8} borderRadius="lg" boxShadow="xl">
            <VStack spacing={4}>
              <Input
                placeholder="Departure Location"
                value={departureLocation}
                onChange={(e) => setDepartureLocation(e.target.value)}
                size="lg"
                leftIcon={<FaPlane />}
              />
              <Input
                placeholder="Arrival Location"
                value={arrivalLocation}
                onChange={(e) => setArrivalLocation(e.target.value)}
                size="lg"
                leftIcon={<FaPlaneArrival />}
              />
              <Input
                type="date"
                placeholder="Departure Date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                size="lg"
                leftIcon={<FaCalendarAlt />}
              />
              <Input
                type="date"
                placeholder="Return Date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                size="lg"
                leftIcon={<FaCalendarAlt />}
              />
              <Select
                placeholder="Passengers"
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                size="lg"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Passenger" : "Passengers"}
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
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;