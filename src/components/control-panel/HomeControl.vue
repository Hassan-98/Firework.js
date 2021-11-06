<template>
  <div class="content home active">
    <h2>Home Control Panel</h2>
    <table class="home-table">
      <tr>
        <th>Section</th>
        <th>Edit</th>
      </tr>
      <tr>
        <td>Header Title</td>
        <td>
          <button @click="editHT()"><i class="far fa-edit"></i> Edit</button>
        </td>
      </tr>
      <tr>
        <td>Features</td>
        <td>
          <button @click="editFeats()"><i class="far fa-edit"></i> Edit</button>
        </td>
      </tr>
      <tr>
        <td>Popular Websites</td>
        <td>
          <button @click="editPW()"><i class="far fa-edit"></i> Edit</button>
        </td>
      </tr>
    </table>

    <!-- HEADER TITLE EDIT -->
    <div class="editMode htEdit">
      <button @click="BackToTable()" class="backToTable">
        <i class="fas fa-arrow-circle-left"></i> Back
      </button>
      <label>Header Title</label>
      <input type="text" placeholder="Header Title" class="header-title" />
      <button @click="SubmitEditHT()" class="addFeatBtn">
        <i class="far fa-edit"></i> Edit
      </button>
    </div>

    <!-- FEATURES EDIT -->
    <div class="home-editMode editMode featuresE">
      <button @click="BackToTable()" class="backToTable">
        <i class="fas fa-arrow-circle-left"></i> Back
      </button>
      <table class="table-feats">
        <tr>
          <th>Feature Title</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr v-if="!feats[0]">
          <td colspan="3">No Features Yet</td>
        </tr>
        <tr v-else v-for="feat in feats" :key="feat.title">
          <td>{{ feat.data.title }}</td>
          <td>
            <button :id="feat.key" @click="editFeat($event)">
              <i class="far fa-edit"></i> Edit
            </button>
          </td>
          <td>
            <button :id="feat.key" @click="deleteFeat($event)">
              <i class="far fa-trash-alt"></i> Delete
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="padding:0">
            <button @click="AddNewFeat()" class="addNewFeat m-0">
              <i class="far fa-plus-square"></i> Add New Feature
            </button>
          </td>
        </tr>
      </table>

      <div class="editFeat">
        <label>Feature Title</label>
        <input type="text" placeholder="Feature Title" class="feature-title" />
        <label>Feature Image</label>
        <input type="file" class="feature-image" />
        <button @click="AddUpdateFeat($event)" class="addFeatBtn">
          <i class="far fa-plus-square"></i> Add/Update Feature
        </button>
      </div>
    </div>

    <!-- WEBSITES EDIT -->
    <div class="home-editMode editMode websitesE">
      <button @click="BackToTable()" class="backToTable">
        <i class="fas fa-arrow-circle-left"></i> Back
      </button>
      <table class="table-websites">
        <tr>
          <th>Website Name</th>
          <th>Delete</th>
        </tr>
        <tr v-if="!PopWebsites[0]">
          <td colspan="2">No Features Yet</td>
        </tr>
        <tr v-else v-for="website in PopWebsites" :key="website.name">
          <td>{{ website.data.name }}</td>
          <td>
            <button :id="website.key" @click="deleteWebsite($event)">
              <i class="far fa-trash-alt"></i> Delete
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="padding:0">
            <button @click="AddNewWebsite()" class="addNewWebsite m-0">
              <i class="far fa-plus-square"></i> Add New Website
            </button>
          </td>
        </tr>
      </table>

      <div class="editWebsites">
        <label>Website Name</label>
        <input type="text" placeholder="Website Name" class="website-name" />
        <label>Website Url</label>
        <input type="url" placeholder="Website Url" class="website-url" />
        <button @click="AddWebsite()" class="addWebsiteBtn">
          <i class="far fa-plus-square"></i> Add Website
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: none;
  overflow-x: scroll;
  padding: 30px 20px;
  @include xxs {
    padding: 30px 0px;
    i{
      display: none;
    }
  }
  h2 {
    font-family: "Poppins", sans-serif;
    width: 70%;
    display: inline-block;
    padding: 20px 0 35px;
  }
  &.active {
    display: block;
  }
  button {
    border-radius: 10px;
    width: 100%;
    background: #384AD7;
    margin: 15px 0;
    &:hover {
      transform: none;
      background: rgb(47, 62, 175);
      color: #fff;
    }
  }
  table {
    width: 100%;
    .btnTh {
      padding: 0;
      border: 0;
      background: none;
    }
    tr:nth-child(even){
      background: #f6f3ff;
    }
    th {
      background: #eee;
      text-align: center;
      font-family: "Barlow", sans-serif;
      border: 0;
      font-size: 20px;
      padding: 12px 20px;
      &:first-child{
        text-align: left;
      }
    }
    td {
      text-align: center;
      border: 0;
      font-family: 'Poppins', sans-serif;
      &:first-child{
        text-align: left;
      }
    }
  }
  .editMode {
    display: none;
    .editFeat,
    .editWebsites {
      display: none;
    }
    label {
      display: block;
      width: 100%;
      margin-top: 20px;
      font-size: 18px;
      font-family: "Barlow", sans-serif;
    }
    input {
      display: block;
      width: 100%;
      border-radius: 0;
      font-family: "Barlow", sans-serif;
    }
    button {
      border-radius: 10px;
      width: 100%;
      background: #384AD7;
      margin: 15px 0;
      &:hover {
        transform: none;
        background: rgb(47, 62, 175);
        color: #fff;
      }
    }
    .add {
      background: #ccc;
      color: #262626;
      border: none;
      width: 20%;
      font-size: 14px;
      margin: 0;
      &.last {
        @include xs {
          width: 100%;
        }
      }
      @include xs {
        width: 50%;
      }
    }
  }
}
</style>

<script>
export default {
  name: "HomeControl",
  data() {
    return {
      headerTitle: "",
      feats: [],
      PerCov: "",
      PopWebsites: []
    };
  },
  methods: {
    BackToTable() {
      if ($(".editFeat").css("display") == "block") {
        $(".table-feats").show();
        $(".editFeat").hide();
        $(".feature-title").val("");
        $(".feature-image").val("");
      } else if ($(".editWebsites").css("display") == "block") {
        $(".website-name").val("");
        $(".website-url").val("");
        $(".table-websites").show();
        $(".editWebsites").hide();
      } else {
        $(".home-table").show();
        $(".editMode").hide();
      }
      $(".doc-title").val("");
      $(".doc-content").val("");
    },
    editFeats() {
      $(".home-table").hide();
      $(".editMode.featuresE").show();
    },
    editFeat(e) {
      $(".table-feats").hide();
      $(".editFeat").show();
      $(".addFeatBtn").attr("id", e.path[0].id);
      var key = e.path[0].id;
      this.feats.forEach((feat, i) => {
        if (feat.key == key) {
          $(".feature-title").val(feat.data.title);
        }
      });
    },
    AddNewFeat() {
      $(".table-feats").hide();
      $(".editFeat").show();
      $(".addFeatBtn").attr("id", "new");
    },
    AddUpdateFeat(e) {
      var title = $(".feature-title").val();
      var img = $(".feature-image").val();
      var random = Math.floor(Math.random() * 1000000000000);
      if (title != false && img != false) {
        var file = $(".feature-image")[0].files[0];
        var metadata = { contentType: file.type };
        if (e.path[0].id == "new") {
          firebase
            .storage()
            .ref(`features/${random}`)
            .put(file, metadata)
            .then(() => {
              console.log(
                `Your File Stored Successfully at Path: ( features/${random} )`
              );
              firebase
                .storage()
                .ref(`features/${random}`)
                .getDownloadURL()
                .then(image => {
                  db.add(`features/${random}`, { title, image })
                    .then(() => {
                      Swal.fire(
                        "Success",
                        `Your Feature Has Been Added`,
                        "success"
                      );
                      var feat = {
                        data: { title, image },
                        key: random
                      };
                      this.feats.push(feat);
                      $(".feature-title").val("");
                      $(".feature-image").val("");
                      $(".backToTable").click();
                    })
                    .catch(err => {
                      Swal.fire({
                        type: "error",
                        title: "Error",
                        text: err.message
                      });
                    });
                });
            })
            .catch(err => {
              Swal.fire({
                type: "error",
                title: "Error",
                text: err.message
              });
            });
        } else {
          var key = e.path[0].id;
          firebase
            .storage()
            .ref(`features/${key}`)
            .put(file, metadata)
            .then(() => {
              console.log(
                `Your File Stored Successfully at Path: ( features/${key} )`
              );
              firebase
                .storage()
                .ref(`features/${key}`)
                .getDownloadURL()
                .then(image => {
                  db.update(`features/${key}`, { title, image })
                    .then(() => {
                      Swal.fire(
                        "Success",
                        `Your Feature Has Been Updated`,
                        "success"
                      );
                      this.feats.forEach((feat, i) => {
                        if (feat.key == key) {
                          this.feats[i].data.title = title;
                        }
                      });
                      $(".feature-title").val("");
                      $(".feature-image").val("");
                      $(".backToTable").click();
                    })
                    .catch(err => {
                      Swal.fire({
                        type: "error",
                        title: "Error",
                        text: err.message
                      });
                    });
                });
            })
            .catch(err => {
              Swal.fire({
                type: "error",
                title: "Error",
                text: err.message
              });
            });
        }
      } else {
        Swal.fire({
          type: "error",
          title: "Error",
          text: "Error, Empty Fields"
        });
      }
    },
    deleteFeat(e) {
      var key = e.path[0].id;
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        })
        .then(result => {
          if (result.value) {
            var key = e.path[0].id;
            db.delete(`features/${key}`)
              .then(() => {
                storage.delete(`features/${key}`).then(() => {
                  this.feats.forEach((feat, i) => {
                    if (feat.key == key) {
                      this.feats.splice(i, 1);
                    }
                  });
                  Swal.fire("Success", `Delete Successful`, "success");
                });
              })
              .catch(err => {
                Swal.fire({
                  type: "error",
                  title: "Error",
                  text: err.message
                });
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire("Cancelled", "", "error");
          }
        });
    },
    editHT() {
      $(".header-title").val(this.headerTitle);
      $(".home-table").hide();
      $(".editMode.htEdit").show();
    },
    SubmitEditHT() {
      var title = $(".header-title").val();
      db.update("headerTitle", { title }).then(() => {
        this.headerTitle = title;
        Swal.fire("Success", `Updated Successfuly`, "success");
        $(".home-table").show();
        $(".editMode.htEdit").hide();
      });
    },
    editPW() {
      $(".home-table").hide();
      $(".editMode.websitesE").show();
    },
    AddNewWebsite() {
      $(".table-websites").hide();
      $(".editWebsites").show();
    },
    AddWebsite() {
      var name = $(".website-name").val();
      var url = $(".website-url").val();
      var random = Math.floor(Math.random() * 1000000000000);
      if (name != false && url != false) {
        db.add(`websites/${random}`, { name, url })
          .then(() => {
            Swal.fire("Success", `A New Website Has Been Added`, "success");
            var website = {
              data: { name, url },
              key: random
            };
            this.PopWebsites.push(website);
            $(".website-name").val("");
            $(".website-url").val("");
            $(".backToTable").click();
          })
          .catch(err => {
            Swal.fire({
              type: "error",
              title: "Error",
              text: err.message
            });
          });
      } else {
        Swal.fire({
          type: "error",
          title: "Error",
          text: "Error, Empty Fields"
        });
      }
    },
    deleteWebsite(e) {
      var key = e.path[0].id;
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        })
        .then(result => {
          if (result.value) {
            var key = e.path[0].id;
            db.delete(`websites/${key}`)
              .then(() => {
                this.PopWebsites.forEach((website, i) => {
                  if (website.key == key) {
                    this.PopWebsites.splice(i, 1);
                  }
                });
                Swal.fire("Success", `Delete Successful`, "success");
              })
              .catch(err => {
                Swal.fire({
                  type: "error",
                  title: "Error",
                  text: err.message
                });
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire("Cancelled", "", "error");
          }
        });
    }
  },
  created() {
    db.get("features").then(Data => {
      if (Data) {
        Data.forEach(data => {
          var feat = {
            data: data.val(),
            key: data.key
          };
          this.feats.push(feat);
        });
      }
    });

    db.get("websites").then(Data => {
      if (Data) {
        Data.forEach(data => {
          var website = {
            data: data.val(),
            key: data.key
          };
          this.PopWebsites.push(website);
        });
      }
    });

    db.get("headerTitle").then(data => {
      this.headerTitle = data.val().title;
    });
  }
};
</script>
