import express from 'express'
import {
  authUser,
  registerUser,
  userProfile,
  updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', authUser)
//2 metody get i put, ta samo sciezka wiec razem dodaje
router
  .route('/profile')
  .get(protect, userProfile)
  .put(protect, updateUserProfile)
router.route('/').post(registerUser)

export default router
