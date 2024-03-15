
import PropTypes from 'prop-types';
import { VscAccount } from "react-icons/vsc";

const Nav = () => {
  return (
    <nav className='lg:w-4/5 lg:mx-auto p-2'>
      <div class="navbar bg-base-100">

      <div class="navbar-start">
          <a class="btn btn-ghost text-xl lg:text-3xl">Recipe Calories</a>
        </div>


        {/* for mobile Device */}
        <div class="navbar-center ml-10 block lg:hidden">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Recipes</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>

              <label class=" input-bordered rounded-full flex items-center gap-2 mt-3">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>


              <input type="text" class="grow" placeholder="Search" />
              
              </label>
            </ul>
          </div>
        </div>


        {/* for Computer Device */}
        <div class="navbar-center lg:block hidden">
        <ul class=" flex gap-5 text-xl px-6 py-3 ">
              <li><a>Home</a></li>
              <li><a>Recipes</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
            </ul>
        </div>
       


        <div class="navbar-end">
          
        <label class="input input-bordered rounded-full lg:flex items-center gap-2 hidden">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>


        <input type="text" class="grow" placeholder="Search" />
        
        </label>

          <button class="btn btn-ghost btn-circle ml-5">
          <VscAccount className='text-3xl lg:text-5xl bg-[#0BE58A] rounded-full'/>
          </button>
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  
};

export default Nav;