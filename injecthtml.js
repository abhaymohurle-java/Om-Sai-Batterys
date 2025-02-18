// Function to inject HTML content
const htmlheddar = `
    <nav class="navbar fixed-top navbar-expand-lg bg-white navbar-light shadow-sm py-3 px-lg-0">
        <div class="container">
            <a href="index.html" class="navbar-brand">
                <img src="img/logo-removebg-preview.png" alt="Logo" class="img-fluid" style="height: 50px; transition: transform 0.3s;">
            </a>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="index.html" class="nav-link fw-bold text-dark hover-warning">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="about.html" class="nav-link fw-bold text-dark hover-warning">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle fw-bold text-dark hover-warning" href="#" role="button" data-bs-toggle="dropdown">
                            Our Products
                        </a>
                        <ul class="dropdown-menu border-0 shadow-sm">
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=Car Batteries">Car Battery</a></li>
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=Flat Plate Batteries">Flat Battery</a></li>
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=General Purpose Batteries">General Battery</a></li>
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=Industrial Inverter">Industrial Inverter</a></li>
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=Inverter Batteries">Inverter Battery</a></li>
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=Home Inverter">Home Inverter</a></li>
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=Online UPS">Online Ups</a></li>
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=Solar UPS">Solar Ups</a></li>
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=Tabular Batteries">Tabular Battery</a></li>
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=Two Wheeler Batteries">TwoWheeler Battery</a></li>
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=UPS">UPS</a></li>
                            <li><a class="dropdown-item py-2 hover-warning" href="products.html?category=UPS_Batteries">Ups Battery</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="contact.html" class="nav-link fw-bold text-dark hover-warning">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

function injectHTML1() {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("heddar").innerHTML = htmlheddar;
    });
}

// Call the function
injectHTML1();

// Function to inject HTML content
const htmlfooter = `
     <footer class="bg-dark text-white py-5">
    <div class="container">
        <div class="row mb-5">
            <div class="col-md-3 mb-4">
            <a href="index.html">
                <div class="mb-3">
                    <img src="img/logo-removebg-preview.png" alt="Logo" class="img-fluid mb-3" style="max-width: 220px; filter: drop-shadow(0 0 15px rgba(255, 255, 0, 0.6));">
                </div>
                </a>
            </div>
            <div class="col-md-3 mb-4">
            <h5 class="text-warning mb-4">OM SAI BATTERY</h5>
                <div class="mb-4">
                    <p class="text-light">Om Sai Battery in Bhagwan Nagar, Nagpur, is a reputable dealer for Exide batteries. Established in 2021, the dealer offers a wide range of Exide batteries.</p>
                </div>
            </div>
            
            <div class="col-md-3 mb-4">
                <h5 class="text-warning mb-4">INFORMATION</h5>
                <ul class="list-unstyled">
                    <li><a href="index.html" class="text-light text-decoration-none hover-warning mb-2 d-block">Home</a></li>
                    <li><a href="about.html" class="text-light text-decoration-none hover-warning mb-2 d-block"> About</a></li>
                    <li><a href="car.html" class="text-light text-decoration-none hover-warning mb-2 d-block"> Battery</a></li>
                    <li><a href="contact.html" class="text-light text-decoration-none hover-warning mb-2 d-block"> Contact us</a></li>
                    <li>
                        <div class="dropup">
                            <button class="btn btn-outline-success dropdown-toggle text-light" type="button" data-bs-toggle="dropdown">
                                Our Products
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="products.html?category=Car Batteries">Car Battery</a></li>
                                <li><a class="dropdown-item" href="products.html?category=Flat Plate Batteries">Flat Battery</a></li>
                                <li><a class="dropdown-item" href="products.html?category=General Purpose Batteries">General Battery</a></li>
                                <li><a class="dropdown-item" href="products.html?category=Industrial Inverter">Industrial Inverter</a></li>
                                <li><a class="dropdown-item" href="products.html?category=Inverter Batteries">Inverter Battery</a></li>
                                <li><a class="dropdown-item" href="products.html?category=Home Inverter">Home Inverter</a></li>
                                <li><a class="dropdown-item" href="products.html?category=Online UPS">Online UPS</a></li>
                                <li><a class="dropdown-item" href="products.html?category=Solar UPS">Solar UPS</a></li>
                                <li><a class="dropdown-item" href="products.html?category=Tabular Batteries">Tabular Battery</a></li>
                                <li><a class="dropdown-item" href="products.html?category=Two Wheeler Batteries">Two Wheeler Battery</a></li>
                                <li><a class="dropdown-item" href="products.html?category=UPS">UPS</a></li>
                                <li><a class="dropdown-item" href="products.html?category=UPS_Batteries">UPS Battery</a></li>
                            </ul>
                        </div>
                    </li>
                       
                    
                                          
                </ul>
            </div>

            <div class="col-md-3 mb-4">
                <h5 class="text-warning mb-4">GET IN TOUCH</h5>
                <ul class="list-unstyled">
                    <li class="d-flex mb-3">
                        <i class="bi bi-geo-alt-fill text-warning me-2"></i>
                        <span>Plot No.34 A Ishwar Nagar, Bhagwan Nagar Road, Bhagwan Nagar, Nagpur - 440027</span>
                    </li>
                    <li class="d-flex mb-3">
                        <i class="bi bi-telephone-fill text-warning me-2"></i>
                        <a href="tel:8511461429" class="text-light text-decoration-none">8511461429</a>
                    </li>
                    <li class="d-flex mb-3">
                        <i class="bi bi-envelope-fill text-warning me-2"></i>
                        <a href="mailto:info@omsaibattery.com" class="text-light text-decoration-none">info@omsaibattery.com</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="col-12 text-center border-top pt-4">
                <p class="mb-0">
                    Copyright &copy; <script>document.write(new Date().getFullYear());</script> 
                    All rights reserved | OM SAI BATTERY 
                    <i class="bi bi-heart-fill text-warning"></i> by 
                    <a href="https://www.pskitservices.com/" target="_blank" class="text-warning text-decoration-none">PSK Technologies</a>
                </p>
            </div>
        </div>
    </div>
</footer>

`;

function injectHTML2() {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("footer").innerHTML = htmlfooter;
    });
}

// Call the function
injectHTML2();
