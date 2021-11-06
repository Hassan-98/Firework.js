<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-12">
          <h3>Thank you for supporting us!</h3>
        </div>
        <div class="col-md-4 col-12">
          <div class="icons">
            <i class="fab fa-facebook-square" title="Facebook Profile" onclick="window.open('https://www.facebook.com/hassan2231998', '_blank')"></i>
            <i class="fab fa-whatsapp-square" title="WhatsApp: +201146321817" onclick="window.open('https://web.whatsapp.com', '_blank')"></i>
            <i class="fab fa-github-square" title="Star Us" onclick="window.open('https://www.npmjs.com/package/firework.js', '_blank')"></i>
            <i class="fab fa-npm" title="See The Package" onclick="window.open('https://www.npmjs.com/package/firework.js', '_blank')"></i>
          </div>
        </div>
        <div class="col-12">
          <h6>
            &copy; 2019 BroCoders Team. All Rights Reserved
          </h6>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  background: #f4f5f7;
  padding: 40px 0 30px;
  color: #262626;
  .icons {
    i {
      font-size: 30px;
      margin: 10px;
      cursor: pointer;
      filter: grayscale(100%);
      &:hover {
        transform: translateY(-3px);
        filter: grayscale(0%);
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
  h3 {
    font-family: "Barlow", sans-serif;
  }
  h6 {
    padding-top: 20px;
    border-top: 1px solid #ccc;
    font-family: "Barlow", sans-serif;
  }
}
</style>
