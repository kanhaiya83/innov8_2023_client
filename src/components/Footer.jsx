import React from "react";

const Footer = () => {
  return (
    // <div>
    //   {/* part 1 */}
    //   <div>
    //     <div>Acknowledgement of Country</div>
    //     <div>
    //       We acknowledgement Aboriginal and Torres Strait Islander peoples as
    //       the First Australians and Traditional Custodians of the lands where we
    //       live, learn and work
    //     </div>
    //   </div>
    //   {/* part 2 */}
    //   <div>
    //     <div>
    //       <div>Logo</div>
    //       <div>Product</div>
    //       <div>Support</div>
    //       <div>Get in Touch</div>
    //       <div>Your Region</div>
    //     </div>
    //     <div>
    //       <div>Download Now</div>
    //       <div>social media Icons</div>
    //     </div>
    //     <div>Thin line</div>
    //     <div>Copyrights tag ..... legal policy, terms and service, etc.</div>
    //   </div>
    // </div>
    <div className="bg-lightPurple/20 p-10">
      <div className="mt-8 flex justify-center bg-white rounded-3xl">
        <div className="fixed-height w-11/12 lavender-bg rounded-full flex flex-col justify-center items-center p-8">
          <p className="text-center text-sm font-semibold mb-4 text-#451952">
            Acknowledgment of Country
          </p>
          <p className="text-center text-xs">
            We acknowledge Aboriginal and Torres Strait Islander peoples as the
            First Australians and Traditional Custodians of the lands where we
            live, learn, and work.
          </p>
        </div>
      </div>
      <div
        className="mt-4 flex justify-center text
      -darkPurple bg-white rounded-3xl"
      >
        <div className="w-11/12 lavender-bg rounded-lg flex flex-col justify-center p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="py-8 md:pt-0">
              <h1 className=" font-bold text-4xl  ">VoiceCrypt</h1>
              <h2 className="pl-2 text-sm">by The NetRunners</h2>
            </div>
            <div className="col-span-1">
              <h1 className="text-2xl font-bold mb-2">Product</h1>
              <p className="text-md mb-2">Features</p>
              <p className="text-md mb-2">Work</p>
              <p className="text-md mb-2">Career</p>
              <p className="text-md mb-2">Money</p>
              <p className="text-md mb-2">Benefits</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-2xl font-bold mb-2">Support</h1>
              <p className="text-md mb-2">Help Centre</p>
              <p className="text-md mb-2">Chat</p>
              <p className="text-md mb-2">Report a bug</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-2xl font-bold mb-2">Get in Touch</h1>
              <p className="text-md mb-2">Contact</p>
              <p className="text-md mb-2">Sales</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-2xl font-bold mb-2">Your Region</h1>
              <p className="text-md mb-2">Australia</p>
              <p className="text-md mb-2">New Zealand</p>
              <p className="text-md mb-2">United Kingdom</p>
              <p className="text-md mb-2">Singapore</p>
              <p className="text-md mb-2">Malaysia</p>
            </div>
          </div>
          <div className="px-0 md:p-6 py-16 flex items-center justify-between ">
            <button className="text-white py-2 px-4 rounded-full mt-2 bg-[#451952]">
              Download now
            </button>
            <div className="flex gap-4 items-center ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Calque_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                >
                  <path d="M12,0c3.2,0,3.7,0,4.9,0.1c1.3,0.1,2.2,0.2,2.9,0.6c0.8,0.4,1.4,0.7,2.2,1.4c0.6,0.6,1.1,1.3,1.4,2.2  C23.6,5,23.9,6,24,7.2c0,1.1,0,1.6,0,4.8s0,3.7-0.1,4.9c-0.1,1.3-0.2,2.2-0.6,2.9c-0.4,0.8-0.7,1.6-1.4,2.2  c-0.6,0.6-1.3,1.1-2.2,1.4C19,23.6,18,23.9,16.8,24c-1.1,0-1.6,0-4.8,0s-3.7,0-4.9-0.1c-1.3-0.1-2.2-0.2-2.9-0.6  c-0.8-0.4-1.6-0.7-2.2-1.4c-0.6-0.6-1.1-1.3-1.4-2.2C0.4,19,0.1,18,0,16.8c0-1.1,0-1.6,0-4.8s0-3.7,0.1-4.9c0.1-1.3,0.2-2.2,0.6-2.9  C1.1,3.4,1.4,2.6,2.2,2C2.8,1.4,3.5,1,4.3,0.6C5,0.4,6,0.1,7.2,0C8.3,0,8.8,0,12,0z M12,6c-1.6,0-3.1,0.6-4.2,1.8  C6.6,8.9,6,10.4,6,12s0.6,3.1,1.8,4.2C8.9,17.4,10.4,18,12,18s3.1-0.6,4.2-1.8c1.1-1.1,1.8-2.6,1.8-4.2s-0.6-3.1-1.8-4.2  C15.1,6.6,13.6,6,12,6z M19.8,5.8c0-0.4-0.1-0.7-0.5-1.1c-0.2-0.2-0.7-0.5-1.1-0.5c-0.4,0-0.7,0.1-1.1,0.5c-0.2,0.2-0.4,0.6-0.4,1.1  s0.1,0.7,0.5,1.1c0.2,0.2,0.6,0.4,1,0.4c0.4,0,0.7-0.1,1.1-0.5C19.7,6.5,19.8,6.1,19.8,5.8z M12,8.4c1,0,1.9,0.4,2.5,1.1  c0.7,0.7,1.1,1.6,1.1,2.5s-0.4,1.9-1.1,2.5c-0.6,0.7-1.6,1.1-2.5,1.1s-1.9-0.4-2.5-1.1C8.8,13.9,8.4,13,8.4,12s0.4-1.9,1.1-2.5  C10.1,8.8,11,8.4,12,8.4z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Calque_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  style={{ enableBackground: "new 0 0 24 24" }}
                  xmlSpace="preserve"
                >
                  <path d="M14.1,13.8h3L18.3,9h-4.2V6.6c0-1.2,0-2.4,2.4-2.4h1.8v-4C17.9,0.1,16.4,0,14.9,0c-3.3,0-5.6,2-5.6,5.6V9H5.7v4.8h3.6V24  h4.8V13.8z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Calque_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  style={{ enableBackground: "new 0 0 24 24" }}
                  xmlSpace="preserve"
                >
                  <path d="M5,3.2C5,3.8,4.8,4.5,4.3,5S3.1,5.7,2.5,5.7S1.3,5.5,0.8,5S0,3.8,0,3.2s0.3-1.3,0.8-1.8  c0.4-0.5,1-0.8,1.8-0.8c0.6,0,1.3,0.3,1.8,0.8S5,2.6,5,3.2z M5,7.6H0v15.7h5V7.6z M13.1,7.6H8v15.7h4.9V15c0-4.6,6-5,6,0v8.3h5v-9.9  c0-7.8-8.9-7.4-10.9-3.6L13.1,7.6z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Calque_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  style={{ enableBackground: "new 0 0 24 24" }}
                  xmlSpace="preserve"
                >
                  <path d="M23.4,5.4C24,7.6,24,12,24,12s0,4.4-0.6,6.6c-0.4,1.2-1.2,2.2-2.3,2.4c-2,0.6-9.1,0.6-9.1,0.6  s-7.1,0-9.1-0.6c-1.1-0.4-2-1.2-2.3-2.4C0,16.4,0,12,0,12s0-4.4,0.6-6.6C1,4.2,1.8,3.2,2.9,3c2-0.6,9.1-0.6,9.1-0.6s7.1,0,9.1,0.6  C22.3,3.2,23.2,4.2,23.4,5.4z M9.6,16.2l7.2-4.2L9.6,7.8V16.2z" />
                </svg>
              </div>
            </div>
          </div>
          <hr className="py-2 border-t border-gray-300" />
          <div className="flex flex-col md:flex-row gap-6 md:gap-12   text-xs">
            <div className=" flex gap-6 justify-center md:justify-start">
              <p className="text-xs md:text-sm">Legal Center</p>
              <p className="text-xs md:text-sm">Cookies</p>
              <p className="text-xs md:text-sm">Cookie Policy</p>
              <p className="text-xs md:text-sm">Privacy Policy</p>
              <p className="text-xs md:text-sm">Terms</p>
            </div>
            <div className="flex justify-center md:justify-end text-xs md:text-sm ">
              <p>
                2023&nbsp;© VoiceCrypt. All rights reserved.&nbsp;Powered by{" "}
                <a
                  className="font-bold focus:underline hover:underline focus:outline-none"
                  href="https://codewdme.web.app/"
                  rel="noreferer noopener"
                >
                  The NetRunners{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
