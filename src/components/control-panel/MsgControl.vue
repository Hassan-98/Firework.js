<template>
  <div class="content Msg active">
    <h2>Messages Control Panel</h2>
    <table class="msgs-table">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Message</th>
        <th>Delete</th>
      </tr>
      <tr v-if="!msgs[0]">
        <td colspan="3">No Messages To Show</td>
      </tr>
      <tr v-else v-for="msg in msgs" :key="msg.key">
        <td>{{ msg.data.name }}</td>
        <td>{{ msg.data.email }}</td>
        <td>{{ msg.data.message }}</td>
        <td>
          <button :id="msg.key" @click="deleteMsg($event)">
            <i class="far fa-trash-alt"></i> Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: none;
  overflow-x: scroll;
  padding: 30px 20px;
  @include xxs {
    padding: 30px 0px;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    width: 100%;
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
    }
    th {
      background: #f6f3ff;
      text-align: center;
      font-family: "Barlow", sans-serif;
    }
    td {
      text-align: center;
      &:nth-of-type(3) {
        width: 50%;
      }
    }
  }
}
</style>

<script>
export default {
  name: "MsgControl",
  data() {
    return {
      msgs: []
    };
  },
  methods: {
    deleteMsg(e) {
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
            db.delete(`contact-messages/${key}`)
              .then(() => {
                Swal.fire("Success", `Delete Successful`, "success").then(
                  () => {
                    this.msgs.forEach((msg, i) => {
                      if (msg.key == key) {
                        this.msgs.splice(i, 1);
                      }
                    });
                  }
                );
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
    db.get(`contact-messages`, "child", "perority").then(Data => {
      if (Data) {
        Data.forEach(data => {
          var Msg = {
            data: data.val(),
            key: data.key
          };
          this.msgs.push(Msg);
        });
      }
    });
  }
};
</script>
