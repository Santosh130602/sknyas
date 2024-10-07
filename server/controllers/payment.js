

const axios = require('axios');
const crypto = require('crypto');
const Transaction = require('../models/transition');  // Import Transaction model
const asyncHandler = require("express-async-handler")

function generateTransactionId() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000);
    const merchantPrefix = 'T';
    return `${merchantPrefix}${timestamp}${randomNum}`;
}


// Create Order Function
const createOrder = asyncHandler(async (req, res) => {
    try {
        const {
            userId,
            name,
            fatherName,
            motherName,
            DOB,
            gender,
            aadhar,
            contact,
            email,
            occupation,
            university,
            address,
            amount
        } = req.body;

        const merchantTransactionId = generateTransactionId();

        // Save the transaction to MongoDB with 'pending' status
        const newTransaction = new Transaction({
            merchantTransactionId,
            userId,
            name,
            fatherName,
            motherName,
            DOB,
            gender,
            aadhar,
            contact,
            email,
            occupation,
            university,
            address,
            amount
        });

        await newTransaction.save();  // Save the transaction to MongoDB

        const data = {
            merchantId: "PGTESTPAYUAT",
            merchantTransactionId,
            merchantUserId: userId,  // Link the transaction to the logged-in user
            name: name,
            amount: 100 * amount,  // Multiply by 100 to convert to smallest currency unit
            redirectUrl: "https://webhook.site/redirect-url",  // Redirect URL after payment
            redirectMode: 'POST',
            mobileNumber: contact,
            paymentInstrument: {
                type: "PAY_PAGE"
            }
        };

        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const key = process.env.PHONEPE_API_KEY;  // Store your API key in env
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

        const options = {
            method: 'POST',
            url: URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };

        axios
            .request(options)
            .then(function (response) {
                // Send the payment URL for redirection
                return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url);
            })
            .catch(function (error) {
                console.error(error);
                return res.status(500).send({
                    message: 'Error creating order',
                    error: error.message
                });
            });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
});




const checkPaymentStatus = asyncHandler(async (req, res) => {
    try {
        const { transactionId, merchantId } = req.body;
        const keyIndex = 1;
        const key = process.env.PHONEPE_API_KEY;  // Store your API key in env

        const string = `pg/v1/status/${merchantId}/${transactionId}` + key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const URL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`;

        const options = {
            method: 'GET',
            url: URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
                'X-MERCHANT-ID': merchantId
            }
        };

        axios
            .request(options)
            .then(async (response) => {
                const paymentStatus = response.data.data.status;

                // Update the transaction status in MongoDB
                await Transaction.findOneAndUpdate(
                    { merchantTransactionId: transactionId },
                    { status: paymentStatus.toLowerCase() }  // e.g., 'success' or 'failed'
                );

                res.status(200).send(response.data);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send({
                    message: 'Error checking payment status',
                    error: error.message
                });
            });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
});

module.exports = {createOrder, checkPaymentStatus};