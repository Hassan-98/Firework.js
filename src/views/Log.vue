<template>
  <div class="log">

    <!-- HEADER -->
    <alt-header page="log"></alt-header>

    <!-- Log Page -->
    <section class="log-sec">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-2 col-md-3 col-12 log-show-sidebar">
            <div class="bar">
              <ul>
                <li
                  v-for="log in logs"
                  :key="log.perority"
                  :id="log.perority"
                  @click="showLog($event)"
                >
                  {{ log.title }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-10 col-md-9 col-12">
            <div class="log-show-content">
              <h2>Version 1.0.7</h2>
              <h5>Released on : 16-8-2019</h5>
              <ul>
                <li>New: Add Realtime DB</li>
                <li>New: Add Realtime DB</li>
                <li>Update: Realtime DB New Feats</li>
                <li>Update: Realtime DB New Feats</li>
                <li>Fix: Fix Storage Bucket</li>
                <li>Fix: Fix Storage Bucket</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
.log-show-sidebar {
  text-align: center;
  border-right: 1px solid #ccc;
  @include sm {
    border-bottom: 1px solid #ccc;
    border-right: 0;
    margin-bottom: 10px;
  }
  .bar {
    width: 100%;
    text-align: left;
    padding: 60px 0 60px 0;
    ul {
      list-style: none;
      li {
        font-weight: bold;
        font-family: "Barlow", sans-serif;
        padding: 6px 0 6px 10px;
        cursor: pointer;
        color: #3f3d56;
        font-size: 18px;
        @include xs {
          font-size: 15px;
        }
        &::before {
          content: "» ";
          color: #3f3d56;
        }
        &:hover {
          color: #6f4fae;
          padding: 6px 0 6px 15px;
          &::before {
            color: #6f4fae;
          }
        }
        &.active {
          color: #6f4fae;
          padding: 6px 0 6px 15px;
          &::before {
            color: #6f4fae;
          }
        }
      }
    }
  }
}

.log-show-content {
  padding: 60px 50px;
  width: 80%;
  @include xs {
    width: 100%;
    padding: 60px 20px;
  }
  h2 {
    font-family: "Barlow", sans-serif;
    color: #3f3d56;
    margin-top: 0;
    margin-bottom: 15px;
    &::before {
      content: "# ";
      color: #6f4fae;
      font-size: 120%;
    }
  }
  h5 {
    font-family: "Barlow", sans-serif;
    color: #3f3d56;
    margin-top: 0;
    margin-bottom: 25px;
    &::before {
      content: "» ";
      color: #6f4fae;
    }
  }
  li {
    list-style: none;
    padding: 15px 20px;
    background-color: #f9fafb;
    border-left: 5px solid #eaeff4;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    color: #999;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important;
    &::before {
      display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      font-family: "Font Awesome 5 Pro";
      margin-right: 10px;
      font-size: 15px;
      font-weight: 400;
      content: "\f192";
      color: #999;
    }
  }
  p {
    @include xxs {
      font-size: 14px;
    }
  }
}
</style>

<script>
import AltHeader from "@/components/AltHeader.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Log",
  components: {
    AltHeader,
    Footer
  },
  data() {
    return {
      logs: []
    };
  },
  methods: {
    showLog(e) {
      var perority = e.path[0].id;
      $(".bar li").removeClass("active");
      e.path[0].classList.add("active");
      this.logs.forEach(log => {
        if (log.perority == perority) {
          $(".log-show-content").html(log.content);
        }
      });
    }
  },
  created() {
    $(".loader").show();
    document.title = "Changelog";
    window.scrollTo(0, 0);
    db.get(`logs`, "child", "perority").then(Data => {
        Data.forEach(data => {
          this.logs.unshift(data.val());
        });
      }).then(() => {
        $(".log-show-content").html(this.logs[0].content);
        $(".bar li:first-of-type").addClass("active");
        $(".loader").hide();
      });
  }
};
</script>
