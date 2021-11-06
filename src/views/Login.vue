<template>
  <div class="login">
    <!-- HEADER -->
    <alt-header page="login"></alt-header>

    <!-- LOGIN -->
    <section class="loginsec">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Admin Login</h1>
            <div class="loginBox">
              <label>Admin Email Address</label>
              <input type="email" placeholder="Admin Email Address"  class="email" autocomplete/>
              <label>Admin Password</label>
              <input type="password" placeholder="Admin Password" class="password" />
              <button @click="login()">Login</button>
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
  name: "login",
  components: {
    AltHeader,
    Footer
  },
  methods: {
    login() {
      var email = $(".email").val();
      var password = $(".password").val();
      auth.login(email, password).then(user => {
        Swal.fire(
          "Success",
          `You Are Logged In As (${auth.user().displayName})`,
          "success"
        );
      }).catch(err => {
        Swal.fire({
          type: "error",
          title: "Error",
          text: err.message
        });
      });
    }
  },
  created() {
    $(".loader").show();
    document.title = "Login";
    window.scrollTo(0, 0);
    auth.onAuth(user => {
      if (user && user.uid == "Wo2GfjPpfnZxS3iWCUVKuY68nza2") {
        location.href = "/cpanel";
      } else if (user && user.uid != "Wo2GfjPpfnZxS3iWCUVKuY68nza2") {
        location.href = "/";
      } else {
        $(".loader").hide();
        $(".email").focus();
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.loginsec {
  padding: 100px 0;
  h1 {
    text-align: center;
    color: #3f3d56;
    font-family: "Barlow", sans-serif;
    margin-bottom: 25px;
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
  .loginBox {
    font-family: "Barlow", sans-serif;
    padding: 80px 40px;
    background: rgba($color: #000000, $alpha: 0.01);
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.1);
    border-radius: 10px;
    text-align: center;
    label,
    span {
      color: #3f3d56;
      font-family: "Barlow", sans-serif !important;
    }
    input {
      border-left: 1.5px solid #ccc;
      border-right: 1.5px solid #ccc;
      font-family: "Barlow", sans-serif;
      display: block;
      width: 60%;
      margin: 0 auto 15px;
      border-radius: 5px;
      &:focus {
        border-color: #3f3d56;
      }
      @include sm {
        width: 80%;
      }
      @include xs {
        width: 100%;
      }
    }
    button {
      font-family: "Barlow", sans-serif;
      display: block;
      padding: 10px 50px;
      border-radius: 10px;
      margin: 20px auto 0;
    }
  }
}
</style>
