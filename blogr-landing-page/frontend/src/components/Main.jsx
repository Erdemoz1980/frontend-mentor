import illusEditor from '../images/illustration-editor-desktop.svg';
import illusPhones from '../images/illustration-phones.svg';

const Main = () => {
  return (
    <main className="main-section">
      <section className="section-top">
        <div className="container">
          <h1 className='section-main-title'>Designed for the future</h1>
          <div className="section-top-grid">
            <div className="left-side">
              <div className="left-top">
                <h2 className='section-title'>Introducing an extensible editor</h2>
                <p className='section-paragraph'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                  change the looks of a blog.</p>
              </div>
              <div className="left-bottom">
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
          <div className="section-middle-wrapper">
          <img src={illusPhones} alt="illustration phones" />
              <div className="section-middle-right">
            <h1 className='section-main-title'>State of the Art Infrastructure</h1>
            <p className="section-paragraph"> With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
          </div>
          </div>
        
        </div>
        
      </section>
      <section className="section-bottom"></section>
    </main>
  )
};

export default Main