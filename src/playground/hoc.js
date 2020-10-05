//Higher order component (hoc) - a component that renders another component - reuse code
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Information</h1>
    <p>The info is: {props.info}</p>
    </div>
);

//wrapped
const myAdmin = (WrappedComponent) => { 
    return (props) => ( 
        <div>
          {props.isAdmin && <p>This is private info. Please don't share!</p>}
          <WrappedComponent {...props}/>        
        </div>
    )
};

//requireAuthentication - if props is authenticated then show the spread props or else login
const requireAuthentication = (WrappedComponent) => {
    return (props) => ( //props means its a stateless functional component
        <div>
            {props.isAuthenticated? (
                <WrappedComponent {...props} />
            ): (
                <p>Please login to view the info!</p>
            )}
        </div>
    )
}

const AdminInfo = myAdmin(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="my details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="my home details" />, document.getElementById('app'));