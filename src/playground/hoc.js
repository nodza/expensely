// Higher Order Component (HOC) is a component that renders another component
// Advanges are:
// Reusable code
// Render highjacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h2>Info</h2>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (ProtectedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <ProtectedComponent {...props} />
      ) : (
        <p>Please log in to see a special message.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="The devil is in the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="You're our favorite client. Please do not share" />, document.getElementById('app'));