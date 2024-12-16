function Footer() {
  return (
    <section
      style={{ backgroundColor: "#000000" }}
      className="justify-center items-center p-8"
    >
      <div className="flex justify-around items-center">
        <p className="text-white text-wrap">© 2022 Embrace, Inc. - All Rights Reserved</p>
        <div className="gourp_1 text-white flex gap-5">
          <p>Terms of use</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
