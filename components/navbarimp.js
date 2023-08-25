function navbar(){
    return `
    <header class="page-header">
            <div class="header-container">
                <div class="Full-header">
                    <div class="logo-container">
                        <div class="logo-container-box">
                            <a class="logo" href="index.html">
                                <img src="https://www.bialetti.com/media/logo/default/5-layers_3x.png" alt="Bialetti">
                            </a>
                        </div>
                    </div>
                    <div class="menu-container">
                        <div class="Header-menu">
                            <a class="menu-name" href="#">MOKA EXPRESS</a>
                        </div>
                        <div class="Header-menu">
                            <a class="menu-name" href="#">BIALETTI COFFEE ROASTING</a>
                        </div>
                        <div class="Header-menu dropdown">
                        <a href="./product.html">
                            <button class="dropbtn">PRODUCTS
                                <i class="fa-solid fa-angle-down"></i>
                            </button>
                        </a>
                              <div class="dropdown-content">
                                <div class="row">
                                  <div class="column">
                                    
                                    <h3 class="column-h3">COFFEE</h3>
                                    <a href="#">Grounds</a>
                                    <a href="#">Coffee beans</a>
                                  </div>
                                  <div class="column">
                                    <div class="vl"></div>
                                    <h3 class="column-h3">COFFEE MAKERS</h3>
                                    <a href="#">Aluminium coffee makers</a>
                                    <a href="#">Stainless steal coffee makers</a>
                                    <a href="#">Special coffee makers</a>
                                  </div>
                                  <div class="column">
                                    <div class="vl"></div>
                                    <h3 class="column-h3">ACCESSORIES</h3>
                                    <a href="#">Small cups and mugs</a>
                                    <a href="#">Coffee accessories</a>
                                    <a href="#">Spare Parts</a>
                                  </div>
                                  <div class="column">
                                    <div class="vl"></div>
                                    <img class="column-img" src="https://www.bialetti.com/media/wysiwyg/moka-express-menu.jpg" alt="Coffee">
                                  </div>
                                </div>
                              </div>
                        </div>
                        <div class="Header-menu dropdown">
                            <button class="dropbtn">NEWS
                                <i class="fa-solid fa-angle-down" id="fa-down"></i>
                              </button>
                              <div class="dropdown-content-2">
                                <div class="column-2">
                                    <a href="#">Small cups and mugs</a>
                                    <a href="#">Coffee accessories</a>
                                  </div>
                                
                              </div>
                        </div>
                        <div class="Header-menu">
                            <a class="menu-name" href="#">INSPIRATION</a>
                        </div>
                        <div class="Header-menu">
                            <a class="menu-name" href="#">OUR HISTORY</a>
                        </div>
                    </div>
                    <div class="icon-container">
                       <button id="magniglass" >
                        <a  href="#">
                            <i  class="fa-solid fa-magnifying-glass"></i>
                        </a>
                       </button>
                       <button onclick="document.getElementById('login-form').style.display='block'">
                        <a href="#">
                            <i class="fa-solid fa-user"></i>
                        </a>
                       </button>
                       <button>
                        <a href="./cartpage.html">
                            <i class="fa-solid fa-cart-plus"></i>
                        </a>
                       </button>
                       <button id = "open" >
                        <a href="#">
                            <i class="fa-solid fa-bars"></i>
                        </a>
                       </button>
                       <form id="search-bar" >
                        <input type="text" id="search" placeholder="Search entire store here...">
                       </form>
                    </div>
                </div>
            </div>
        </header>
        <div id='login-form'class='login-page'>
            <div class="form-box">
                <div class='button-box'>
                    <div id='btn'></div>
                    <button type='button'onclick='login()'class='toggle-btn'>Log In</button>
                    <button type='button'onclick='register()'class='toggle-btn'>Register</button>
                </div>
                <form id='login' class='input-group-login'>
                    <input type='text'class='input-field' id='login-email' placeholder='Email Id' required >
		    <input type='password'class='input-field' id='login-pass' placeholder='Enter Password' required>
            <span class = "span" class='input-field-2' id="password-error" style="display:none;color:red;">Email and/or password incorrect.</span>
		    <input type='checkbox'class='check-box'><span class = "span">Remember Password</span>
		    <button type='submit'class='submit-btn'>Log in</button>
		 </form>
		 <form id='register' class='input-group-register'>
		     <input type='text' id="firstname" class='input-field'placeholder='First Name' required>
		     <input type='text' id="lastname" class='input-field'placeholder='Last Name ' required>
		     <input type='email'id="regisemail"  class='input-field'placeholder='Email Id' required>
		     <input type='password' id="resipass" class='input-field'placeholder='Enter Password' required>
		     <input type='password' id="resirepass" class='input-field'placeholder='Confirm Password'  required>
		     <input type='checkbox'class='check-box' required><span class = "span">I agree to the terms and conditions</span>
             <span class = "span" id="email-exists" class='input-field-2' style="display:none;"></span>
                    <button type='submit'class='submit-btn'>Register</button>
	         </form>
            </div>
        </div>
    </div>
        
        <div class="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" id="mySidebar">
            <button id="closebtn" class="w3-bar-item w3-button w3-large w3-hide-large" >
                <i class="fa-solid fa-xmark"></i>
            </button>
            <a id="sidebar-1a" href="#" class="w3-bar-item w3-button">THE GROUP <i class="fa-solid fa-chevron-down"></i></a>
            <a href="#" class="w3-bar-item w3-button">INVESTOR RELATION </a>
            <a href="#" class="w3-bar-item w3-button">SUSTAINABILITY <i class="fa-solid fa-chevron-down"></i></a>
            <a href="#" class="w3-bar-item w3-button">CAREERS</a>
            <a href="#" class="w3-bar-item w3-button">CONTACT US</a>
            <div class="follow-logo">
                <p>Follow US:</p>
                <div><i class="fa fa-facebook" aria-hidden="true"></i></div>
                <div><i class="fa fa-instagram" aria-hidden="true"></i></div>
            </div>
        </div>
        
    `
}
export default navbar;