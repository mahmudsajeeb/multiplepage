import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <section className="bg-dark text-white">
    <div className="container">
        <div className="row py-5">
          <div className="col-md-4">
              <h3>Company Info</h3>
              <div className="underlineFooter"></div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa alias blanditiis esse odio ratione reiciendis praesentium corporis veritatis enim voluptatibus ab quis quidem officiis velit, nostrum quibusdam expedita. Dolorum, maxime!</p>
          </div>
          <div className="col-md-4">
          <h3>Quick View</h3>
            <div className="underlineFooter"></div>
          <div>
              <Link to="/"  className="text-decoration-none text-white">Home              
            </Link>
          </div>
          <div>
              <Link to="/"  className="text-decoration-none text-white">Home              
            </Link>
          </div>

          <div>
              <Link to="/blog"       className="text-decoration-none text-white">Blog              
            </Link>
          </div>

          <div>
              <Link to="/about"       className="text-decoration-none text-white">About              
            </Link>
          </div>

          <div>
              <Link to="/contact"       className="text-decoration-none text-white">Contact Us              
            </Link>
          </div>
          </div>

          <div className="col-md-4">
          <h3>Contacct Information</h3>
            <div className="underlineFooter"></div>
            <h4>Address: uttara-11,road-4</h4>
            <p>Phone: 01518475637</p>
            <p>Email: mahmudsajib082@gmail.com</p>
          </div>

        </div>

        </div>
    </section>
  )
}
