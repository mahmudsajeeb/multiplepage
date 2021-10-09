import React, { Component } from 'react';
import Footer from '../Footer';
import MV from './MV';

class About extends Component {
  render() {
    return (
      <>
      <section className="py-4 text-center bg-primary">
          <h1 className="text-white">About Our Company</h1>
          <div className="row">
            <div className="col-md-12">
              <p className="text-white text-center">Lorem ipsum, dolor sit amet consectetur adipisicing .br <br />
              elit. Perspiciatis, sequi! Saepe, ipsumolestiae? Veritatis, repellendus adipisci! <br /> Similique sint, amet excepturi exercitationem doloribus molestias soluta, <br /> quae nemo iste placeat, incidunt distinctio.</p>
              <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita blanditiis voluptatem <br /> nulla omnis modi nisi. Neque quo temporibus sint consequuntur doloremque, <br /> magnam ullam nemo. Animi dignissimos suscipit autem nihil voluptate!</p>
            </div>
          </div>
      </section>
      <MV />
      <Footer ></Footer>
      </>
    );
  }
}

export default About;