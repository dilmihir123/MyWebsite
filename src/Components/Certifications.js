import React, { Component } from 'react';

class Certifications extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.certification.map(function(certification){
        var projectImage = 'images/CertImages/'+certification.image;
        return <div key={certification.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={certification.url} title={certification.title}>
               <img alt={certification.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{certification.title}</h5>
                     <p>{certification.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="Certifications">

      <div className="row">

         <div className="twelve columns collapsed">
         <div><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p></div>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Certifications;
