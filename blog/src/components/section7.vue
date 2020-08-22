<template>
  <div class="section" id="section7">
    <!-- intro start -->
    <div class="intro contact">
      <div class="container-fluid nopadding">
        <div class="row nopadding">
          <div class="col-md-12 contact_form">
            <h2>Connect With Us</h2>
            <!-- contact form area start -->
            <div class="col-md-6 col-sm-6 nopadding">
              <form id="contactForm" class="shake" data-toggle="validator">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        id="name"
                        type="text"
                        class="form-control"
                        name="Name"
                        autocomplete="off"
                        placeholder="Name"
                        required
                        data-error="Please enter your name"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        name="email"
                        autocomplete="off"
                        placeholder="E-mail"
                        required
                        data-error="Please enter your email"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        id="msg_subject"
                        type="text"
                        class="form-control"
                        name="msg_subject"
                        autocomplete="off"
                        placeholder="Subject"
                        required
                        data-error="Please enter your subject"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        id="message"
                        class="form-control textarea"
                        rows="3"
                        name="Message"
                        placeholder="Message"
                        required
                        data-error="Please enter your message subject"
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <button id="submit" type="submit" class="btn btn-contact">Send a message</button>
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </form>
            </div>
            <!-- contact form area end -->
            <!-- office address area start -->
            <div class="col-md-5 col-sm-6 office">
              <div class="office-details">
                <i class="fa fa-map-marker"></i>
                <span>
                  Dune Agency, 12 Abc Street,
                  <br />Brooklyn, Newyork.
                </span>
              </div>
              <div class="office-details">
                <i class="fa fa-phone"></i>
                <span>+12345678, +12345678</span>
              </div>
              <div class="office-details">
                <i class="fa fa-envelope"></i>
                <span>shout@Dunecreative.com</span>
              </div>
            </div>
            <!-- office address area end -->
            <!-- social icon start -->
            <div class="col-md-1 col-sm-12 social_icon text-right">
              <ul class="member-social">
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
            <!-- social icon end -->
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-11">
            <iframe class="maps_only" src allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>Copyright &copy; 2017.Company name All rights reserved.</p>
      </div>
    </div>
    <!-- intro end -->
  </div>
</template>

<script>
export default {
  name: "Section7",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
