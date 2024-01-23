
const express=require('express')

const userControllers=require('../contollers/userControllers')



const multerconfig=require('../middlewares/multer-middleware')

 const router=new express.Router()

 router.post('/add',multerconfig.single("profile"),userControllers.addUser)


 router.get('/get-all-users',userControllers.getallUsers)

 router.delete('/delete-user/:id',userControllers.deleteUser)

 router.put('/edit-user/:id',multerconfig.single("profile"),userControllers.editUser)

 module.exports=router