import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav id="navbar_main">
        <div class="menu_container_fluid">
          <div class="main_menu d-flex justify-content-between">
            <div class="left d-flex align-items-center">
              <div class="logo ">
                <img src="/img/logo.png" class="logo_img" alt="" />
                <img src="/img/cart.png" class="cart_img" alt="" />
              </div>
              <div class="bar">
                <img src="/img/more.png" class="bar_img" alt="" />
              </div>
            </div>
            <div class="right">
              <div class="menu_link">
                <a href="#" class="menu_btn_creator">
                  Be a Creator
                </a>
                <a href="#">Search</a>
                <a href="#">Login</a>
                <a href="#">Help</a>
                <a href="#">Cart</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
