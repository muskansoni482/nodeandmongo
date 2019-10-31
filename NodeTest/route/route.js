import express from 'express';
import userData from '../controller/controller';
const router = express.Router();
router.get('/user', userData.getdetail);
router.post('/postuser', (req, res) => {
  userData.setUser(req, res);
});
router.post('/filter', (req, res) => {
  userData.setfilter(req, res);
});
export default router;
