const express = require("express")                      //written in every program - lika a boilerplate to link with express
const mongoose = require("mongoose")
const sessionController = require("./controller/Session-controller")  ////written in every program - lika a boilerplate - to link with session-controller
const roleController = require("./controller/role-controller")
const userController = require("./Controller/user-controller")
const usersubscriptionController = require("./Controller/usersubscription-controller")
const sectorController = require("./Controller/sector-controller")
const companyController = require("./Controller/company-controller")
const stockController = require("./Controller/stock-controller")
const watchlistController = require("./Controller/watchlist-controller")
const feedbackController = require("./Controller/feedback-controller")
const alertController = require( "./Controller/alert-controller")
const researchController = require("./Controller/research-controller")
const paymentController = require("./Controller/payment-controller")
const notificationController = require("./Controller/notification-controller")
const portfolioController = require("./Controller/portfolio-controller")
const userportfolioController = require("./Controller/user-portfolio-controller")

const app = express()
//middle ware
app.use(express.json()) // mobile : accept json data from request and set data into body // //written in every program - lika a boilerplate
app.use(express.urlencoded({extended:true})) // web : accept url encoded data from request and set data into body ////written in every program - lika a boilerplate

//databases
mongoose.connect('mongodb://localhost:27017/portfoliomng',function(err){  // connection to database and mentioning function err to know database is connectd or not
  if(err){
    console.log("db connection failed...")
  }else{
    console.log("db connected....")
  }
})  // you can  copy paste from their npm mongoose website


//urls

app.get("/",function(req,res){      // another way of getting login/signup without declaring in session - controller // "/" --> url
    res.write("welcome...")         // whenever url of localhost:3000/ will be entered, it --> gives welcome output as it is written in res.write
    res.end()
})

// to fetch function which is written in session-controller by app.get

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)


//role
app.post("/roles",roleController.addRole)
app.get("/roles/",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)


//user
app.post("/users",userController.addUser)
app.get("/users/",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
app.post("/login",userController.login)

// user subscription
app.post("/usersubscription",usersubscriptionController.addUserSubscription)
app.get("/usersubscription/",usersubscriptionController.getAllUserSubscription)
app.delete("/usersubscription/:userId",usersubscriptionController.deleteUserSubscription)
app.put("/usersubscription",usersubscriptionController.updateUserSubscription)

//Sector
app.post("/sector",sectorController.addSector)
app.get("/sector/",sectorController.getAllSector)
app.delete("/sector/:SectorId",sectorController.deleteSector)
app.put("/Sector",sectorController.updateSector)

//Company

app.post("/company",companyController.addCompany)
app.get("/company/",companyController.getAllCompany)
app.delete("/company/:CompanyId",companyController.deleteCompany)
app.put("/company",companyController.updateCompany)

//Stock

app.post("/stock",stockController.addStock)
app.get("/stock/",stockController.getAllStock)
app.delete("/stock/:StockId",stockController.deleteStock)
app.put("/stock",stockController.updateStock)

//Watchlist

app.post("/watchlist",watchlistController.addWatchlist)
app.get("/watchlist/",watchlistController.getAllWatchlist)
app.delete("/watchlist/:WatchlistId",watchlistController.DeleteWatchlist)
app.put("/watchlist",watchlistController.updateWatchlist)

//Feedback

app.post("/feedback",feedbackController.addFeedback)
app.get("/feedback/",feedbackController.getAllFeedback)
app.delete("/feedback/:FeedbackId",feedbackController.DeleteFeedback)
app.put("/feedback",feedbackController.updateFeedback)

//Alert

app.post("/alert",alertController.addAlert)
app.get("/alert/",alertController.getAllAlert)
app.delete("/alert/:AlertId",alertController.DeleteAlert)
app.put("/alert",alertController.updateAlert)

//research

app.post("/research",researchController.addResearch)
app.get("/research/",researchController.getAllResearch)
app.delete("/research/:ResearchId",researchController.DeleteResearch)
app.put("/research",researchController.updateResearch)

//Payment

app.post("/payment",paymentController.addPayment)
app.get("/payment/",paymentController.getAllPayment)
app.delete("/payment/:TransactionId",paymentController.DeletePayment)
app.put("/payment",paymentController.updatePayment)

//notification

app.post("/notification",notificationController.addNotification)
app.get("/notification/",notificationController.getAllNotification)
app.delete("/notification/:NotificationId",notificationController.DeleteNotification)
app.put("/notification",notificationController.updateNotification)

//Portfolio

app.post("/portfolio",portfolioController.addPortfolio)
app.get("/portfolio/",portfolioController.getAllPortfolio)
app.delete("/portfolio/:PortfolioId",portfolioController.DeletePortfolio)
app.put("/portfolio",portfolioController.updatePortfolio)

// user portfolio

app.post("/userportfolio",userportfolioController.addUserPortfolio)
app.get("/userportfolio/",userportfolioController.getAllUserPortfolio)
app.delete("/userportfolio/:UserPortfolioId",userportfolioController.DeleteUserPortfolio)
app.put("/userportfolio",userportfolioController.updateUserPortfolio)



// SERVER 

app.listen(3000,function(){               // mandatory like that of boilerplate - which will start server at that local host port
    console.log("server started on 3000");
})