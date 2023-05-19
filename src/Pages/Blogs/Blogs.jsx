import React from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div className="bg-base-300">
      <Helmet>
        <title>Super Hero Hub | Blog</title>
      </Helmet>
      <div className="container py-12">
        <h1 className="text-center mb-8 font-semibold text-xl md:text-3xl">
          Our Blogs
        </h1>
        <div>
          <div className="mb-5">
            <h1 className="text-xl">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h1>
            <p className="mt-3 text-sm">
             an access token is use to access protected resources on an api server. user successfully authenticate with server using user name ana password . when they are a verified user they get an token which is access token.
             and also access some protected resources data using this token..Access tokens have an expiration time, carry user information and permissions, and are validated by the server for each API request to ensure proper authorization.
             <br />
             a refresh token is used to generate a new access token when the previous access token are expires.  It is stored securely on the client-side, often in a secure HTTP-only cookie or local storage.  The refresh token allows the client to request a new access token without requiring the user to re-enter their credentials, improving user experience. 
             <br /> 


            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-xl">
            Compare SQL and NoSQL databases?

            </h1>
            {/* <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300">hello</button> */}
            <p className="mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              accusamus ipsa voluptas inventore recusandae iste exercitationem,
              voluptatum qui, consequuntur ratione commodi pariatur laudantium
              impedit hic accusantium tempora voluptates repellendus blanditiis!
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-xl">
            What is express js? What is Nest JS?

            </h1>
            <p className="mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              accusamus ipsa voluptas inventore recusandae iste exercitationem,
              voluptatum qui, consequuntur ratione commodi pariatur laudantium
              impedit hic accusantium tempora voluptates repellendus blanditiis!
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-xl">
            What is MongoDB aggregate and how does it work?
            </h1>
            <p className="mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              accusamus ipsa voluptas inventore recusandae iste exercitationem,
              voluptatum qui, consequuntur ratione commodi pariatur laudantium
              impedit hic accusantium tempora voluptates repellendus blanditiis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
