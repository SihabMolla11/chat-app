// const express = require('express');
import express from 'express';
import { login, signUp } from './controllers/aut.controller.js';


const router = express.Router()

router.post('/auth/login-user', login);

router.post('/auth/signUp-user', signUp);


export default router;