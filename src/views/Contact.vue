<template>
  <div class="contact">
    <!-- HEADER -->
    <alt-header page="contact"></alt-header>

    <!-- Contact Us -->
    <section class="contact-us">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="contact-info">
              <h2>Contact Info</h2>
              <p>
                Our team is happy to answer your all questions. Fill out the
                form and we’ll be in touch as soon as possible.
              </p>
              <p>&copy; 2019 BroCoders Team.</p>
              <h1>Firework.js</h1>
              <p>Sohag, Egypt</p>
              <p>+201146321817</p>
              <p>7assan.3li1998@gmail.com</p>
              <div class="icons">
                <i class="fab fa-facebook-square" title="Facebook Profile"></i>
                <i class="fab fa-whatsapp-square" title="WhatsApp"></i>
                <i class="fab fa-github-square" title="Star Us"></i>
                <i class="fab fa-npm" title="See The Package"></i>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="contact-inputs">
              <h2>Get in Touch</h2>
              <input type="text" placeholder="Full Name" class="cname" />
              <input type="email" placeholder="Email Address" class="cemail" />
              <textarea
                placeholder="Type Your Message"
                rows="7"
                class="cmessage"
              ></textarea>
              <button @click="sendMessage()">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer></Footer>
  </div>
</template>

<script>
import AltHeader from "@/components/AltHeader.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "contact",
  components: {
    AltHeader,
    Footer
  },
  methods: {
    sendMessage() {
      var Cname = $(".cname").val();
      var Cemail = $(".cemail").val();
      var Cmessage = $(".cmessage").val();
      if (Cname != "" && Cemail != "" && Cmessage != "") {
        db.push(`contact-messages`, {
          name: Cname,
          email: Cemail,
          message: Cmessage,
          perority: Date.now()
        })
          .then(() => {
            Swal.fire(
              "Success",
              `Thank You (${Cname}) Your Message Has Been Sent`,
              "success"
            );
            $(".cname").val("");
            $(".cemail").val("");
            $(".cmessage").val("");
          })
          .catch(err => {
            Swal.fire({
              type: "error",
              text: err.message
            });
          });
      } else {
        Swal.fire({
          type: "error",
          title: "Error",
          text: "There are some empty fields!"
        });
      }
    }
  },
  created() {
    $(".loader").show();
    document.title = "Contact Us";
    window.scrollTo(0, 0);
    setTimeout(function() {
      $(".loader").hide();
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.contact-us {
  padding: 120px 0 150px;
  @include xs {
    padding: 60px 0 70px;
  }
  h1 {
    color: #3f3d56;
    font-family: "Russo One", sans-serif;
    margin: 30px 0;
  }
  h2 {
    color: #3f3d56;
    font-family: "Barlow", sans-serif;
    margin-bottom: 30px;
  }
  .contact-info {
    .icons {
      i {
        font-size: 30px;
        margin: 20px 10px;
        cursor: pointer;
        &:hover {
          transform: translateY(-3px);
        }
        &:first-of-type {
          color: #3b5998;
        }
        &:nth-of-type(2) {
          color: rgb(71, 224, 99);
        }
        &:nth-of-type(4) {
          color: #cc0413;
        }
      }
    }
  }
  .contact-inputs {
    input,
    textarea {
      display: block;
      width: 100%;
      margin: 15px 0;
      border-radius: 5px;
      border: 1px solid #ddd;
      box-shadow: 0 0 5px rgba($color: #3f3d56, $alpha: 0.1);
      &:focus {
        border-color: #3b5998;
      }
    }
    button {
      border-radius: 5px;
      background: #3f3d56;
    }
  }
}
</style>
