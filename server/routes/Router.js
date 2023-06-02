const express = require("express");
const router = new express.Router();
const Products = require('../models/productsSchema');
const User = require('../models/userSchema');
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

//get products data api
router.get("/getproducts", async(req, res)=>{
    try {
        const productsData = await Products.find();
        // console.log("data aa raha hain"+productsData);
        res.status(201).json(productsData);
    } catch (error) {
        console.log(error);
    }
})

//get individual data
router.get("/getproductsone/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        // console.log(id);
        const individualdata = await Products.findOne({id:id});
        // console.log(individualdata + 'individual data');
        res.status(201).json(individualdata);
    } catch (error) {
        res.status(400).json(individualdata);
        console.log(error);
    }
})

//register data 
router.post("/register", async(req, res)=>{
    // console.log(req.body);
    const {fname, email, mobile, password, cpassword} = req.body;
    if(!fname || !email || !mobile || !password || !cpassword){
        res.status(422).json({error:"fill the all data"});
        console.log("no data available")
    };
    try {
        const preuser = await User.findOne({email:email});
        if(preuser){
            res.status(422).json({error:"this user is already present"})
        }
        else if(password !== cpassword){
            res.status(422).json({error:"password and cpassword doesn't match"})
        }
        else{
            const finalUser = new User({
                fname, email, mobile, password, cpassword
            });
            const storedata = await finalUser.save();
            console.log(storedata)

            res.status(201).json(storedata);
        }
    } catch (error) {
        
    }
}) 
//login user api
router.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400).json({error:"Fill the all details"})
    };
    try {
        const userLogin = await User.findOne({email:email});
       console.log(userLogin+"user value");
       if(userLogin){
        const isMatched = await bcrypt.compare(password, userLogin.password);
        console.log(isMatched+" pass match");

        //token generate
        const token = await userLogin.generateAuthtoken();
        console.log(token+" this is token");

        res.cookie("Amazonweb",token,{
            expires:new Date(Date.now() + 900000),
            httpOnly:true
        })


        if(!isMatched){
            res.status(400).json({error:"Invalid details!"})
        }else{
            res.status(201).json(userLogin)
        }
       }
       else{
        res.status(400).json({error:"Inavlid details!"})
       }
    } catch (error) {
        res.status(400).json({error:"Invalid user details!"})
    }
})

//adding the data into cart
router.post("/addcart/:id",authenticate, async(req, res)=>{
    try {
        const {id} = req.params;
        const cart = await Products.findOne({id:id});
        console.log(cart + " cart value");

        const UserContact = await User.findOne({_id:req.userID});
        console.log(UserContact);

        if(UserContact){
            const cartData = await UserContact.addCartData(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        }else{
            res.status(401).json({error:"Invalid User--"});
        }

    } catch (error) {
        res.status(401).json({error:"Invalid User----"});
    }
});

//get cart details
router.get("/cartdetails", authenticate, async(req, res)=>{
    try {
        const buyuser = await User.findOne({_id:req.userID});
        res.status(201).json(buyuser);
    } catch (error) {
        console.log(error + "error");
    }
})

//get valid user
router.get("/validuser", authenticate, async(req, res)=>{
    try {
        const validuserone = await User.findOne({_id:req.userID});
        res.status(201).json(validuserone);
    } catch (error) {
        console.log(error + "error");
    }
})

router.delete("/remove/:id", authenticate, async(req, res)=>{
    try {
        const {id} = req.params;
        req.rootUser.carts = req.rootUser.carts.filter((curval)=>{
            return curval.id != id ;
        })
        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("Item is removed");
    } catch (error) {
        res.status(400).json(req.rootUser);
        console.log(error + " error");
    }
})

router.get("/logout",authenticate,(req,res)=>{
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curElem)=>{
            return curElem.token !== req.token
        });
        res.clearCookie("Amazonweb", {path:"/"});
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("User Logout")
    } catch (error) {
        console.log("Error for user logout")
    }
})

module.exports = router;