import Image from "next/image";

const BannerItems = () => {
  return (
    <>
      <div class="banner_section ">
        <div className="banner_bg ">
          <img src="/img/ssss.jpg" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="banner_content_area">
                <div class="banner_text">
                  <h3>Sale of the season</h3>
                  <div class="banner_des">
                    <p>Best in basic tshirts and buttoms.</p>
                    <p>Get extra 5% off on first order</p>
                  </div>
                  <div class="banner_btn">
                    <button class="banner_btn">
                      Get 10% off on online payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerItems;
