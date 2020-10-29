let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");
/* GET home page. */
router.get("/", indexController.displayHomePage);

router.get("/home", indexController.displayHomePage);

/* GET About page. */
router.get("/About", indexController.displayAboutPage);
/* GET Products page. */
router.get("/Products", indexController.displayProductstPage);
/* GET services page. */
router.get("/Services", indexController.displayServicesPage);

/* GET Contact us page. */
router.get("/Contact", indexController.displayContactPage);

/*get route for displaying login page*/
router.get("/login", indexController.displayLoginPage);

/*POST Route for processing the login page*/
router.post("/login", indexController.processLoginPage);

/*get route for displaying register page*/
router.get("/register", indexController.displayRegisterPage);

/*POST Route for processing the register page*/
router.post("/register", indexController.processRegisterPage);

/*GET to perform  user logout*/
router.get("/logout", indexController.performLogout);

module.exports = router;
