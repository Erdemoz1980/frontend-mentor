import illusEditor from '../images/illustration-editor-desktop.svg';
import illusPhones from '../images/illustration-phones.svg';
import illusLaptop from '../images/illustration-laptop-desktop.svg';

const Main = () => {
  return (
    <main className="main-section">

      <section className="section-top">
        <div className="container">
          <h1 className='section-main-title'>Designed for the future</h1>
          <div className="section-top-grid">
            <div className="left-side">
              <div className="el-side-top">
                <h2 className='section-title'>Introducing an extensible editor</h2>
                <p className='section-paragraph'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                  change the looks of a blog.</p>
              </div>
              <div className="el-side-bottom">
                <h2 className='section-title'>Robust content managment</h2>
                <p className='section-paragraph'>Flexible content managment enables users to move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
              </div>
            </div>
            <div className="right-side">
              <img src={illusEditor} alt="illustration editor" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-middle">
        <div className="container">
          <div className="section-middle-grid">
            <img src={illusPhones} alt="illustration phones" />
            <div className="section-middle-right">
              <h1 className='section-main-title'>State of the Art Infrastructure</h1>
              <p className="section-paragraph"> With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom">
        <div className="container">
          <div className="section-bottom-grid">
            <div className="section-bottom-left">
              <img src={illusLaptop} alt='laptop' />
            </div>
            <div className="section-bottom-right">
              <div className="el-side-top">
                <h2 className="section-title">Free, open, simple</h2>
                <p className="section-paragraph">
                  Blogr is a free and open source application backed by a large community of helpful developers. It supports
                  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                </p>
              </div>

              <div className="el-side-bottom">
                <div className="el-side-bottom">
                  <h2 className="section-title">Powerful Tooling</h2>
                  <p className="section-paragraph">
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                    capable of producing even the most complicated sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};

export default Main