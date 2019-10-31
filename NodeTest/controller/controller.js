import UserScheme from '../modal/modal';
const CircularJSON = require('circular-json');
let userData = {};
userData.getdetail = (req, res) => {
  res.send('hello get detail');
};
userData.setUser = (req, res) => {
  const newuser = new UserScheme({
    name: req.body.name,
    email: req.body.email,
    detail: {
      userid: req.body.userid,
      amount: req.body.amount,
      status: req.body.status
    }
  });

  UserScheme.findOne({ email: req.body.email }, function(err, user) {
    if (user) {
      res.send('user already exist');
    } else {
      newuser.save(function(err, save) {
        if (err) {
          console.log('err=>', err);
        } else {
          res.send('save successfully');
        }
      });
    }
  });
};
userData.setfilter = (req, res) => {
  //   UserScheme.find({ 'detail.userid': { $eq: '2184' } }, function(err, result) {
  //     if (err) {
  //       res.send('filter');
  //     } else {
  //       res.send(result);
  //     }
  //   });
  //   UserScheme.aggregate(
  //     [
  //       { $match: { 'detail.status': 'A' } },
  //       { $group: { _id: '$detail.userid', total: { $sum: '$detail.amount' } } }
  //     ],
  //     function(err, result) {
  //       if (err) {
  //         res.send('filter');
  //       } else {
  //         res.send(result);
  //       }
  //     }
  //   );
  //   UserScheme.find({ name: { $nin: ['mahi', 'rahul'] } }, function(err, result) {
  //     if (err) {
  //       res.send('filter');
  //     } else {
  //       res.send(result);
  //     }
  //   });
  //   UserScheme.find(
  //     {
  //       $or: [
  //         { 'detail.amount': { $gte: 100 } },
  //         { 'detail.status': { $ne: 'B' } }
  //       ]
  //     },
  //     function(err, result) {
  //       if (err) {
  //         res.send('filter');
  //       } else {
  //         res.send(result);
  //       }
  //     }
  //   );
  //   UserScheme.find({ 'detail.amount': { $not: { $gt: 100 } } }, function(
  //     err,
  //     result
  //   ) {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       res.send(result);
  //     }
  //   });
  UserScheme.find(
    {
      $nor: [
        { 'detail.amount': { $gt: 100 } },
        { 'detail.status': { $eq: 'B' } }
      ]
    },
    function(err, result) {
      if (err) {
        res.send('filter');
      } else {
        res.send(result);
      }
    }
  );
};
export default userData;
