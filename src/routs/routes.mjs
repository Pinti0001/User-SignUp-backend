import express from 'express';
import { post, userSignIn, userSignUp } from '../controllers/userControllers.mjs';

const router = express.Router();


// signup  : post
// signIn : post
// post  : post

router.post('/signup', userSignUp);
router.post('/signin', userSignIn);
router.post('/post', post);

export default router;