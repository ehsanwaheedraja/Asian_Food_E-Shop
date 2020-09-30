import React from "react";

export const Footer = () => {
  return (
    <div id="accordion" classNameName="panel-group">
      <div classNameName="panel panel-warning">
        <div classNameName="panel-heading">
          <h4 classNameName="panel-title">
            <a
              href="#panelBodyOne"
              data-toggle="collapse"
              data-parent="#accordion"
            >
              How Can I Track My Order?
            </a>
          </h4>
        </div>
        <div id="panelBodyOne" classNameName="panel-collapse collapse">
          <div classNameName="panel-body">
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </div>
        </div>
      </div>
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a
              href="#panelBodyTwo"
              data-toggle="collapse"
              data-parent="#accordion"
            >
              Which Payments Are Available?
            </a>
          </h4>
        </div>
        <div id="panelBodyTwo" className="panel-collapse collapse">
          <div className="panel-body">
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </div>
        </div>
      </div>
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a
              href="#panelBodyThree"
              data-toggle="collapse"
              data-parent="#accordion"
            >
              Can I Pick My Order At Your Company?
            </a>
          </h4>
        </div>
        <div id="panelBodyThree" className="panel-collapse collapse">
          <div className="panel-body">
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
