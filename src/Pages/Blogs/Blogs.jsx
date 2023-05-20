import React from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div className="backdrop-blur-3xl text-white">
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
              an access token is use to access protected resources on an api
              server. user successfully authenticate with server using user name
              and password . when they are a verified user they get an token
              which is access token. and also access some protected resources
              data using this token..Access tokens have an expiration time,
              carry user information and permissions, and are validated by the
              server for each API request to ensure proper authorization.
              <br />
              a refresh token is used to generate a new access token when the
              previous access token are expires. It is stored securely on the
              client-side, often in a secure HTTP-only cookie or local storage.
              The refresh token allows the client to request a new access token
              without requiring the user to re-enter their credentials,
              improving user experience.
              <br />
              when user login or registration they get a token from server side.
              after get this token we can store it client side local storage or
              http only cookie . when user need to get some protect data, a
              request is sent to the server with that token. And checked user
              and token are verified or not . And when it is a valid user, it
              sends that protected data as an access response
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-xl">Compare SQL and NoSQL databases?</h1>
            {/* <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300">hello</button> */}
            <p className="mt-3 text-sm">
              <ul>
                <h1>SQL</h1>
                <li>relational database management system</li>
                <li>SQl Database have fixed or static or predefined schema</li>
                <li>SQL Data stored in tables with columns and rows </li>
                <li>Vertically Scalable</li>
                <li>Stands for Structured Query Language</li>
                <li>Example: MySQL, PostgreSQL, Oracle</li>
              </ul>
              <br />
              <ul>
                <h1>NoSQL</h1>
                <li>non relational database management system</li>
                <li> They have a dynamic schema</li>
                <li>Non SQL data stored in collections or documents </li>
                <li>Horizontal Scalable</li>
                <li>Stand For Not only SQL</li>
                <li>Example: MySQL, PostgreSQL, Oracle</li>
                <li>Examples: MongoDB, Cassandra,</li>
              </ul>
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-xl">What is express js? What is Nest JS?</h1>
            <p className="mt-3 text-sm">
              <ul>
                <h1>Express js</h1>
                <li> framework for Node.js</li>
                <li>Lightweight and flexible</li>
                <li>Easy to learn and use</li>
                <li>large and active community</li>
                <li>define routes, manage middleware functions, and render dynamic views </li>
                <li>Handle errors gracefully.</li>
              </ul>
              <br />
              <ul>
                <h1>Nest Js</h1>

                <li>Framework for node js</li>
                <li>based on typescript and javascript</li>
                <li>Opinionated and structured</li>
                <li>easy to test </li>
                <li>more complex than express</li>
                <li>Manage component instantiation and injection.</li>
              </ul>
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-xl">
              What is MongoDB aggregate and how does it work?
            </h1>
            <p className="mt-3 text-sm">
        the aggregate method is a powerful tool that allows you to perform advanced data aggregation operations on your collections. It provides a flexible way to process and analyze data within the database, allowing you to perform complex computations, transformations, and aggregations.

        <ul>
          <li>$match: Filters the documents based on specified  similar to the find method.</li>
          <li>$group: Groups the documents based on a specified key and performs aggregation operations within each group.</li>
          <li>$project: Reshapes the documents and includes or excludes specific fields.</li>
          <li>$sort: order to sorting document based on specified data field</li>
          <li>$limit: use this we can define limit</li>
          <li>$skip: for specific data skip use this</li>
        </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
