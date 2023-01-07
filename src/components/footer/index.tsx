import "./styles.scss";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <div className="logo-footer">
            <img src="/Logo-black.png" alt="" />
            <h3>GroundDesk</h3>
          </div>
          <p>Manage file easily. Everywhere, everytime.</p>
        </div>
        <div className="right-footer">
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Product</a>
              </li>
              <li>
                <a href="">Testimonial</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Our Works</h3>
            <ul>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Customer</a>
              </li>
              <li>
                <a href="">Product</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Social</h3>
            <ul>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">©2022 GrounDesk. All right reserved</div>
    </footer>
  );
};
