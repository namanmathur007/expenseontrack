const express = require('express');
const dotenv = require('dotenv');
const colors = require ('colors');
const morgan = require ('morgan');
const connectDatabaseB =require('./config/database')
const mongoose= require('mongoose');
dotenv.config({ path: './config/config.env' });
connectDatabaseB();

const transactions =require('./routes/expenses');
const app =  express();
app.use(express.json());
app.use('/api/v1/transactions', transactions);

const PORT= process.env.PORT || 5000; 
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));