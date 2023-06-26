import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FoodOrderingHelp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [conversation, setConversation] = useState([]);
    const [orderDetails, setOrderDetails] = useState(null);

    const questions = [
        {
            question: 'How can I help you with your food order?',
            options: [
                'Payment options',
                'Delivery inquiries',
                'Menu and customization',
                'Other questions'
            ]
        },
        {
            question: 'Please select a specific topic:',
            options: [
                'Payment methods',
                'Refunds and cancellations',
                'Delivery tracking',
                'Missing items',
                'Allergies and dietary restrictions',
                'Other topics'
            ]
        }
    ];

    const handleOptionSelect = (option) => {
        const selectedQuestion = questions[currentQuestion];
        const updatedConversation = [...conversation, { question: selectedQuestion.question, answer: option }];

        if (currentQuestion === questions.length - 1) {
            const selectedTopic = conversation[1].answer;

            processRequest(selectedTopic)
                .then((response) => {
                    setOrderDetails(response);
                })
                .catch((error) => {
                    console.log('Error processing request:', error);
                });
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setConversation(updatedConversation);
        }
    };

    const processRequest = (topic) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = {
                    topic,
                    orderId: '12345',
                    details: 'Here are the details for your request'
                };
                resolve(response);
            }, 2000);
        });
    };

    return (
        <View style={{ flex: 1 }}>
            {orderDetails ? (
                <View>
                    <Text>Here is the response to your request:</Text>
                    <Text>Topic: {orderDetails.topic}</Text>
                    <Text>Details: {orderDetails.details}</Text>
                    {orderDetails.orderId && (
                        <Text>Order ID: {orderDetails.orderId}</Text>
                    )}
                </View>
            ) : (
                <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
                    <Text style={{ fontSize: 16, color: "black", fontWeight: "500" }}>{questions[currentQuestion].question}</Text>
                    {questions[currentQuestion].options.map((option, index) => (
                        <TouchableOpacity key={index} onPress={() => handleOptionSelect(option)}>
                            <Text style={{color:'black'}}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

export default FoodOrderingHelp;
