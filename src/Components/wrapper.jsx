import "./wrapper.css"

function wrapper({children}){
  return (
    <div className="wrapper">{children}</div>
  );
}

export default wrapper;