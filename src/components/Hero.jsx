import React, { useState, useEffect } from 'react';
import myPhoto from '../assets/profile.jpg'; // ডিফল্ট লোকাল এসেটস ফটো

const Hero = () => {
  const titles = ["React Developer", "Frontend Enthusiast", "UI/UX Problem Solver"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // 1. localStorage থেকে সেভ করা ছবি চেক করা, না থাকলে ডিফল্ট এসেট ফটো আসবে
  const [profileImg, setProfileImg] = useState(() => {
    return localStorage.getItem('portfolio_profile_img') || myPhoto;
  });

  // 2. ছবি গ্যালারি থেকে সিলেক্ট করলে সেটি localStorage-এ পার্মানেন্টলি সেভ হয়ে যাবে
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setProfileImg(base64String);
        localStorage.setItem('portfolio_profile_img', base64String); // ব্রাউজারে স্টোর হলো
      };
      reader.readAsDataURL(file);
    }
  };

  // Typing effect logic...
  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed, titles]);

  return (
    <section id="hero" className="section hero">
      <div className="hero-container-flex">
        <div className="hero-content">
          <p className="hero-tag">Hi, my name is</p>
          <h1 className="hero-title neon-text">
            Yeasin Arafat.
          </h1>
          <h2 className="hero-subtitle">
            I am a <span className="typed-text">{currentText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-desc">
            Passionate about crafting high-performance, immersive web applications with React.js and stunning custom Vanilla CSS neon animations.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn-primary">Explore Projects</a>
            <a href="#contact" className="btn-secondary">Let's Talk</a>
          </div>
        </div>

        {/* Profile Image & Gallery Uploader Box */}
        <div className="hero-image-wrapper">
          <div className="neon-avatar-box">
            <img src={profileImg} alt="Yeasin Arafat" className="profile-img" />
          </div>
          <label htmlFor="gallery-upload" className="gallery-upload-btn">
            Change Photo from Gallery 📁
          </label>
          <input 
            id="gallery-upload" 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            style={{ display: 'none' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;