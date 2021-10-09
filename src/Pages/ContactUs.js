import React from 'react'

export default function ContactUs() {
  return (
    <>
       <section className="py-4 text-center bg-primary">
      <h1 className="text-white">Our Contact Us</h1>
      </section>
      <div class="row iframeHeight container" id="contatti">
<div class="container  my-5" >

    <div class="row "  >
      <div class="col-md-6 maps" >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.928981510697!2d90.36077837136212!3d23.87663260973039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1633806951850!5m2!1sen!2sbd" width="600" height="450"   allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div class="col-md-6">
        <h2 class="text-uppercase mt-3 font-weight-bold text-white">CONTATTACI</h2>
        <form action="">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <input type="text" class="form-control mt-2" placeholder=" Fast Name" required />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <input type="text" class="form-control mt-2" placeholder="Last Name" required />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <input type="email" class="form-control mt-2" placeholder="Email" required />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <input type="number" class="form-control mt-2" placeholder="Number" required />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group py-2">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write Message" rows="3" required></textarea>
              </div>
            </div>

            <div class="col-12 py-3">
              <button class="btn btn-primary" type="submit">Submit</button>
            </div>
          </div>
        </form>
        <div >
        <h2 class="text-uppercase mt-4 font-weight-bold">Contact Us</h2>

        <i class="fas fa-phone mt-3"></i> <a href="tel:+">01518475637</a><br />
      
        <i class="fa fa-envelope mt-3"></i> <a href="">mahmudsajib082@gmail.com</a><br />
        <i class="fas fa-globe mt-3"></i> Uttara,sector-11,Dhaka<br />
        

        </div>
      </div>

    </div>
</div>
</div>


    </>
  )
}
