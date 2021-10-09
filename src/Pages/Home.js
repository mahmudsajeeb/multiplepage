import React, { Component } from 'react';
import Slider from './Slider';
import './Slider'
import MV from './MV';
import Card from './Card';
import Footer from '../Footer';
class Home extends Component {
  render() {
    return (
      <div>
      <Slider />
      <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col md-12">
                <h4  >Our Company</h4>
                <div className="underline mb-3"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio hic incidunt. Corrupti exercitationem vero itaque saepe atque ex inventore rem, doloribus, ab recusandae omnis eius non reiciendis quae animi, porro provident aut excepturi fuga eligendi fugiat obcaecati. Odit, sint!</p>
              </div>
            </div>
          </div>
      </section>
      <MV />
      <Card />

        <Footer />
      </div>
    );
  }
}

export default Home;