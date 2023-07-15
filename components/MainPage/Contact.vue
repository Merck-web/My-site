<template>
  <section class="contact-section section" id="contact">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2 data-heading="contact">Get In Touch</h2>
        </div>
      </div>
      <div class="row">
        <div class="contact-item">
          <div class="contact-item-inner outer-shadow">
            <i class="fas fa-phone"></i>
            <span>Phone</span>
            <p>+7(992)015-82-83</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-inner outer-shadow">
            <i class="fas fa-envelope"></i>
            <span>Email</span>
            <p>aleksey.ognevoj@gmail.com</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-inner outer-shadow">
            <i class="fas fa-map-marker-alt"></i>
            <span>Address</span>
            <p>San Tagilo, Sverdlovsk, 6660000</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="contact-form">
          <form>
            <div class="row">
              <div class="w-50">
                <div class="input-group outer-shadow hover-in-shadow">
                  <input class="input-control" type="text" placeholder="Name">
                </div>
                <div class="input-group outer-shadow hover-in-shadow">
                  <input class="input-control" type="text" placeholder="Email">
                </div>
                <div class="input-group outer-shadow hover-in-shadow">
                  <input class="input-control" type="text" placeholder="Subject">
                </div>
              </div>
              <div class="w-50">
                <div class="input-group outer-shadow hover-in-shadow">
                  <textarea class="input-control" placeholder="Message"></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="submit-btn">
                <button class="btn-1 outer-shadow hover-in-shadow" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Contact"
}
</script>

<style scoped>

</style>