<template>
  <div class="content docs active">
    <!-- HEAD -->
    <div class="head">
      <h2>Help Control Panel</h2>
      <button @click="AddNewCat()"><i class="far fa-plus-square"></i> New Category</button>
      <button @click="browesCats()"><i class="far fa-window-restore"></i> Browes Articles</button>
    </div>

    <!-- CATEGORIES TABLE -->
    <div class="table-1">
      <table class="help-table">
        <tr>
          <th colspan="2">Categories</th>
        </tr>
        <tr v-if="!catNames[0]">
          <td colspan="2">No Data To Show</td>
        </tr>
        <tr v-else v-for="cat in catNames" :key="cat">
          <td colspan="2">{{ cat }}</td>
        </tr>
      </table>
    </div>

    <!-- ARTICLES TABLE -->
    <div class="table-2">
      <button @click="BackToTable()" class="backToTable">
        <i class="fas fa-arrow-circle-left"></i> Back
      </button>
      <button @click="AddNewArt()">
        <i class="far fa-plus-square"></i> New Article
      </button>
      <table class="help-table">
        <tr>
          <th>Article</th>
          <th>Category</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr v-if="!articles[0]">
          <td colspan="4">No Data To Show</td>
        </tr>
        <tr v-else v-for="artc in articles" :key="artc.key">
          <td>{{ artc.data.title }}</td>
          <td>{{ artc.data.category }}</td>
          <td>
            <button :id="artc.key" @click="editArt($event)">
              <i class="far fa-edit"></i> Edit
            </button>
          </td>
          <td :id="artc.data.category">
            <button :id="artc.key" @click="deleteArt($event)">
              <i class="far fa-trash-alt"></i> Delete
            </button>
          </td>
        </tr>
      </table>
    </div>

    <!-- CATEGORIES -->
    <div class="cat-editMode editMode">
      <button @click="BackToTable()" class="backToTable">
        <i class="fas fa-arrow-circle-left"></i> Back
      </button>
      <label>Category Name</label>
      <input type="text" placeholder="Category Name" class="cat-name" />
      <button @click="SendCatToDB($event)" class="submitCatBtn">
        <i class="far fa-edit"></i> Submit
      </button>
    </div>

    <!-- ARTICLES -->
    <div class="help-editMode editMode">
      <button @click="BackToTable()" class="backToTable">
        <i class="fas fa-arrow-circle-left"></i> Back
      </button>
      <label>Article Title</label>
      <input type="text" placeholder="Article Title" class="article-title" />
      <label>Article Category</label>
      <select class="article-category"> </select>
      <label>Article Content</label>
      <button class="add" @click="addArtMTitle()">M-Title</button>
      <button class="add" @click="addArtSTitle()">S-Title</button>
      <button class="add" @click="addArtHTML()">html</button>
      <button class="add" @click="addArtCSS()">css</button>
      <button class="add" @click="addArtJS()">js</button>
      <button class="add" @click="addArtJSON()">json</button>
      <button class="add" @click="addArtBASH()">Bash</button>
      <button class="add" @click="addArtCode()">Code</button>
      <button class="add" @click="addArtBR()">BR</button>
      <button class="add" @click="addArtTxt()">Txt</button>
      <button class="add" @click="addArtNotice()">Ntc</button>
      <button class="add" @click="addArtB()">Bold</button>
      <button class="add" @click="addArtI()">Italic</button>
      <button class="add" @click="addArtUnder()">Under</button>
      <button class="add" @click="addArtImg()">Img</button>
      <button class="add" @click="addArtLink()">Link</button>
      <div class="article-content-edit" contenteditable="true"></div>
      <button @click="SendArtToDB($event)" class="submitArtBtn"><i class="far fa-edit"></i> Submit </button>
    </div>
  </div>
</template>

<style lang="scss">
.article-content-edit{
  padding: 25px;
  background: #F8F8F8;
  font-family: "Barlow", sans-serif;
  outline: none;
  min-height: 500px;
  box-shadow: 0 3px 10px 1px rgba($color: #000000, $alpha: 0.1);
  pre {
    transition: none !important;
    box-shadow: 1px 1px 6px rgba($color: #000, $alpha: 0.1);
    padding: 15px 20px !important;
    font-family: monospace;
    code {
      font-family: monospace;
      transition: none !important;
    }
  }

  p > code {
    background: #f7f7f7;
    padding: 5px;
  }
  h2 {
    font-family: "Barlow", sans-serif;
    color: #3f3d56;
    margin-top: 0;
    margin-bottom: 25px;
    &::before {
      content: "# ";
      color: #6f4fae;
      font-size: 120%;
    }
  }
  h3, h4 {
    font-family: "Barlow", sans-serif;
    color: #3f3d56;
    margin-top: 25px;
    margin-bottom: 15px;
    &::before {
      content: "» ";
      color: #6f4fae;
    }
  }
  p {
    &.notice {
      padding: 15px 20px;
      background-color: #f9fafb;
      border-left: 5px solid #eaeff4;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      color: #999;
      font-family: "Barlow", sans-serif;
      font-weight: bold;
      &::before {
        content: "\f071";
        font-family: "Font Awesome 5 Pro";
        margin-right: 5px;
        font-weight: 700;
        color: #999;
      }
    }
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
      width: 60%;
      display: inline-block;
      padding: 0;
      margin: 0;
  
      @include xxs {
        width: 100%;
      }
    }
    button{
      width: calc(20% - 16px);
      margin-right: 8px;
      @include xxs {
        margin-top: 10px;
        width: calc(50% - 16px);
      }
    }
  }

  &.active {
    display: block;
  }
  button {
    border-radius: 10px;
    width: 100%;
    background: #384AD7;
    border: none;
    box-shadow: 1px 1px 6px rgba($color: #000, $alpha: 0.3);
    font-family: 'Poppins', sans-serif;
    &:hover {
      transform: none;
      background: rgb(47, 62, 175);
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
      padding: 15px 22px;
      font-size: 20px;
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
  .table-2 {
    display: none;
    & > button{
      width: 50%;
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
    textarea,
    select {
      display: block;
      width: 100%;
      border-radius: 0;
      font-family: "Barlow", sans-serif;
    }
    button {
      border-radius: 0;
      width: 100%;
      background: #384AD7;
      margin: 15px 0;
      &:hover {
        transform: none;
        background: rgb(47, 62, 175);
        color: #fff;
      }
    }
    .backToTable{
      background: #eee;
      color: #262626;
      border-color: #eee;
      font-weight: bold;
      font-family: "Barlow", sans-serif;
      &:hover{
        transform: translateY(-6px);
        box-shadow: 0 5px 8px rgba($color: #000, $alpha: 0.3);
        background: #eee;
        color: #262626;
      }
    }
    .add {
      background: #eee;
      color: #262626;
      border: none;
      width: 12.5%;
      font-size: 14px;
      margin: 0;
      text-transform: uppercase;
      font-weight: bold;
      font-family: "Barlow", sans-serif;
      @include xs {
        width: 50%;
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
  name: "HelpControl",
  data() {
    return {
      catNames: [],
      articles: []
    };
  },
  methods: {
    AddNewCat() {
      $(".table-1").hide();
      $(".head button").hide();
      $(".cat-editMode").show();
    },
    browesCats() {
      $(".table-1").hide();
      $(".head button").hide();
      $(".table-2").show();
    },
    AddNewArt() {
      $(".table-2").hide();
      $(".help-editMode").show();
      $(".submitArtBtn").attr("id", "new");
      $(".article-category").attr("disabled", false);
      $(".article-category").html("");
      this.catNames.forEach(catName => {
        var option = `<option value="${catName}">${catName}</option>`;
        $(".article-category").append(option);
      });
    },
    BackToTable() {
      if ($(".help-editMode").css("display") == "block") {
        $(".table-2").show();
        $(".help-editMode").hide();
        $(".article-title").val("");
        $(".article-content-edit").html("");
      } else if ($(".cat-editMode").css("display") == "block") {
        $(".table-1").show();
        $(".head button").show();
        $(".cat-editMode").hide();
        $(".cat-name").val("");
      } else {
        $(".table-1").show();
        $(".head button").show();
        $(".table-2").hide();
      }
    },addArtMTitle() {
      var selection = window.getSelection().toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var edits = $(".article-content-edit").html().replace(selection, `<h2>${selection}</h2>`);
      $(".article-content-edit").html(edits);
    },
    addArtSTitle() {
      var selection = window.getSelection().toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var edits = $(".article-content-edit").html().replace(selection, `<h3>${selection}</h3>`);
      $(".article-content-edit").html(edits);
    },
    addArtTxt() {
      var selection = window.getSelection().toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var edits = $(".article-content-edit").html().replace(selection, `<p>${selection}</p>`);
      $(".article-content-edit").html(edits);
    },
    addArtNotice() {
      var selection = window.getSelection().toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var edits = $(".article-content-edit").html().replace(selection, `<p class="notice">${selection}</p>`);
      $(".article-content-edit").html(edits);
    },
    addArtB() {
      var selection = window.getSelection().toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var edits = $(".article-content-edit").html().replace(selection, `<b>${selection}</b>`);
      $(".article-content-edit").html(edits);
    },
    addArtI() {
      var selection = window.getSelection().toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var edits = $(".article-content-edit").html().replace(selection, `<i>${selection}</i>`);
      $(".article-content-edit").html(edits);
    },
    addArtUnder() {
      var selection = window.getSelection().toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var edits = $(".article-content-edit").html().replace(selection, `<u>${selection}</u>`);
      $(".article-content-edit").html(edits);
    },
    addArtImg() {
      Swal.fire({
        input: 'url',
        inputPlaceholder: 'Type your image link here...',
        showCancelButton: true
      }).then(input => {
        if(input.value){
          var code = `<br/><img src="${input.value}"><br/>`;
          var oldHtml = $(".article-content-edit").html();
          $(".article-content-edit").html(oldHtml + code);
        } else {
          Swal.fire({
            type: 'error',
            text: 'Error! Empty Fields',
          });
        }
      });
    },
    addArtLink() {
      if(window.getSelection().toString().length > 0){
        var txt = window.getSelection().toString();
        Swal.fire({
          input: 'url',
          inputPlaceholder: 'Type your link here...',
          showCancelButton: true
        }).then(input => {
          if(input.value){
            var code = `<br/><a href="${input.value}" target="_blank">${txt}</a><br/>`;
            var oldHtml = $(".article-content-edit").html();
            $(".article-content-edit").html(oldHtml + code);
          } else {
            Swal.fire({
              type: 'error',
              text: 'Error! Empty Fields',
            });
          }
        });
      } else {
        Swal.fire({
          type: 'error',
          text: 'Error! Please Select The Link Text',
        });
      }
    },
    addArtHTML() {
      if(window.getSelection().toString().length > 0){
        Swal.fire({
          input: 'textarea',
          inputPlaceholder: window.getSelection().toString(),
          inputValue: window.getSelection().toString()
        }).then(input => {
          if (input.value){
            $(".swal2-textarea").select();
            document.execCommand('copy',false);
          }
        });
      } else {
        Swal.fire({
          input: 'textarea',
          inputPlaceholder: 'Type your codes here...',
          showCancelButton: true
        }).then(input => {
          if(input.value){
            var code = `<br/><pre><code class='language-html'>${input.value.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre><br/>`;
            var oldHtml = $(".article-content-edit").html();
            $(".article-content-edit").html(oldHtml + code);
          } else {
            Swal.fire({
              type: 'error',
              text: 'Error! empty fields',
            });
          }
        });
      }
    },
    addArtCSS() {
      if(window.getSelection().toString().length > 0){
        Swal.fire({
          input: 'textarea',
          inputPlaceholder: window.getSelection().toString(),
          inputValue: window.getSelection().toString()
        }).then(input => {
          if (input.value){
            $(".swal2-textarea").select();
            document.execCommand('copy',false);
          }
        });
      } else {
        Swal.fire({
          input: 'textarea',
          inputPlaceholder: 'Type your codes here...',
          showCancelButton: true
        }).then(input => {
          if(input.value){
            var code = `<br/><pre><code class='language-css'>${input.value.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre><br/>`;
            var oldHtml = $(".article-content-edit").html();
            $(".article-content-edit").html(oldHtml + code);
          } else {
            Swal.fire({
              type: 'error',
              text: 'Error! empty fields',
            });
          }
        });
      }
    },
    addArtJS() {
      if(window.getSelection().toString().length > 0){
        Swal.fire({
          input: 'textarea',
          inputPlaceholder: window.getSelection().toString(),
          inputValue: window.getSelection().toString()
        }).then(input => {
          if (input.value){
            $(".swal2-textarea").select();
            document.execCommand('copy',false);
          }
        });
      } else {
        Swal.fire({
          input: 'textarea',
          inputPlaceholder: 'Type your codes here...',
          showCancelButton: true
        }).then(input => {
          if(input.value){
            var code = `<br/><pre><code class='language-javascript'>${input.value.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre><br/>`;
            var oldHtml = $(".article-content-edit").html();
            $(".article-content-edit").html(oldHtml + code);
          } else {
            Swal.fire({
              type: 'error',
              text: 'Error! empty fields',
            });
          }
        });
      }
    },
    addArtJSON() {
      if(window.getSelection().toString().length > 0){
        Swal.fire({
          input: 'textarea',
          inputPlaceholder: window.getSelection().toString(),
          inputValue: window.getSelection().toString()
        }).then(input => {
          if (input.value){
            $(".swal2-textarea").select();
            document.execCommand('copy',false);
          }
        });
      } else {
        Swal.fire({
          input: 'textarea',
          inputPlaceholder: 'Type your codes here...',
          showCancelButton: true
        }).then(input => {
          if(input.value){
            var code = `<br/><pre><code class='language-json'>${input.value.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre><br/>`;
            var oldHtml = $(".article-content-edit").html();
            $(".article-content-edit").html(oldHtml + code);
          } else {
            Swal.fire({
              type: 'error',
              text: 'Error! empty fields',
            });
          }
        });
      }
    },
    addArtBASH() {
      if(window.getSelection().toString().length > 0){
        Swal.fire({
          input: 'textarea',
          inputPlaceholder: window.getSelection().toString(),
          inputValue: window.getSelection().toString()
        }).then(input => {
          if (input.value){
            $(".swal2-textarea").select();
            document.execCommand('copy',false);
          }
        });
      } else {
        Swal.fire({
          input: 'textarea',
          inputPlaceholder: 'Type your codes here...',
          showCancelButton: true
        }).then(input => {
          if(input.value){
            var code = `<br/><pre><code class='language-bash'>${input.value.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre><br/>`;
            var oldHtml = $(".article-content-edit").html();
            $(".article-content-edit").html(oldHtml + code);
          } else {
            Swal.fire({
              type: 'error',
              text: 'Error! empty fields',
            });
          }
        });
      }
    },
    addArtCode() {
      var selection = window.getSelection().toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var edits = $(".article-content-edit").html().replace(selection, `<code>${selection}</code>`);
      $(".article-content-edit").html(edits);
    },
    addArtBR() {
      $(".article-content-edit").html($(".article-content-edit").html() + '<br/>').focus();
    },
    SendArtToDB(e) {
      var title = $(".article-title").val();
      var content = $(".article-content-edit").html();
      var category = $(".article-category").val();
      var random = Math.floor(Math.random() * 1000000000000);
      if (title != false && content != false) {
        if (e.path[0].id == "new") {
          var perority = Date.now();
          db.update(`articles/${category}/${random}`, { title, content, perority, category }).then(() => {
              Swal.fire(
                "Success",
                `Your New Article Has Been Added`,
                "success"
              );
              $(".article-title").val("");
              $(".article-content-edit").html("");
              var artData = {
                key: random,
                data: { title, content, perority, category }
              };
              this.articles.push(artData);
              $(".backToTable").click();
            }).catch(err => {
              Swal.fire({
                type: "error",
                title: "Error",
                text: err.message
              });
            });
        } else {
          var perority = $(".article-content-edit").attr("id");
          db.update(`articles/${category}/${e.path[0].id}`, { title, content, perority, category }).then(() => {
              Swal.fire("Success", `Article Has Been Updated`, "success");
              $(".article-title").val("");
              $(".article-content-edit").html("");
              this.articles.forEach(art => {
                if (art.key == e.path[0].id) {
                  art.data.title = title;
                  art.data.content = content;
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
    editArt(e) {
      var key = e.path[0].id;
      $(".table-2").hide();
      $(".help-editMode").show();
      $(".submitArtBtn").attr("id", key);
      $(".article-category").html("");
      this.catNames.forEach(catName => {
        var option = `<option value="${catName}">${catName}</option>`;
        $(".article-category").append(option);
      });
      this.articles.forEach((art, i) => {
        if (art.key == key) {
          var title = this.articles[i].data.title;
          var content = this.articles[i].data.content;
          var category = this.articles[i].data.category;
          var perority = this.articles[i].data.perority;
          $(".article-title").val(title);
          $(".article-content-edit").html(content).attr("id", perority);
          $(".article-category").val(category);
        }
      });
      $(".article-category").attr("disabled", true);
    },
    deleteArt(e) {
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
            var category = e.path[1].id;
            db.delete(`articles/${category}/${key}`)
              .then(() => {
                Swal.fire("Success", `Delete Successful`, "success").then(
                  () => {
                    this.articles.forEach((art, i) => {
                      if (art.key == key) {
                        this.articles.splice(i, 1);
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
    },
    SendCatToDB(e) {
      var name = $(".cat-name").val();
      if (name != false) {
        db.add(`articles/${name}`, { catName: name, perority: 0 }).then(() => {
          Swal.fire("Success", `New Category Has Been Added`, "success");
          $(".cat-name").val("");
          this.catNames.push(name);
          $(".backToTable").click();
        });
      } else {
        Swal.fire({
          type: "error",
          title: "Error",
          text: "Error, Empty Fields"
        });
      }
    }
  },
  created() {
    db.get(`articles`, 'child', 'perority').then(Data => {
      if (Data) {
        Data.forEach(data => {
          this.catNames.push(data.val().catName);
          db.get(`articles/${data.val().catName}`).then(Data2 => {
            if (Data2) {
              Data2.forEach(data2 => {
                if (typeof data2.val() == "object") {
                  var myData = {
                    key: data2.key,
                    data: data2.val()
                  };
                  this.articles.push(myData);
                }
              });
            }
          });
        });
      }
    });
  }
};
</script>
