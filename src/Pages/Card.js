import React from 'react'
import { Link } from 'react-router-dom'
export default function Card() {
  return (
    <div className="container my-5 ">
    <div className="row">
      <div className="col-md-12 my-5">
          <h2>Our Service</h2>
          <div className="underline"></div>
      </div>
    </div>
      <div class="row">
  <div class="col-sm-4 ">
    <div class="card cardShadow">
      <div class="card-body">
        <h5 class="card-title">Website</h5>
        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iure? Omnis ullam fugit tempora impedit fugiat praesentium ducimus tenetur laudantium?.</p>
        <Link href="#" class="btn btn-dark">Read More</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-4 ">
    <div class="card cardShadow">
      <div class="card-body">
        <h5 class="card-title">Mobile APP</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur consequatur minima quis, dolores consequuntur vero rem porro facilis id veritatis temporibus, tempore expedita dignissimos?</p>
        <Link href="#" class="btn btn-dark">Read More</Link>
      </div>
    </div>
  </div>

  <div class="col-sm-4 ">
    <div class="card cardShadow">
      <div class="card-body">
        <h5 class="card-title">Apple App</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores quasi excepturi quaerat, provident voluptatibus nulla sequi impedit unde exercitationem sapiente necessitatibus repudiandae vero ducimus!</p>
        <Link href="#" class="btn btn-dark">Read More</Link>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
