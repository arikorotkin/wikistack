const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div>
      <label for="author-name" class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
        <input id="author-name" name="author-name" type="text" class="form-control"/>
      </div>
    </div>
    
    <div>
      <label for="author-email" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="author-email" name="author-email" type="text" class="form-control"/>
      </div>
    </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>
      <label for="content" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <textarea id="content" name="content" type="textarea" class="form-control"/></textarea>
      </div>
    </div>
    
    <div>
      <label for="status" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <input id="status-open" name="status" type="radio" class="form-control" value="open"/>Open</input>
        <input id="status-closed" name="status" type="radio" class="form-control" checked value="closed"/>Closed</input>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);