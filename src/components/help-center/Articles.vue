<template>
  <div class="help">
    <!-- HEADER -->
    <alt-header page="help"></alt-header>

    <!-- ARTICLES -->
    <div class="articles">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>List of Articles</h1>
            <p>
              Here's the categorized list of articles so you can easily find the
              one you need. We suggest to start by reading the articles in
              "Getting Started" category, choose which article you want to read and
              proceed by reading articles of the related category.
            </p>
            <hr class="my-5" />
          </div>
          <div class="col-12">
            <div class="articles-list">
              
              <!-- Categories & Articles -->
              <div class="category" v-if="!categories[0]">
                <h3>No Categories Or Articles Yet</h3>
                <hr class="my-5" />
              </div>
              <div class="category" v-else v-for="category in categories" :key="category.name">
                <h3>{{ category.name }}</h3>
                <ul>
                  <li v-if="!category.articles[0]">
                    <img src="../../assets/images/error.svg" /> There Is No Articles Yet
                  </li>
                  <router-link v-else tag="li" :to="'/help/' + article.title" v-for="article in category.articles" :key="article.title" :id="article.title">
                    <img src="../../assets/images/file.svg" /> {{ article.title }}
                  </router-link>
                </ul>
                <hr class="my-5" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
.articles {
  padding: 100px 0;
  h1 {
    color: #3f3d56;
    font-family: "Barlow", sans-serif;
    margin-bottom: 20px;
  }
  p {
    color: #3f3d56;
    width: 75%;
    font-size: 17px;
    line-height: 35px;
    @include xs {
      width: 100%;
    }
  }
  hr {
    margin: 20px 0;
    background: #f6f6f6;
  }
  h3 {
    margin-bottom: 40px;
    font-family: "Barlow", sans-serif;
    color: #3f3d56;
    &::before {
      content: "# ";
      color: #6f4fae;
      font-size: 110%;
    }
  }
  ul {
    li {
      font-family: "Barlow", sans-serif;
      list-style: none;
      margin: 20px 0 20px 10px;
      cursor: pointer;
      color: #3f3d56;
      &:hover {
        color: #6f4fae;
      }
      img {
        width: 20px;
        height: 20px;
        position: relative;
        top: -3px;
        left: -5px;
      }
    }
  }
  .category:last-of-type {
    hr {
      display: none;
    }
  }
}
</style>

<script>
import AltHeader from "../AltHeader.vue";
import Footer from "../Footer.vue";

export default {
  name: "Articles",
  components: {
    AltHeader,
    Footer
  },
  data() {
    return {
      categories: []
    };
  },
  created() {
    document.title = "Help Center";
    window.scrollTo(0, 0);
    $(".loader").show();
    db.get(`articles`, 'child', 'perority').then(Data => {
      if (Data) {
        Data.forEach(data => {
          var articles = [];

          db.get(`articles/${data.val().catName}`).then(Data2 => {
            if (Data2) {
              Data2.forEach(data2 => {
                if (typeof data2.val() == "object") {
                  articles.push(data2.val());
                  $(".loader").hide();
                }
              });
            }
          });

          var myData = {
            name: data.key,
            articles
          };
          this.categories.push(myData);
        });
      }
    });
  }
};
</script>
