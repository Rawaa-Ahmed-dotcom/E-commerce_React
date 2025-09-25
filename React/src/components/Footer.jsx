import logo from "../assets/logo.jpg";
import {Link} from "react-router";
import {Facebook, Instagram, Twitter, Youtube} from "lucide-react";
const Footer = ({categories}) => {
    return (
        <div className = "bg-slate-900 shadow-md">
           <div className = "container mx-auto px-4">
               <div className = "min-h-16">
                   <div className = "flex items-center justify-between flex-col md:flex-row py-10">
                       <h2 className = "text-4xl font-bold text-white">Subscribe Our Newsletter</h2>
                       <form className = "md:w-1/3 w-full mt-8 md:mt-0 relative">
                           <input type = "email" placeholder= "Enter Your Email" className= "p-4 rounded shadow-md w-full bg-white"/>
                           <button className = "bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1 cursor-pointer">Submit</button>
                       </form>
                   </div>
               </div>
           </div>
            <div className = "bg-slate-800 text-white py-8">
               <div className = "container mx-auto px-4">
                  <div className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                      <div>
                          <h2 className = "my-4 text-xl">audiophile</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, animi expedita harum id illo inventore ipsa molestiae nobis numquam quasi sit tenetur voluptas? Harum itaque magni repellat tempora voluptates.</p>
                          <div className = "flex items-center gap-8 mt-5">
                              <Facebook size={40} className = "bg-white text-black rounded-md p-2"/>
                              <Twitter size={40} className = "bg-white text-black rounded-md p-2"/>
                              <Youtube size={40} className = "bg-white text-black rounded-md p-2"/>
                              <Instagram size={40} className = "bg-white text-black rounded-md p-2"/>
                          </div>
                      </div>
                      <div>
                          <h2 className = "text-2xl font-semibold  my-4">Pages</h2>
                          <ul className = "flex flex-col gap-4">
                              <li>
                                  <Link to="/">Home</Link>
                              </li>
                              <li>
                                  <Link to="/about">About</Link>
                              </li>
                              <li>
                                  <Link to="/">FAQs</Link>
                              </li>
                              <li>
                                  <Link to="/">Contact</Link>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 className = "text-2xl font-semibold  my-4">Categories</h2>
                          <ul className = "flex flex-col gap-4">
                              {categories.map((category, index) =><li key = {index}>
                                  <Link to= {`/${category}`} >{category}</Link>
                              </li>)}
                          </ul>
                      </div>
                      <div className = "flex flex-col gap-4">
                          <h2 className = "text-2xl font-semibold  my-4">Pages</h2>
                          <p>70 Washington Square South, New York, United States</p>
                          <p>+12345 957 204</p>
                          <p>+12345 746 938</p>
                      </div>
                  </div>
               </div>
            </div>
            <div className = "container mx-auto text-center py-4 text-white">
                <p>Copyright &copy; 2025 OnlineITtuts</p>
            </div>
        </div>
    )
}

export default Footer;