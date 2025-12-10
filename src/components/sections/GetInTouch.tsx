

export default function GetInTouch() {
  return (
    <section className={'contact'}>
      <div className="section-header">
        <span>GET IN TOUCH</span>
      </div>

      <h2 className={'title'}>Let&apos;s Work <span>Together</span></h2>

      <div className={'formContainer'}>
        <form>
          <div className={'formGroup'}>
            <input type="text" id="name" placeholder=" " />
            <label htmlFor="name">Name</label>
          </div>

          <div className={'formGroup'}>
            <input type="text" id="surname" placeholder=" " />
            <label htmlFor="surname">Surname</label>
          </div>

          <div className={'formGroup'}>
            <input type="email" id="email" placeholder=" " />
            <label htmlFor="email">Email</label>
          </div>

          <div className={'formGroup'}>
            <textarea id="message" placeholder=" "></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <button type="submit" className={`submitButton glass-button`}>Send Message</button>
        </form>
      </div>
    </section>
  );
}
