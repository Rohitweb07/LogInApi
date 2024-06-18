import Login from '../models/loginModel.js'; // Ensure .js extension


export function login(req, res) {
  console.log("LoginController loading....");
  res.send("LoginController loading...."); // Send a response to the client
}

export async function create(req, res) {
  try {
    const login = new Login({
      email: req.body.email,
      name: req.body.name,
      mobile: req.body.mobile,
      address: req.body.address,
      graduation: req.body.graduation
    });

    const newLogin = await login.save();
    console.log('Successfully submitted the login data');
    res.status(201).json(newLogin); 
  

  } catch (error) {
    console.log(`Error during login details submission: ${error}`);
    res.status(500).json({ error: 'Error during login details submission' }); // Send error response
  }
}

export async function show(req,res){

  try {
     const LoginData=await Login.find();
     console.log(`the login information data is ${LoginData}`);
  } catch (error) {
    console.log('error during the data fetch',error);
    
  }

}

