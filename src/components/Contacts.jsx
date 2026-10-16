import React from 'react';

const Contact = () => {
  // আপনার আসল জিমেইল এড্রেসটি এখানে লিখুন
  const myEmail = "yeasin4376@gmail.com";

  // সরাসরি জিমেইলে কমপোজ উইন্ডো খোলার ইউআরএল
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=Portfolio%20Inquiry&body=Hi%20Yeasin,`;

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>
          I am currently open to new frontend developer opportunities or collaborations. Feel free to reach out to me!
        </p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">
            LinkedIn
          </a>
          
          {/* Direct Gmail Open Button */}
          <a 
            href={gmailUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn"
          >
            Email Me 📧
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;