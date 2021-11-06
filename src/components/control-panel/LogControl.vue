<template>
  <div class="content log active">
    <div class="head">
      <h2>Log Control Panel</h2>
      <button @click="AddNewLog()"><i class="far fa-plus-square"></i> New Log</button>
    </div>
    <table class="logs-table">
      <tr>
        <th>Log</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-if="!logs[0]">
        <td colspan="3">No Logs To Show</td>
      </tr>
      <tr v-else v-for="log in logs" :key="log.perority">
        <td>{{ log.title }}</td>
        <td>
          <button :id="log.perority" @click="editLog($event)">
            <i class="far fa-edit"></i> Edit
          </button>
        </td>
        <td>
          <button :id="log.perority" @click="deleteLog($event)">
            <i class="far fa-trash-alt"></i> Delete
          </button>
        </td>
      </tr>
    </table>

    <div class="logs-editMode editMode">
      <button @click="BackToLogsTable()" class="backToTable">
        <i class="fas fa-arrow-circle-left"></i> Back
      </button>
      <label>Log Title</label>
      <input type="text" placeholder="Log Title" class="log-title" />
      <label>Log Content</label>
      <button class="add" @click="addLogTitle()">Add Title</button>
      <button class="add" @click="addLogCode()">Add Log</button>
      <div class="log-content" contenteditable="true"></div>
      <button @click="SendLogToDB($event)" class="submitLogBtn"><i class="far fa-edit"></i> Submit</button>
    </div>
  </div>
</template>

<style lang="scss">
.log-content{
  padding: 25px;
  background: #F8F8F8;
  font-family: "Barlow", sans-serif;
  outline: none;
  min-height: 500px;
  box-shadow: 0 3px 10px 1px rgba($color: #000000, $alpha: 0.1);
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
  .head{
    padding: 25px 0;
    h2 {
      font-family: "Poppins", sans-serif;
      width: 70%;
      display: inline-block;
      padding: 0;
      margin: 0;
    }
    button{
      width: 30%;
    }
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
    label {
      display: block;
      width: 100%;
      margin-top: 40px;
      font-size: 18px;
      font-family: "Barlow", sans-serif;
    }
    input,
    textarea {
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
      background: #eee;
      color: #262626;
      border: none;
      width: 50%;
      font-size: 14px;
      margin: 0;
      text-transform: uppercase;
      font-weight: bold;
      font-family: "Barlow", sans-serif;
      @include xs {
        width: 100%;
      }
      &:hover{
        transform: scale(0.95);
        background: #ccc;
        color: #000;
      }
      &:focus{
        transform: scale(0.95);
        background: #ccc;
        color: #000;
      }
    }
  }
}
</style>

<script>
export default {
  name: "LogControl",
  data() {
    return {
      logs: []
    };
  },
  methods: {
    AddNewLog() {
      $(".logs-table").hide();
      $(".head button").hide();
      $(".logs-editMode").show();
      $(".submitLogBtn").attr("id", "new");
    },
    BackToLogsTable() {
      $(".head button").show();
      $(".logs-table").show();
      $(".logs-editMode").hide();
      $(".log-title").val("");
      $(".log-content").html("");
    },
    addLogTitle() {
      var oldHtml = $(".log-content").html();
      var edits = `<br><h2>Version 1.0.0</h2><br><h5>${new Date().toDateString()}</h5>`;
      $(".log-content").html(oldHtml + edits);
    },
    addLogCode() {
      var oldHtml = $(".log-content").html();
      var edits = `<li>New: log</li>`;
      $(".log-content").html(oldHtml + edits);
    },
    SendLogToDB(e) {
      var title = $(".log-title").val();
      var content = $(".log-content").html();
      var perority = Date.now();
      if (title != false && content != false) {
        if (e.path[0].id == "new") {
          db.update(`logs/${perority}`, {
            title,
            content,
            perority
          }).then(() => {
              Swal.fire("Success", `Your New Logs Has Been Added`, "success");
              $(".log-title").val("");
              $(".log-content").html("");
              this.logs.push({ title, content, perority });
            }).catch(err => {
              Swal.fire({
                type: "error",
                title: "Error",
                text: err.message
              });
            });
        } else {
          db.update(`logs/${e.path[0].id}`, {
            title,
            content,
            perority: Number(e.path[0].id)
          }).then(() => {
              Swal.fire("Success", `Your Logs Has Been Updated`, "success");
              $(".log-title").val("");
              $(".log-content").html("");
              this.logs.forEach(log => {
                if (log.perority == e.path[0].id) {
                  log.title = title;
                  log.content = content;
                }
              });
              $(".backToTable").click();
            }).catch(err => {
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
    editLog(e) {
      var perority = e.path[0].id;
      $(".logs-table").hide();
      $(".head button").hide();
      $(".logs-editMode").show();
      $(".submitLogBtn").attr("id", perority);
      this.logs.forEach((log, i) => {
        if (log.perority == perority) {
          var title = this.logs[i].title;
          var content = this.logs[i].content;
          $(".log-title").val(title);
          $(".log-content").html(content);
        }
      });
    },
    deleteLog(e) {
      var perority = e.path[0].id;
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
            var perority = e.path[0].id;
            db.delete(`logs/${perority}`).then(() => {
                Swal.fire("Success", `Delete Successful`, "success").then(
                  () => {
                    this.logs.forEach((log, i) => {
                      if (log.perority == perority) {
                        this.logs.splice(i, 1);
                      }
                    });
                  }
                );
              }).catch(err => {
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
    db.get(`logs`, "child", "perority").then(Data => {
      if (Data) {
        Data.forEach(data => {
          this.logs.unshift(data.val());
        });
      }
    });
  }
};
</script>
