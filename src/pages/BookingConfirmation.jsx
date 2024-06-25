import React from "react";
import { Box, VStack, Heading, Text, Button, useToast } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  // Retrieve booking details from location state
  const { departureLocation, arrivalLocation, departureDate, returnDate, passengers } = location.state || {};

  const handleConfirm = () => {
    // Here you would typically send a request to your backend to confirm the booking
    // For now, we'll just show a success message
    toast({
      title: "Booking Confirmed",
      description: "Your flight has been successfully booked!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Navigate back to the home page
    navigate("/");
  };

  return (
    <Box bgGradient="linear(to-r, blue.400, purple.500)" minHeight="100vh" py={10}>
      <Box maxWidth="500px" margin="auto" bg="white" p={8} borderRadius="lg" boxShadow="xl">
        <VStack spacing={6} align="stretch">
          <Heading textAlign="center" color="blue.600">Booking Confirmation</Heading>
          <Box textAlign="center">
            <FaCheckCircle size="50px" color="green" />
          </Box>
          <Text fontSize="lg" fontWeight="bold">Please confirm your booking details:</Text>
          <VStack align="start" spacing={2}>
            <Text>Departure: {departureLocation}</Text>
            <Text>Arrival: {arrivalLocation}</Text>
            <Text>Departure Date: {departureDate}</Text>
            <Text>Return Date: {returnDate}</Text>
            <Text>Passengers: {passengers}</Text>
          </VStack>
          <Button colorScheme="green" size="lg" onClick={handleConfirm}>
            Confirm Booking
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default BookingConfirmation;