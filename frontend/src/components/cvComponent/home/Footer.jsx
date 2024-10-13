import "./footer.css";
function Footer({ ...contact }) {
  return (
    <div className="footMain">
      <div className="cvContactInfo">
        <div className="phoneDiv">
          {contact.phoneNo ? (
            <>
              <div>Call me at </div>
              <div className="divColorFoot">{contact.phoneNo}</div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="linkedDiv">
          {contact.linkedIn ? (
            <>
              <div>Connect me at </div>
              <div
                className="divColorFoot"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("https://" + contact.linkedIn);
                }}
              >
                Linkedin
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="emalDiv">
          {contact.emailld ? (
            <div
              className="divColorFoot"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("mailto:" + contact.emailld);
              }}
            >
              Mail Me Here
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
