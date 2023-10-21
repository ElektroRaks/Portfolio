const apiEndpoint = "works.json";
const display = document.querySelector("#data-output");

const getData = async () => {
  const res = await fetch(apiEndpoint);
  const data = await res.json();
  return data
}

const displayData = async () => {
  const payload = await getData();

  let datadisplay = payload.map((Object) => {
     const {id, Category, image, title, description, project_involve, project_url } = Object;

     return `

         <div class="col-ms-10 col-md-3">
            <div class="project" data-toggle="modal" data-target="#modal-${id}">
                <figure class="img-responsive">
                  <img src="${image}">
                  <span class="category"> ${Category}</span>
                </figure>
                <div class="work-title">
                  <div class="subheading text-gold"> ${title} </div>
                </div>
                <small>${description}</small>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="modal-${id}" tabindex="-1" role="dialog" aria-labelledby="modal1" style="display: none;" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-gold" id="modal1">${title}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="container-fluid">
                    <div class="row display-column">
                      <img style="width: 100%;" src="${image}">
                      <a target="_blank" class="link-btn-position" href="${project_url}" style="text-decoration:none">
                         <span class="fa-stack fa-lg">
                           <i class="fa fa-circle fa-stack-2x"></i>
                           <i class="fa fa-link fa-stack-1x fa-inverse"></i>
                         </span>
                       </a>
                      <div class="mt-3">
                        <strong>Short Project Desc:</strong><br>
                        ${description}
                      </div>
                      <div class="mt-3">
                        <strong>Project involvement:</strong><br>
                        ${project_involve}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     `;
  }).join("");

  display.innerHTML = datadisplay;
}
displayData();




const old_works = "works_old.json";
const displayOld = document.querySelector("#data-output-all");

const getOldData = async () => {
  const resold = await fetch(old_works);
  const dataOld = await resold.json();
  return dataOld
}

const displayOldData = async () => {
  const oldpayload = await getOldData();

  let dataOlddisplay = oldpayload.map((Object) => {
     const {id, old_Category, old_image, old_title, old_description, old_project_involve, old_project_url } = Object;

     return `

         <div class="col-ms-10 col-md-3">
            <div class="project" data-toggle="modal" data-target="#modal-${id}">
                <figure class="img-responsive">
                  <img src="${old_image}">
                  <span class="category"> ${old_Category}</span>
                </figure>
                <div class="work-title">
                  <div class="subheading text-gold"> ${old_title} </div>
                </div>
                <small>${old_description}</small>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="modal-${id}" tabindex="-1" role="dialog" aria-labelledby="modal1" style="display: none;" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-gold" id="modal1">${old_title}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="container-fluid">
                    <div class="row display-column">
                      <img style="width: 100%;" src="${old_image}">
                      <a target="_blank" class="link-btn-position" href="${old_project_url}">
                         <span class="fa-stack fa-lg">
                           <i class="fa fa-circle fa-stack-2x"></i>
                           <i class="fa fa-link fa-stack-1x fa-inverse"></i>
                         </span>
                       </a>
                      <div class="mt-3">
                        <strong>Short Project Desc:</strong><br>
                        ${old_description}
                      </div>
                      <div class="mt-3">
                        <strong>Project involvement:</strong><br>
                        ${old_project_involve}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     `;
  }).join("");

  displayOld.innerHTML = dataOlddisplay;
}
displayOldData();

