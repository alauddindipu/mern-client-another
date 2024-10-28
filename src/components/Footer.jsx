import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 flex justify-center">
       <aside className="grid-flow-col items-center">
        {/* <img src="src\assets\owner.png" alt="" /> */}
        <div className="avatar">
          <div className="w-24 rounded-full size-5">
            {/* <img src={ownerPic} alt="Owner" /> */}

          </div>
        </div>
        <p>
          TechBooks Ltd.
          <br />
          Sirajganj, Bangladesh.
        </p>
      </aside>
      <nav className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">

          <a href="https://www.youtube.com/@Alauddindipu" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://web.facebook.com/profile.php?id=61560391510854" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;