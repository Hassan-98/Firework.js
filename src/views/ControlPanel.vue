<template>
  <div class="panel">
    <!-- HEADER -->
    <alt-header page="panel"></alt-header>

    <!-- Control Panel -->
    <section class="control">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 p-0">
            <div class="sidebar">
              <button @click="showHome()" class="homebtn"><i class="fas fa-home"></i> Home</button>
              <button @click="showDocs()" class="docsbtn"><i class="fas fa-file-alt"></i> Documentation</button>
              <button @click="showHelp()" class="helpbtn"><i class="fas fa-handshake"></i> Help Center</button>
              <button @click="showLog()" class="logbtn"><i class="fas fa-list-ol"></i> Changelog</button>
              <button @click="showMsg()" class="Msgbtn"><i class="fas fa-envelope"></i> Messages</button>
            </div>
          </div>
          <div class="col-12">
            <component :is="show"></component>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  text-align: center;
  border-right: 2px solid #ccc;
  @include sm {
    border-bottom: 1px solid #ccc;
    border-right: 0;
    margin-bottom: 10px;
  }
  button {
    display: inline-block;
    width: 20%;
    border-radius: 0;
    border: 0 2px 0 2px solid #ccc;
    padding: 15px 0;
    background: #3f3d56;
    &:first-of-type {
      background: #6f4fae;
    }
    &:hover {
      transform: none;
      background: #6f4fae !important;
    }
    @include xs {
      width: 50%;
      &:last-of-type{
        width: 100%;
      }
    }
  }
}
.content {
  display: none;
}
</style>

<script>
import AltHeader from "@/components/AltHeader.vue";
import HomeControl from "@/components/control-panel/HomeControl.vue";
import DocsControl from "@/components/control-panel/DocsControl.vue";
import HelpControl from "@/components/control-panel/HelpControl.vue";
import LogControl from "@/components/control-panel/LogControl.vue";
import MsgControl from "@/components/control-panel/MsgControl.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "panel",
  components: {
    AltHeader,
    HomeControl,
    DocsControl,
    HelpControl,
    LogControl,
    MsgControl,
    Footer
  },
  data() {
    return {
      show: "HomeControl"
    };
  },
  methods: {
    showHome() {
      this.show = "HomeControl";
      $(".homebtn")
        .css({
          background: "#6F4FAE"
        })
        .siblings()
        .css({
          background: "#3F3D56"
        });
    },
    showDocs() {
      this.show = "DocsControl";
      $(".docsbtn")
        .css({
          background: "#6F4FAE"
        })
        .siblings()
        .css({
          background: "#3F3D56"
        });
    },
    showHelp() {
      this.show = "HelpControl";
      $(".helpbtn")
        .css({
          background: "#6F4FAE"
        })
        .siblings()
        .css({
          background: "#3F3D56"
        });
    },
    showLog() {
      this.show = "LogControl";
      $(".logbtn")
        .css({
          background: "#6F4FAE"
        })
        .siblings()
        .css({
          background: "#3F3D56"
        });
    },
    showMsg() {
      this.show = "MsgControl";
      $(".Msgbtn")
        .css({
          background: "#6F4FAE"
        })
        .siblings()
        .css({
          background: "#3F3D56"
        });
    }
  },
  created() {
    $(".loader").show();
    document.title = "Control Panel";
    window.scrollTo(0, 0);
    auth.onAuth(user => {
      if (user == null) {
        location.href = "/login";
      } else if (user.uid != "Wo2GfjPpfnZxS3iWCUVKuY68nza2") {
        location.href = "/";
      } else {
        $(".loader").hide();
      }
    });
  }
};
</script>
