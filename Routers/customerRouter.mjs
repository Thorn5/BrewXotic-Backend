import express from 'express';
const router = express.Router();
import Customer from '../Models/CustomerSchema.mjs';

const collection =
  // router.get('/', (req, res) => {
  //   Customer.find({})
  //     .then(data => {
  //       if (!data) {
  //         return res.sendStatus(404); 
  //       }
  //       res.json(data);
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //       res.sendStatus(500);
  //     });
  //   });

  router.get('/', async (req, res) => {
    try {
      const data = await Customer.find({});
      if (!data) {
        return res.sendStatus(404);
      }
      res.json(data);
    } catch (err) {
      console.log(err.message);
      res.sendStatus(500);
    }
  });

//* original version
// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   Customer.findById(id)
//   .then(data => {
//     if (!data) {
//         return res.sendStatus(404); 
//       }
//       res.json(data);
//     })
//     .catch(err => {
//       console.log(err.message);
//       res.sendStatus(500);
//     });
//   });

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Customer.findById(id);
    if (!data) {
      return res.sendStatus(404);
    }
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

//* original version
// router.get('/lookupfirstname/:firstName', (req, res) => {
// const { firstName } = req.params;
// Customer.find({first_name: firstName})
//   .then(data => {
//     if (!data) {
//       return res.sendStatus(404); 
//     }
//     res.json(data);
//   })
//   .catch(err => {
//     console.log(err.message);
//     res.sendStatus(500);
//   });
// });

router.get('/lookupfirstname/:firstName', async (req, res) => {
  try {
    const { firstName } = req.params;
    const data = await Customer.find({ first_name: firstName });
    if (!data) {
      return res.sendStatus(404);
    }
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});


export default router;


