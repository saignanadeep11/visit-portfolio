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
                  window.open(contact.linkedIn);
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
          {contact.emailId ? (
            <div
              className="divColorFoot"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(`mailto:${contact.emailId}`);
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
