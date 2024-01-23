

const users=require('../Modals/userSchema')

//add user
exports.addUser=async(req,res)=>{
    console.log('inside add user function');

    const{fname,lname,email,mobile,gender,status,location}=req.body

    try{
        const preuser=await users.findOne({email})
        if(preuser){
            res.status(406).json("User already exist")
        }
        else{
            const newsuer=new users({
                fname,lname,email,mobile,gender,status,profile:req.file.filename,location
            })
            await newsuer.save()
            res.status(200).json(newsuer)
        }
    }catch(err){
        res.status(401).json("Error"+err)
    }
    


}



//get user

exports.getallUsers=async(req,res)=>{
    const search=req.query.search

    //regular expression is a sequence of characters that forms a search pattern in node js denoted as regex  , modifiers:

    const query={
        fname:{$regex: search,$options:"i"}
    }
    
    try{
        const allUsers= await users.find(query)
        res.status(200).json(allUsers)

    }
    catch(err){
        res.status(401).json(err)

    }
}


//delete user

exports.deleteUser=async(req,res)=>{

    const{id}=req.params   //req id get
    try{

        const removeData=await users.findByIdAndDelete({_id:id})
        res.status(200).json(removeData)

    }
    catch(err){

        res.status(401).json(err)
    }
}

//edit user

exports.editUser=async(req,res)=>{
    const {id}=req.params
    const{fname,lname,email,mobile,gender,status,location,profile}=req.body

    const file=req.file?req.file.filename:profile
    try{
        const updateUser=await users.findByIdAndUpdate({_id:id},{
            fname,lname,email,mobile,gender,status,profile:file,location
        },{new:true})
        await updateUser.save()
        res.status(200).json(updateUser)

    }
    catch(err){
        res.status(401).json(err)
    }



}