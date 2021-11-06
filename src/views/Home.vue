<template>
  <div class="home">
    <!-- HEADER SECTION -->
    <main-header data-aos="fade" data-aos-duration="800"></main-header>

    <!-- FEATURES SECTION -->
    <section class="features">
      <div class="container">
        <div class="row align-items-center">
          <div
            class="col-md-6 col-12"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div class="feat">
              <img src="../assets/images/burn.svg" />
              <h2>Awesome Features</h2>
              <p>
                The Firework library has many features that you would like to
                use, covering almost 85% of firebase web features
              </p>
              <ul>
                <li v-if="!feats[0]">Loading Features</li>
                <li v-else v-for="feat in feats" :key="feat.title">
                  <img :src="feat.image" />
                  {{ feat.title }}
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-md-6 col-12"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <img src="../assets/images/feat1.svg" />
          </div>
        </div>
      </div>
    </section>

    <!-- WEBSITES SECTION -->
    <section class="websites">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 col-12 mb-5"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <img src="../assets/images/websites.svg" />
          </div>
          <div
            class="col-md-6 col-12"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <div class="web">
              <img src="../assets/images/trending.svg" />
              <h2>Popular Websites!</h2>
              <p>
                Many websites have already been built with the help of the
                Firework Library and Firebase. These websites were built in a
                very short time. We made website building easier for you!
              </p>
              <ul>
                <li v-if="!PopWebsites[0]">Loading Websites</li>
                <li v-else v-for="website in PopWebsites" :key="website.name">
                  <img src="../assets/images/domain.svg" />
                  <a :href="website.url" target="_blank">{{ website.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BOXES SECTION -->
    <section class="boxes">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-md-4 col-sm-6 col-12 mb-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <router-link to="/help" tag="div" class="box">
              <img src="../assets/images/knowledge.svg" />
              <h4>Knowledge Base</h4>
              <p>Get Started by reading useful articles and posts</p>
            </router-link>
          </div>
          <div
            class="col-md-4 col-sm-6 col-12 mb-3"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <router-link to="/contact" tag="div" class="box">
              <img src="../assets/images/contact2.svg" />
              <h4>Contact Us</h4>
              <p>Contact us to know about the library and our team</p>
            </router-link>
          </div>
          <div
            class="col-md-4 col-sm-6 col-12"
            data-aos="fade-up"
            data-aos-duration="2200"
          >
            <router-link to="/docs" tag="div" class="box">
              <img src="../assets/images/documantation.svg" />
              <h4>Documentation</h4>
              <p>Read our useful documentations to get start faster</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- SPONSERS SECTION -->
    <section class="sponsors">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12" data-aos="fade-down" data-aos-duration="1200">
            <h1>Technologies</h1>
          </div>
          <div
            class="col-sm-3 col-12"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img
              src="../assets/images/ES6LOGO.svg"
              onclick="location.href = 'http://es6-features.org/'"
            />
          </div>
          <div
            class="col-sm-3 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <img
              src="../assets/images/firebase.png"
              onclick="location.href = 'https://firebase.google.com/'"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
.features {
  padding: 80px 0;
  margin-bottom: 50px;
  .feat {
    h2 {
      color: #3f3d56;
      font-family: "Barlow", sans-serif;
    }
    & > img {
      width: 85px;
      height: 85px;
    }
    ul {
      margin-top: 30px;
      li {
        padding: 10px 0;
        list-style: none;
        font-size: 16px;
        @media (max-width: 576px) {
          font-size: 14px;
        }
        img {
          margin-right: 5px;
          width: 32px;
          height: 32px;
          @media (max-width: 576px) {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}

.websites {
  background: linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%);
  padding: 150px 0;
  .web {
    h2 {
      color: #3f3d56;
      font-family: "Barlow", sans-serif;
    }
    padding: 0 50px;
    @media (max-width: 420px) {
      padding: 0 30px;
    }
    & > img {
      width: 100px;
      height: 100px;
    }
    ul {
      margin-top: 30px;
      li {
        padding: 10px 0;
        list-style: none;
        font-size: 15px;
        @include xs {
          font-size: 14px;
        }
        a {
          color: #3f3d56;
        }
        img {
          margin-right: 5px;
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}

.boxes {
  padding: 120px 0;
  .box {
    cursor: pointer;
    text-align: center;
    padding: 80px 25px;
    border: 1px solid #ccc;
    &:hover {
      border-color: #fff;
      box-shadow: 0 0 20px rgba($color: #3f3d56, $alpha: 0.2);
    }
    img {
      width: 60px;
      height: 60px;
    }
    h4 {
      margin: 20px 0;
      color: #3f3d56;
      font-family: "Barlow", sans-serif;
    }
  }
}

.sponsors {
  background: linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%);
  padding: 70px 0;
  text-align: center;
  h1 {
    margin: 0 0 80px;
    display: inline-block;
    color: #3f3d56;
    font-family: "Barlow", sans-serif;
    &::after {
      content: "";
      display: inline-block;
      width: 200px;
      height: 1px;
      background: #ccc;
      margin: 0 10px;
      position: relative;
      top: -10px;
      @include sm {
        width: 120px;
      }
      @include xs {
        width: 80px;
      }
      @include xxs {
        width: 30px;
      }
      @include em {
        width: 15px;
      }
    }
    &::before {
      content: "";
      display: inline-block;
      width: 200px;
      height: 1px;
      background: #ccc;
      margin: 0 10px;
      position: relative;
      top: -10px;
      @include sm {
        width: 120px;
      }
      @include xs {
        width: 80px;
      }
      @include xxs {
        width: 30px;
      }
      @include em {
        width: 15px;
      }
    }
  }
  img {
    width: 85px;
    height: 100px;
    margin: 0 0 40px;
    cursor: pointer;
    filter: grayscale(50%);
    &:hover {
      transform: scale(1.05);
      filter: grayscale(0%);
    }
  }
}
</style>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  components: {
    MainHeader,
    Footer
  },
  data() {
    return {
      feats: [],
      PopWebsites: []
    };
  },
  created() {
    $(".loader").show();
    document.title = "Firework";
    window.scrollTo(0, 0);
    db.get("features").then(Data => {
      if (Data) {
        Data.forEach(data => {
          this.feats.push(data.val());
          $(".loader").hide();
        });
      }
    });

    db.get("websites").then(Data => {
      if (Data) {
        Data.forEach(data => {
          this.PopWebsites.push(data.val());
        });
      }
    });
  }
};
</script>
