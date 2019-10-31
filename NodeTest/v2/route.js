import userRouter from '../route/route';

export default app => {
  console.log('initiallizing routes');
  app.use('/user/', userRouter);
};
